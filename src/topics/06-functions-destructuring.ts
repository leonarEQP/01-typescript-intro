
export interface Product {

    desciption: string;
    price: number;

}


const phone: Product = {

    desciption: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {

    desciption: 'Ipad Air',
    price: 250.0
}

interface TaxtCalculationOptions {

    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxtCalculationOptions): [number,number] {

    const {tax, products} = options;

    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    })

    return [total, total * tax];

};

const shoppingCart = [phone, tablet];
const tax = 0.15;

// const result = taxCalculation({

//     products: shoppingCart,
//     tax,
// });

// Destructuración

const [total, totalTax] = taxCalculation({

    products: shoppingCart,
    tax: tax,
});



console.log('Total', total);
console.log('Tax', totalTax);

