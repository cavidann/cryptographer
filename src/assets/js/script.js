// /*
// =====================================================
//                     =    main scripts starts   =
// =====================================================
// */

// var alfabet = [
//   ["a", "b", "c", "ç", "d", "e", "ə", "f", "g", "ğ", "h"],
//   ["x", "ı", "i", "j", "k", "q", "l", "m", "n", "o", "ö"],
//   ["p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z", "w"]
// ];

// $(document).ready(function() {
//   $(".convert").click(function() {
//     var word = $(".word").val();
//     var key = $(".key").val();

//     console.log(getAlfabetPos(word));
//     console.log(getAlfabetPos(key));

//     var wordLetters = [];
//     var keyLetters = [];

//     for (var i = 0; i < word.length; i++) {
//       wordLetters.push(word.charAt(i));
//     }

//     for (var i = 0; i < key.length; i++) {
//       keyLetters.push(key.charAt(i));
//     }

//     $(".letters").append("<tr row=" + -1 + "></tr>");
//     for (let i = -1; i < wordLetters.length; i++) {
//       tdAppend(i, wordLetters[i], "");
//     }

//     for (let i = 0; i < alfabet.length; i++) {
//       $(".letters").append("<tr row=" + i + "></tr>");
//       for (let j = -1; j < word.length; j++) {
//         if (j > -1) {
//           if (j >= 11) {
//             jC = j - 11;
//             var text = alfabet[i][jC];
//           } else {
//             var text = alfabet[i][j];
//           }
//         }
//         tdAppend(j, text, keyLetters[i]);
//       }
//     }

//     for (let i = 0; i < word.length; i++) {
//         $("tr td[column='"+i+"']").attr("alfabet-pos",getAlfabetPos(word)[i]).css({'background':"red"});
//     }

//     for (let i = 0; i < key.length; i++) {
//         $("tr[row='"+i+"'] td").attr("key-pos",getAlfabetPos(key)[i]).css({'background':"blue"});
//     }

//   });
// });

// function getLetters(word) {
//   var arr = [];
//   for (let i = 0; i < word.length; i++) {
//     arr.push(word.slice(i, i + 1));
//   }
//   return arr;
// }

// function getAlfabetPos(letters) {
//   letters = getLetters(letters);
//   var arr = [];
//   for (let k = 0; k < letters.length; k++) {
//     for (let i = 0; i < alfabet.length; i++) {
//       for (let j = 0; j < alfabet[i].length; j++) {
//         if (letters[k] == alfabet[i][j]) {
//           arr.push(i * 11 + (j + 1));
//           break;
//         }
//       }
//     }
//   }
//   return arr;
// }

// function tdAppend(i, alfabetLetters, wordsLetters) {
//   if (typeof wordsLetters === "undefined" || wordsLetters === null) {
//     wordsLetters = "";
//   }
//   if (i > -1) {
//       var text=alfabetLetters;
//   } else {
//       var text=wordsLetters;
//   }
//   $(".letters tr:last-child()").append(
//     "<td column=" + i + ">" + text + "</td>"
//   );
// }

/*
=====================================================
                    =    main scripts starts   =
=====================================================
*/

var alfabet = [
  ["a", "b", "c", "ç", "d", "e", "ə", "f", "g", "ğ", "h"],
  ["x", "ı", "i", "j", "k", "q", "l", "m", "n", "o", "ö"],
  ["p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z", "w"]
];

$(document).ready(function() {
  $(".convert").click(function() {
    var word = $(".word").val();
    var key = $(".key").val();
    var wordLetters = [];
    var keyLetters = [];

    for (var i = 0; i < word.length; i++) {
      wordLetters.push(word.charAt(i));
    }

    for (var i = 0; i < key.length; i++) {
      keyLetters.push(key.charAt(i));
    }

    $(".letters").append("<tr row=" + -1 + "></tr>");
    for (let i = -1; i < wordLetters.length; i++) {
      tdAppend(i, wordLetters[i], "");
    }

    for (let i = 0; i < key.length; i++) {
      $(".letters").append("<tr row=" + i + "></tr>");
      for (let j = -1; j < word.length; j++) {
        if (j > -1) {
          (iC = i), (jC = j);
          if (j >= 11) {
            jC = j % 11;
          }
          if (i >= 3) {
            iC = i % 3;
          }
          var text = alfabet[iC][jC];
        }
        tdAppend(j, text, keyLetters[i]);
      }
    }

    for (let i = 0; i < word.length; i++) {
      $("tr td[column='" + i + "']")
        .attr("alfabet-pos", getAlfabetPos(word)[i])
        .css({ background: "red" });
    }

    for (let i = 0; i < key.length; i++) {
      $("tr[row='" + i + "'] td")
        .attr("key-pos", getAlfabetPos(key)[i])
        .css({ background: "blue" });
    }
  });
});

function getLetters(word) {
  var arr = [];
  for (let i = 0; i < word.length; i++) {
    arr.push(word.slice(i, i + 1));
  }
  return arr;
}

function getAlfabetPos(letters) {
  letters = getLetters(letters);
  var arr = [];
  for (let k = 0; k < letters.length; k++) {
    for (let i = 0; i < alfabet.length; i++) {
      for (let j = 0; j < alfabet[i].length; j++) {
        if (letters[k] == alfabet[i][j]) {
          arr.push(i * 11 + (j + 1));
          break;
        }
      }
    }
  }
  return arr;
}

function tdAppend(i, alfabetLetters, wordsLetters) {
  if (typeof wordsLetters === "undefined" || wordsLetters === null) {
    wordsLetters = "";
  }
  if (i > -1) {
    var text = alfabetLetters;
  } else {
    var text = wordsLetters;
  }
  $(".letters tr:last-child()").append(
    "<td column=" + i + ">" + text + "</td>"
  );
}
