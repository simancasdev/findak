import {Response, Request} from "express";
import {ReportModel} from "../../models";
import {ReportService} from "../../services";
import {BaseController} from "../base.controller";
import {ReportAttrs, ReportDoc, IError} from "../../interfaces";

class ReportController extends BaseController<
  ReportAttrs,
  ReportDoc,
  ReportModel
> {
  constructor() {
    super("report", "/reports", ReportService);

    this.router.post(
      "/",
      async (req: Request, res: Response) => await this.create(req, res)
    );
    this.router.get(
      "/of/:userId",
      async (req: Request, res: Response) => await this.getReports(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async create(req: Request, res: Response) {
    try {
      const report = await ReportService.create(req);
      return res.status(200).send(report);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async getReports(req: Request, res: Response) {
    const {userId} = req.params;
    try {
      const reports = await ReportService.getReports(userId);
      return res.status(200).send(reports);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new ReportController();
export {controller as ReportController};
