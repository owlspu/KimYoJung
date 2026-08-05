// JavaScript Document
// hp, fp, sp, money, clothes, inventory

const kimData = {
    hp: 100,
    fp: 100,
    sp: 100,
    inventory: ["완전무장","도롱이 누발 패딩", "랄푸로렌 코트", "랄푸로렌 원피스","랄푸로렌 바람막이", "누발 후드티","파랑 럭비티", "아디도스 백수룩","티에 청바지","찜질복","아스끄림 티셔츠","토레따 원피스"],
    equipped: {
        clothes: "티에 청바지"
    },
	clothesStats: {
		"완전무장": 30,
        "도롱이 누발 패딩": 25,
        "랄푸로렌 코트": 20,
		"랄푸로렌 원피스": 20,
		"랄푸로렌 바람막이": 15,
		"누발 후드티": 15,
		"파랑 럭비티": 10,
		"아디도스 백수룩": 5,
        "티에 청바지": 5,
		"찜질복": 0,
		"아스끄림 티셔츠": -5,
		"토레따 원피스": -5
    },
    clothesImages: {
		"완전무장":"image2/kkong.png",
        "도롱이 누발 패딩": "image2/padding.png",
        "랄푸로렌 코트": "image2/coat.png",
		"랄푸로렌 원피스": "image2/opc_at.png",
		"랄푸로렌 바람막이": "image2/polo.png",
        "누발 후드티": "image2/hoody.png",
        "파랑 럭비티": "image2/hypp.png",	
		"아디도스 백수룩": "image2/adidos.png",
        "티에 청바지": "image2/body.png",		
        "찜질복": "image2/jjim.png",
		"아스끄림 티셔츠": "image2/icecream.png",
        "토레따 원피스": "image2/opc.png"
    },
	stats: {
        questCount: 0,      // 의뢰 받은 횟수
        chocoCount: 0,      // 먹은 초콜릿
        iceCount: 0,        // 먹은 아이스크림
        seedCount: 0,      // 배웅한 홀씨
		drinkCount: 0,      // 마셔본 커피+탄산수
		snackCount: 0       // 신상 간식 도전
    }
};
    
window.kim = {
    data: kimData,
	
	// 현재 입은 옷에 따른 체감 온도 보너스 반환
    getClothesBonus: function() {
        const current = this.data.equipped.clothes;
        return this.data.clothesStats[current] || 0;
    },

    // 실제 온도와 옷의 보너스를 합친 "진짜 체감 온도"
    getFeelingTemp: function(actualTemp) {
        return actualTemp + this.getClothesBonus();
    },
	// ★ 옷 갈아입기 함수
    equipClothes: function(clothesName) {
        if (this.data.inventory.includes(clothesName)) {
            this.data.equipped.clothes = clothesName;
            console.log(clothesName + "으로 갈아입었습니다!");
            return true;
        } else {
            return false;
        }
    },

    // ★ 옷 얻기 함수
    addClothes: function(clothesName) {
        if (!this.data.inventory.includes(clothesName)) {
            this.data.inventory.push(clothesName);
        }
    },
    getStatusMessage: function(actualTemp) {
		const feelTemp = this.getFeelingTemp(actualTemp);
		if (feelTemp <= 5)  return `<span style="color:#1d4bdf">김요정은 지금 너무 추워요!</span>`;
		if (feelTemp < 15)  return `<span style="color:#3079C9">김요정은 지금 좀 추워요.</span>`;
		if (feelTemp > 40)  return `<span style="color:#eb3434">김요정은 지금 너무 더워요!</span>`;
		if (feelTemp > 30)  return `<span style="color:#C76C22">김요정은 지금 좀 더워요.</span>`;
		return "김요정은 지금 딱 좋아요.";
	},
		applyEffect: function(effects) {
		const getRandom = (val) => {
			// From/To가 없는 경우 0으로 취급
			const from = val.min || 0;
			const to = val.max || 0;
			const low = Math.min(from, to);
			const high = Math.max(from, to);
			return Math.floor(Math.random() * (high - low + 1)) + low;
		};

		for (let key in effects) {
			// 1. 돈(money)인 경우: money.js의 기능을 직접 사용
			if (key === 'money') {
				money.add(effects[key]);
				continue; // 아래 스탯 처리로 넘어가지 않음
			}

			// 2. 스탯(hp, fp, sp)인 경우: 기존 로직 수행
			if (this.data.hasOwnProperty(key)) {
				const change = getRandom(effects[key]);
				this.data[key] += change;
				this.data[key] = Math.min(Math.max(this.data[key], 0), 100);
			}
		}
	},
    getFeelStatus: function(actualTemp) {
		const feelTemp = this.getFeelingTemp(actualTemp);
		if (feelTemp <= 5)  return "freezing";  // 너무 추움
		if (feelTemp < 15)  return "cold";
		if (feelTemp > 40)  return "burning";   // 너무 더움
		if (feelTemp > 30)  return "hot";
		return "normal";
	},
};

window.kim.update = function(temp) {
    // 1. 헤일로 업데이트 (FP 기반)
    window.fairy.updateHalo(this.data.fp);
};