const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

const id_list_num = id_list.length; // id의 수
let answer = new Array(id_list_num).fill(0);

let id_list_reported_num = new Array(id_list_num).fill(0); // id 수 만큼 0이 들어있는 배열 생성

// 각 유저의 신고 당한 수 구하기
for (i = 0; i < report.length; i++) {
  const temp = report[i].split(" ");
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

// 메일 발송 횟수 구하기
for (i = 0; i < report.length; i++) {
  const temp = report[i].split(" ");
  for (j = 0; j < 2; j++) {
    if (temp[1] === reported_User[j]) {
      console.log(temp[0] + " " + i);
    }
  }
}

console.log(answer);
