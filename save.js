// save.js

window.saveGame = function() {
    const saveData = {
        calendar: {
            year: calendar.year,
            month: calendar.month,
            day: calendar.day
        },
        money: money.amount,
        kim: window.kim.data,
        weather: window.world.currentWeather
    };

    localStorage.setItem("kimFairySave", JSON.stringify(saveData));
    
    // 저장 성공 메시지 추가
    alert("저장되었습니다!");
};

window.loadGame = function() {
    const save = JSON.parse(localStorage.getItem("kimFairySave"));
    if (!save) return false;

    calendar.year = save.calendar.year;
    calendar.month = save.calendar.month;
    calendar.day = save.calendar.day;
    money.amount = save.money;
    window.kim.data = save.kim;
    window.world.currentWeather = save.weather;
    
    return true;
};

