<template>
  <div class="eval-result-page">
    <header class="header">
      <i class="back-icon" @click="$router.back()">〈</i>
      <h1 class="title">认知评估</h1>
    </header>

    <div class="content-card">
      <div class="score-container">
        <div class="score-outer-glow">
          <div class="score-solid-circle">
            <span class="score-num">72</span>
            <span class="score-text">效能分</span>
          </div>
        </div>
      </div>

      <div class="chart-section">
        <div class="bar-item">
          <div class="bar-track">
            <div class="bar-fill purple" style="height: 75%"></div>
          </div>
          <span class="bar-name">自我认知</span>
          <span class="bar-value">7.5/10</span>
        </div>
        
        <div class="bar-item">
          <div class="bar-track">
            <div class="bar-fill cyan" style="height: 60%"></div>
          </div>
          <span class="bar-name">职业决策</span>
          <span class="bar-value">6/10</span>
        </div>
      </div>

      <div class="analysis-box">
        <div class="quote-mark">“</div>
        <p class="analysis-text">
          你的自我认知清晰度较高，但职业决策信心稍弱。可以通过职业探索和决策平衡单增强确定性。
        </p>
      </div>

      <div class="suggestion-section">
        <h3 class="section-title">
          <span class="brain-icon">🧠</span> 发展建议
        </h3>
        <div class="tag-grid">
          <span class="suggest-tag">职业锚测评</span>
          <span class="suggest-tag">决策训练</span>
          <span class="suggest-tag">自我反思</span>
          <span class="suggest-tag">生涯咨询</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.eval-result-page {
  padding: 15px;
  background-color: #f8fbff;
  min-height: 100vh;
}

/* 导航头 */
.header {
  display: flex;
  align-items: center;
  padding: 10px 0 20px;
}
.back-icon { font-size: 18px; color: #333; cursor: pointer; }
.title { flex: 1; text-align: center; font-size: 18px; color: #1a3a5f; margin-right: 18px; font-weight: bold; }

/* 主体白卡片 */
.content-card {
  background: white;
  border-radius: 35px;
  padding: 40px 20px;
  box-shadow: 0 10px 30px rgba(230, 240, 255, 0.8);
}

/* 核心分数：紫色实心圆样式 */
.score-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.score-outer-glow {
  width: 130px;
  height: 130px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 25px rgba(158, 105, 153, 0.2); /* 淡淡的紫色投影 */
}
.score-solid-circle {
  width: 115px;
  height: 115px;
  background: linear-gradient(180deg, #a67bb0 0%, #8e6999 100%);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.score-num { font-size: 42px; font-weight: bold; color: #ffffff; line-height: 1; }
.score-text { font-size: 13px; color: rgba(255, 255, 255, 0.9); margin-top: 4px; }

/* 柱状图样式 */
.chart-section {
  display: flex;
  justify-content: center;
  gap: 60px;
  height: 200px;
  margin-bottom: 35px;
}
.bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
}
.bar-track {
  width: 28px;
  height: 120px;
  background: #f0f4f8;
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  margin-bottom: 12px;
}
.bar-fill {
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 14px;
  transition: height 1s ease;
}
.purple { background: #a67bb0; }
.cyan { background: #68a3b5; }

.bar-name { font-size: 14px; color: #1a3a5f; font-weight: bold; margin-bottom: 4px; }
.bar-value { font-size: 14px; color: #4a90e2; font-weight: bold; }

/* 分析结论框 */
.analysis-box {
  background: #f4f9ff;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  margin-bottom: 30px;
  border-left: 4px solid #a67bb0; /* 紫色侧边强调线 */
}
.quote-mark {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 40px;
  color: rgba(166, 123, 176, 0.2);
  font-family: serif;
}
.analysis-text {
  font-size: 14px;
  color: #1a3a5f;
  line-height: 1.6;
  margin: 0;
  position: relative;
  z-index: 1;
}

/* 发展建议 */
.section-title {
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.tag-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.suggest-tag {
  background: #fff8f2;
  color: #c6854e;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}
</style>