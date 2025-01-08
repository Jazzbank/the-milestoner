var player = {
    currencies: {
        amount: new ExpantaNum(0)
    },

    mainUpgrade: {
        level: new ExpantaNum(0),
        bought: new ExpantaNum(0),
    }
}

function increment() {
    player.currencies.amount = ExpantaNum.add(player.currencies.amount, 1)
}

function update() {
    document.getElementById("points").innerHTML = player.currencies.amount.toFixed(2)
}

window.setInterval(update, 1000/30)