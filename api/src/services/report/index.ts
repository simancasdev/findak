import {Request} from "express";
import {AbstractService} from "..";
import {BadRequestError} from "../../errors";
import {ReportModel, ReportSchema} from "../../models";
import {ReportAttrs, ReportDoc, IError} from "../../interfaces";

class ReportService extends AbstractService<
  ReportAttrs,
  ReportDoc,
  ReportModel
> {
  constructor() {
    super("Report", ReportSchema);
  }

  public async create(req: Request): Promise<ReportAttrs> {
    try {
      const {current_user_id} = req.currentUser;
      const newReport: ReportAttrs = {
        ...req.body,
        user_id: current_user_id,
      };

      return await this.save(newReport);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async getReports(userId: string) {
    try {
      return await this.model
        .find({user_id: userId})
        .populate([{path: "user"}]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new ReportService();
export {service as ReportService};
