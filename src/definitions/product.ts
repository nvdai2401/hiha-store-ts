export interface IProduct {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity?: number;
}

export interface ICollection {
  id: string;
  routeName: string;
  title: string;
  items: IProduct[];
}
