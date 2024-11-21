import { Repository } from "typeorm"
import { MyDataSource } from "../app"
import DigitsData from "../entities/DigitsData"

const repository: Repository<DigitsData> =
  MyDataSource?.getRepository(DigitsData)

export const saveDigitsData = async (first8: String): Promise<void> => {
  try {
    const lastDigit: number = calculateLastDigit(first8)

    const currDigitsData = new DigitsData()
    currDigitsData.first8 = first8
    currDigitsData.lastDigit = lastDigit
    currDigitsData.totalId = first8 + String(lastDigit)

    await repository.save(currDigitsData)
  } catch (e) {
    console.error(e)
    throw new Error("something went wrong")
  }
}

export const calculateLastDigit = (first8: String): number => {
  const first8Arr: String[] = String(first8).split("")
  let sum: number = 0

  for (let index = 0; index < first8Arr.length; index++) {
    const currDigit = Number(first8Arr[index])

    if (index % 2 === 0) {
      sum += currDigit
    } else {
      (currDigit * 2) / 10 >= 1
        ? (sum += 1 + ((currDigit * 2) % 10))
        : (sum += currDigit * 2)
    }
  }

  return Math.ceil(sum / 10) * 10 - sum
}
