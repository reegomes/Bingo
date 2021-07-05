let roll = 0;

let rollList = [];
for (let i = 0; i < 75; i++) {
    rollList[i] = i + 1;
}
let searching = rollList.find(e => e % roll == 0);

function removeRoll(a) {
    value = a;
    setTimeout(() => {
        index = rollList.indexOf(value);
        if (index > -1) {
            rollList.splice(index, 1);
        }
    }, 500);
}

let roll2 = document.getElementsByClassName("card");

function startRoll() {
    roll = rolling(0, rollList.length);

    if (roll != 0) {
        let rollBoard = document.getElementById("rollBoard");
        let rollElement = document.createElement('div');
        rollElement.id = rollList[roll];
        console.log(rollList[roll].toString());
        rollBoard.innerHTML = rollList[roll];
        removeRoll(searching);
        flipCard1(searching);
    } else {
        console.log("Foi 0");
        startRoll();
    }
}

function rolling(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function flipCard1() {
    if (!roll2.item(roll).classList.contains("flip")) {
        roll2.item(roll).classList.add("flip");
    } else {
        roll2.item(roll).classList.remove("flip");
    }
}