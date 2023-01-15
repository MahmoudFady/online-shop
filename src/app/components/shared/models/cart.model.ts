export interface ICart {
  products: {
    product: {
      _id: string;
      title: string;
      price: number;
      discountPercentage: number;
      brand: string;
      thumbnail: string;
    };
    quantity: number;
    totalPrice: number;
    totalPriceAfterDiscount: number;
  }[];
  totalProducts: number;
  totalQuantity: number;
  totalPrice: number;
  totalPriceAfterDiscount: number;
}
