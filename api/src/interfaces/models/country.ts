import {BaseAttrs, BaseDoc} from ".";

export interface CountryAttrs extends BaseAttrs {
  name: string;
}

export interface CountryDoc extends BaseDoc {
  name: string;
}
