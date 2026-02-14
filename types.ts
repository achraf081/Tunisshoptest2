
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export enum PaymentMethod {
  COD = 'COD',
  D17 = 'D17'
}

export interface DeliveryRegion {
  id: string;
  name: string;
  fee: number;
}

export interface OrderDetails {
  clientName: string;
  clientPhone: string;
  region: DeliveryRegion;
  paymentMethod: PaymentMethod;
}
