// ECOM START - decrease (sample)
dataLayer.push({
    "ecommerce": {
        "remove": {
            "products": [
                {
                    "id": "999999",
                    //"name": "Test",
                    "quantity": 3
                }
            ]
        }
    }
});
// ECOM END - decrease (sample)


// ECOM START - decrease
$cartrow = $target.closest('.cartrow');
product = {
    "id": $cartrow.find('.ecom_id').text(),
    "name": $cartrow.find('.ecom_name').text(),
    "price": $cartrow.find('.ecom_price').text(),
    "quantity": quantity - step
};
ecomRes = dataLayer.push({
    "ecommerce": {
        "add": {
            "products": [product]
        }
    }
});
console.log('Ecom decrease: ' + ecomRes);
//console.log(product);
// ECOM END - decrease
