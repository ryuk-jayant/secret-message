//  test1 =  .,.,/,/,.,+,.,.,.,;,+,;,;,;,.\
function arraymaker(mixedcode) {
    let cols = (mixedcode.length) / 3;
    let tempcode = [];
    for (let i = 0; i < cols; i++) {
        let j = 0, temparr = [], temp = i;
        while (j != 3) {
            temparr[j] = mixedcode[i];
            i += cols;
            j++;
        }
        i = temp;
        tempcode.push(temparr);
    }
    //console.log(tempcode);
    return tempcode;
}
function getcharforcode(arr) {
    var arr1 = [
        ['q', 'w', 'e', 'r'],
        ['t', 'y', 'u', 'i'],
        ['o', 'p', 'a', 's'],
        ['d', 'f', 'g', 'h'],
    ];
    var arr2 = [
        ['j', 'k', 'l', 'z'],
        ['x', 'c', 'v', 'b'],
        ['n', 'm', '1', '2'],
        ['0', '3', '4', '5'],
    ];
    var arr3 = [
        ['6', '7', '8', '9'],
        ['Q', 'W', '@', '#'],
        ['E', 'R', 'T', 'Y'],
        ['U', 'I', 'O', 'P'],
    ]
    var arr4 = [
        ['A', 'S', 'D', 'F'],
        ['G', 'H', 'J', 'K'],
        ['L', 'Z', 'X', 'C'],
        ['V', 'B', 'N', 'M'],
    ]
    var matrix = [
        arr1,
        arr2,
        arr3,
        arr4,
    ];
    if (arr[0] == -1) {
        return ('*');
    }
    else {
        return (matrix[arr[0] - 1][arr[1] - 1][arr[2] - 1]);
    }
}
function getstringforarr(strcode) {
    let finalstr = "";
    for (let i = 0; i < strcode.length; i++) {
        finalstr += getcharforcode(strcode[i]);
    }
    return (finalstr);
}
function converter(mytext) {
    let mixedcode = [];
    for (let i = 0; i < mytext.length; i++) {
        if (mytext.charAt(i) == '.') {
            mixedcode[i] = 1;
        }
        else if (mytext.charAt(i) == '/') {
            mixedcode[i] = 2;
        }
        else if (mytext.charAt(i) == ';') {
            mixedcode[i] = 3;
        }
        else if (mytext.charAt(i) == '+') {
            mixedcode[i] = 4;
        }
    }
    let strightcode = arraymaker(mixedcode);
    let mystring = getstringforarr(strightcode);
    return mystring;

}

//invoked when btn2 is clicked
function decrypt() {
    let mycipher = document.getElementById("cipher").value;
    mycipher = converter(mycipher);
    document.getElementById("answer").textContent = mycipher;
}


//eventlistener
document.getElementById("btn2").addEventListener("click", () => { decrypt() });