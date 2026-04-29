<template>
  <div class="analysis-page">
    <header class="header">
      <i class="back-icon" @click="$router.back()">〈</i>
      <h1 class="title">情绪状态分析</h1>
    </header>

    <div class="content-card">
      <div class="score-container">
        <div class="score-outer-glow">
          <div class="score-solid-circle">
            <span class="score-num">68</span>
            <span class="score-text">总分</span>
          </div>
        </div>
      </div>

      <div class="chart-section">
        <div class="bar-item">
          <div class="bar-track">
            <div class="bar-fill blue" style="height: 70%"></div>
          </div>
          <span class="bar-name">焦虑</span>
          <span class="bar-value">7/10</span>
        </div>
        <div class="bar-item">
          <div class="bar-track">
            <div class="bar-fill orange" style="height: 100%"></div>
          </div>
          <span class="bar-name">抑郁</span>
          <span class="bar-value">10/10</span>
        </div>
        <div class="bar-item">
          <div class="bar-track">
            <div class="bar-fill green" style="height: 60%"></div>
          </div>
          <span class="bar-name">压力</span>
          <span class="bar-value">6/10</span>
        </div>
      </div>

      <div class="advice-box">
        <span class="sparkle">✨</span>
        <p>你的焦虑分数较高，可能与就业不确定性有关；抑郁情绪在正常范围，压力处于中等水平。建议尝试正念呼吸和认知调整。</p>
      </div>

      <div class="action-grid">
        <button class="action-btn">正念练习</button>
        <button class="action-btn">焦虑管理</button>
        <button class="action-btn">压力释放</button>
        <button class="action-btn">心理咨询</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.analysis-page {
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
.title { flex: 1; text-align: center; font-size: 18px; color: #1a3a5f; margin-right: 18px; }

/* 主卡片容器 */
.content-card {
  background: white;
  border-radius: 30px;
  padding: 40px 20px;
  box-shadow: 0 8px 30px rgba(230, 240, 255, 0.8);
}

/* 总分圆环样式 */
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
  box-shadow: 0 10px 25px rgba(255, 157, 66, 0.4);
}
.score-solid-circle {
  width: 118px;
  height: 118px;
  background: linear-gradient(180deg, #ff9d42 0%, #ff7e5f 100%);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.2);
}
.score-num {
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.score-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 4px;
  letter-spacing: 1px;
}

/* 柱状图样式 */
.chart-section {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 180px;
  margin-bottom: 30px;
}
.bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
}
.bar-track {
  width: 16px;
  height: 120px;
  background: #f0f4f8;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
}
.bar-fill {
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 8px;
  transition: height 1s ease-out;
}
.blue { background: #4a90e2; }
.orange { background: #ff9d42; }
.green { background: #5dc381; }

.bar-name { font-size: 14px; color: #333; margin-bottom: 4px; }
.bar-value { font-size: 12px; color: #4a90e2; font-weight: bold; }

/* 建议框 */
.advice-box {
  background: #fff8f2;
  border: 1px solid #ffe8d1;
  border-radius: 15px;
  padding: 12px 15px;
  display: flex;
  gap: 8px;
  margin-bottom: 30px;
}
.advice-box p { font-size: 13px; color: #1a3a5f; margin: 0; line-height: 1.5; }
.sparkle { color: #ff9d42; }

/* 按钮网格 */
.action-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.action-btn {
  background: white;
  border: 1px solid #f0f4f8;
  padding: 12px;
  border-radius: 12px;
  font-size: 14px;
  color: #1a3a5f;
  box-shadow: 0 2px 8px rgba(230, 240, 255, 0.5);
  cursor: pointer;
}
.action-btn:active {
  background: #f8fbff;
  transform: translateY(1px);
}
</style>