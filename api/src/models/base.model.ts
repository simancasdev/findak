import {Model} from "mongoose";
import {BaseAttrs, BaseDoc} from "../interfaces";

export interface BaseModel<A extends BaseAttrs, D extends BaseDoc>
  extends Model<D> {
  build(attrs: A): D;
}
