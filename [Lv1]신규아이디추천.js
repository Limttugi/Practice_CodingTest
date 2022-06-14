const new_id = "...!@BaT#*..y.abcdefghijklm";

function solution(new_id) {
  var answer = "";

  new_id_1st = new_id.toLowerCase();
  
  const alphabet = /[a-z]/;
  const number = /[0-9]/;
  new_id_2st = "";
  [...new_id_1st].forEach((char) => {
    if (
      alphabet.test(char) === true ||
      number.test(char) === true ||
      char === "-" ||
      char === "_" ||
      char === "."
    ) {
      new_id_2st += char;
    }
  });

  return answer;
}

solution(new_id);
