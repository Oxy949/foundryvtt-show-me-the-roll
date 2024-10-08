![](https://img.shields.io/badge/Foundry-v12-informational) 

# Show me the ROLL

![Image](./smtr.webp)

The module automatically expand chat messages containing dice roll results and (optionally) hide specific elements within those messages.


## How to install 

1. Copy `https://github.com/Oxy949/foundryvtt-show-me-the-roll/releases/latest/download/module.json` 
2. Paste it in your Foundry VTT, wait for install
3. Enable the module in your world
4. Enjoy!

## Module settings

* Auto Expand - Automatically show (expand) dice roll result for you
* Hide Roll Formula - Hide the dice formula of the roll
* Hide Subtotal Roll Result - Hide the sub-total result number (right to the dices)
* Hide Total Roll Result - Hide the bottom result number
* Disable Interaction - Disable 'click to expand/shrink' logic. Useful if you don't want to accidentally hide your roll's dice


## How it's work?

This code uses the `renderChatMessage` hook in Foundry VTT to automatically expand chat messages containing dice roll results and hide specific elements within those messages. When a message is rendered, it checks if it contains a dice roll (`message.isRoll`). If so, it adds the `expanded` class to the `.dice-roll` element, ensuring that the details of the roll are immediately visible. Additionally, it hides elements with the classes `.tooltip-part .total` and `.dice-total` by setting their visibility to hidden, preventing the total value and tooltips from being shown. This ensures that the roll results are displayed without the need for players to manually click to expand them, while keeping certain elements hidden from view.