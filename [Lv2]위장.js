function solution(clothes) {
  let answer = 1;
  let wear = [];

  // 옷 부위 별 개수 구하기
  for (let i = 0; i < clothes.length; i++) {
    wear[clothes[i][1]] = (wear[clothes[i][1]] || 1) + 1;
  }

  // 옷을 입을 수 있는 경우의 수 구하기
  for (let key in wear) {
    answer *= wear[key];
  }

  return answer - 1;
}
