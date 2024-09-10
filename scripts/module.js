Hooks.once('init', async function () {
    game.settings.register("foundryvtt-show-me-the-roll", "autoExpand", {
        name: "Auto Expand",
        hint: "Automaticly expand dice roll result for you",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
        requiresReload: true
    });
    game.settings.register("foundryvtt-show-me-the-roll", "hideSmallResult", {
        name: "Hide Small Roll Result",
        hint: "Show or hide the number right to the dices.",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
        requiresReload: true
    });

    game.settings.register("foundryvtt-show-me-the-roll", "hideBottomResult", {
        name: "Hide Total Roll Result",
        hint: "Show or hide the bottom number.",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
        requiresReload: true
    });
});

Hooks.once('ready', async function() {

});

Hooks.on("renderChatMessage", function (message, html, data) {
    // Check if the message is a roll
    if (message.isRoll) {
        if (game.settings.get("foundryvtt-show-me-the-roll", "autoExpand")) {
            html.find('.dice-roll').addClass('expanded');
        }

        if (game.settings.get("foundryvtt-show-me-the-roll", "hideSmallResult")) {
            html.find('.dice-tooltip .tooltip-part').css('margin-bottom', '0px');
            html.find('.dice-tooltip .tooltip-part .total').css('visibility', 'hidden');
            html.find('.dice-total').css('visibility', 'hidden');
            html.find('.dice-total').css('height', '0px');
            html.find('.dice-total').css('visibility', 'hidden');
            html.find('.dice-total').css('visibility', 'hidden');
        }

        if (game.settings.get("foundryvtt-show-me-the-roll", "hideBottomResult")) {
            html.find('.dice-tooltip .tooltip-part .total').css('visibility', 'hidden');
            html.find('.dice-tooltip .tooltip-part .total').css('width', '0');
            html.find('.dice-tooltip .tooltip-part .total').css('height', '0');
            html.find('.dice-tooltip .tooltip-part .total').css('position', 'absolute');
        }
    }
});