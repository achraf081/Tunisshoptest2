
import { Product, DeliveryRegion } from './types';

export const STORE_PHONE = "21620000000";
export const D17_PHONE = "21620000000";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "برغر كلاسيك",
    description: "لحم بقر مشوي مع جبنة شيدر وخضروات طازجة.",
    price: 18,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&h=400&auto=format&fit=crop",
    category: "وجبات"
  },
  {
    id: 2,
    name: "بطاطا مقرمشة",
    description: "بطاطا ذهبية مقلية بملح البحر.",
    price: 7,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=400&h=400&auto=format&fit=crop",
    category: "جانبية"
  },
  {
    id: 3,
    name: "ناغتس الدجاج (6 قطع)",
    description: "قطع دجاج مقرمشة مع صلصة الباربيكيو.",
    price: 12,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=400&h=400&auto=format&fit=crop",
    category: "جانبية"
  },
  {
    id: 4,
    name: "مشروب غازي منعش",
    description: "بارد جداً مع قطع الثلج.",
    price: 4,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400&h=400&auto=format&fit=crop",
    category: "مشروبات"
  }
];

export const DELIVERY_REGIONS: DeliveryRegion[] = [
  { id: '1', name: 'تونس الكبرى', fee: 5 },
  { id: '2', name: 'نابل / سوسة', fee: 8 },
  { id: '3', name: 'بقية الولايات', fee: 10 },
];
