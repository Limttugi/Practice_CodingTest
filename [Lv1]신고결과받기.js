const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 3;

// 신고 중복 제거
const uniqueReport = new Set(report);

const id_list_num = id_list.length; // id의 수
let answer = new Array(id_list_num).fill(0);

let id_list_reported_num = new Array(id_list_num).fill(0); // id 수 만큼 0이 들어있는 배열 생성

// 각 유저의 신고 당한 수 구하기
for (i = 0; i < uniqueReport.length; i++) {
  const temp = uniqueReport[i].split(" ");
  for (j = 0; j < id_list_num; j++) {
    if (temp[1] === id_list[j]) {
      id_list_reported_num[j] += 1;
    }
  }
}

// 누적 신고 횟수가 k를 넘어간 유저 파악
let reported_User = [];
for (i = 0; i < id_list_num; i++) {
  // console.log(id_list_reported_num[i]);
  if (id_list_reported_num[i] >= k) {
    reported_User.push(id_list[i]);
  }
}

// console.log("신고 당한 횟수 " + id_list_reported_num);
console.log("신고 당한 유저 " + reported_User);

// 메일 발송 횟수를 구하기 위한 딕셔너리 {이름: 횟수, ...}
id_list_dic = {};
for (i = 0; i < id_list_num; i++) {
  id_list_dic[id_list[i]] = 0;
}

// 메일 발송 횟수 구하기
for (i = 0; i < uniqueReport.length; i++) {
  const temp = uniqueReport[i].split(" ");
  console.log(temp);
  for (j = 0; j < 2; j++) {
    if (temp[1] === reported_User[j]) {
      id_list_dic[temp[0]] += 1;
    }
  }
}

// 딕셔너리 value (메일 발송 횟수)만 입력
answer = Object.values(id_list_dic);

console.log(id_list_dic);
console.log(answer);
