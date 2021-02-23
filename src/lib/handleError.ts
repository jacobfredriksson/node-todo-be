import { Response } from "express";

type ErrorCodes =
  | "cancelled"
  | "unknown"
  | "invalid-argument"
  | "deadline-exceeded"
  | "not-found"
  | "already-exists"
  | "permission-denied"
  | "resource-exhausted"
  | "failed-precondition"
  | "aborted"
  | "out-of-range"
  | "unimplemented"
  | "internal"
  | "unavailable"
  | "data-loss"
  | "unauthenticated";

type HandleError = (
  error: {
    code: ErrorCodes;
    message: string;
    name?: string;
    stack?: string;
    details: any[];
  },
  res: Response
) => void;

export const handleError: HandleError = (error, res) => {
  switch (error.code) {
    case "invalid-argument":
      res.json({ status: "ERROR", message: "Invalid request body" });
      break;
    default:
      res.json({ status: "ERROR",  message: error.details[0].message });
      break;
  }
};

export default handleError;
