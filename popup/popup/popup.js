function getCode(char) {
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
    let code1 = [-1, -1, -1];
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            for (k = 0; k < 4; k++) {
                if (char == matrix[i][j][k]) {
                    code1[0] = i + 1;
                    code1[1] = j + 1;
                    code1[2] = k + 1;
                }
            }
        }
    }
    return code1;
}
function mixing(code) {
    let tempcode = [];
    let k = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < code.length; j++) {
            tempcode[k] = code[j][i];
            k++;
        }

    }
    return tempcode;
    //     let mixedcode = [];
    //     let j = 0;
    //     for (let i = 0; i < tempcode.length; i++){
    //         mixedcode[j] = tempcode[i];
    //     }
    //   console.log(mixedcode);
}
function cipher(mytext) {
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
    var code = [];
    mytext = mytext.split(" ").join("");
    for (let i = 0; i < mytext.length; i++) {
        code[i] = (getCode(mytext.charAt(i)));
    }
    let mixedcode = mixing(code);
    let mystring = "";
    for (let i = 0; i < mixedcode.length; i++) {
        if (mixedcode[i] == 1) {
            mystring += '.' ;
        }
        else if (mixedcode[i] == 2) {
            mystring += '/';

        }
        else if (mixedcode[i] == 3) {
            mystring += ';' ;

        }
        else if (mixedcode[i] == 4) {
            mystring += '+' ;

        }
    }
    return mystring;
}


function clicked() {
    let mytext = (document.getElementById("text").value);
    let codetext = cipher(mytext);
    document.getElementById("para").textContent = codetext;
}

//document.getElementById("para").style.display = none;

document.getElementById("btn").addEventListener("click", () => { clicked() });