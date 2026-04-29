<template>
  <div class="consult-record-container">
    <div class="consult-record-header">
      <i class="consult-record-back-icon" @click="$router.back()">〈</i>
      <span class="consult-record-title">我的咨询与预约</span>
    </div>

    <div class="consult-record-profile-card">
      <div class="consult-record-user-info">
        <div class="consult-record-avatar-placeholder">
          <i class="consult-record-user-icon">👤</i>
        </div>
        <div class="consult-record-user-detail">
          <h2 class="consult-record-nickname">小宇</h2>
          <p class="consult-record-status-tags">广州 · 心理成长中</p>
        </div>
      </div>

      <div class="consult-record-stats-row">
        <div class="consult-record-stat-item">
          <span class="consult-record-stat-value">128</span>
          <span class="consult-record-stat-label">树洞被赞</span>
        </div>
        <div class="consult-record-stat-item">
          <span class="consult-record-stat-value">12</span>
          <span class="consult-record-stat-label">打卡天数</span>
        </div>
        <div class="consult-record-stat-item">
          <span class="consult-record-stat-value">6</span>
          <span class="consult-record-stat-label">成就</span>
        </div>
      </div>
    </div>

    <div class="consult-record-menu-list">
      <div class="consult-record-menu-item">
        <div class="consult-record-menu-icon calendar-blue">📅</div>
        <span class="consult-record-menu-text">我的预约</span>
      </div>
      <div class="consult-record-menu-item">
        <div class="consult-record-menu-icon bookmark-blue">🔖</div>
        <span class="consult-record-menu-text">我的收藏</span>
      </div>
      <div class="consult-record-menu-item">
        <div class="consult-record-menu-icon chat-blue">💬</div>
        <span class="consult-record-menu-text">树洞记录</span>
      </div>
      <div class="consult-record-menu-item">
        <div class="consult-record-menu-icon help-blue">❓</div>
        <span class="consult-record-menu-text">帮助与反馈</span>
      </div>
      <div class="consult-record-menu-item">
        <div class="consult-record-menu-icon settings-blue">⚙️</div>
        <span class="consult-record-menu-text">设置</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// 目前只是静态页面展示，如果以后需要对接接口可在这里添加逻辑
</script>

<style scoped>
.consult-record-container {
  min-height: 100vh;
  background-color: #f8fbff; /* 极浅蓝背景 */
  padding: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* 标题栏 */
.consult-record-header {
  display: flex;
  align-items: center;
  padding: 10px 0 20px;
  position: relative;
}
.consult-record-back-icon {
  font-size: 20px;
  color: #333;
  cursor: pointer;
  font-style: normal;
}
.consult-record-title {
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-right: 20px; /* 抵消返回键的偏移 */
}

/* 个人信息卡片 */
.consult-record-profile-card {
  background: white;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(230, 240, 255, 0.8);
  margin-bottom: 20px;
}

.consult-record-user-info {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.consult-record-avatar-placeholder {
  width: 70px;
  height: 70px;
  background-color: #e8f2ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  border: 4px solid #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  font-style: normal;
}
.consult-record-user-icon {
  font-style: normal;
}

.consult-record-user-detail {
  margin-left: 15px;
}

.consult-record-nickname {
  margin: 0;
  font-size: 22px;
  color: #333;
}

.consult-record-status-tags {
  margin: 5px 0 0;
  font-size: 13px;
  color: #99aab5;
}

/* 统计数据样式 */
.consult-record-stats-row {
  display: flex;
  background-color: #f0f7ff;
  border-radius: 40px; /* 大圆角胶囊形状 */
  padding: 15px 0;
}

.consult-record-stat-item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.consult-record-stat-value {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.consult-record-stat-label {
  font-size: 12px;
  color: #7d8c97;
  margin-top: 4px;
}

/* 菜单列表 */
.consult-record-menu-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.consult-record-menu-item {
  background: white;
  height: 65px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  transition: background 0.2s;
  cursor: pointer;
}

.consult-record-menu-item:active {
  background-color: #f0f0f0;
}

.consult-record-menu-icon {
  width: 36px;
  height: 36px;
  background-color: #e8f2ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #4a90e2;
  margin-right: 15px;
}

.consult-record-menu-text {
  font-size: 16px;
  color: #444;
  font-weight: 500;
}
</style>
