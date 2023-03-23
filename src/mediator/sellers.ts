import { Mediator } from './mediator';
import { SellerProduct } from './seller-product';



//Seller = vendedor: Vender o produto
export class Seller {
  //array de produtos - começa com um array vazio

  private products: SellerProduct[] = []; // tipo do produto
  private mediator?: Mediator;

  // mostrar produtos
  showProducts(): void{
    this.products.forEach((product) => 
    console.log(product.id, product.name, product.price)
    );
  }
  //adicionar um ou vários produtos ao array products
  addProduct(...products: SellerProduct[]): void {
    products.forEach(product => {
      this.products.push(product)
    })
  }
  setMediator(mediator: Mediator): void{
    this.mediator = mediator
  }
  //vender - 
  sell(id: string): SellerProduct | void { // retorno um produto ou nada se não existir.
    const productIndex = this.products.findIndex((product) => product.id === id); // checando se ele existe em products
    if(productIndex === -1) return; // produto não existe
    const product = this.products.splice(productIndex, 1); // remove o produto do indice informado, remove 1 produto desse indice
    return product[0]; // depois retorna o produto
  }

}