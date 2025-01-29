import { Request, Response, NextFunction } from "express";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.message || "An error occurred");

  res.status(500).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
};

export default errorHandler;
