console.log('[EVENT] CALL');
ym(GLOBAL_YMID, 'reachGoal', 'CALL');
ga('send', 'event', 'EVENTS', 'CLICK_CALL', 'CLICK_CALL');
gtag('event', 'CLICK_CALL', {'event_category': 'EVENTS', 'event_label': 'CLICK_CALL'});

console.log('[EVENT] CALLBACK');
ym(GLOBAL_YMID, 'reachGoal', 'CALLBACK');
ga('send', 'event', 'EVENTS', 'CLICK_CALLBACK', 'CLICK_CALLBACK');
gtag('event', 'CLICK_CALL', {'event_category': 'EVENTS', 'event_label': 'CLICK_CALLBACK'});

console.log('[EVENT] ORDER');
ym(GLOBAL_YMID, 'reachGoal', 'ORDER');
ga('send', 'event', 'EVENTS', 'CLICK_ORDER', 'CLICK_ORDER');
gtag('event', 'CLICK_ORDER', {'event_category': 'EVENTS', 'event_label': 'CLICK_ORDER'});

console.log('[EVENT] ADD2CART');
ym(GLOBAL_YMID, 'reachGoal', 'ADD2CART');
gtag('event', 'CLICK_ADD2CART', {'event_category': 'EVENTS', 'event_label': 'CLICK_ADD2CART'});
ga('send', 'event', 'EVENTS', 'CLICK_ADD2CART', 'CLICK_ADD2CART');

=================================
=================================

console.log('[EVENT] CALL');
if (typeof ym == 'function') {
    ym(GLOBAL_YMID, 'reachGoal', 'CALL');
}
if (typeof gtag == 'function') {
    gtag('event', 'CLICK_CALL', {'event_category': 'EVENTS', 'event_label': 'CLICK_CALL'});
}else{
    if (typeof ga == 'function') {
        ga('send', 'event', 'EVENTS', 'CLICK_CALL', 'CLICK_CALL');
    }
}

=================================
=================================

<script type="text/javascript">
    $(function() {
        $(document).on('click', '[data-event-click-call]', function(){

        });
        $(document).on('click', '[data-event-click-callback]', function(){

        });
    });
</script>
