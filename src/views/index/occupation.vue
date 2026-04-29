<template>
  <div class="result-container">
    <header class="header">
      <div class="back-button" @click="$router.back()">
        <i class="icon-arrow-left">〈</i>
      </div>
      <h1 class="page-title">霍兰德测评</h1>
    </header>

    <main class="result-card">
      <div class="badge-section">
        <div class="outer-circle">
          <div class="inner-circle">
            <span class="badge-letter">S</span>
          </div>
        </div>
        <h2 class="type-name">社会型 (Social)</h2>
      </div>

      <div class="radar-container">
        <svg viewBox="0 0 100 100" class="radar-svg">
          <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="#edf2f9" stroke-width="1" />
          <polygon points="50,25 72.5,37.5 72.5,62.5 50,75 27.5,62.5 27.5,37.5" fill="none" stroke="#edf2f9" stroke-width="1" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="#edf2f9" stroke-width="1" />
          <line x1="10" y1="27.5" x2="90" y2="72.5" stroke="#edf2f9" stroke-width="1" />
          <line x1="90" y1="27.5" x2="10" y2="72.5" stroke="#edf2f9" stroke-width="1" />
          <polygon points="50,20 80,40 75,70 50,85 20,65 25,35" class="radar-area" />
        </svg>
      </div>

      <div class="legend-grid">
        <div class="legend-item"><span class="dot dot-blue"></span>实际 R</div>
        <div class="legend-item"><span class="dot dot-orange"></span>研究 I</div>
        <div class="legend-item"><span class="dot dot-green"></span>艺术 A</div>
        <div class="legend-item"><span class="dot dot-red"></span>社会 S</div>
        <div class="legend-item"><span class="dot dot-purple"></span>企业 E</div>
        <div class="legend-item"><span class="dot dot-cyan"></span>常规 C</div>
      </div>

      <div class="description-box">
        <p>
          你喜欢与人合作，关心他人福祉，擅长沟通和教导。在助人、教育、咨询等领域能发挥巨大潜力。
        </p>
      </div>

      <section class="job-recommend">
        <h3 class="section-subtitle">
          <span class="star-icon">✨</span> 推荐职业领域
        </h3>
        <div class="tag-cloud">
          <span class="job-tag">心理咨询师</span>
          <span class="job-tag">教师</span>
          <span class="job-tag">社会工作者</span>
          <span class="job-tag">人力资源</span>
          <span class="job-tag">医护关怀</span>
          <span class="job-tag">职业规划师</span>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.result-container {
  min-height: 100vh;
  background-color: #f8fbff;
  padding: 15px;
  box-sizing: border-box;
}

/* 头部导航 */
.header {
  display: flex;
  align-items: center;
  height: 44px;
  margin-bottom: 10px;
}
.back-button {
  padding: 5px;
  font-size: 20px;
  color: #333;
}
.page-title {
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-right: 25px; /* 抵消返回按钮的宽度以居中 */
}

/* 结果卡片 */
.result-card {
  background-color: #ffffff;
  border-radius: 35px;
  padding: 30px 20px;
  box-shadow: 0 10px 30px rgba(230, 240, 255, 0.8);
  text-align: center;
}

/* 徽章样式 */
.badge-section {
  margin-bottom: 30px;
}
.outer-circle {
  width: 90px;
  height: 90px;
  background-color: #e8f2ff;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 15px rgba(92, 157, 245, 0.2);
}
.inner-circle {
  width: 70px;
  height: 70px;
  background: linear-gradient(180deg, #5c9df5 0%, #4a80e2 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.badge-letter {
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
}
.type-name {
  margin-top: 20px;
  font-size: 22px;
  color: #1a3a5f;
  font-weight: bold;
}

/* 雷达图视觉还原 */
.radar-container {
  width: 200px;
  height: 180px;
  margin: 0 auto 20px;
}
.radar-svg {
  width: 100%;
  height: 100%;
}
.radar-area {
  fill: rgba(92, 157, 245, 0.3);
  stroke: #5c9df5;
  stroke-width: 2;
  stroke-linejoin: round;
}

/* 图例网格 */
.legend-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 30px;
}
.legend-item {
  font-size: 12px;
  color: #7d8c97;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fbff;
  padding: 5px 0;
  border-radius: 12px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
}
.dot-blue { background-color: #5c9df5; }
.dot-orange { background-color: #ff9d42; }
.dot-green { background-color: #5dc381; }
.dot-red { background-color: #ff5c5c; }
.dot-purple { background-color: #a18cd1; }
.dot-cyan { background-color: #4ecdc4; }

/* 描述引用块 */
.description-box {
  background-color: #fff8f2;
  border-left: 4px solid #ff9d42;
  border-radius: 4px 20px 20px 20px;
  padding: 18px;
  text-align: left;
  margin-bottom: 30px;
}
.description-box p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #4b5a6d;
}

/* 推荐职业标签 */
.job-recommend {
  text-align: left;
}
.section-subtitle {
  font-size: 16px;
  color: #1a3a5f;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
.star-icon {
  margin-right: 5px;
}
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.job-tag {
  background-color: #fff2e8;
  color: #e67e22;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}
</style>