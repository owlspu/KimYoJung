const money = {
    amount: 1000000,
    logs: [],

    addLog: function(msg) {
        this.logs.unshift(msg);
        if (this.logs.length > 3) this.logs.pop();
        const logEl = document.getElementById('money-log');
        if (logEl) {
            logEl.innerHTML = this.logs.map(log => `<div>${log}</div>`).join('');
        }
    },

    add: function(val, reason = "입금") {
        this.amount += val;
        this.addLog(`💰 ${reason}: +${val.toLocaleString()}원`);
    },
    
    // 지출 함수는 하나로 통합!
    subtract: function(val, reason = "지출") {
        val = Math.abs(val);
        this.amount -= val;
        this.addLog(`💸 ${reason}: -${val.toLocaleString()}원`);
        
        // ★ 지출 직후 페널티 체크
        this.checkAndApplyPenalty();
    },
    
    checkAndApplyPenalty: function() {
        if (this.amount <= 0) {
            window.kim.applyEffect({
                hp: { min: -10, max: -20 },
                fp: { min: -10, max: -20 },
                sp: { min: -10, max: -20 }
            });
            this.addLog("돈이 없어 굶주림과 추위로 모든 스탯이 감소합니다!");
        }
    },

    updateFixedCosts: function(date, month, temp) {
        if (date === 1) {
            this.subtract(500000, "할머니 생활비");
            this.subtract(200000, "할머니 병원비");
        }
        if (date === 8) {
            this.subtract(90000, "관리비");
            this.subtract(10000, "수도세");
        }
        if (date === 15) {
            this.subtract(300000, "월세");
        }
        if (date === 18) {
            let gas = (month === 12 || month <= 3) ? 200000 : 8000;
            this.subtract(gas, "가스비");
        }
        if (date === 20) {
            let elec = (month >= 6 && month <= 9) ? 50000 : 5000;
            this.subtract(elec, "전기세");
        }
    },
    
    tryEat: function() {
        if (Math.random() < 0.3) {
            let cost = Math.floor(Math.random() * 13) * 1000 + 8000;
            this.subtract(cost, "식비");
        }
    }
};