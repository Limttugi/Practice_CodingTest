const new_id = "=.=";

function solution(new_id) {
  var answer = "";

  // 스텝 1
  new_id_1st = new_id.toLowerCase();
  // console.log(new_id_1st);
  // 스텝 2
  new_id_2st = new_id_1st.replace(/[^a-z0-9-_.]/g, "");
  // console.log(new_id_2st);
  // 스텝 3
  new_id_3st = new_id_2st.replace(/\.+/g, ".");
  // console.log(new_id_3st);
  // 스텝 4
  new_id_4st = new_id_3st.replace(/^\.|\.$/, "");
  // console.log(new_id_4st);
  // 스텝 5
  if (new_id_4st === "") new_id_5st = "a";
  else new_id_5st = new_id_4st;
  // console.log(new_id_5st);
  // 스텝 6
  new_id_6st = new_id_5st.slice(0, 15).replace(/\.$/, "");
  // console.log(new_id_6st);
  // 스텝 7
  const lastText = new_id_6st[new_id_6st.length - 1];
  // console.log("마지막 : " + lastText);
  // console.log(new_id_6st.length < 3);
  if (new_id_6st.length < 3) {
    while (new_id_6st.length < 3) {
      new_id_6st += lastText;
      console.log(new_id_6st.length);
    }
  }
  new_id_7st = new_id_6st;
  // 결과
  answer = new_id_7st;
  console.log(answer);

  return answer;
}

solution(new_id);
