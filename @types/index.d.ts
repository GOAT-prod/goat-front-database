interface Product {
  id: int;
  name: string;
  description: string;
  brand: Brand;
  items: ProductItem[];
  price: number;
  images: Image[];
  factory: Factory[];
}

interface Brand {
  id: int;
  name: string;
}

interface Factory {
  id: int;
  name: string;
  city: string;
  country: string;
  address: string;
}

interface Image {
  id: int;
  imageUrl: string;
}

interface ProductItem {
  id: int;
  color: string;
  size: int;
  stockCount: int;
  weight: int;
}

interface Material {
  id: int;
  name: string;
}

export interface IAuthResponse {
  access_token: string;
  refresh_token: string;
}
export interface IUser {
  created_at: string;
  email: string;
  id: number;
  name: string;
  updated_at: string;
}
