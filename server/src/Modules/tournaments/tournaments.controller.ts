import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { TournamentDto } from './dto/tournament.dto';
import { TournamentsService } from './tournaments.service';

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createTournament(@Body() tournament: TournamentDto) {
    return this.tournamentsService.createTournamet(tournament);
  }

  @Get('/last')
  async getLastTen() {
    return this.tournamentsService.getLastAddTournaments();
  }

  @Get('/random/:n')
  async getRandomQuestions(@Param('n') n: string) {
    return this.tournamentsService.getRandomQuestions(n);
  }

  @Get(':id')
  async getTournamentById(@Param('id') id: string) {
    return this.tournamentsService.getTournamentById(+id);
  }

  @Get('/randomt/:n')
  async getRandomTournaments(@Param('n') n: string) {
    return this.tournamentsService.getRandomTournaments(n);
  }
}
