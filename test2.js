let wheel = ["0", "00", 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]


function spinWheel() {
    let randomWheel = Math.floor(Math.random() * wheel.length)
    return wheel[randomWheel];
}

// console.log(spinWheel());

let payouts = {
    // 35 x bet + bet = win total
    singleBetWin: { 
        singleNumWinZero: ["0"],
        singleNumZeroZero: ["00"],
        singleNumOne: [1],
        singleNumTwo: [2],
        singleNumThree: [3],
        singleNumFour: [4],
        singleNumFive: [5],
        singleNumSix: [6],
        singleNumSeven: [7],
        singleNumEight: [8],
        singleNumNine: [9],
        singleNumTen: [10],
        singleNumEleven: [11],
        singleNumTwelve: [12],
        singleNumThirteen: [13],
        singleNumFourt: [14],
        singleNumFifth: [15],
        singleNumSixth: [16],
        singleNumSeventh: [17],
        singleNumEighteen: [18],
        singleNumnNineth: [19],
        singleNumTwenty: [20],
        singleNumTwentyOne: [21],
        singleNumTwentyTwo: [22],
        singleNumTwentyThree: [23],
        singleNumTwentyFour: [24],
        singleNumTwentyFive: [25],
        singleNumTwentySix: [26],
        singleNumTwentySeven: [27],
        singleNumTwentyEight: [28],
        singleNumTwentyNine: [29],
        singleNumThirty: [30],
        singleNumThirtyOne: [31],
        singleNumThirtyTwo: [32],
        singleNumThirtyThree: [33],
        singleNumThirtyFour: [4],
        singleNumThirtyFive: [35],
        singleNumThirtySix: [36],
        // ["0","00",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],
    },
    // 17 x bet + bet = win total
    doubleBet: {
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
            twoBe: [35,36],
    },
    // 11 x bet + bet = win total
    threeBet: {
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
    fourBet: {
        fourA: [1,2,4,5],
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
    // Never made a slot for the five Num bet (6 to 1) [0, 00, 1, 2, 3] so its deleted
    // 5 x bet + bet = win total
    sixBet: {
        sixA: [1,2,3,4,5,6],
        sixB: [4,5,6,7,8,9],
        sixC: [7,8,9,10,11,12],
        sixD: [10,11,12,13,14,15],
        sixE: [13,14,15,16,17,18,19],
        sixF: [16,17,18,19,20,21],
        sixG: [19,20,21,22,23,24],
        sixH: [22,23,24,25,26,27],
        sixI: [25,26,27,28,29,30],
        sixJ: [28,29,30,31,32,33],
        sixK: [31,32,33,34,35,36]
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

let matchingPayouts = [];


function checkPayout(result, payouts) {
    for (let key in payouts) {
        if (Array.isArray(payouts[key])) {
            if (payouts[key].includes(result)) {
                matchingPayouts.push(key);
            }
        } else {
            for (let subKey in payouts[key]) {
                if (payouts[key][subKey].includes(result)) {
                    matchingPayouts.push(subKey);
                }
            }
        }
    }
    return matchingPayouts
}

// let result = spinWheel();
// let result = 25;
let result = spinWheel();
console.log(result)
let payout = checkPayout(result, payouts);
// console.log(`Payout for ${result} is ${payout.join(",")}`)
console.log(matchingPayouts)