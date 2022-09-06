import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TournamentDto } from './dto/tournament.dto';
import { TournamentsService } from './tournaments.service';

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Post()
  async createUser(@Body() tournament: TournamentDto) {
    return this.tournamentsService.createTournamet(tournament);
  }

  @Get('/random/:n')
  async getRandomQuestions(@Param('n') n: string) {
    return this.tournamentsService.getRandomQuestions(n);
  }

  @Get(':id')
  async getTournamentById(@Param('id') id: string) {
    return this.tournamentsService.getTournamentById(+id);
  }
}
