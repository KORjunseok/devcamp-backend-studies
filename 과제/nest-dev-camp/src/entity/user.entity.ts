import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // 엔티티 객체 데코레이터
export class User {
  @PrimaryGeneratedColumn()
  id?: number; // id. pk이며 자동 증가

  @Column({ unique: true })
  email: string;

  @Column({nullable: true}) // 패스워드에 빈 값 허용
  password: string;

  @Column()
  username: string;

  @Column({ default: true }) // 기본 값
  createdAt: Date = new Date();

  @Column({nullable: true}) // providerId에 빈 값 허용
  providerId: string; // providerId 추가 
}
