<template>
  <div class="mine-container">
    <div class="header">
      <span class="title">我的</span>
    </div>

    <div class="profile-card">
      <div class="user-info">
        <div class="avatar-placeholder">
          <i class="user-icon">👤</i>
        </div>
        <div class="user-detail">
          <h2 class="nickname">小宇</h2>
          <p class="status-tags">广州 · 心理成长中</p>
        </div>
      </div>

      <div class="stats-row">
        <div class="stat-item">
          <span class="stat-value">128</span>
          <span class="stat-label">树洞被赞</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">12</span>
          <span class="stat-label">打卡天数</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">6</span>
          <span class="stat-label">成就</span>
        </div>
      </div>
    </div>

    <div class="menu-list">
      <div class="menu-item">
        <div class="menu-icon calendar-blue">📅</div>
        <span class="menu-text">我的预约</span>
      </div>
      <div class="menu-item">
        <div class="menu-icon bookmark-blue">🔖</div>
        <span class="menu-text">我的收藏</span>
      </div>
      <div class="menu-item">
        <div class="menu-icon chat-blue">💬</div>
        <span class="menu-text">树洞记录</span>
      </div>
      <div class="menu-item">
        <div class="menu-icon help-blue">❓</div>
        <span class="menu-text">帮助与反馈</span>
      </div>
      <div class="menu-item">
        <div class="menu-icon settings-blue">⚙️</div>
        <span class="menu-text">设置</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mine-container {
  min-height: 100vh;
  background-color: #f8fbff; /* 极浅蓝背景 */
  padding: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* 标题栏 */
.header {
  display: flex;
  align-items: center;
  padding: 10px 0 20px;
  position: relative;
}
.title {
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

/* 个人信息卡片 */
.profile-card {
  background: white;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(230, 240, 255, 0.8);
  margin-bottom: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.avatar-placeholder {
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
}

.user-detail {
  margin-left: 15px;
}

.nickname {
  margin: 0;
  font-size: 22px;
  color: #333;
}

.status-tags {
  margin: 5px 0 0;
  font-size: 13px;
  color: #99aab5;
}

/* 统计数据样式 */
.stats-row {
  display: flex;
  background-color: #f0f7ff;
  border-radius: 40px; /* 大圆角胶囊形状 */
  padding: 15px 0;
}

.stat-item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.stat-label {
  font-size: 12px;
  color: #7d8c97;
  margin-top: 4px;
}

/* 菜单列表 */
.menu-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.menu-item {
  background: white;
  height: 65px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  transition: background 0.2s;
}

.menu-item:active {
  background-color: #f0f0f0;
}

.menu-icon {
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

.menu-text {
  font-size: 16px;
  color: #444;
  font-weight: 500;
}
</style>