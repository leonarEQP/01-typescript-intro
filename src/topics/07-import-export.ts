import { Product, taxCalculation } from './06-functions-destructuring';

const shoppingCart: Product[] = [


    {

        desciption: 'Nokia',
        price: 100
    },
    {
        desciption: 'iPad',
        price: 150

    }
];

const [total, tax] = taxCalculation({ products:shoppingCart, tax:0.15});

console.log('Total', total);
console.log('Tax', tax);