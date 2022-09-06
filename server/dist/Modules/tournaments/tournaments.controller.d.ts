import { TournamentDto } from './dto/tournament.dto';
import { TournamentsService } from './tournaments.service';
export declare class TournamentsController {
    private readonly tournamentsService;
    constructor(tournamentsService: TournamentsService);
    createUser(tournament: TournamentDto): Promise<import("./entities/tournament.entity").Tournament>;
    getRandomQuestions(n: string): Promise<import("./dto/question.dto").QuestionDto[]>;
    getTournamentById(id: string): Promise<TournamentDto | "Tournament not found">;
}
