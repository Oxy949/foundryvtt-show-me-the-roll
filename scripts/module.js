Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {

});

Hooks.on("renderChatMessage", function (message, html, data) {
    // Check if the message is a roll
    if (message.isRoll) {
        html.find('.dice-roll').addClass('expanded');
        html.find('.dice-tooltip .tooltip-part').css('margin-bottom', '0px');
        html.find('.dice-tooltip .tooltip-part .total').css('visibility', 'hidden');
        html.find('.dice-total').css('visibility', 'hidden');
        html.find('.dice-total').css('height', '0px');
        html.find('.dice-total').css('visibility', 'hidden');
        html.find('.dice-total').css('visibility', 'hidden');
        html.find('.dice-tooltip .tooltip-part .total').css('visibility', 'hidden');
        html.find('.dice-tooltip .tooltip-part .total').css('width', '0');
        html.find('.dice-tooltip .tooltip-part .total').css('height', '0');
        html.find('.dice-tooltip .tooltip-part .total').css('position', 'absolut');
    }
});