import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // 엔티티 객체 데코레이터
export class User {
  @PrimaryGeneratedColumn()
  id?: number; // id. pk이며 자동 증가

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column({ default: true }) // 기본 값
  createdDt: Date = new Date();
}
