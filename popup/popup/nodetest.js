


function printme(char) {
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
    ///console.log(matrix[3][3][3]+"\n");
   // let char = str.charAt(3);
    //console.log(char + "\n");
    let code1=[-1,-1,-1];
    for (i = 0; i < 4; i++){
        for (j = 0; j < 4; j++){
            for (k = 0; k < 4; k++){
                if (char == matrix[i][j][k]) {
                    code1[0]=i+1;
                    code1[1]=j+1;
                    code1[2]=k+1;
                }
            }
        }
    }
    //console.log(code1 + "\n");
    return code1;
}
function mixing(code) {
    let tempcode = [];
    let k = 0;
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < code.length; j++){
            tempcode[k] = (code[j][i]);
            k++;
        }
       
    }
    //console.log(tempcode.length);
    return tempcode;
//     let mixedcode = [];
//     let j = 0;
//     for (let i = 0; i < tempcode.length; i++){
//         mixedcode[j] = tempcode[i];
//     }
//   console.log(mixedcode);
}
function arraymaker(mixedcode) {
    let cols = (mixedcode.length)/ 3;
    let tempcode = [];
    for (let i = 0; i < cols; i++){
        let j=0,temparr=[],temp=i;
        while (j!= 3) {
            temparr[j] = mixedcode[i];
            i += cols;
            j++;
        } 
        i = temp;
        tempcode.push(temparr);
    }
    console.log(tempcode);
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
    if (arr[0] ==-1) {
        return ('*');
    }
    else {
        return(matrix[arr[0]-1][arr[1]-1][arr[2]-1]);
    }
}
function getstringforarr(strcode) {
    let finalstr = "";
    for (let i = 0; i < strcode.length; i++) {
        console.log(strcode[i]);
        finalstr += getcharforcode(strcode[i]);
    }
    return (finalstr);
}

function Main(){
    let pass = "hello";
    let code1=[];
    for (let i = 0; i < pass.length; i++) {
        code = printme(pass.charAt(i));
        code1[i] = code;
        //console.log(pass.charAt(i)+code+" ");
    }
    //console.log(code1);
    let mixcode = mixing(code1);
    //console.log(mixcode);
    let testcode = arraymaker(mixcode);
    console.log(testcode);
    console.log(getstringforarr(testcode));
    
    1,1,2,2,1,4,1,1,1,3,4,3,3,3,1
}
Main();