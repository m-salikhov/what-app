import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Source } from './sourse.entity';
import { Tournament } from './tournament.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: 'regular' | 'double' | 'triple' | 'other';
  @Column()
  qNumber: number;
  @Column()
  tourNumber: number;
  @Column()
  add?: string;
  @Column()
  text: string;
  @Column()
  answer: string;
  @Column()
  alterAnswer?: string;
  @Column()
  comment?: string;
  @Column()
  author: string;
  @OneToMany(() => Source, (source) => source.question)
  source: Source[];
  @ManyToOne(() => Tournament, (tournament) => tournament.questions, {
    onDelete: 'CASCADE',
    eager: true,
  })
  tournament: Tournament;
}
