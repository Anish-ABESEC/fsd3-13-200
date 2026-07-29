const toWords = (digit) => {
    switch (digit) {
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        case 0:
            return "Zero";
    }
};

const toWords2 = (digit)=>{
    const words = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    return words[digit];
}

//console.log(toWords(5));
//console.log(toWords(3));
//console.log(toWords(7));

const rollNum ="2503201000118";
const digits = String(rollNum).split("");
console.log(digits);
let inWords ="";
digits.forEach((d)) => {
    inWords +=" "+ toWords(Number(d));
});
console.log(inWords);