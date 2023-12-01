type AbilityFlow = "create-search" | "send-offer";

export type CheckUserAbilityPayload = {
  user_id: any;
  flow: AbilityFlow;
};
