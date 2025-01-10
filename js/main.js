var player = {
    currencies: {
        amount: new ExpantaNum(10)
    },

    mainUpgrade: {
        level: new ExpantaNum(0),
        bought: new ExpantaNum(0),
        cost: new ExpantaNum(10)
    },

    milestones: {},

}

const FRAMERATE = 20

function load() {
    var milestoneInfo = [
        // [starting level, repetition, effect, description, visibility]
        [1, 1, 0, "Increases point generation by 1 every rank.", true],
    ]

    for (let i = 0; i < milestoneInfo.length; i++) {
        Object.assign(player.milestones, {[i+1]: {
            start: milestoneInfo[i][0],
            repeat: milestoneInfo[i][1],
            effect: milestoneInfo[i][2],
            description: milestoneInfo[i][3],
            visible: milestoneInfo[i][4]
        }})
    }


}

load()

function increment() {
    player.mainUpgrade.level = ExpantaNum.add(player.mainUpgrade.level, 1)
}

function prodLoop() {
    player.currencies.amount = ExpantaNum.add(player.currencies.amount, ExpantaNum.div(player.mainUpgrade.level, FRAMERATE))
}

function update() {
    document.getElementById("mainUpgLevel").innerHTML = player.mainUpgrade.level + " → " + ExpantaNum.add(player.mainUpgrade.level, 1)
    document.getElementById("mainUpgCost").innerHTML = player.mainUpgrade.cost.toFixed(2)
    document.getElementById("points").innerHTML = player.currencies.amount.toFixed(2) + " points"
}

function mainLoop() {
    prodLoop()
    update()
}

window.setInterval(mainLoop, 1000/FRAMERATE)