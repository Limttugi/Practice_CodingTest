function solution(lottos, win_nums) {
  var answer = [];
  let matchNumCount = 0; // 일치한 번호 개수
  let zeroCount = 0; // 0 개수
  
  lottos.forEach((lotto, lottoIdx) => { // 일치한 번호 삭제 후 일치한 번호 개수 카운트
    console.log("lotto: " + lotto);
    console.log(lottoIdx);
    win_nums.forEach((winNum) => {
      if(lotto === 0) zeroCount++;
      if(lotto === winNum) {
        console.log("winNum: " + winNum)
        console.log(lotto===winNum)
        lottos.splice(lottos.indexOf(winNum),1, '');
        win_nums.splice(win_nums.indexOf(winNum),1, '');
        matchNumCount++;
      }
    })
  })
  
  let LowestRanking = 7 - matchNumCount; // 최저 순위
  if(LowestRanking === 7 ) LowestRanking = 6;
  let HighestRanking = LowestRanking - zeroCount; // 최고 순위
  if(HighestRanking < 1) HighestRanking = 1;

  answer = [HighestRanking, LowestRanking];

  return answer;
}

solution(lottos, win_nums);