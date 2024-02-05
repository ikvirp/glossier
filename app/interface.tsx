export interface simplifiedCatergory {
  _id: string;
  imageURL: string;
  name: string;
  slug: string;
  button: string;
  link: string;
}
export interface simplifiedProduct {
  _id: string;
  images: any;
  imageUrl: string;
  price: number;
  name: string;
  slug: string;
  description: string;
  categoryName: string;
  price_id: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  name: string;
  slug: string;
  description: string;
  price_id: string;
}
