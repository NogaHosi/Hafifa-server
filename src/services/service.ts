import { Repository } from "typeorm"
import { dataSource } from "../app"
import DigitsData from "../entities/DigitsData"

const repository: Repository<DigitsData> =
  dataSource?.getRepository(DigitsData)

export const saveDigitsData = async (first_eight: String, last_digit: number): Promise<void> => {
  try {
    const currDigitsData = new DigitsData()
    currDigitsData.first_eight = first_eight
    currDigitsData.last_digit = last_digit
    currDigitsData.total_id = first_eight + String(last_digit)

    await repository.save(currDigitsData)
  } catch (e) {
    throw new Error();
  }
}

export const calculateLastDigit = (first_eight: String): number => {
  const first8Arr: number[] = (first_eight.split("")).map((digit) => Number(digit));

  const digitsSum: number = first8Arr.reduce((sum, currDigit, index) => {
    index % 2 === 0 ? (sum += currDigit) : 
    (currDigit * 2) / 10 >= 1 ? (sum += 1 + ((currDigit * 2) % 10))
    : (sum += currDigit * 2);
    return sum;
  });

  return 10 - digitsSum % 10;
}
