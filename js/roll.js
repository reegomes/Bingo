let roll = 0;
let rolled = [];
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
    if (roll != 0 && (rolled.includes(roll) == false)) {
        let rollBoard = document.getElementById("rollBoard");
        let rollElement = document.createElement('div');
        rollElement.id = rollList[roll];
        rollBoard.innerHTML = rollList[roll];
        removeRoll(searching);
        flipCard1(searching);
    } else {
        startRoll();
    }
}

function rolling(min, max) {
    let rand = parseInt(Math.random() * (max - min) + min);
    console.log("rand é " + rand + " + 1");
    return rand;
}

function flipCard1() {
    if (!roll2.item(roll).classList.contains("flip")) {
        roll2.item(roll).classList.add("flip");
    } else {
        roll2.item(roll).classList.remove("flip");
    }
}