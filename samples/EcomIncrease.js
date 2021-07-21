// ECOM START - increase (sample)
dataLayer.push({
    "ecommerce": {
        "add": {
            "products": [
                {
                    "id": "999999",
                    "name": "Test",
                    "price": 123.12,
                    // "brand": "",
                    // "category": "",
                    // "coupon": "",
                    // "position": "",
                    // "variant": "",
                    "quantity": 3
                }
            ]
        }
    }
});
// ECOM END - increase (sample)


// ECOM START - increase
$cartrow = $target.closest('.cartrow');
product = {
    "id": $cartrow.find('.ecom_id').text(),
    "name": $cartrow.find('.ecom_name').text(),
    "price": $cartrow.find('.ecom_price').text(),
    "quantity": quantity + step
};
ecomRes = dataLayer.push({
    "ecommerce": {
        "add": {
            "products": [product]
        }
    }
});
console.log('Ecom increase: ' + ecomRes);
//console.log(product);
// ECOM END - increase
