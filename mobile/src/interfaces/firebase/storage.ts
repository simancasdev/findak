type BaseFolder = "photos";
export type Folder =
  | `${BaseFolder}/offers`
  | `${BaseFolder}/covers`
  | `${BaseFolder}/default`
  | `${BaseFolder}/avatars`
  | `${BaseFolder}/searches`
  | `${BaseFolder}/products`;
