// JavaScript Document
// screen

window.ui = {
    refresh: function() {
        const weather = window.world.currentWeather;
        const logEl = document.querySelector('.status-log');
        
        // 1. 상태 메시지 업데이트
        if (logEl && weather) {
            logEl.innerText = window.kim.getStatusMessage(weather.temp);
        }

        // 2. 수치 및 게이지 업데이트
        document.querySelector('.HP-text').innerText = `${window.kim.data.hp}/100`;
        document.querySelector('.FP-text').innerText = `${window.kim.data.fp}/100`;
        document.querySelector('.SP-text').innerText = `${window.kim.data.sp}/100`;
        
        document.getElementById('hp-bar').style.width = `${window.kim.data.hp}%`;
        document.getElementById('fp-bar').style.width = `${window.kim.data.fp}%`;
        document.getElementById('sp-bar').style.width = `${window.kim.data.sp}%`;
        
        document.getElementById('money').innerText = "💰" + money.amount.toLocaleString() + "원";
        
        // 3. 옷 이미지 업데이트 (이 로직을 refresh 안으로 넣었습니다)
        const currentClothes = window.kim.data.equipped.clothes;
        const imagePath = window.kim.data.clothesImages[currentClothes];
        const bodyImg = document.querySelector('.fairy .body');
        if (bodyImg && imagePath) {
            bodyImg.src = imagePath;
        }
        
    },
    
    applyBackground: function(color) {
        document.body.style.backgroundColor = color;
    },
};

window.ui.openCloset = function() {
    const modal = document.getElementById('closet-modal');
    const btnContainer = document.getElementById('closet-buttons');
    const previewImg = document.getElementById('preview-img');
    const previewName = document.getElementById('preview-name');
    const previewStats = document.getElementById('preview-stats'); // 추가
    
    btnContainer.innerHTML = "";
    
    // 옷 목록 생성 루프
    window.kim.data.inventory.forEach(clothesName => {
        const btn = document.createElement('button');
        btn.innerText = clothesName;
        
        btn.onclick = () => {
            window.kim.equipClothes(clothesName);
            
            // 이미지/이름 업데이트
            previewImg.src = window.kim.data.clothesImages[clothesName];
            previewName.innerText = `착용 중: ${clothesName}`;
            
            // ★ 통계 표시 업데이트
            const statValue = window.kim.data.clothesStats[clothesName] || 0;
            previewStats.innerText = `체감온도 변화: ${statValue >= 0 ? '+' : ''}${statValue}`;
            
            this.refresh();
        };
        
        btnContainer.appendChild(btn);
    });
    
    // 처음에 모달 열었을 때 현재 입고 있는 옷 정보 표시
    const current = window.kim.data.equipped.clothes;
    const currentStat = window.kim.data.clothesStats[current] || 0;
    previewImg.src = window.kim.data.clothesImages[current];
    previewName.innerText = `현재: ${current}`;
    previewStats.innerText = `체감온도 변화: ${currentStat >= 0 ? '+' : ''}${currentStat}`;
    
    modal.style.display = 'flex';
};


window.showGameInfo = function() {
    const modal = document.getElementById('button-modal');
    modal.style.display = 'flex';
};

window.showMoneyInfo = function() {
    const modal = document.getElementById('info-modal');
    modal.style.display = 'flex';
};