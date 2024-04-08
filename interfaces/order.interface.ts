interface GenericInterface {
  id: number;
  type: string;
}

export interface IOrder {
  id: number;
  userId: number;
  exam: string;
  expiresAt: string;
  region: { state: string; city: string }[];
  glassFrame: GenericInterface[];
  glassGenders: GenericInterface[];
  glassLens: GenericInterface[];
  glassType: GenericInterface[];
}
