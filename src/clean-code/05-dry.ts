type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
        public inStock: boolean = false,
    ){}

    toString() {
        // DRY
        /*
        if (this.name.length <= 0) throw Error('Name is empty');
        if (this.price <= 0) throw Error('Price is empty');
        if (this.size == '') throw Error('Size is empty');
        */

        this.validProduct();
        

        return `${this.name} (${this.price}), ${this.size}`
    }

    validProduct() {
        for(const key in this) {
            switch(typeof this[key]) {
                case 'string':
                    if((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if((<number><unknown>this[key]) <= 0) throw Error(`${key} is zero`);
                    break;
            }
        }
    }

}

(() => {

    const bluePants = new Product('Jeans', 50, 'XL', false);
    console.log(bluePants.toString());
    
}) ();