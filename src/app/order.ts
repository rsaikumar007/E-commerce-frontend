
export class Order {
    orderId: number=0;
    orderDate: Date= new Date;
    totalAmount: number=0;
    paymentMethod: string="";
    paymentStatus: string="";
    transactionId: string="";
  customer:{    
    customerId:number;
}={customerId:0};
}
