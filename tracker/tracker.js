/*
 *  Settings
 */

var tjs_yandex_tid = 00000000;

var tjs_debug = false;
var tjs_info = true;

var tjs_google = false;
var tjs_yandex = true;
var tjs_vk = false;

var tjs_google_ecom = false;
var tjs_yandex_ecom = true;

/*
 *  CUSTOM
 */

function tjs_prepare_products(){
    if (tjs_info) {
        console.info('tjs_prepare_products');
    }
    let products = [];
    $('ToDo SELECTOR').each(function(i){
        $item = $(this);
        product = {};
        product.id = 'ToDo SELECTOR';
        product.name = 'ToDo SELECTOR';
        product.quantity = 'ToDo SELECTOR';
        product.price = 'ToDo SELECTOR';
        if(tjs_debug){
            console.log(prod);
        }
        products.push(product);
    });
    return products;
}

/*
 *  Functions
 */

function tjs_add_to_cart() {
    if (tjs_info) {
        console.info('tjs_add_to_cart');
    }
    if (tjs_google) {
        gtag('event', 'add_to_cart', {'event_category': 'buttons', 'event_action': 'click-add_to_cart'});
    }
    if (tjs_yandex) {
        tjs_ya_reachgoal('add_to_cart');
    }
    if (tjs_vk) {
        VK.Goal('add_to_cart');
    }
}

function tjs_purchase() {
    if (tjs_info) {
        console.info('tjs_purchase');
    }
    if (tjs_google) {
        gtag('event', 'purchase', {'event_category': 'buttons', 'event_action': 'click-purchase'});
    }
    if (tjs_yandex) {
        tjs_ya_reachgoal('purchase');
    }
    if (tjs_vk) {
        VK.Goal('purchase');
    }
}

function tjs_contact() {
    if (tjs_info) {
        console.info('tjs_contact');
    }
    if (tjs_google) {
        gtag('event', 'contact', {'event_category': 'buttons', 'event_action': 'click-contact'});
    }
    if (tjs_yandex) {
        tjs_ya_reachgoal('contact');
    }
    if (tjs_vk) {
        VK.Goal('contact');
    }
}

// products = [{"id": 123, "name": "prod", "quantity": 123, "price": 123}]
function tjs_ecom_purchase(products, orderNameSet = false) {
    if (tjs_google_ecom || tjs_yandex_ecom) {
        if (tjs_info) {
            console.info('tjs_ecom_purchase');
        }

        // Prepare vars
        let date = new Date();
        let orderName = "ORDER_" + date.toISOString() + "_" + Math.floor(Math.random() * 1000);
        if(orderNameSet){
            orderName = orderNameSet;
        }

        // Send data
        if (tjs_google_ecom) {
            res = gtag('event', 'purchase', {
                "transaction_id": orderName,
                "items": products
            });
        } else {
            res = dataLayer.push({
                "ecommerce": {
                    "purchase": {
                        "actionField": {
                            "id": orderName
                        },
                        "products": products
                    }
                }
            });
        }

        // Debug
        if (tjs_debug) {
            console.log('tjs_ecom_purchase - res:'.res);
            console.log(products);
        }
    }
}

/*
 *  Events
 */

window.onload = function () {
    window.dataLayer = window.dataLayer || [];
    if (tjs_debug) {
        console.log('tracker.js loaded');
    }
}

/*
 *  Helpers
 */

function tjs_ya_reachgoal(goal) {
    ym(tjs_yandex_tid, 'reachGoal', goal);
}

function tjs_toStr(value){
    return String(value.trim());
}

function tjs_toNum(value) {
    return value.trim().replace(/\s/g, '');
}

function tjs_toInt(value) {
    return parseInt(tjs_toNum(value));
}

function tjs_toFloat(value) {
    return parseFloat(tjs_toNum(value));
}
