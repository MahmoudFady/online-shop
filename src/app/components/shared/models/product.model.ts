export interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: Number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[];
}
