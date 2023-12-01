export type ButtonLoaderId = `loader-${string}`;

export interface LoaderLayer {
  loaderId?: ButtonLoaderId;
  loaderColor?: string;
}
