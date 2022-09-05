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
  date: string;
  @Column()
  tours: number;
  @OneToMany(() => Question, (question) => question.tournament)
  questions: Question[];
  @ManyToMany(() => Editor)
  @JoinTable()
  editors: Editor[];
  @Column()
  dateUpload: string;
  @Column()
  uploaderUuid: string;
}
