// JavaScript Document
// 날짜

window.calendar = {
    year: 1, // 게임 내 표기용 연도
    month: 1,
    day: 1,
    
    daysInMonth: [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    
    updateDisplay: function() {
        document.querySelector('.calendar').innerText = `${this.year}년 ${this.month}월 ${this.day}일`;
    },
    
    nextDay: function() {
        this.day++;
        
        // 현재 월의 최대 일수를 넘었는지 확인
        if (this.day > this.daysInMonth[this.month]) {
            this.day = 1;
            this.month++;
        }
        
        // 12월을 넘으면 연도 증가
        if (this.month > 12) {
            this.month = 1;
            this.year++;
            
            // ★ 선택 사항: 4년마다 윤년 처리가 필요하다면 
            // 여기서 year % 4 === 0 일 때 2월을 29일로 바꾸는 로직을 추가하면 됩니다.
        }
        
        this.updateDisplay();
        
        // 날씨 업데이트 (월이 바뀔 때마다 실행)
        if (window.world) {
            window.world.updateWeather(this.month);
        }
        
        return { year: this.year, month: this.month, day: this.day };
    }
};

window.onload = function() {
    window.calendar.updateDisplay();
	window.world.updateWeather(window.calendar.month);
};