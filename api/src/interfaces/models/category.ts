import {BaseAttrs, BaseDoc, SearchType} from ".";

export interface CategoryAttrs extends BaseAttrs {
  name: string;
  type: SearchType;
}

export interface CategoryDoc extends BaseDoc {
  name: string;
  type: SearchType;
}
