export interface IGetProductsQuery {
  page?: string;
  pageSize?: string;
  name?: string;
  minPrice?: string;
  maxPrice?: string;
}

export interface IProductFilter{
  page: number;
  pageSize: number;
  name: string;
  minPrice: number;
  maxPrice: number;
}
