var track_debug = true;
var track_info = true;
var track_google = true;
var track_yandex = true;
var track_vk = false;
var track_google_ecom = false;
var track_yandex_ecom = true;

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

function tracker_ya_reachgoal(goal) {
    ym(000000000, 'reachGoal', goal);
}

function tracker_add_to_cart() {
    if (track_info) {
        console.log('tracker_add_to_cart');
    }
    if (track_google) {
        gtag('event', 'add_to_cart', {'event_category': 'buttons', 'event_action': 'click-add_to_cart'});
    }
    if (track_yandex) {
        tracker_ya_reachgoal('add_to_cart');
    }
    if (track_vk) {
        VK.Goal('add_to_cart');
    }
}

function tracker_purchase() {
    if (track_info) {
        console.log('tracker_purchase');
    }
    if (track_google) {
        gtag('event', 'purchase', {'event_category': 'buttons', 'event_action': 'click-purchase'});
    }
    if (track_yandex) {
        tracker_ya_reachgoal('purchase');
    }
    if (track_vk) {
        VK.Goal('purchase');
    }
}

function tracker_contact() {
    if (track_info) {
        console.log('tracker_contact');
    }
    if (track_google) {
        gtag('event', 'contact', {'event_category': 'buttons', 'event_action': 'click-contact'});
    }
    if (track_yandex) {
        tracker_ya_reachgoal('contact');
    }
    if (track_vk) {
        VK.Goal('contact');
    }
}

function tracker_ecom_purchase() {
    if (track_google_ecom || track_yandex_ecom) {
        if (track_info) {
            console.log('tracker_ecom_purchase');
        }

        // Prepare vars
        var date = new Date();
        var dateStr = date.getDay() + "." + date.getMonth() + "." + date.getYear() + "_" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var orderName = "ORDER_" + dateStr + "_" + Date.now();

        // Prepare products list
        var products = [];
        $('.simplecheckout-cart').find('.cartrow').each(function () {
            $row = $(this);
            product = {
                "id": tracker_toInt($row.find('.ecom_id').text()),
                "name": tracker_toStr($row.find('.ecom_name').text()),
                "quantity": tracker_toInt($row.find('.ecom_qty').text()),
                "price": tracker_toFloat($row.find('.ecom_price').text())
            };
            products.push(product);
        });

        // Send data
        if (track_google_ecom) {
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
        if (track_debug) {
            console.log(products);
            console.log('tracker_ecom_purchase - res:'.res);
        }
    }
}

window.onload = function () {
    if (track_debug) {
        console.log('tracker.js loaded');
    }
}
