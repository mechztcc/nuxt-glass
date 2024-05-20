export interface IProduct {
  id: number;
  name: string;
  brand: string;
  code: string;
  color: string;
  description: string;
  gender: String;
  glassType: String;
  material: string;
  weight: string;
  images: { id: Number; name: String; size: string; url: string }[];
  productDimensions: { bride: String; bridgeWithRim: String; horizontalRim: string; verticalRim: string };
  productValues: { amount: number; maxDescount: string; priceCost: string; profit: string; totalPrice: number };
  created_at: string;
}
