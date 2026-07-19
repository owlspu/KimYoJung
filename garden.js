// JavaScript Document
// gardenlevel, plants, seed, tree, flower


// 정원 모양(garden) 담당하는 함수
function getGardenContent(m) {
    switch (m) {
        case 1:  return "❄️❄️☃️⬜❄️<br>❄️⬜⬜❄️❄️"; // 1월: 한겨울
        case 2:  return "⬜⬜❄️⬜☃️<br>⬜❄️⬜⬜⬜"; // 2월: 겨울
        case 3:  return "🌱🟩🟩🟩🟩<br>🟩🟩🟩🌱🟩"; // 3월: 초봄
        case 4:  return "🌷🟩🌺🟩🌸<br>🟩🌼🟩🌸🟩"; // 4월: 꽃피는 봄
        case 5:  return "🌱🌿🌱🌿🌱<br>🌿🌱🌿🌱🌿"; // 5월: 싱그러운 봄
        case 6:  return "🌻🌿🌻🌻🌻<br>🌻🌻🌿🌳🌻"; // 6월: 여름 시작
        case 7:  return "🌳☀️🌻🌳🌻<br>☀️🌻🌳🌻☀️"; // 7월: 한여름
        case 8:  return "🌻🌳🌳☀️🌻<br>🌻🌳🍀🌻🌳"; // 8월: 여름
        case 9:  return "🌻🌿🌳🍃🌻<br>🌳🍃🌻🌿🍀"; // 9월: 여름 끝자락
        case 10: return "🍂🍂🍂🍁🍂<br>🍂🍁🍂🍂🍂"; // 10월: 가을
        case 11: return "🍁🍂🍂⬜🍂<br>⬜🍂🍂🍁⬜"; // 11월: 늦가을
        case 12: return "❄️⛄❄️⬜❄️<br>⬜❄️⬜❄️⬜"; // 12월: 첫눈
        default: return "⬜❄️⬜⬜⬜<br>❄️⬜⬜☃️⬜";
    }
}

window.garden = {
    update: function(m) {
        const content = getGardenContent(m);
        const gardenEl = document.querySelector('.garden'); // HTML의 정원 요소 클래스명
        if (gardenEl) {
            gardenEl.innerHTML = content;
        }
    }
};