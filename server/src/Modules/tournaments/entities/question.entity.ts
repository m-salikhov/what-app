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
  @Column({ default: 'regular' })
  type: 'regular' | 'double' | 'triple' | 'other';
  @Column()
  qNumber: number;
  @Column()
  tourNumber: number;
  @Column({ default: '' })
  add: string;
  @Column()
  text: string;
  @Column()
  answer: string;
  @Column({ default: '' })
  alterAnswer?: string;
  @Column({ default: '' })
  comment: string;
  @Column()
  author: string;
  @OneToMany(() => Source, (source) => source.question, { eager: true })
  source: Source[];
  @ManyToOne(() => Tournament, (tournament) => tournament.questions, {
    onDelete: 'CASCADE',
  })
  tournament: Tournament;
}
