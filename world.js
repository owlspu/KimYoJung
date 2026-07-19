// JavaScript Document
// season, weather, temperature, daylight

function getWeatherType(m) {
    const lists = {
        winter: ["평범한 날", "따뜻한 날", "추운 날", "바람 불고 추운 날", "눈 오는 날", "눈 많이 오는 날", "바람 불고 눈 많이 오는 날", "바람 많이 불고 눈 많이 오는 날"],
        spring: ["평범한 날", "따뜻한 날", "바람 부는 날", "비 오는 날", "비 오고 바람 부는 날","비 오고 바람 많이 부는 날"],
        summer: ["평범한 날", "더운 날", "조금 시원하게 바람 부는 날", "비 오는 날", "비 오고 바람 부는 날", "비 많이 오는 날","비 많이 오고 바람 많이 부는 날"],
        autumn: ["평범한 날", "따뜻한 날", "바람 부는 날", "비 오는 날", "비 오고 바람 부는 날"]
    };
    const key = (m === 12 || m <= 3) ? "winter" : (m <= 5) ? "spring" : (m <= 9) ? "summer" : "autumn";
    return lists[key][Math.floor(Math.random() * lists[key].length)];
}

function getWeatherData(type) {
    let icon = "";
    let bgColor = "#ffffff";

    // 1. 눈 관련
    if (type.includes("눈")) {
        icon += (type.includes("눈 많이")) ? "☃️" : "❄️";
        bgColor = "#e9f7ff";
    }

    // 2. 비 관련 (비 많이 오는 날 처리 포함)
    if (type.includes("비")) {
        icon += (type.includes("비 많이")) ? "⛈️" : "🌧️";
        bgColor = "#cfd8dc";
    }

    // 3. 바람 관련 (바람 많이 부는 날 처리 포함)
    if (type.includes("바람")) {
        icon += (type.includes("바람 많이")) ? "🌪️" : "💨";
        if (bgColor === "#ffffff") bgColor = "#f5f5f5";
    }

    // 4. 더운 날
    if (type === "더운 날") {
        icon += "🔥";
        bgColor = "#ffefcb";
    }

    // 5. 기본 날씨
    if (icon === "") icon = "☀️";

    return { icon, bgColor };
}

// 메인 업데이트 함수
function updateWeather(m) {
    // 1. 기온 결정
    let minTemp, maxTemp;
    if (m === 12 || m === 1 ) { minTemp = -15; maxTemp = 0; }
    else if (m >= 2 && m <= 3) { minTemp = 0; maxTemp = 10; }
    else if (m >= 4 && m <= 5) { minTemp = 10; maxTemp = 23; }
    else if (m >= 6 && m <= 9) { minTemp = 23; maxTemp = 35; }
    else { minTemp = 10; maxTemp = 23; }
    
    const temp = Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;

    // 2. ★ 온도 기반 날씨 타입 결정 (여기가 핵심!)
    let type;
    
    // 온도에 따른 가중치/조건 적용
    if (temp <= 0) {
        // 영하일 땐 눈/추위 위주
        type = ["눈 오는 날", "눈 많이 오는 날", "바람 불고 눈 많이 오는 날", "바람 불고 추운 날"][Math.floor(Math.random() * 4)];
    } else if (temp >= 28) {
        // 더울 땐 더운 날 위주
        type = "더운 날";
    } else if (temp >= 10) {
        // 15도 이상일 땐 눈/추위 제외 (맑음, 바람, 비)
        type = ["평범한 날", "따뜻한 날", "바람 부는 날", "비 오는 날"][Math.floor(Math.random() * 4)];
    } else {
        // 나머지 구간은 계절별 기본 날씨 사용
        type = getWeatherType(m);
        // 혹시 모르니 여기서도 눈이 뽑혔는데 15도 이상이면 필터링
        if (type.includes("눈") && temp >= 10) type = "평범한 날";
    }
    
    // 3. 데이터 및 배경색 가져오기
    const data = getWeatherData(type);
    
    // ★ 태그 추출 로직 추가
    const tags = [];
    if (type.includes("바람 부")) tags.push("wind");
    if (type.includes("바람 많이")) tags.push("windy");
    if (type.includes("비 오")) tags.push("rain");
    if (type.includes("비 많이")) tags.push("pour");
    if (type.includes("눈 오")) tags.push("snow");
    if (type.includes("눈 많이")) tags.push("snowy");
    if (type.includes("더운") || type === "더운 날") tags.push("hot");
    
    // 1. 데이터 저장 (UI 및 이벤트 매니저가 읽어갈 수 있게 tags 포함)
    window.world.currentWeather = {
        type: type,
        tags: tags,
        icon: data.icon,
        temp: temp,
        bgColor: data.bgColor // 이게 없어서 배경이 안 변했던 것!
    };
    
    // 2. 화면 업데이트 (아이콘과 이름)
    const weatherEl = document.querySelector('.weather');
    if (weatherEl) {
        weatherEl.innerHTML = `${window.world.currentWeather.icon} ${type} (${window.world.currentWeather.temp}℃)`;
    }
    
    // 3. 정원 업데이트
    const gardenEl = document.getElementById('garden-area');
    if (gardenEl) gardenEl.innerHTML = getGardenContent(m);
    
    return window.world.currentWeather;
}


window.world = {
    currentWeather: { temp: 10, type: "평범한 날" }, // 초기값
    updateWeather: updateWeather,
    getWeatherType: getWeatherType,
    getWeatherData: getWeatherData
};