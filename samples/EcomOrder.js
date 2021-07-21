// ECOM START - order (sample)
dataLayer.push({
    "ecommerce": {
        "purchase": {
            "actionField": {
                "id" : "ORDER_" + Date.now()
            },
            "products": [
                {
                    "id": "999999",
                    "name": "Test",
                    // "brand": "",
                    // "category": "",
                    // "coupon": "",
                    // "position": "",
                    // "variant": "",
                    "price": 123.12,
                    "quantity": 3
                }
            ]
        }
    }
});
// ECOM END - order (sample)


// ECOM START - order
console.log('[EVENT] ORDER');
ym(GLOBAL_YMID, 'reachGoal', 'ORDER');
ga('send', 'event', 'EVENTS', 'CLICK_ORDER', 'CLICK_ORDER');

var products = [];
$('#simplecheckout_cart').find('.cartrow').each(function () {
    $cartrow = $(this);
    product = {
        "id": $cartrow.find('.ecom_id').text(),
        "name": $cartrow.find('.ecom_name').text(),
        "price": parseFloat($cartrow.find('.ecom_price').text().replace(/\s+/g,'')),
        "quantity": $cartrow.find('.ecom_qty').val()
    };
    products.push(product);
    //console.log(product);
});
ecomRes = dataLayer.push({
    "ecommerce": {
        "purchase": {
            "actionField": {
                "id" : "ORDER_" + Date.now()
            },
            "products": products
        }
    }
});
console.log('Ecom order: ' + ecomRes);
//console.log(products);
// ECOM END - order
