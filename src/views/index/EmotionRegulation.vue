<template>
  <div class="emotion-reg-page">
    <header class="header">
      <i class="back-icon" @click="$router.back()">〈</i>
      <h1 class="title">情绪调节</h1>
      <i class="notice-icon">🔔</i>
    </header>

    <div class="tip-banner">
      <span class="lightbulb">💡</span>
      <p>在情绪平稳时先学习技巧，情绪困扰时才能熟练运用</p>
    </div>

    <div class="progress-section">
      <div class="progress-header">
        <span class="progress-label">本月学习进度</span>
        <span class="progress-percent">30%</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width: 30%"></div>
      </div>
    </div>

    <div class="method-list">
      <div class="method-card">
        <div class="card-header">
          <div class="icon-box icon-blue">🌱</div>
          <h2 class="card-title">正念疗法</h2>
        </div>
        <p class="card-desc">
          通过观察呼吸、身体感受来培养专注力与接纳，缓解焦虑与压力，每次 5-20 分钟。
        </p>
        <button class="start-btn">开始练习</button>
      </div>

      <div class="method-card">
        <div class="card-header">
          <div class="icon-box icon-cyan">📝</div>
          <h2 class="card-title">认知行为疗法</h2>
        </div>
        <p class="card-desc">
          识别并调整就业相关的负面思维，建立更理性的认知模式，改善情绪和行为。
        </p>
        <button class="start-btn">开始练习</button>
      </div>

      <div class="method-card">
        <div class="card-header">
          <div class="icon-box icon-indigo">✋</div>
          <h2 class="card-title">放松技巧</h2>
        </div>
        <p class="card-desc">
          渐进式肌肉放松、想象放松等技术，帮助身体和心灵快速恢复平静。
        </p>
        <button class="start-btn">开始练习</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.emotion-reg-page {
  padding: 15px;
  background-color: #f8fbff;
  min-height: 100vh;
  padding-bottom: 80px; /* 为底栏留出空间 */
}

/* 顶部导航 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px 20px;
}
.back-icon, .notice-icon { font-size: 20px; color: #333; cursor: pointer; }
.title { font-size: 18px; color: #1a3a5f; margin: 0; font-weight: bold; }

/* 提示横幅 */
.tip-banner {
  background: #e8f5e9;
  border-radius: 25px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
}
.tip-banner p {
  margin: 0;
  font-size: 13px;
  color: #3e6e4a;
  font-weight: 500;
}
.lightbulb { font-size: 18px; }

/* 进度条样式 */
.progress-section {
  padding: 0 10px;
  margin-bottom: 30px;
}
.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  color: #7d8c97;
}
.progress-track {
  height: 10px;
  background: #eef4fe;
  border-radius: 5px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: #4a90e2;
  border-radius: 5px;
  transition: width 0.5s ease-out;
}

/* 方法卡片样式 */
.method-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.method-card {
  background: white;
  border-radius: 30px;
  padding: 25px;
  box-shadow: 0 8px 25px rgba(230, 240, 255, 0.7);
  border: 1px solid #f0f7ff;
}
.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}
.icon-box {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
}
.icon-blue { background: #eef4fe; }
.icon-cyan { background: #ecfbfc; }
.icon-indigo { background: #f0f1ff; }

.card-title {
  font-size: 18px;
  color: #1a3a5f;
  margin: 0;
}
.card-desc {
  font-size: 14px;
  color: #7d8c97;
  line-height: 1.6;
  margin: 0 0 20px 0;
}

/* 开始练习按钮 */
.start-btn {
  background: #ff9d42;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(255, 157, 66, 0.3);
  cursor: pointer;
}
.start-btn:active {
  transform: scale(0.95);
  background: #f38d2f;
}
</style>