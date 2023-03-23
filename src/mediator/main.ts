import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './sellers';

const  mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({id: '1', name: 'Camiseta', price: 49.9})
seller1.addProduct({id: '2', name: 'Caneca', price: 29.9})

const seller2 = new Seller();
seller2.addProduct({id: '3', name: 'Carro', price: 39900.9})
seller2.addProduct({id: '4', name: 'Moto', price: 11.9})

//informando ao mediator que ele tem 2 sellers
mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts(); // chama isso de dentro do mediator e mostra todos os produtos
buyer.buy('2');
buyer.buy('3');

buyer.viewProducts(); // mostrando produtos depois de saírem alguns do estoque


