class ProductList {
    product = [];
    
    add(number) {
        this.product.push(number);
    }
    
    productIndex(position) {
        var product = 1;
        for(let i = position - 1; i < this.product.length; i++) {
            product = product * this.product[i];
        }

        return product;
    }
}

var productList = new ProductList();
productList.add(5);
productList.add(3);
productList.add(4);
productList.add(2);

console.log(productList.productIndex(2));