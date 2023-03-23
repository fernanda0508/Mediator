import { SellerProduct } from './seller-product';
import { Seller } from './sellers';

export class Mediator{
  //array de vendedores
  private sellers : Seller[] = [];

  // adiciona um ou vários vendedores ao array sellers
  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => this.sellers.push(seller));

    
  }

  buy(id: string): SellerProduct | void {
    let product;
    // procurar o produto dentro de todos os sellers
    for (let i = 0; i < this.sellers.length; i++){
      product = this.sellers[i].sell(id);
      if(product){
        console.log("aqui está o produto", product.id, product.name, product.price);
        return
      }

    }
    console.log('Não encontrei nenhum produto com o id ', id)

  }
  showProducts(): void{ // mostra os produtos depois de ja ter vendido e diminuido o estoque
    this.sellers.forEach(seller => seller.showProducts())
  }
}