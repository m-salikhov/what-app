import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionDto } from './dto/question.dto';
import { TournamentDto } from './dto/tournament.dto';
import { Editor } from './entities/editors.entity';
import { Question } from './entities/question.entity';
import { Source } from './entities/sourse.entity';
import { Tournament } from './entities/tournament.entity';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournament)
    private tournamentRepo: Repository<Tournament>,
    @InjectRepository(Editor)
    private editorRepo: Repository<Editor>,
    @InjectRepository(Question)
    private questionRepo: Repository<Question>,
    @InjectRepository(Source)
    private sourceRepo: Repository<Source>,
  ) {}

  async createTournamet(tournament: TournamentDto) {
    const savedEditors: Editor[] = [];
    await Promise.all(
      tournament.editors.map(async (editor) => {
        const editorToSave = new Editor();
        editorToSave.name = editor;
        await this.editorRepo.save(editorToSave);
        savedEditors.push(editorToSave);
      }),
    );

    const savedQuestions: Question[] = [];
    for await (const question of tournament.questions) {
      const savedSources: Source[] = [];
      for await (const source of question.source) {
        const sourceToSave = new Source();
        sourceToSave.link = source;
        await this.sourceRepo.save(sourceToSave);
        savedSources.push(sourceToSave);
      }

      const newQuestion = this.questionRepo.create({
        ...question,
        source: savedSources,
      });
      const savedQuestion = await this.questionRepo.save(newQuestion);
      savedQuestions.push(savedQuestion);
    }

    const newTournament = this.tournamentRepo.create({
      ...tournament,
      editors: savedEditors,
      questions: savedQuestions,
    });
    return await this.tournamentRepo.save(newTournament);
  }

  async getTournamentById(id: number) {
    const tournament = await this.tournamentRepo.findOne({
      where: { id },
      relations: ['editors', 'questions'],
    });
    return tournament
      ? this.normalizeTournament(tournament)
      : 'Tournament not found';
  }

  async getRandomQuestions(n: string) {
    const randomIds: Question[] = await this.questionRepo.query(
      `SELECT id FROM question ORDER BY RANDOM() LIMIT ${n};`,
    );

    const random = await Promise.all(
      randomIds.map(async (v) => {
        return await this.questionRepo.findOne({
          where: { id: v.id },
        });
      }),
    );

    return this.normalizeQuestions(random);
  }

  normalizeQuestions(arr: Question[]): QuestionDto[] {
    return arr.map((el) => {
      const normSources = el.source.map((el) => el.link);
      return { ...el, source: normSources };
    });
  }

  normalizeTournament(res: Tournament) {
    const normEditors = res.editors.map((el) => el.name);
    const normQuestions = this.normalizeQuestions(res.questions);
    const tournament: TournamentDto = {
      ...res,
      editors: normEditors,
      questions: normQuestions,
    };
    return tournament;
  }
}
