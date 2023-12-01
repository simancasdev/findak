import {ButtonLoaderId, SearchModel} from "src/interfaces";

interface BaseChecker {
  loaderId: ButtonLoaderId;
}

export interface CanISendOfferPayload extends BaseChecker {
  search: SearchModel;
}

export interface CanICreateSearchPayload extends BaseChecker {}
