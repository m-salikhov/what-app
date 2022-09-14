import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Editor } from './editors.entity';
import { Question } from './question.entity';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  date: number;
  @Column()
  tours: number;
  @Column()
  questionsQuantity: number;
  @Column()
  dateUpload: number;
  @Column()
  uploaderUuid: string;
  @OneToMany(() => Question, (question) => question.tournament)
  questions: Question[];
  @ManyToMany(() => Editor)
  @JoinTable()
  editors: Editor[];
}
