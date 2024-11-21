import { Request, Response } from "express"
import { calculateLastDigit, saveDigitsData } from "../services/service"

export const saveData = async (req: Request, res: Response) => {
  try {
    await saveDigitsData(req.body.first8);
    res.status(201).send("data saved successfully");
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: "Something went wrong" });
  }
}

export const getLastDigit = (req: Request, res: Response) => {
  try {
    const lastDigit = calculateLastDigit(req.body.first8);
    res.status(200).send({lastDigit});
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: "Something went wrong" });
  }
}