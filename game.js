// JavaScript Document
// game

window.nextDay = function(triggerEvent = true) {
    const date = window.calendar.nextDay(); 
    
    // 5년 5월 5일이라면 엔딩을 먼저 체크하고, 엔딩이 발생했다면 함수를 바로 종료
    if (window.checkEndingTime()) {
        return; 
    }

    // 그 외의 경우에만 정상 진행
    const weatherData = window.world.updateWeather(date.month);
    window.world.currentWeather = weatherData;
    
    if (triggerEvent) {
        window.eventManager.triggerRandomEvent();
    }
    
    ui.applyBackground(weatherData.bgColor); 
    window.kim.update(weatherData.temp);
    
    money.updateFixedCosts(date.day, date.month, weatherData.temp); 
    money.tryEat();
    garden.update(date.month); 
    
    window.ui.refresh();
    window.checkStatus(); // 배드엔딩 체크
};

window.buryKim = function() {
    window.nextDay(false); // 1일차
    window.nextDay(false); // 2일차
    
    const logEl = document.querySelector('.status-log');
    if (logEl) logEl.innerText = "김요정을 땅에 묻었습니다.";
    
    window.kim.applyEffect({ hp: { min: -15, max: -3}, fp: { min: 3, max: 15 } }); 
    window.ui.refresh();
};

window.restKim = function() {
    window.nextDay(false);
    
    const logEl = document.querySelector('.status-log');
    if (logEl) logEl.innerText = "김요정이 집에서 빈둥거립니다.";
    
    window.kim.applyEffect({ hp: { min: 1, max: 15 }, sp: { min: -15, max: -3} }); 
    window.ui.refresh();
};

window.onload = function() {
    if (localStorage.getItem("kimFairySave")) window.loadGame();
    window.calendar.updateDisplay();
    window.world.updateWeather(window.calendar.month);
    window.ui.refresh();
};

window.checkEnding = function() {
    let reason = "";
    if (kimData.hp < 0) reason = "대요정님... 인간으로 살기 너무 힘들어요.";
    else if (kimData.fp < 0) reason = "나 너무 아파...";
    else if (kimData.sp < 0) reason = "나는...";
    
    if (reason !== "") {
        showEnding(reason);
    }
};

window.checkStatus = function() {
    // 마이너스 체크 로직
    if (kimData.hp <= 0 || kimData.fp <= 0 || kimData.sp <= 0) {
        let reason = "";
        if (kimData.hp <= 0) reason = "대요정님... 인간으로 살기 너무 힘들어요.";
        else if (kimData.fp <= 0) reason = "나 너무 아파...";
        else if (kimData.sp <= 0) reason = "나는...";
        
        // 엔딩 함수 실행
        showEnding(reason);
        return true; // 엔딩 발생했음을 알림
    }
    return false;
};


window.showEnding = function(reason) {
    // 검은 화면 오버레이 생성
    const overlay = document.createElement('div');
    overlay.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9999; color:white; text-align:center; padding-top:20%;";
    
    overlay.innerHTML = `
        <h2>김요정의 힘이 다했습니다</h2>
		<img src="image2/die.png" width="140px;">
        <h3>${reason}</h3>
        <p>"왜 그리 날 대충 키웠어어...!"</p>
        <hr>
        <p>생존 기간: ${calendar.year}년 ${calendar.month}월 ${calendar.day}일</p>
        <p>🌱 의뢰받은 초록이: ${kimData.stats.questCount}회</p>
        <p>🍫 먹은 초콜릿: ${kimData.stats.chocoCount}개</p>
        <p>🍦 먹은 아이스크림: ${kimData.stats.iceCount}개</p>
        <p>🌼 배웅한 홀씨: ${kimData.stats.seedCount}회</p>
        <button onclick="location.reload()">다시 시작하기</button>
    `;
    document.body.appendChild(overlay);
};

window.checkEndingTime = function() {
    // 5년 5월 5일에 도달했는지 확인
    if (calendar.year === 5 && calendar.month === 5 && calendar.day === 5) {
        showSuccessEnding();
        return true;
    }
    return false;
};

window.showSuccessEnding = function() {
    // 하얀 화면 생성
    const whiteOverlay = document.createElement('div');
    whiteOverlay.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:white; z-index:9999; display:flex; flex-direction:column; align-items:center; justify-content:center; color:black; font-size:20px; line-height:1.8em; cursor:pointer;";
    
    // 첫 번째 대사
    whiteOverlay.innerHTML = `<p id="ending-text">김요정에게 의뢰 전화가 왔습니다.</p>`;
    document.body.appendChild(whiteOverlay);
    
    // 클릭할 때마다 대사 변경 (간단한 시나리오)
    let clickCount = 0;
    whiteOverlay.onclick = () => {
        clickCount++;
        const textEl = document.getElementById('ending-text');
        
        if (clickCount === 1) textEl.innerText = '"저기... 풍란도 살릴 수 있나요?"';
        if (clickCount === 2) textEl.innerText = '- 직접 봐야 알 수 있어요.';
        if (clickCount === 3) textEl.innerText = '...';
        if (clickCount === 4) textEl.innerText = '"사장님 계세요?"';
        if (clickCount === 5) {
            textEl.innerHTML = `김요정의 앞에 풍란을 살려달라는 고객이 나타났습니다<br>인생이 단 한 사람으로 인해 변하기도 한다는데...<br>과연 김요정의 요생(?)은 어떻게 될까요?<br><img src="image2/ending.png" width="120px"><br>` +
            `<p>🌱 의뢰받은 초록이: ${kimData.stats.questCount}회</p>` +
            `<p>🍫 먹은 초콜릿: ${kimData.stats.chocoCount}개</p>` +
            `<p>🍦 먹은 아이스크림: ${kimData.stats.iceCount}개</p>` +
            `<p>🌼 배웅한 홀씨: ${kimData.stats.seedCount}회</p>` +
            `<button onclick='location.reload()'>처음으로</button>`;
        }
    };
};

window.addEventListener('keydown', function(event) {
    // 스크롤 방지를 위해 모든 키에 적용
    event.preventDefault();

    switch(event.code) {
        case 'Digit1': // 상단 숫자키 1
        case 'Numpad1': // 키패드 1
            // 1번 기능: 자유롭게 두기 (nextDay?)
            window.nextDay(); 
            break;
            
        case 'Digit2': // 상단 숫자키 2
        case 'Numpad2': // 키패드 2
            // 2번 기능: 땅에 묻히기 (buryKim)
            window.buryKim(); 
            break;
            
        case 'Digit3': // 상단 숫자키 3
        case 'Numpad3': // 키패드 3
            // 3번 기능: 집에 집어넣기 (restKim)
            window.restKim(); 
            break;
            
        case 'Digit4': // 상단 숫자키 4
        case 'Numpad4': // 키패드 4
            // 4번 기능: 의뢰 받기
            window.receiveRequest(); 
            break;
    }
});