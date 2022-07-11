function solution(progresses, speeds) {
  var answer = [];
  let progRemainDay = progresses.map((prog, idx) =>
    Math.ceil((100 - prog) / speeds[idx])
  );
  console.log(progRemainDay);

  let deploy = progRemainDay[0];
  let cnt = 0;

  progRemainDay.forEach((day) => {
    if (deploy < day) {
      deploy = day;
      answer.push(cnt);
      cnt = 0;
    }
    cnt++;
  });
  answer.push(cnt);
  return answer;
}

solution([93, 30, 55], [1, 30, 5]);
