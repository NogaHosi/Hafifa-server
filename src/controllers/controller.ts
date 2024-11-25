import { Request, Response } from "express"
import { calculateLastDigit, saveDigitsData } from "../services/service"

export const saveData = async (req: Request, res: Response) => {
  try {
    await saveDigitsData(req.body.first_eight, req.body.last_digit);
    res.status(201).send("data saved successfully");
  } catch (e: any) {
    res.status(e.status || 500).send(e?.message || "something went wrong");  }
}

export const getLastDigit = (req: Request, res: Response) => {
  try {
    const last_digit = calculateLastDigit(req.body.first_eight);
    res.status(200).send({last_digit});
  } catch (e: any) {
    res.status(e.status || 500).send(e?.message || "something went wrong");  }
}