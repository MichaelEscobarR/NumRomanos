function convertToRoman(num){

    num = document.getElementById("numb").value;
    var convToNumber ={
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    var romano = "";

    for (var i in convToNumber){
        while (num >= convToNumber[i]){
            romano += i;
            num -= convToNumber[i];
        }
    }
    document.getElementById("resultado").value = romano;
}

