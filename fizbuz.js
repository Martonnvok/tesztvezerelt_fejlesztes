$(function () {});

function fizbuz(n) {
    if (n === 0) {
        return "";
    }
    else {
        let txt = "";
        for (let i = 1; i < n; i++) {
            txt += fizbuzErtek(i) + ", ";
           
        }
        txt += fizbuzErtek(n);
        return txt;
    }
}

function fizbuzErtek(x) {
    let ertek=""
    if (x % 3 === 0 && x % 5 === 0) {
        ertek = "fizzbuzz";
    }
    else if (x % 3 === 0) {
        ertek = "fizz";
    }
    else if (x % 5 === 0) {
        ertek = "buzz";
    }
    else {
        ertek = x;
    }
    return ertek;
}