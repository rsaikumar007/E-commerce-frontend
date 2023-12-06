export class Cart {
    cartItemId: number=0;
  quantity: number=0;
  itemPrice: number=0;
    productId:number=0;
    orderId:number=0;
  order:{
    orderId: number; 
  }={orderId:0};

  product:{
    productId:number
  }={productId:0};
  constructor(){}
}
