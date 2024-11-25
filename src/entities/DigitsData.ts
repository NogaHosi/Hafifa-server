import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("social_security_numbers")
class DigitsData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({length: 8})
  first_eight: String;

  @Column()
  last_digit: number;

  @Column()
  total_id: string;
}

export default DigitsData;