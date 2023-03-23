import { Mediator } from './mediator';

//A intenção do buyer é saber os produtos que tem e comprar
export class Buyer {
  constructor(private mediator: Mediator){}
  // ver os produtos disponíveis
  viewProducts(): void {
    // o comprador pode ser todos os produtos de todos os vendedores através desse método do mediator
  this.mediator.showProducts();
}


  //comprar produto de qualquer vendedor mostrado pelo mediator
  buy(id: string): void {
    this.mediator.buy(id);
  }
}

//Buyer não conversa com seller e o seller não conversa com buyer