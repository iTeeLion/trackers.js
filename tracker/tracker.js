/*
 *  Settings
 */

var tjs_debug = true;
var tjs_info = true;

var tjs_google = true;
var tjs_yandex = true;
var tjs_vk = false;

var tjs_google_ecom = false;
var tjs_yandex_ecom = true;

var tjs_yandex_tid = 000000;

/*
 *  Functions
 */

function tracker_add_to_cart() {
    if (tjs_info) {
        console.info('tracker_add_to_cart');
    }
    if (tjs_google) {
        gtag('event', 'add_to_cart', {'event_category': 'buttons', 'event_action': 'click-add_to_cart'});
    }
    if (tjs_yandex) {
        tracker_ya_reachgoal('add_to_cart');
    }
    if (tjs_vk) {
        VK.Goal('add_to_cart');
    }
}

function tracker_purchase() {
    if (tjs_info) {
        console.info('tracker_purchase');
    }
    if (tjs_google) {
        gtag('event', 'purchase', {'event_category': 'buttons', 'event_action': 'click-purchase'});
    }
    if (tjs_yandex) {
        tracker_ya_reachgoal('purchase');
    }
    if (tjs_vk) {
        VK.Goal('purchase');
    }
}

function tracker_contact() {
    if (tjs_info) {
        console.info('tracker_contact');
    }
    if (tjs_google) {
        gtag('event', 'contact', {'event_category': 'buttons', 'event_action': 'click-contact'});
    }
    if (tjs_yandex) {
        tracker_ya_reachgoal('contact');
    }
    if (tjs_vk) {
        VK.Goal('contact');
    }
}

// products = [{"id": 123, "name": "prod", "quantity": 123, "price": 123}]
function tracker_ecom_purchase(products, orderNameSet = false) {
    if (tjs_google_ecom || tjs_yandex_ecom) {
        if (tjs_info) {
            console.info('tracker_ecom_purchase');
        }

        // Prepare vars
        let date = new Date();
        let dateStr = date.getDay() + "." + date.getMonth() + "." + date.getYear() + "_" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        if(orderNameSet){
            let orderName = orderNameSet;
        }else{
            let orderName = "ORDER_" + dateStr + "_" + Date.now();
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
            console.log('tracker_ecom_purchase - res:'.res);
            console.log(products);
        }
    }
}

/*
 *  Events
 */

window.onload = function () {
    if (tjs_debug) {
        console.log('tracker.js loaded');
    }
}

/*
 *  Helpers
 */

function tracker_ya_reachgoal(goal) {
    ym(tjs_yandex_tid, 'reachGoal', goal);
}

function tracker_toStr(value){
    return String(value.trim());
}

function tracker_toNum(value) {
    return value.trim().replace(/\s/g, '');
}

function tracker_toInt(value) {
    return parseInt(tracker_toNum(value));
}

function tracker_toFloat(value) {
    return parseFloat(tracker_toNum(value));
}
