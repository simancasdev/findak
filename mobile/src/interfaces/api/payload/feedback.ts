export type FeedbackPayload = {
  feedback: {to: string; stars: number; from: string; feedback: string};
  callback: () => void;
};
