export interface ProductModelServer {
    id: Number;
    name: String;
    category: String;
    weight: String;
    image: String;
    price: Number;
    quantity: Number;
  }
  
  export interface serverResponse  {
    count: Number;
    products: ProductModelServer[]
  }

  export interface CategoryModelServer{
    id: Number;
    name: String;
    image: String;
  }
  export interface serverResponseCategory  {
    count: Number;
    categories: CategoryModelServer[]
  }
  