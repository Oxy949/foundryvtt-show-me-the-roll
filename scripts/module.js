Hooks.once('init', async function () {
    game.settings.register("foundryvtt-show-me-the-roll", "autoExpand", {
        name: "Auto Expand",
        hint: "Automatically show (expand) dice roll result for you",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
        requiresReload: true
    });

    game.settings.register("foundryvtt-show-me-the-roll", "hideRollFormula", {
        name: "Hide Roll Formula",
        hint: "Hide the dice formula of the roll",
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        requiresReload: true
    });

    game.settings.register("foundryvtt-show-me-the-roll", "hideSmallResult", {
        name: "Hide Subtotal Roll Result",
        hint: "Hide the sub-total result number (right to the dices)",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
        requiresReload: true
    });

    game.settings.register("foundryvtt-show-me-the-roll", "hideBottomResult", {
        name: "Hide Total Roll Result",
        hint: "Hide the bottom result number.",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
        requiresReload: true
    });

    game.settings.register("foundryvtt-show-me-the-roll", "disableClickInteraction", {
        name: "Disable Interaction",
        hint: "Disable 'click to expand/shrink' logic. Useful if you don't want to accidentally hide your roll's dice.",
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        requiresReload: true
    });
});

Hooks.once('ready', async function() {

});

Hooks.on("renderChatMessage", function (message, html, data) {
    // Check if the message is a roll
    if (message.isRoll) {
        setTimeout(() => {
            if (game.settings.get("foundryvtt-show-me-the-roll", "autoExpand")) {
                html.find('.dice-roll').addClass('expanded');
                html.find('.dice-roll .dice-tooltip').addClass('expanded');
            }
        
            if (game.settings.get("foundryvtt-show-me-the-roll", "hideRollFormula")) {
                html.find('.dice-formula').css('visibility', 'hidden');
                html.find('.dice-formula').css('position', 'absolute');
            }
    
            if (game.settings.get("foundryvtt-show-me-the-roll", "hideSmallResult")) {
                html.find('.dice-tooltip .total').css('visibility', 'hidden');
                html.find('.dice-tooltip .total').css('position', 'absolute');
            }
    
            if (game.settings.get("foundryvtt-show-me-the-roll", "hideBottomResult")) {
                html.find('.dice-total').css('visibility', 'hidden');
                html.find('.dice-total').css('position', 'absolute');
            }
    
            if (game.settings.get("foundryvtt-show-me-the-roll", "disableClickInteraction")) {
                html.find('.dice-roll').addClass('no-interaction');
            }
        }, 1); // Delay of 1 milliseconds
    }
});