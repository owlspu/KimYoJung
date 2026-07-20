// JavaScript Document
// hp, fp, sp, money, clothes, inventory

const kimData = {
    hp: 100,
    fp: 100,
    sp: 100,
    inventory: ["도롱이 누발 패딩", "랄푸로렌 코트", "누발 후드티", "티에 청바지", "토레따 원피스"],
    equipped: {
        clothes: "티에 청바지"
    },
	clothesStats: {
        "티에 청바지": 0,
        "도롱이 누발 패딩": 28,
        "랄푸로렌 코트": 18,
		"누발 후드티": 5,
        "토레따 원피스": -5
    },
    clothesImages: {
        "티에 청바지": "image2/body.png",
        "도롱이 누발 패딩": "image2/padding.png",
        "랄푸로렌 코트": "image2/coat.png",
        "누발 후드티": "image2/hoody.png",
        "토레따 원피스": "image2/opc.png"
    },
	stats: {
        questCount: 0,      // 의뢰 받은 횟수
        chocoCount: 0,      // 먹은 초콜릿
        iceCount: 0,        // 먹은 아이스크림
        seedCount: 0        // 배웅한 홀씨
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
	update: function(temp) {
	},
    getStatusMessage: function(actualTemp) {
		// ★ 여기서 옷 보너스를 더해야 합니다!
		const feelTemp = this.getFeelingTemp(actualTemp);
        if (feelTemp < 15) return "김요정은 지금 좀 추워요.";
		if (feelTemp > 30) return "김요정은 지금 좀 더워요.";
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
		const feelTemp = this.getFeelingTemp(actualTemp); // ★ 여기서 옷 효과 적용!
		if (feelTemp < 15) return "cold";
		if (feelTemp > 30) return "hot";
		return "normal";
    }
};

window.kim.update = function(temp) {
    // 1. 헤일로 업데이트 (FP 기반)
    window.fairy.updateHalo(this.data.fp);
};