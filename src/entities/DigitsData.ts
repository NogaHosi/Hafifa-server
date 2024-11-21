import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("social_security_numbers")
class DigitsData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({length: 8})
  first8: String;

  @Column()
  lastDigit: number;

  @Column()
  totalId: string;
}

export default DigitsData;