// JavaScript Document
// 이벤트 목록, 랜덤 발생

window.eventList = [
{"name": "김요정이 정원을 돌아다닙니다", "weight": 90, "requiredFeel": "cold", "hpFrom": -5, "hpTo": -15, "fpFrom": -5, "fpTo": -15, "spFrom": -5, "spTo": -15},
{"name": "김요정이 정원을 돌아다닙니다", "weight": 90, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -2, "hpTo": -10, "spFrom": 2, "spTo": 10},
{"name": "김요정이 정원을 돌아다닙니다", "weight": 90, "requiredFeel": "normal", "hpFrom": -2, "hpTo": -5, "spFrom": -2, "spTo": -5},
{"name": "김요정이 정원을 돌아다닙니다", "weight": 90, "requiredFeel": "normal", "requiredTags": "rain", "hpFrom": 10, "hpTo": 20, "spFrom": 10, "spTo": 20},
{"name": "김요정이 정원을 돌아다닙니다", "weight": 90, "requiredFeel": "hot", "spFrom": 2, "spTo": 5},
{"name": "김요정이 정원을 돌아다닙니다", "weight": 90, "requiredFeel": "hot", "requiredTags": "rain", "hpFrom": 10, "hpTo": 20, "spFrom": 10, "spTo": 20},
{"name": "김요정이 하루 종일 햇볕을 쬐었습니다", "weight": 85, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "fpFrom": 1, "fpTo": 20},
{"name": "김요정이 하루 종일 햇볕을 쬐었습니다", "weight": 85, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "fpFrom": 1, "fpTo": 20},
{"name": "김요정이 하루 종일 햇볕을 쬐었습니다", "weight": 85, "requiredFeel": "normal", "fpFrom": 1, "fpTo": 20},
{"name": "김요정이 하루 종일 햇볕을 쬐었습니다", "weight": 85, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": 5, "fpTo": 20},
{"name": "김요정이 하루 종일 햇볕을 쬐었습니다", "weight": 85, "requiredFeel": "hot", "fpFrom": 10, "fpTo": 20},
{"name": "김요정이 하루 종일 햇볕을 쬐었습니다", "weight": 85, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": 15, "fpTo": 25},
{"name": "김요정이 새를 구경했습니다", "weight": 80, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "spFrom": 1, "spTo": 5},
{"name": "김요정이 새를 구경했습니다", "weight": 80, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "spFrom": 1, "spTo": 5},
{"name": "김요정이 새를 구경했습니다", "weight": 80, "requiredFeel": "normal", "spFrom": 1, "spTo": 5},
{"name": "김요정이 새를 구경했습니다", "weight": 80, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": 1, "spTo": 5},
{"name": "김요정이 새를 구경했습니다", "weight": 80, "requiredFeel": "hot", "spFrom": 1, "spTo": 5},
{"name": "김요정이 새를 구경했습니다", "weight": 80, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": 1, "spTo": 5},
{"name": "김요정이 구름을 바라봤습니다", "weight": 80, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "spFrom": 1, "spTo": 5},
{"name": "김요정이 구름을 바라봤습니다", "weight": 80, "requiredFeel": "normal", "spFrom": 1, "spTo": 5},
{"name": "김요정이 구름을 바라봤습니다", "weight": 80, "requiredFeel": "hot", "spFrom": 1, "spTo": 5},
{"name": "김요정이 하루 종일 흙을 만졌습니다", "weight": 70, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "fpFrom": 1, "fpTo": 20},
{"name": "김요정이 하루 종일 흙을 만졌습니다", "weight": 70, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "fpFrom": 1, "fpTo": 20},
{"name": "김요정이 하루 종일 흙을 만졌습니다", "weight": 70, "requiredFeel": "normal", "fpFrom": 1, "fpTo": 20},
{"name": "김요정이 하루 종일 흙을 만졌습니다", "weight": 70, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": 5, "fpTo": 20},
{"name": "김요정이 하루 종일 흙을 만졌습니다", "weight": 70, "requiredFeel": "hot", "fpFrom": 10, "fpTo": 20},
{"name": "김요정이 하루 종일 흙을 만졌습니다", "weight": 70, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": 15, "fpTo": 25},
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
{"name": "김요정이 정원의 풀과 대화를 나눴습니다", "weight": 70, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "spFrom": 1, "spTo": 5},
{"name": "김요정이 정원의 풀과 대화를 나눴습니다", "weight": 70, "requiredFeel": "cold", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "spFrom": 1, "spTo": 5},
{"name": "김요정이 정원의 풀과 대화를 나눴습니다", "weight": 70, "requiredFeel": "normal", "spFrom": 5, "spTo": 10},
{"name": "김요정이 정원의 풀과 대화를 나눴습니다", "weight": 70, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": 5, "spTo": 10},
{"name": "김요정이 정원의 풀과 대화를 나눴습니다", "weight": 70, "requiredFeel": "hot", "spFrom": 5, "spTo": 10},
{"name": "김요정이 정원의 풀과 대화를 나눴습니다", "weight": 70, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": 5, "spTo": 10},
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
{"name": "김요정이 가로수를 응원하고 왔습니다", "weight": 20, "requiredFeel": "cold", "requiredTags": "snow", "fpFrom": -10, "fpTo": -20, "spFrom": 10, "spTo": 20},
{"name": "김요정이 가로수를 응원하고 왔습니다", "weight": 20, "requiredFeel": "normal", "fpFrom": -1, "fpTo": -15, "spFrom": 1, "spTo": 15},
{"name": "김요정이 가로수를 응원하고 왔습니다", "weight": 20, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": -1, "fpTo": -5, "spFrom": 10, "spTo": 15},
{"name": "김요정이 가로수를 응원하고 왔습니다", "weight": 20, "requiredFeel": "hot", "fpFrom": -1, "fpTo": -15, "spFrom": 1, "spTo": 15},
{"name": "김요정이 가로수를 응원하고 왔습니다", "weight": 20, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": -1, "fpTo": -5, "spFrom": 10, "spTo": 15},
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
{"name": "김요정이 산책 나갔다가 아파트 화단에 심어진 꽃이 시들어 있는 걸 발견했습니다", "weight": 5, "requiredFeel": "normal", "spFrom": -1, "spTo": -20},
{"name": "김요정이 산책 나갔다가 아파트 화단에 심어진 꽃이 시들어 있는 걸 발견했습니다", "weight": 5, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": -1, "spTo": -20},
{"name": "김요정이 산책 나갔다가 아파트 화단에 심어진 꽃이 시들어 있는 걸 발견했습니다", "weight": 5, "requiredFeel": "hot", "spFrom": -1, "spTo": -20},
{"name": "김요정이 산책 나갔다가 아파트 화단에 심어진 꽃이 시들어 있는 걸 발견했습니다", "weight": 5, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": -1, "spTo": -20},
{"name": "김요정이 베란다 화분에 물을 못 준 집을 지나쳤습니다", "weight": 5, "requiredFeel": "normal", "spFrom": -1, "spTo": -20},
{"name": "김요정이 베란다 화분에 물을 못 준 집을 지나쳤습니다", "weight": 5, "requiredFeel": "normal", "requiredTags": "rain", "spFrom": -1, "spTo": -20},
{"name": "김요정이 베란다 화분에 물을 못 준 집을 지나쳤습니다", "weight": 5, "requiredFeel": "hot", "spFrom": -1, "spTo": -20},
{"name": "김요정이 베란다 화분에 물을 못 준 집을 지나쳤습니다", "weight": 5, "requiredFeel": "hot", "requiredTags": "rain", "spFrom": -1, "spTo": -20},
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
{"name": "김요정이 나비를 따라다녔습니다", "weight": 50, "requiredFeel": "normal", "fpFrom": 5, "fpTo": 10, "spFrom": 5, "spTo": 15},
{"name": "김요정이 나비를 따라다녔습니다", "weight": 50, "requiredFeel": "hot", "fpFrom": 5, "fpTo": 10, "spFrom": 5, "spTo": 15},
{"name": "김요정이 정원을 돌아다니다 모기에 물렸습니다", "weight": 20, "requiredFeel": "hot", "hpFrom": -1, "hpTo": -5, "spFrom": -1, "spTo": -5},
{"name": "김요정이 정원을 돌아다니다 모기에 물렸습니다", "weight": 20, "requiredFeel": "hot", "requiredTags": "rain", "hpFrom": -1, "hpTo": -5, "spFrom": -1, "spTo": -5},
{"name": "김요정이 주머니에 도토리를 잔뜩 넣어 왔습니다", "weight": 20, "requiredFeel": "normal", "fpFrom": 1, "fpTo": 5, "spFrom": 1, "spTo": 5},
{"name": "김요정이 주머니에 도토리를 잔뜩 넣어 왔습니다", "weight": 20, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": 1, "fpTo": 5, "spFrom": 1, "spTo": 5},
{"name": "김요정이 주머니에 도토리를 잔뜩 넣어 왔습니다", "weight": 20, "requiredFeel": "hot", "fpFrom": 1, "fpTo": 5, "spFrom": 1, "spTo": 5},
{"name": "김요정이 주머니에 도토리를 잔뜩 넣어 왔습니다", "weight": 20, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": 1, "fpTo": 5, "spFrom": 1, "spTo": 5},
{"name": "김요정이 개구리를 구경했습니다", "weight": 50, "requiredFeel": "normal", "requiredTags": "rain", "fpFrom": 1, "fpTo": 10, "spFrom": 1, "spTo": 5},
{"name": "김요정이 개구리를 구경했습니다", "weight": 50, "requiredFeel": "hot", "requiredTags": "rain", "fpFrom": 1, "fpTo": 10, "spFrom": 1, "spTo": 5},
{"name": "김요정이 개구리를 구경했습니다", "weight": 50, "requiredFeel": "hot", "requiredTags": "pour", "hpFrom": -1, "hpTo": -5, "fpFrom": 1, "fpTo": 10, "spFrom": 1, "spTo": 5},
{"name": "김요정이 정원에 매실 나무를 심었습니다", "weight": 5, "requiredFeel": "normal", "hpFrom": -1, "hpTo": -5, "fpFrom": -5, "fpTo": -10, "spFrom": 5, "spTo": 15, "money": -15000, "reason": "매실 나무 묘목"},
{"name": "김요정이 정원에 매실 나무를 심었습니다", "weight": 5, "requiredFeel": "normal", "requiredTags": "rain", "hpFrom": -1, "hpTo": -5, "fpFrom": -1, "fpTo": -5, "spFrom": 5, "spTo": 15, "money": -15000, "reason": "매실 나무 묘목"},
{"name": "김요정이 정원에 매실 나무를 심었습니다", "weight": 5, "requiredFeel": "hot", "hpFrom": -1, "hpTo": -5, "fpFrom": -5, "fpTo": -10, "spFrom": 5, "spTo": 15, "money": -15000, "reason": "매실 나무 묘목"},
{"name": "김요정이 정원에 매실 나무를 심었습니다", "weight": 5, "requiredFeel": "hot", "requiredTags": "rain", "hpFrom": -1, "hpTo": -5, "fpFrom": -1, "fpTo": -5, "spFrom": 5, "spTo": 15, "money": -15000, "reason": "매실 나무 묘목"},
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
{"name": "김요정이 코코아를 마셔보았습니다", "weight": 10, "requiredFeel": "hot", "requiredTags": "rain", "hpFrom": 1, "hpTo": 5, "fpFrom": -1, "fpTo": -10, "spFrom": 1, "spTo": 5, "money": -2000, "reason": "코코아"},
{"name": "김요정이 자연적으로 생긴 무지개를 보고 한참 멍때렸습니다.", "weight": 8, "requiredTags": "rain", "fpFrom": 3, "fpTo": 10, "spFrom": 10, "spTo": 20},
{"name": "김요정이 초록이가 꽃을 피우는 것을 보았습니다.", "weight": 10, "fpFrom": 15, "fpTo": 30, "spFrom": 15, "spTo": 30},
{"name": "누군가 문 앞에 시든 화분을 두고 갔습니다.", "weight": 8, "fpFrom": -1, "fpTo": -10, "spFrom": 5, "spTo": 20, "money": -500, "reason": "흙"},
{"name": "김요정의 정원에서 길고양이가 낮잠을 자고 갔습니다.", "weight": 15, "hpFrom": 5, "hpTo": 15, "spFrom": 10, "spTo": 20},
{"name": "김요정이 낙엽을 잔뜩 모아 이불처럼 덮고 낮잠 잤습니다.", "weight": 12, "hpFrom": 10, "hpTo": 20, "spFrom": 5, "spTo": 15, "requiredMonth": "10,11"},
{"name": "김요정이 배웅한 홀씨가 민들레로 발견되었습니다.", "weight": 5, "requiredTags": "wind", "fpFrom": 10, "fpTo": 25, "requiredSeed": 3},
{"name": "김요정이 꿀벌을 구경하다 벌에 쏘였습니다.", "weight": 10, "requiredFeel": "hot", "hpFrom": -5, "hpTo": -15, "spFrom": 1, "spTo": 5},
{"name": "김요정이 젖은 잎을 밟고 미끄덩 넘어졌습니다.", "weight": 10, "requiredTags": "rain", "hpFrom": -3, "hpTo": -10},
{"name": "김요정이 거미줄에 얼굴부터 돌진했습니다.", "weight": 12, "spFrom": -3, "spTo": -10},
{"name": "김요정이 밤새 모기 한 마리와 사투를 벌였습니다.", "weight": 10, "requiredFeel": "hot", "hpFrom": -3, "hpTo": -8, "spFrom": -3, "spTo": -8, "requiredMonth": "6,7,8,9"},
{"name": "김요정이 물을 주다 자기가 흠뻑 젖었습니다.", "weight": 12, "hpFrom": 1, "hpTo": 5, "spFrom": 5, "spTo": 10, "money": -300, "reason": "수도세"},
{"name": "김요정이 날개 다친 나비를 며칠 돌봐 날려보냈습니다.", "weight": 5, "fpFrom": -5, "fpTo": -15, "spFrom": 15, "spTo": 30},
{"name": "김요정이 추운 날 참새에게 씨앗을 나눠줬습니다.", "weight": 8, "requiredFeel": "cold", "hpFrom": -1, "hpTo": -5, "spFrom": 10, "spTo": 20},
{"name": "김요정이 초록이의 오늘 기분을 정확히 알아들었습니다.", "weight": 8, "fpFrom": 3, "fpTo": 10, "spFrom": 5, "spTo": 15},
{"name": "김요정이 비가 올 걸 미리 알고 화분을 옮겨뒀습니다.", "weight": 6, "fpFrom": 1, "fpTo": 5, "spFrom": 5, "spTo": 15},
{"name": "김요정이 재채기를 하다 자기 콧바람에 스스로 놀랐습니다.", "weight": 10, "spFrom": -3, "spTo": -8, "maxYear": 2},
{"name": "김요정이 무심코 날개를 펴려다 등이 근질거렸습니다.", "weight": 8, "hpFrom": -1, "hpTo": -5, "spFrom": 3, "spTo": 8, "maxYear": 2},
{"name": "김요정이 편의점 삼각김밥에 인간 세상의 깊이를 느꼈습니다.", "weight": 10, "hpFrom": 3, "hpTo": 10, "spFrom": 5, "spTo": 10, "money": -1500, "reason": "삼각김밥", "maxYear": 2},
{"name": "김요정은 너무 더워 그늘만 찾아 헤맸습니다", "weight": 30, "requiredFeel": "burning", "hpFrom": -10, "hpTo": -20, "spFrom": -1, "spTo": -5},
{"name": "김요정이 너무 더워서 아이스크림을 잔뜩 샀습니다", "weight": 30, "requiredFeel": "burning", "hpFrom": -1, "hpTo": -5, "spFrom": 5, "spTo": 15, "money": -6000, "reason": "아이스크림 할인점"},
{"name": "김요정이 초록이가 시들까 봐 종일 부채질했습니다", "weight": 30, "requiredFeel": "burning", "hpFrom": -1, "hpTo": -15, "fpFrom": 1, "fpTo": 5, "spFrom": -5, "spTo": -10},
{"name": "김요정이 나무 그늘에서 잠들었다가 해 지고 나서야 깨어났습니다", "weight": 30, "requiredFeel": "burning", "hpFrom": -1, "hpTo": -5, "fpFrom": 5, "fpTo": 10, "spFrom": -1, "spTo": -5},
{"name": "김요정이 너무 추워 이불 밖으로 안 나왔습니다", "weight": 30, "requiredFeel": "freezing", "hpFrom": -1, "hpTo": -5, "fpFrom": -1, "fpTo": -5, "spFrom": -5, "spTo": -10},
{"name": "김요정의 손끝이 얼어 초록이를 못 만졌습니다", "weight": 30, "requiredFeel": "freezing", "hpFrom": -5, "hpTo": -10, "fpFrom": -5, "fpTo": -15, "spFrom": -10, "spTo": -15},
{"name": "김요정이 너무 추워서 핫팩을 샀습니다", "weight": 30, "requiredFeel": "freezing", "hpFrom": 1, "hpTo": 5, "spFrom": -5, "spTo": 5, "money": -2000, "reason": "핫팩"},
{"name": "김요정이 너무 추워서 전기 장판을 샀습니다", "weight": 5, "requiredFeel": "freezing", "hpFrom": 5, "hpTo": 20, "spFrom": -5, "spTo": 5, "money": -35000, "reason": "전기 장판"},
{"name": "김요정이 나무 그늘에서 버섯을 발견했습니다", "weight": 30, "requiredFeel": "burning", "fpFrom": 1, "fpTo": 10, "spFrom": 1, "spTo": 10},
{"name": "김요정은 발이 진흙에 빠진 김에 진흙을 가지고 놀았습니다", "weight": 30, "requiredFeel": "burning", "requiredTags": "rain", "fpFrom": 10, "fpTo": 20, "spFrom": 1, "spTo": 5},
{"name": "김요정은 수박을 먹으며 정원에 씨앗을 퉤퉤 뱉었습니다", "weight": 30, "requiredFeel": "burning", "hpFrom": 10, "hpTo": 20, "fpFrom": 1, "fpTo": 5, "spFrom": 1, "spTo": 5, "money": -28000, "reason": "수박", "requiredMonth": "7,8,9"},
{"name": "김요정은 눈사람을 여러개 만들었습니다", "weight": 30, "requiredFeel": "freezing", "requiredTags": "snow", "hpFrom": -1, "hpTo": -5, "fpFrom": 10, "fpTo": 20, "spFrom": 5, "spTo": 10},
{"name": "김요정은 잔뜩 쌓인 눈에 폭 빠져버렸습니다", "weight": 30, "requiredFeel": "freezing", "requiredTags": "snow", "hpFrom": -5, "hpTo": -10, "fpFrom": 10, "fpTo": 20, "spFrom": 1, "spTo": 5},
{"name": "김요정이 편의점에서 신상 간식을 사 먹었습니다 (맛이 없었다)", "weight": 10, "hpFrom": 1, "hpTo": 5, "spFrom": -1, "spTo": -10, "money": -2400, "reason": "신상 간식"},
{"name": "김요정이 편의점에서 신상 간식을 사 먹었습니다 (맛있었다)", "weight": 10, "hpFrom": 1, "hpTo": 5, "spFrom": 1, "spTo": 10, "money": -2400, "reason": "신상 간식"},
{"name": "김요정이 흩날리는 벚꽃잎을 두 손으로 받았습니다", "weight": 15, "requiredMonth": "4", "fpFrom": 5, "fpTo": 15, "spFrom": 5, "spTo": 15},
{"name": "김요정이 비 갠 뒤 반짝이는 정원을 흐뭇하게 둘러봤습니다", "weight": 20, "requiredTags": "rain", "requiredFeel": "hot", "fpFrom": 5, "fpTo": 10, "spFrom": 5, "spTo": 15},
{"name": "김요정이 발갛게 익은 감을 올려다보며 군침을 삼켰습니다", "weight": 12, "requiredMonth": "10,11", "spFrom": 5, "spTo": 15},
{"name": "김요정이 이불 속에서 귤을 까먹었습니다", "weight": 15, "requiredFeel": "cold", "hpFrom": 5, "hpTo": 10, "spFrom": 5, "spTo": 15, "money": -3000, "reason": "귤 한 봉지"},
{"name": "김요정이 밤하늘 별을 세다 잠들었습니다", "weight": 12, "fpFrom": 1, "fpTo": 5, "spFrom": 5, "spTo": 15},
{"name": "김요정은 자기 등에 날개가 없는 게 낯설었습니다", "weight": 8, "maxYear": 1, "spFrom": -3, "spTo": -10},
{"name": "김요정이 길에서 반짝이는 동전을 주웠습니다", "weight": 10, "money": 500, "reason": "주운 동전", "spFrom": 1, "spTo": 5},
{"name": "김요정이 초록이에게 자장가를 불러줬습니다", "weight": 15, "fpFrom": 5, "fpTo": 10, "spFrom": 1, "spTo": 5},
{"name": "김요정이 창밖에 소복이 쌓이는 눈을 하염없이 봤습니다", "weight": 15, "requiredTags": "snow", "requiredFeel": "cold", "hpFrom": 1, "hpTo": 5, "spFrom": 10, "spTo": 20},
{"name": "김요정이 바람에 날아간 빨랫감을 쫓아 온 동네를 뛰었습니다", "weight": 10, "requiredTags": "wind", "hpFrom": -3, "hpTo": -8, "spFrom": -1, "spTo": 5},
{"name": "김요정은 침대와 혼연일체가 되었습니다", "weight": 10, "hpFrom": 15, "hpTo": 20, "spFrom": 1, "spTo": 5},
{"name": "김요정은 요정 세상이 그리워서 조금 슬퍼졌습니다", "weight": 10, "spFrom": -5, "spTo": -10},
{"name": "김요정이 정원에서 방울토마토를 따 먹었습니다", "weight": 10, "hpFrom": 10, "hpTo": 20, "fpFrom": 5, "fpTo": 10, "spFrom": 1, "spTo": 5, "requiredMonth": "7,8,9"}
];


window.eventManager = {
    triggerRandomEvent: function() {
        const currentWeather = window.world.currentWeather;
        const rawFeel = kim.getFeelStatus(currentWeather.temp);

        const possibleEvents = window.eventList.filter(e => {
			if (e.requiredFeel) {
				// 극한이면: 전용(burning) 또는 인접(hot) 둘 다 허용
				const okFeels = rawFeel === "burning" ? ["burning", "hot"]
							  : rawFeel === "freezing" ? ["freezing", "cold"]
							  : [rawFeel];
				if (!okFeels.includes(e.requiredFeel)) return false;
			}
            if (e.requiredTags) {
                const reqTags = e.requiredTags.split(',');
                if (!reqTags.every(t => currentWeather.tags.includes(t))) return false;
            }
			if (e.requiredMonth) {
				const months = String(e.requiredMonth).split(',').map(Number);
				if (!months.includes(window.calendar.month)) return false;
			}
    		if (e.requiredSeed && kimData.stats.seedCount < e.requiredSeed) return false;
			if (e.maxYear && window.calendar.year > e.maxYear) return false;
            return true;
        });

		if (possibleEvents.length === 0) {
			return;
		}

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
		} else if (eventName.includes("커피") || eventName.includes("탄산수")) {
			kimData.stats.drinkCount++;
		} else if (eventName.includes("신상 간식")) {
			kimData.stats.snackCount++;
		}

        // ★ 여기서 실제로 적용될 랜덤 변화량을 먼저 계산
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
					const val = getRandom(f, t);         // 한 번만 굴림
					effects[k] = { min: val, max: val }; // 같은 값으로 고정
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
            logEl.innerHTML = logMsg;
        }
    }
};

window.receiveRequest = function() {
    // 1. FP 랜덤 소모 (1~90)
    const fpCost = Math.floor(Math.random() * 90) + 1;
	
	console.log("======================");
	console.log("현재 FP :", window.kim.data.fp);
	console.log("의뢰 비용 :", fpCost);

    
    // 2. FP가 충분한지 체크 (지금 가진 FP보다 더 많이 소모하는 의뢰는 거절)
    const logContainer = document.querySelector('.main-log');
	
	if (window.kim.data.fp <= fpCost) {
		console.log("거절");
	} else {
		console.log("수락");
	}

	console.log("예상 FP :", window.kim.data.fp - fpCost);

	if (window.kim.data.fp <= fpCost) {
		console.log("실제 FP :", window.kim.data.fp);
		if (logContainer) {
			logContainer.innerHTML = "의뢰가 들어왔으나 FP가 부족하여 거절했습니다.";
		}
		return;
	}
    
    // 3. FP 소모 및 돈 획득
    window.kim.applyEffect({
		fp: {
			min: -fpCost,
			max: -fpCost
		}
	});
    const reward = fpCost * 20000;
    money.add(reward, "의뢰 보상");
    kimData.stats.questCount++;
    
    // 4. 메시지 결정 (범위 명시)
    let msg = "";
    if (fpCost <= 25) {
        msg = "열매를 맺으라고 응원했습니다.";
    } else if (fpCost <= 50) {
        msg = "시들었던 초록이를 건강하게 해줬습니다.";
    } else if (fpCost <= 70) {
        msg = "죽어가던 초록이를 되살렸습니다.";
    } else {
        // 71 ~ 90 사이의 의뢰
        msg = "꽃대를 만들도록 응원했습니다.";
    }
    
    // 5. 로그 출력 및 업데이트
    if (logContainer) {
        logContainer.innerHTML = `의뢰 완료: ${msg}<br>FP -${fpCost}, 보상 +${reward.toLocaleString()}원`;
    }
    
	console.log("③ 보상 지급", window.kim.data.fp);

    window.ui.refresh();

    console.log("④ 화면 갱신", window.kim.data.fp);

    window.checkStatus();

    console.log("⑤ 상태 확인", window.kim.data.fp);
};