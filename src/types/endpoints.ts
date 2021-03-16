import { Request, Response } from "express";

type RoutePath = string;

type RouteCallback = (req: Request, res: Response) => void;

export type Route = {
  type: string;
  path: RoutePath;
  callback: RouteCallback;
};

export type Routes = {
  [key: string]: Route;
};
