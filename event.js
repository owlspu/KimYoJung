// JavaScript Document
// 이벤트 목록, 랜덤 발생

window.eventList = [
    {"name": "김요정이 정원을 돌아다닙니다", "weight": 100, "requiredFeel": "cold", "hpFrom": -5, "hpTo": -15, "fpFrom": -5, "fpTo": -15, "spFrom": -5, "spTo": -15},
	{"name": "김요정이 정원을 돌아다닙니다", "weight": 100, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -2, "hpTo": -10, "spFrom": 2, "spTo": 10},
	{"name": "김요정이 정원을 돌아다닙니다", "weight": 100, "requiredFeel": "normal", "hpFrom": -2, "hpTo": -5, "spFrom": -2, "spTo": -5},
	{"name": "김요정이 정원을 돌아다닙니다", "weight": 100, "requiredFeel": "normal", "requiredTags": "rain", "hpFrom": 10, "hpTo": 20, "spFrom": 10, "spTo": 20},
	{"name": "김요정이 정원을 돌아다닙니다", "weight": 100, "requiredFeel": "hot", "spFrom": 2, "spTo": 5},
	{"name": "김요정이 정원을 돌아다닙니다", "weight": 100, "requiredFeel": "hot", "requiredTags": "rain", "hpFrom": 10, "hpTo": 20, "spFrom": 10, "spTo": 20},
	{"name": "김요정이 하루 종일 햇볕을 쬐었습니다", "weight": 90, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "fpFrom": 1, "fpTo": 20},
	{"name": "김요정이 하루 종일 햇볕을 쬐었습니다", "weight": 90, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "fpFrom": 1, "fpTo": 20},
	{"name": "김요정이 하루 종일 햇볕을 쬐었습니다", "weight": 90, "requiredFeel": "normal", "fpFrom": 1, "fpTo": 20},
	{"name": "김요정이 하루 종일 햇볕을 쬐었습니다", "weight": 90, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": 5, "fpTo": 20},
	{"name": "김요정이 하루 종일 햇볕을 쬐었습니다", "weight": 90, "requiredFeel": "hot", "fpFrom": 10, "fpTo": 20},
	{"name": "김요정이 하루 종일 햇볕을 쬐었습니다", "weight": 90, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": 15, "fpTo": 25},
	{"name": "김요정이 새를 구경했습니다", "weight": 80, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 새를 구경했습니다", "weight": 80, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 새를 구경했습니다", "weight": 80, "requiredFeel": "normal", "spFrom": 1, "spTo": 5},
	{"name": "김요정이 새를 구경했습니다", "weight": 80, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": 1, "spTo": 5},
	{"name": "김요정이 새를 구경했습니다", "weight": 80, "requiredFeel": "hot", "spFrom": 1, "spTo": 5},
	{"name": "김요정이 새를 구경했습니다", "weight": 80, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": 1, "spTo": 5},
	{"name": "김요정이 구름을 바라봤습니다", "weight": 80, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 구름을 바라봤습니다", "weight": 80, "requiredFeel": "normal", "spFrom": 1, "spTo": 5},
	{"name": "김요정이 구름을 바라봤습니다", "weight": 80, "requiredFeel": "hot", "spFrom": 1, "spTo": 5},
	{"name": "김요정이 하루 종일 흙을 만졌습니다", "weight": 80, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "fpFrom": 1, "fpTo": 20},
	{"name": "김요정이 하루 종일 흙을 만졌습니다", "weight": 80, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "fpFrom": 1, "fpTo": 20},
	{"name": "김요정이 하루 종일 흙을 만졌습니다", "weight": 80, "requiredFeel": "normal", "fpFrom": 1, "fpTo": 20},
	{"name": "김요정이 하루 종일 흙을 만졌습니다", "weight": 80, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": 5, "fpTo": 20},
	{"name": "김요정이 하루 종일 흙을 만졌습니다", "weight": 80, "requiredFeel": "hot", "fpFrom": 10, "fpTo": 20},
	{"name": "김요정이 하루 종일 흙을 만졌습니다", "weight": 80, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": 15, "fpTo": 25},
	{"name": "김요정이 새로운 씨앗을 발견했습니다", "weight": 80, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 새로운 씨앗을 발견했습니다", "weight": 80, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 새로운 씨앗을 발견했습니다", "weight": 80, "requiredFeel": "normal", "spFrom": 1, "spTo": 5},
	{"name": "김요정이 새로운 씨앗을 발견했습니다", "weight": 80, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": 1, "spTo": 5},
	{"name": "김요정이 새로운 씨앗을 발견했습니다", "weight": 80, "requiredFeel": "hot", "spFrom": 1, "spTo": 5},
	{"name": "김요정이 새로운 씨앗을 발견했습니다", "weight": 80, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": 1, "spTo": 5},
	{"name": "김요정이 맛있는 초콜릿을 사 먹었습니다", "weight": 10, "requiredFeel": "cold", "hpFrom": 10, "hpTo": 20, "spFrom": 10, "spTo": 20, "money": -1500, "reason": "초콜릿"},
	{"name": "김요정이 맛있는 초콜릿을 사 먹었습니다", "weight": 10, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": 10, "hpTo": 20, "spFrom": 10, "spTo": 20, "money": -1500, "reason": "초콜릿"},
	{"name": "김요정이 맛있는 초콜릿을 사 먹었습니다", "weight": 10, "requiredFeel": "normal", "hpFrom": 10, "hpTo": 20, "spFrom": 10, "spTo": 20, "money": -1500, "reason": "초콜릿"},
	{"name": "김요정이 맛있는 초콜릿을 사 먹었습니다", "weight": 10, "requiredFeel": "normal", "requiredTags": "rain", "hpFrom": 10, "hpTo": 20, "spFrom": 10, "spTo": 20, "money": -1500, "reason": "초콜릿"},
	{"name": "김요정이 맛있는 초콜릿을 사 먹었습니다", "weight": 10, "requiredFeel": "hot", "hpFrom": 10, "hpTo": 20, "spFrom": 10, "spTo": 20, "money": -1500, "reason": "초콜릿"},
	{"name": "김요정이 맛있는 초콜릿을 사 먹었습니다", "weight": 10, "requiredFeel": "hot", "requiredTags": "rain", "hpFrom": 10, "hpTo": 20, "spFrom": 10, "spTo": 20, "money": -1500, "reason": "초콜릿"},
	{"name": "김요정이 죽어가는 화분을 주워 왔습니다", "weight": 5, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "fpFrom": -1, "fpTo": -15, "spFrom": 1, "spTo": 15},
	{"name": "김요정이 죽어가는 화분을 주워 왔습니다", "weight": 5, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "fpFrom": -1, "fpTo": -15, "spFrom": 1, "spTo": 15},
	{"name": "김요정이 죽어가는 화분을 주워 왔습니다", "weight": 5, "requiredFeel": "normal", "fpFrom": -1, "fpTo": -15, "spFrom": 1, "spTo": 15},
	{"name": "김요정이 죽어가는 화분을 주워 왔습니다", "weight": 5, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": -1, "fpTo": -15, "spFrom": 1, "spTo": 15},
	{"name": "김요정이 죽어가는 화분을 주워 왔습니다", "weight": 5, "requiredFeel": "hot", "fpFrom": -1, "fpTo": -15, "spFrom": 1, "spTo": 15},
	{"name": "김요정이 죽어가는 화분을 주워 왔습니다", "weight": 5, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": -1, "fpTo": -15, "spFrom": 1, "spTo": 15},
	{"name": "김요정이 정원의 풀과 대화를 나눴습니다", "weight": 80, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 정원의 풀과 대화를 나눴습니다", "weight": 80, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 정원의 풀과 대화를 나눴습니다", "weight": 80, "requiredFeel": "normal", "spFrom": 5, "spTo": 10},
	{"name": "김요정이 정원의 풀과 대화를 나눴습니다", "weight": 80, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": 5, "spTo": 10},
	{"name": "김요정이 정원의 풀과 대화를 나눴습니다", "weight": 80, "requiredFeel": "hot", "spFrom": 5, "spTo": 10},
	{"name": "김요정이 정원의 풀과 대화를 나눴습니다", "weight": 80, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": 5, "spTo": 10},
	{"name": "김요정이 산책 나갔다가 가지치기 하는 걸 봤습니다", "weight": 5, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "spFrom": -1, "spTo": -30},
	{"name": "김요정이 산책 나갔다가 가지치기 하는 걸 봤습니다", "weight": 5, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "spFrom": -1, "spTo": -30},
	{"name": "김요정이 산책 나갔다가 가지치기 하는 걸 봤습니다", "weight": 5, "requiredFeel": "normal", "spFrom": -1, "spTo": -30},
	{"name": "김요정이 산책 나갔다가 가지치기 하는 걸 봤습니다", "weight": 5, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": -1, "spTo": -30},
	{"name": "김요정이 산책 나갔다가 가지치기 하는 걸 봤습니다", "weight": 5, "requiredFeel": "hot", "spFrom": -1, "spTo": -30},
	{"name": "김요정이 산책 나갔다가 가지치기 하는 걸 봤습니다", "weight": 5, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": -1, "spTo": -30},
	{"name": "김요정이 아이스크림을 사 먹었습니다", "weight": 10, "requiredFeel": "cold", "hpFrom": 1, "hpTo": 5, "spFrom": 5, "spTo": 10, "money": -600, "reason": "아이스크림"},
	{"name": "김요정이 아이스크림을 사 먹었습니다", "weight": 10, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -1, "hpTo": -5, "spFrom": 5, "spTo": 10, "money": -600, "reason": "아이스크림"},
	{"name": "김요정이 아이스크림을 사 먹었습니다", "weight": 10, "requiredFeel": "normal", "hpFrom": 5, "hpTo": 10, "spFrom": 5, "spTo": 10, "money": -600, "reason": "아이스크림"},
	{"name": "김요정이 아이스크림을 사 먹었습니다", "weight": 10, "requiredFeel": "normal", "requiredTags": "rain", "hpFrom": 5, "hpTo": 10, "spFrom": 5, "spTo": 10, "money": -600, "reason": "아이스크림"},
	{"name": "김요정이 아이스크림을 사 먹었습니다", "weight": 10, "requiredFeel": "hot", "hpFrom": 5, "hpTo": 10, "spFrom": 5, "spTo": 10, "money": -600, "reason": "아이스크림"},
	{"name": "김요정이 아이스크림을 사 먹었습니다", "weight": 10, "requiredFeel": "hot", "requiredTags": "rain", "hpFrom": 5, "hpTo": 10, "spFrom": 5, "spTo": 10, "money": -600, "reason": "아이스크림"},
	{"name": "김요정이 가로수를 응원하고 왔습니다", "weight": 30, "requiredFeel": "cold", "requiredTags": "snow", "fpFrom": -10, "fpTo": -20, "spFrom": 10, "spTo": 20},
	{"name": "김요정이 가로수를 응원하고 왔습니다", "weight": 30, "requiredFeel": "normal", "fpFrom": -1, "fpTo": -15, "spFrom": 1, "spTo": 15},
	{"name": "김요정이 가로수를 응원하고 왔습니다", "weight": 30, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": -1, "fpTo": -5, "spFrom": 10, "spTo": 15},
	{"name": "김요정이 가로수를 응원하고 왔습니다", "weight": 30, "requiredFeel": "hot", "fpFrom": -1, "fpTo": -15, "spFrom": 1, "spTo": 15},
	{"name": "김요정이 가로수를 응원하고 왔습니다", "weight": 30, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": -1, "fpTo": -5, "spFrom": 10, "spTo": 15},
	{"name": "김요정이 정원에 물을 조금 뿌렸습니다", "weight": 30, "requiredFeel": "normal", "spFrom": 5, "spTo": 5, "money": -500, "reason": "수도세"},
	{"name": "김요정이 정원에 물을 조금 뿌렸습니다", "weight": 30, "requiredFeel": "hot", "spFrom": 5, "spTo": 5, "money": -500, "reason": "수도세"},
	{"name": "김요정이 정원에 물을 잔뜩 뿌렸습니다", "weight": 30, "requiredFeel": "normal", "spFrom": 15, "spTo": 15, "money": -1200, "reason": "수도세"},
	{"name": "김요정이 정원에 물을 잔뜩 뿌렸습니다", "weight": 30, "requiredFeel": "hot", "spFrom": 15, "spTo": 15, "money": -1200, "reason": "수도세"},
	{"name": "김요정이 정원에 호스로 무지개를 만들었습니다", "weight": 30, "requiredFeel": "normal", "fpFrom": 5, "fpTo": 10, "spFrom": 5, "spTo": 10, "money": -1500, "reason": "수도세"},
	{"name": "김요정이 정원에 호스로 무지개를 만들었습니다", "weight": 30, "requiredFeel": "hot", "fpFrom": 5, "fpTo": 10, "spFrom": 5, "spTo": 15, "money": -1500, "reason": "수도세"},
	{"name": "김요정이 화분이 날아갈까 봐 하루 종일 붙잡고 있었습니다", "weight": 10, "requiredFeel": "cold", "requiredTags": "windy", "hpFrom": -5, "hpTo": -10, "spFrom": -10, "spTo": -20},
	{"name": "김요정이 화분이 날아갈까 봐 하루 종일 붙잡고 있었습니다", "weight": 10, "requiredFeel": "cold", "requiredTags": "snow,windy", "hpFrom": -15, "hpTo": -25, "spFrom": -10, "spTo": -20},
	{"name": "김요정이 화분이 날아갈까 봐 하루 종일 붙잡고 있었습니다", "weight": 10, "requiredFeel": "normal", "requiredTags": "windy", "hpFrom": -1, "hpTo": -5, "spFrom": -10, "spTo": -20},
	{"name": "김요정이 화분이 날아갈까 봐 하루 종일 붙잡고 있었습니다", "weight": 10, "requiredFeel": "normal", "requiredTags": "rain,windy", "spFrom": -10, "spTo": -20},
	{"name": "김요정이 화분이 날아갈까 봐 하루 종일 붙잡고 있었습니다", "weight": 10, "requiredFeel": "hot", "requiredTags": "windy", "spFrom": -10, "spTo": -20},
	{"name": "김요정이 화분이 날아갈까 봐 하루 종일 붙잡고 있었습니다", "weight": 10, "requiredFeel": "hot", "requiredTags": "rain,windy", "spFrom": -10, "spTo": -20},
	{"name": "김요정이 빗방울을 하나하나 세고 있었습니다", "weight": 30, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": 1, "spTo": 10},
	{"name": "김요정이 빗방울을 하나하나 세고 있었습니다", "weight": 30, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": 1, "spTo": 15},
	{"name": "김요정이 민들레 홀씨를 배웅해 주었습니다", "weight": 30, "requiredFeel": "normal", "requiredTags": "wind", "fpFrom": 5, "fpTo": 10},
	{"name": "김요정이 민들레 홀씨를 배웅해 주었습니다", "weight": 30, "requiredFeel": "hot", "requiredTags": "wind", "fpFrom": 5, "fpTo": 10},
	{"name": "김요정이 민들레 홀씨를 배웅해 주었습니다", "weight": 30, "requiredFeel": "normal", "requiredTags": "windy", "fpFrom": 5, "fpTo": 20},
	{"name": "김요정이 민들레 홀씨를 배웅해 주었습니다", "weight": 30, "requiredFeel": "hot", "requiredTags": "windy", "fpFrom": 5, "fpTo": 20},
	{"name": "김요정이 초록이에게 오늘도 예쁘다고 말해 주었습니다", "weight": 30, "requiredFeel": "normal", "fpFrom": -1, "fpTo": -5, "spFrom": 1, "spTo": 20},
	{"name": "김요정이 초록이에게 오늘도 예쁘다고 말해 주었습니다", "weight": 30, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": -1, "fpTo": -5, "spFrom": 1, "spTo": 20},
	{"name": "김요정이 초록이에게 오늘도 예쁘다고 말해 주었습니다", "weight": 30, "requiredFeel": "hot", "fpFrom": -1, "fpTo": -5, "spFrom": 1, "spTo": 20},
	{"name": "김요정이 초록이에게 오늘도 예쁘다고 말해 주었습니다", "weight": 30, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": -1, "fpTo": -5, "spFrom": 1, "spTo": 20},
	{"name": "김요정이 잡초를 뽑아다 화분에 옮겨 심었습니다", "weight": 20, "requiredFeel": "cold", "hpFrom": -5, "hpTo": -10, "spFrom": 1, "spTo": 10, "money": -500, "reason": "화분"},
	{"name": "김요정이 잡초를 뽑아다 화분에 옮겨 심었습니다", "weight": 20, "requiredFeel": "normal", "hpFrom": -1, "hpTo": -5, "spFrom": 1, "spTo": 10, "money": -500, "reason": "화분"},
	{"name": "김요정이 잡초를 뽑아다 화분에 옮겨 심었습니다", "weight": 20, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": 1, "spTo": 10, "money": -500, "reason": "화분"},
	{"name": "김요정이 잡초를 뽑아다 화분에 옮겨 심었습니다", "weight": 20, "requiredFeel": "hot", "hpFrom": -1, "hpTo": -5, "spFrom": 1, "spTo": 10, "money": -500, "reason": "화분"},
	{"name": "김요정이 잡초를 뽑아다 화분에 옮겨 심었습니다", "weight": 20, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": 1, "spTo": 10, "money": -500, "reason": "화분"},
	{"name": "김요정이 산책 나갔다가 아파트 화단에 심어진 꽃이 시들어 있는 걸 발견했습니다", "weight": 10, "requiredFeel": "normal", "spFrom": -1, "spTo": -20},
	{"name": "김요정이 산책 나갔다가 아파트 화단에 심어진 꽃이 시들어 있는 걸 발견했습니다", "weight": 10, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": -1, "spTo": -20},
	{"name": "김요정이 산책 나갔다가 아파트 화단에 심어진 꽃이 시들어 있는 걸 발견했습니다", "weight": 10, "requiredFeel": "hot", "spFrom": -1, "spTo": -20},
	{"name": "김요정이 산책 나갔다가 아파트 화단에 심어진 꽃이 시들어 있는 걸 발견했습니다", "weight": 10, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": -1, "spTo": -20},
	{"name": "김요정이 베란다 화분에 물을 못 준 집을 지나쳤습니다", "weight": 10, "requiredFeel": "normal", "spFrom": -1, "spTo": -20},
	{"name": "김요정이 베란다 화분에 물을 못 준 집을 지나쳤습니다", "weight": 10, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": -1, "spTo": -20},
	{"name": "김요정이 베란다 화분에 물을 못 준 집을 지나쳤습니다", "weight": 10, "requiredFeel": "hot", "spFrom": -1, "spTo": -20},
	{"name": "김요정이 베란다 화분에 물을 못 준 집을 지나쳤습니다", "weight": 10, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": -1, "spTo": -20},
	{"name": "김요정이 새싹이 올라온 것을 발견했습니다", "weight": 20, "requiredFeel": "cold", "fpFrom": -1, "fpTo": -5, "spFrom": 1, "spTo": 20},
	{"name": "김요정이 새싹이 올라온 것을 발견했습니다", "weight": 20, "requiredFeel": "cold", "requiredTags": "snow", "fpFrom": -5, "fpTo": -10, "spFrom": 1, "spTo": 20},
	{"name": "김요정이 새싹이 올라온 것을 발견했습니다", "weight": 20, "requiredFeel": "normal", "spFrom": 1, "spTo": 20},
	{"name": "김요정이 새싹이 올라온 것을 발견했습니다", "weight": 20, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": 1, "spTo": 20},
	{"name": "김요정이 새싹이 올라온 것을 발견했습니다", "weight": 20, "requiredFeel": "hot", "spFrom": 1, "spTo": 20},
	{"name": "김요정이 새싹이 올라온 것을 발견했습니다", "weight": 20, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": 1, "spTo": 20},
	{"name": "김요정이 나비가 꽃에 앉은 걸 보았습니다", "weight": 70, "requiredFeel": "normal", "fpFrom": 1, "fpTo": 5, "spFrom": 1, "spTo": 10},
	{"name": "김요정이 나비가 꽃에 앉은 걸 보았습니다", "weight": 70, "requiredFeel": "hot", "fpFrom": 1, "fpTo": 5, "spFrom": 1, "spTo": 10},
	{"name": "김요정이 눈 속에서 잎눈을 발견했습니다", "weight": 10, "requiredFeel": "cold", "requiredTags": "snowy", "hpFrom": -10, "hpTo": -20, "spFrom": 1, "spTo": 20},
	{"name": "김요정이 눈 속에서 잎눈을 발견했습니다", "weight": 10, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "spFrom": 1, "spTo": 20},
	{"name": "김요정이 눈 속에서 핀 복수초를 발견하고 응원했습니다", "weight": 5, "requiredFeel": "cold", "requiredTags": "snowy", "hpFrom": -10, "hpTo": -20, "fpFrom": -1, "fpTo": -10, "spFrom": 5, "spTo": 25},
	{"name": "김요정이 눈 속에서 핀 복수초를 발견하고 응원했습니다", "weight": 5, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "fpFrom": -1, "fpTo": -10, "spFrom": 5, "spTo": 25},
	{"name": "김요정이 눈 속에서 핀 설강화를 발견했습니다", "weight": 3, "requiredFeel": "cold", "requiredTags": "snowy", "hpFrom": -10, "hpTo": -20, "spFrom": 10, "spTo": 30},
	{"name": "김요정이 눈 속에서 핀 설강화를 발견했습니다", "weight": 3, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "spFrom": 10, "spTo": 30},
	{"name": "김요정이 나비를 따라다녔습니다", "weight": 70, "requiredFeel": "normal", "fpFrom": 5, "fpTo": 10, "spFrom": 5, "spTo": 15},
	{"name": "김요정이 나비를 따라다녔습니다", "weight": 70, "requiredFeel": "hot", "fpFrom": 5, "fpTo": 10, "spFrom": 5, "spTo": 15},
	{"name": "김요정이 정원을 돌아다니다 모기에 물렸습니다", "weight": 30, "requiredFeel": "hot", "hpFrom": -1, "hpTo": -5, "spFrom": -1, "spTo": -5},
	{"name": "김요정이 정원을 돌아다니다 모기에 물렸습니다", "weight": 30, "requiredFeel": "hot", "requiredTags": "rain", "hpFrom": -1, "hpTo": -5, "spFrom": -1, "spTo": -5},
	{"name": "김요정이 주머니에 도토리를 잔뜩 넣어 왔습니다", "weight": 20, "requiredFeel": "normal", "fpFrom": 1, "fpTo": 5, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 주머니에 도토리를 잔뜩 넣어 왔습니다", "weight": 20, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": 1, "fpTo": 5, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 주머니에 도토리를 잔뜩 넣어 왔습니다", "weight": 20, "requiredFeel": "hot", "fpFrom": 1, "fpTo": 5, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 주머니에 도토리를 잔뜩 넣어 왔습니다", "weight": 20, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": 1, "fpTo": 5, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 개구리를 구경했습니다", "weight": 50, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": 1, "fpTo": 10, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 개구리를 구경했습니다", "weight": 50, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": 1, "fpTo": 10, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 개구리를 구경했습니다", "weight": 50, "requiredFeel": "hot", "requiredTags": "pour", "hpFrom": -1, "hpTo": -5, "fpFrom": 1, "fpTo": 10, "spFrom": 1, "spTo": 5},
	{"name": "김요정이 정원에 매실 나무를 심었습니다", "weight": 5, "requiredFeel": "normal", "hpFrom": -1, "hpTo": -5, "fpFrom": -5, "fpTo": -10, "spFrom": 5, "spTo": 15},
	{"name": "김요정이 정원에 매실 나무를 심었습니다", "weight": 5, "requiredFeel": "normal", "requiredTags": "rain", "hpFrom": -1, "hpTo": -5, "fpFrom": -1, "fpTo": -5, "spFrom": 5, "spTo": 15},
	{"name": "김요정이 정원에 매실 나무를 심었습니다", "weight": 5, "requiredFeel": "hot", "hpFrom": -1, "hpTo": -5, "fpFrom": -5, "fpTo": -10, "spFrom": 5, "spTo": 15},
	{"name": "김요정이 정원에 매실 나무를 심었습니다", "weight": 5, "requiredFeel": "hot", "requiredTags": "rain", "hpFrom": -1, "hpTo": -5, "fpFrom": -1, "fpTo": -5, "spFrom": 5, "spTo": 15},
	{"name": "김요정이 물웅덩이에서 놀았습니다", "weight": 20, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": 10, "fpTo": 20, "spFrom": 1, "spTo": 10},
	{"name": "김요정이 물웅덩이에서 놀았습니다", "weight": 20, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": 10, "fpTo": 20, "spFrom": 1, "spTo": 10},
	{"name": "김요정이 물웅덩이에서 놀았습니다", "weight": 20, "requiredFeel": "hot", "requiredTags": "pour", "fpFrom": 1, "fpTo": 5, "spFrom": 1, "spTo": 10},
	{"name": "김요정이 눈사람을 만들었습니다", "weight": 50, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -1, "hpTo": -5, "spFrom": 1, "spTo": 10},
	{"name": "김요정이 눈사람을 만들었습니다", "weight": 20, "requiredFeel": "cold", "requiredTags": "snowy", "hpFrom": -5, "hpTo": -10, "spFrom": 1, "spTo": 10},
	{"name": "김요정이 눈의 천사를 만들었습니다", "weight": 50, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -1, "hpTo": -5, "spFrom": 1, "spTo": 10},
	{"name": "김요정이 눈의 천사를 만들었습니다", "weight": 20, "requiredFeel": "cold", "requiredTags": "snowy", "hpFrom": -5, "hpTo": -10, "spFrom": 1, "spTo": 10},
	{"name": "김요정이 커피라는 것을 마셔보았습니다", "weight": 10, "requiredFeel": "cold", "hpFrom": 1, "hpTo": 5, "fpFrom": -10, "fpTo": -20, "spFrom": -5, "spTo": 5, "money": -2500, "reason": "커피"},
	{"name": "김요정이 커피라는 것을 마셔보았습니다", "weight": 10, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": 1, "hpTo": 5, "fpFrom": -10, "fpTo": -20, "spFrom": -5, "spTo": 5, "money": -2500, "reason": "커피"},
	{"name": "김요정이 커피라는 것을 마셔보았습니다", "weight": 10, "requiredFeel": "normal", "hpFrom": 1, "hpTo": 5, "fpFrom": -10, "fpTo": -20, "spFrom": -5, "spTo": 5, "money": -2500, "reason": "커피"},
	{"name": "김요정이 커피라는 것을 마셔보았습니다", "weight": 10, "requiredFeel": "normal", "requiredTags": "rain", "hpFrom": 1, "hpTo": 5, "fpFrom": -10, "fpTo": -20, "spFrom": -5, "spTo": 5, "money": -2500, "reason": "커피"},
	{"name": "김요정이 커피라는 것을 마셔보았습니다", "weight": 10, "requiredFeel": "hot", "hpFrom": 1, "hpTo": 5, "fpFrom": -10, "fpTo": -20, "spFrom": -5, "spTo": 5, "money": -2500, "reason": "커피"},
	{"name": "김요정이 커피라는 것을 마셔보았습니다", "weight": 10, "requiredFeel": "hot", "requiredTags": "rain", "hpFrom": 1, "hpTo": 5, "fpFrom": -10, "fpTo": -20, "spFrom": -5, "spTo": 5, "money": -2500, "reason": "커피"},
	{"name": "김요정이 탄산수를 마셔보았습니다", "weight": 10, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "fpFrom": -1, "fpTo": -10, "spFrom": -5, "spTo": 5, "money": -1500, "reason": "탄산수"},
	{"name": "김요정이 탄산수를 마셔보았습니다", "weight": 10, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -1, "hpTo": -5, "fpFrom": -1, "fpTo": -10, "spFrom": -5, "spTo": 5, "money": -1500, "reason": "탄산수"},
	{"name": "김요정이 탄산수를 마셔보았습니다", "weight": 10, "requiredFeel": "normal", "hpFrom": -1, "hpTo": -5, "fpFrom": -1, "fpTo": -10, "spFrom": -5, "spTo": 5, "money": -1500, "reason": "탄산수"},
	{"name": "김요정이 탄산수를 마셔보았습니다", "weight": 10, "requiredFeel": "normal", "requiredTags": "rain", "hpFrom": -1, "hpTo": -5, "fpFrom": -1, "fpTo": -10, "spFrom": -5, "spTo": 5, "money": -1500, "reason": "탄산수"},
	{"name": "김요정이 탄산수를 마셔보았습니다", "weight": 10, "requiredFeel": "hot", "hpFrom": -1, "hpTo": -5, "fpFrom": -1, "fpTo": -10, "spFrom": -5, "spTo": 5, "money": -1500, "reason": "탄산수"},
	{"name": "김요정이 탄산수를 마셔보았습니다", "weight": 10, "requiredFeel": "hot", "requiredTags": "rain", "hpFrom": -1, "hpTo": -5, "fpFrom": -1, "fpTo": -10, "spFrom": -5, "spTo": 5, "money": -1500, "reason": "탄산수"},
	{"name": "김요정이 코코아를 마셔보았습니다", "weight": 10, "requiredFeel": "cold", "hpFrom": 5, "hpTo": 10, "fpFrom": -1, "fpTo": -10, "spFrom": 1, "spTo": 5, "money": -2000, "reason": "코코아"},
	{"name": "김요정이 코코아를 마셔보았습니다", "weight": 10, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": 10, "hpTo": 20, "fpFrom": -1, "fpTo": -10, "spFrom": 1, "spTo": 5, "money": -2000, "reason": "코코아"},
	{"name": "김요정이 코코아를 마셔보았습니다", "weight": 10, "requiredFeel": "normal", "hpFrom": 5, "hpTo": 10, "fpFrom": -1, "fpTo": -10, "spFrom": 1, "spTo": 5, "money": -2000, "reason": "코코아"},
	{"name": "김요정이 코코아를 마셔보았습니다", "weight": 10, "requiredFeel": "normal", "requiredTags": "rain", "hpFrom": 5, "hpTo": 15, "fpFrom": -1, "fpTo": -10, "spFrom": 1, "spTo": 5, "money": -2000, "reason": "코코아"},
	{"name": "김요정이 코코아를 마셔보았습니다", "weight": 10, "requiredFeel": "hot", "hpFrom": 1, "hpTo": 5, "fpFrom": -1, "fpTo": -10, "spFrom": 1, "spTo": 5, "money": -2000, "reason": "코코아"},
	{"name": "김요정이 코코아를 마셔보았습니다", "weight": 10, "requiredFeel": "hot", "requiredTags": "rain", "hpFrom": 1, "hpTo": 5, "fpFrom": -1, "fpTo": -10, "spFrom": 1, "spTo": 5, "money": -2000, "reason": "코코아"}
];


window.eventManager = {
    triggerRandomEvent: function() {
        const currentWeather = window.world.currentWeather;
        const feel = kim.getFeelStatus(currentWeather.temp);

        const possibleEvents = window.eventList.filter(e => {
            if (e.requiredFeel && e.requiredFeel !== feel) return false;
            // 태그 체크 로직 (이전 코드 활용)
            if (e.requiredTags) {
                const reqTags = e.requiredTags.split(',');
                if (!reqTags.every(t => currentWeather.tags.includes(t))) return false;
            }
            return true;
        });

		if (possibleEvents.length === 0) {
			return;
		}

        if (possibleEvents.length === 0) return;

        const totalWeight = possibleEvents.reduce((sum, e) => sum + (Number(e.weight) || 1), 0);
			let random = Math.random() * totalWeight;

			let event = possibleEvents[0];
			for (let e of possibleEvents) {
				const weight = Number(e.weight) || 1; // 가중치가 없으면 1로 기본값 설정
				if (random < weight) {
					event = e;
					break;
				}
				random -= weight;
			}
        // ★ 이벤트 선정 직후, 적용 직전/직후에 카운트 로직 추가
        const eventName = event.name;

        if (eventName.includes("민들레 홀씨")) {
            kimData.stats.seedCount++;
        } else if (eventName.includes("초콜릿")) {
            kimData.stats.chocoCount++;
        } else if (eventName.includes("아이스크림")) {
            kimData.stats.iceCount++;
        }
		
        // ★ 여기서 실제로 적용될 랜덤 변화량을 먼저 계산합니다.
        const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        
        const effects = {};
        let logMsg = event.name + "<br>"; // 줄바꿈 추가

        // HP, FP, SP, Money 등의 변화를 계산
        const keys = ['hp', 'fp', 'sp', 'money'];
        keys.forEach(k => {
			// 1. money 처리 부분 수정
			if (k === 'money') {
				const val = event.money;
				const reason = event.reason || "이벤트"; // reason이 없으면 기본값 "이벤트" 사용

				if (val !== undefined && val !== 0) {
					if (val < 0) {
						money.subtract(val, reason); // 여기에 "화분 재료비"가 전달됨
					} else {
						money.add(val, reason);
					}
				}
			}
			// 2. 스탯(hp, fp, sp)은 {min, max} 객체로 처리
			else {
				const f = event[k + 'From'];
				const t = event[k + 'To'];
				if (f !== undefined && t !== undefined) {
					// ★ 여기서 객체 형태로 담습니다!
					effects[k] = { min: f, max: t };

					// 로그용 계산 (여기서 한 번 계산)
					const val = getRandom(f, t);
					if (val !== 0) {
						logMsg += `${k.toUpperCase()}: ${val > 0 ? '+' : ''}${val} `;
					}
				}
			}
		});

        // 적용 및 UI 업데이트
        window.kim.applyEffect(effects);
        
        const logEl = document.querySelector('.main-log');
        if (logEl) {
            logEl.innerHTML = logMsg; // innerHTML을 써야 <br>과 텍스트가 다 보입니다.
        }
    }
};

window.receiveRequest = function() {
    // 1. FP 랜덤 소모 (1~90)
    const fpCost = Math.floor(Math.random() * 90) + 1;
    
    // FP가 충분한지 체크 (선택사항: 없으면 실행 안 되게)
    if (window.kim.data.fp < fpCost) {
        alert("FP가 부족합니다!");
        return;
    }
    
    // 2. FP 소모 및 돈 획득
    window.kim.data.fp -= fpCost; // FP 차감
    const reward = fpCost * 20000; // FP 1당 3만원
    money.add(reward, "의뢰 보상");
	kimData.stats.questCount++;
    
    // 3. 메시지 결정
    let msg = "";
    if (fpCost <= 25) msg = "열매를 맺으라고 응원했습니다.";
    else if (fpCost <= 50) msg = "시들었던 초록이를 건강하게 해줬습니다.";
    else if (fpCost <= 70) msg = "죽어가던 초록이를 되살렸습니다.";
    else msg = "꽃대를 만들도록 응원했습니다.";
    
    // 4. 로그 출력
    const logContainer = document.querySelector('.main-log');
    if (logContainer) {
        logContainer.innerHTML = `<div>의뢰 완료: ${msg} (FP -${fpCost}, 보상 +${reward.toLocaleString()}원)</div>` + logContainer.innerHTML;
    } else {
        console.log("main-log 클래스를 가진 요소를 찾을 수 없습니다.");
    }
    
    // 5. 화면 업데이트
    window.ui.refresh();
	window.checkStatus();
};