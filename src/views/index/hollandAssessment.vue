<template>
  <div class="result-page">
    <header class="header">
      <i class="back-icon" @click="$router.back()">〈</i>
      <h1 class="title">霍兰德测评</h1>
    </header>

    <div class="result-card">
      <div class="score-circle">
        <span class="score-letter">S</span>
      </div>
      <h2 class="result-name">社会型 (Social)</h2>

      <div class="chart-container">
        <div class="radar-bg"></div>
        <div class="radar-shape"></div>
      </div>

      <div class="legend-grid">
        <span class="legend-item"><i class="dot blue"></i> 实际 R</span>
        <span class="legend-item"><i class="dot orange"></i> 研究 I</span>
        <span class="legend-item"><i class="dot green"></i> 艺术 A</span>
        <span class="legend-item"><i class="dot red"></i> 社会 S</span>
        <span class="legend-item"><i class="dot purple"></i> 企业 E</span>
        <span class="legend-item"><i class="dot cyan"></i> 常规 C</span>
      </div>

      <div class="description-box">
        <p>你喜欢与人合作，关心他人福祉，擅长沟通和教导。在助人、教育、咨询等领域能发挥巨大潜力。</p>
      </div>

      <div class="recommend-section">
        <h3 class="section-subtitle">✨ 推荐职业领域</h3>
        <div class="tag-cloud">
          <span class="job-tag">心理咨询师</span>
          <span class="job-tag">教师</span>
          <span class="job-tag">社会工作者</span>
          <span class="job-tag">人力资源</span>
          <span class="job-tag">医护关怀</span>
          <span class="job-tag">职业规划师</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result-page {
  padding: 15px;
  background-color: #f8fbff;
  min-height: 100vh;
}

/* 顶部 */
.header {
  display: flex;
  align-items: center;
  padding: 10px 0 20px;
}
.back-icon { font-size: 20px; cursor: pointer; color: #333; }
.title { flex: 1; text-align: center; font-size: 18px; margin-right: 20px; }

/* 结果卡片 */
.result-card {
  background: white;
  border-radius: 30px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(230, 240, 255, 0.8);
}

.score-circle {
  width: 100px;
  height: 100px;
  background: #5c9df5;
  border: 6px solid #e8f2ff;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 15px rgba(92, 157, 245, 0.3);
}

.score-letter {
  font-size: 48px;
  font-weight: bold;
  color: white;
}

.result-name {
  margin-top: 20px;
  color: #1a3a5f;
  font-size: 22px;
}

/* 简易雷达图模拟 */
.chart-container {
  width: 200px;
  height: 200px;
  margin: 30px auto;
  position: relative;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 0 L93 25 L93 75 L50 100 L7 75 L7 25 Z" fill="none" stroke="%23eef4fe" stroke-width="1"/></svg>') no-repeat center;
  background-size: contain;
}

.radar-shape {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: rgba(92, 157, 245, 0.4);
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  border: 2px solid #5c9df5;
}

/* 图例 */
.legend-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 30px;
}

.legend-item {
  font-size: 12px;
  color: #7d8c97;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fbff;
  padding: 4px 8px;
  border-radius: 12px;
}

.dot { width: 8px; height: 8px; border-radius: 50%; margin-right: 5px; }
.blue { background: #5c9df5; }
.orange { background: #ff9d42; }
.green { background: #5dc381; }
.red { background: #ff5c5c; }
.purple { background: #a18cd1; }
.cyan { background: #4ecdc4; }

/* 描述框 */
.description-box {
  background: #fff8f2;
  border-left: 4px solid #ff9d42;
  border-radius: 0 20px 20px 20px;
  padding: 15px;
  text-align: left;
  margin-bottom: 25px;
}

.description-box p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #555;
}

/* 推荐职业标签 */
.recommend-section { text-align: left; }
.section-subtitle { font-size: 16px; margin-bottom: 15px; color: #333; }

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.job-tag {
  background: #fff2e8;
  color: #e67e22;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}
</style>