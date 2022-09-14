import { TournamentDto } from './dto/tournament.dto';
import { TournamentsService } from './tournaments.service';
export declare class TournamentsController {
    private readonly tournamentsService;
    constructor(tournamentsService: TournamentsService);
    createTournament(tournament: TournamentDto): Promise<number>;
    getRandomQuestions(n: string): Promise<import("./dto/question.dto").QuestionDto[]>;
    getTournamentById(id: string): Promise<TournamentDto | "Tournament not found">;
}
