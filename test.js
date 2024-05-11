let wheel = ["0","00",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
// have wheel pick a random index number from the array

// function spinWheel() {
//     let randomWheel = Math.floor(Math.random() * wheel.length)
//     return wheel[randomWheel];
// }

// let roundResult = spinWheel(wheel);
// console.log(roundResult);


let payouts = {
    // 35 x bet + bet = win total
    singleNumWin: ["0","00",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
    // 17 x bet + bet = win total
    doubleNumWin: {
            twoA: [1,2],
            twoB: [1,4],
            twoC: [2,3],
            twoD: [2,5],
            twoE: [3,6],
            twoF: [4,5],
            twoG: [4,7],
            twoH: [5,6],
            twoI: [5,8],
            twoJ: [6,9],
            twoK: [7,8],
            twoL: [7,10],
            twoM: [8,9],
            twoN: [8,11],
            twoO: [9,12],
            twoP: [10,11],
            twoQ: [10,13],
            twoR: [11,12],
            twoS: [11,14],
            twoT: [12,15],
            twoU: [13,14],
            twoV: [13,16],
            twoW: [14,15],
            twoX: [14,17],
            twoY: [15,18],
            twoZ: [16,17],
            twoAa: [16,19],
            twoAb: [17,18],
            twoAc: [17,20],
            twoAd: [18,21],
            twoAe: [19,20],
            twoAf: [19,22],
            twoAg: [20,21],
            twoAh: [20,23],
            twoAi: [21,24],
            twoAj: [22,23],
            twoAk: [22,25],
            twoAl: [23,24],
            twoAm: [23,26],
            twoAn: [24,27],
            twoAo: [25,26],
            twoAp: [25,28],
            twoAq: [26,27],
            twoAr: [26,29],
            twoAs: [27,30],
            twoAt: [28,29],
            twoAu: [28,31],
            twoAv: [29,30],
            twoAw: [29,32],
            twoAx: [30,33],
            twoAy: [31,32],
            twoAz: [31,34],
            twoBa: [32,33],
            twoBb: [32,35],
            twoBc: [33,36],
            twoBd: [34,35],
            twoBe: [35,36]
    },
    // 11 x bet + bet = win total
    threeNumWin: {
        threeA: [1,2,3],
        threeB: [4,5,6],
        threeC: [7,8,9],
        threeD: [10,11,12],
        threeE: [13,14,15],
        threeF: [16,17,18],
        threeG: [19,20,21],
        threeH: [22,23,24],
        threeI: [25,26,27],
        threeJ: [28,29,30],
        threeK: [31,32,33],
        threeL: [34,35,36]
    },
    // 8 x bet + bet = win total
    fourNumWin: {
        fourA: [1,2,3,4],
        fourB: [2,3,5,6],
        fourC: [4,5,7,8],
        fourD: [5,6,8,9],
        fourE: [7,8,10,11],
        fourF: [8,9,11,12],
        fourG: [10,11,13,14],
        fourH: [11,12,14,15],
        fourI: [13,14,16,17],
        fourJ: [14,15,17,18],
        fourK: [16,17,19,20],
        fourL: [17,18,20,21],
        fourM: [19,20,22,23],
        fourN: [20,21,23,24],
        fourO: [22,23,25,26],
        fourP: [23,24,26,27],
        fourQ: [25,26,28,29],
        fourR: [26,27,29,30],
        fourS: [28,29,31,32],
        fourT: [29,30,32,33],
        fourU: [31,32,34,35],
        fourV: [32,33,35,36],
    },
    // 5 x bet + bet = win total
    sixNumWin: {
        sixA: [1,2,3,4,5,6],
        sixB: [7,8,9,10,11,12],
        sixC: [13,14,15,16,17,18],
        sixD: [19,20,21,22,23,24],
        sixE: [25,26,27,28,29,30],
        sixF: [31,32,33,34,35,36]
    },
    // 2 x bet + bet = win total (aka bet x 3)
    outsideTopWin: {
        dozenOneWin: [1,2,3,4,5,6,7,8,9,10,11,12],
        dozenTwoWin: [12,13,14,15,16,17,18,19,20,21,22,23,24],
        dozenThreeWin: [25,26,27,28,29,30,31,32,33,34,35,36],
        topRowWin: [3,6,9,12,15,18,21,24,27,30,33,36],
        middleRowWin: [2,5,8,11,14,17,20,23,26,29,32,35],
        bottomRowWin: [1,4,7,10,13,16,19,22,25,28,31,34],
    },
    // 1 x bet + bet = win total (aka bet x 2)
    outsideBottomWin: {
        firstHalfWin: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        secondHalfWin: [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
        redWin: [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36],
        blackWin: [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35],
        evenWin: [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36],
        oddWin: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35]
    }
}


function randomPayout() {
    const keys = Object.keys(payouts);
    let randomIndex = Math.floor(Math.random() * keys.length)
    return keys[randomIndex];
}

let roundResult = randomPayout();
console.log(roundResult);