const squares = document.querySelectorAll('.square');
const message = document.querySelector('.message');
const btn = document.querySelector('.btn');
let currmove = "X";
let isdraw = false;
let isover = false;
let move = 0;

letsStart();
function restart() {
    currmove = "X";
    move = 0;
    isdraw = false;
    isover = false;
    message.innerText = `${currmove}'s chance`;
    for (let sq of squares) {
        sq.innerText = "";
    }
}

function letsStart() {
    btn.addEventListener('click', () => {
        restart();
    })
    for (let sq of squares) {
        sq.addEventListener('click', () => {
            if (isover || isdraw) return;
            if (sq.innerText == "") {
                move++;
                sq.innerText = currmove;
                if (isWin(currmove)) {
                    message.innerText = `${currmove} Won`;
                    isover = true;
                    return;
                }
                currmove = changemove(currmove);
                if (move == 9) {
                    isdraw = true;
                    message.innerText = "Match Draw";
                    return;
                }
                message.innerText = `${currmove}'s chance`;
            }
            else {
                console.log(sq.innerText);
                message.innerText = `Can't fill here ${currmove}'s chance"`;
            }
        })
    }
}
function changemove(currmove) {
    if (currmove == 'X') {
        return 'O';
    }
    else {
        return 'X';
    }
}
function isWin(currmove) {
    return isSame(1, 2, 3, currmove) || isSame(4, 5, 6, currmove) || isSame(7, 8, 9, currmove) || isSame(1, 2, 3, currmove) || isSame(1, 5, 9, currmove) ||
        isSame(7, 5, 3, currmove) || isSame(1, 4, 7, currmove) || isSame(2, 5, 8, currmove) || isSame(3, 6, 9, currmove);
}
function isSame(x, y, z, move) {
    let a = document.querySelector("#s" + x).innerText;
    let b = document.querySelector("#s" + y).innerText;
    let c = document.querySelector("#s" + z).innerText;
    if (a == move && b == move && c == move) return true;
    return false;
}