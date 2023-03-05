function getCode(char, incode) {
  var arr1 = [
    ["q", "w", "e", "r"],
    ["t", "y", "u", "i"],
    ["o", "p", "a", "s"],
    ["d", "f", "g", "h"],
  ];
  var arr2 = [
    ["j", "k", "l", "z"],
    ["x", "c", "v", "b"],
    ["n", "m", "1", "2"],
    ["0", "3", "4", "5"],
  ];
  var arr3 = [
    ["6", "7", "8", "9"],
    ["Q", "W", "@", " "],
    ["E", "R", "T", "Y"],
    ["U", "I", "O", "P"],
  ];
  var arr4 = [
    ["A", "S", "D", "F"],
    ["G", "H", "J", "K"],
    ["L", "Z", "X", "C"],
    ["V", "B", "N", "M"],
  ];
  var matrix = [arr1, arr2, arr3, arr4];
  let code1 = [-1, -1, -1];
  switch (incode) {
    case "0":
      for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
          for (k = 0; k < 4; k++) {
            if (char == matrix[i][j][k]) {
              code1[0] = j + 1;
              code1[1] = k + 1;
              code1[2] = i + 1;
            }
          }
        }
      }
    case "1":
      for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
          for (k = 0; k < 4; k++) {
            if (char == matrix[i][j][k]) {
              code1[0] = j + 1;
              code1[1] = i + 1;
              code1[2] = k + 1;
            }
          }
        }
      }
    case "2":
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
    case "3":
      for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
          for (k = 0; k < 4; k++) {
            if (char == matrix[i][j][k]) {
              code1[0] = k + 1;
              code1[1] = j + 1;
              code1[2] = i + 1;
            }
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
}
function cipher(mytext, incode) {
  var arr1 = [
    ["q", "w", "e", "r"],
    ["t", "y", "u", "i"],
    ["o", "p", "a", "s"],
    ["d", "f", "g", "h"],
  ];
  var arr2 = [
    ["j", "k", "l", "z"],
    ["x", "c", "v", "b"],
    ["n", "m", "1", "2"],
    ["0", "3", "4", "5"],
  ];
  var arr3 = [
    ["6", "7", "8", "9"],
    ["Q", "W", "@", " "],
    ["E", "R", "T", "Y"],
    ["U", "I", "O", "P"],
  ];
  var arr4 = [
    ["A", "S", "D", "F"],
    ["G", "H", "J", "K"],
    ["L", "Z", "X", "C"],
    ["V", "B", "N", "M"],
  ];
  var matrix = [arr1, arr2, arr3, arr4];
  var code = [];
  //mytext = mytext.split(" ").join("");
  incode = Number.parseInt(incode) % 4;
  incode = incode.toString();
  for (let i = 0; i < mytext.length; i++) {
    code[i] = getCode(mytext.charAt(i), incode);
  }
  let mixedcode = mixing(code);
  let mystring = "";
  for (let i = 0; i < mixedcode.length; i++) {
    if (mixedcode[i] == 1) {
      mystring += ".";
    } else if (mixedcode[i] == 2) {
      mystring += "/";
    } else if (mixedcode[i] == 3) {
      mystring += ";";
    } else if (mixedcode[i] == 4) {
      mystring += "+";
    }
  }
  return mystring;
}

function clicked(incode) {
  let mytext = document.getElementById("text").value;
  let codetext = cipher(mytext, incode);
  navigator.clipboard.writeText(codetext);
  document.getElementById("para").textContent = codetext;
  document.getElementById("copy-message").textContent =
    "Encypted text is copied to clipboard!!";
  document.getElementById("text").value = "";
}

//document.getElementById("para").style.display = none;

document.getElementById("btn").addEventListener("click", () => {
  clicked(document.getElementById("enccode").value);
});

// function copy(){
//     let text=document.getElementById("para");
//     navigator.clipboard.writeText(text.value);
//     alert(" text is copied");
// }
