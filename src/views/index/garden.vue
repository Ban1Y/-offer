<template>
  <div class="garden-page">
    <header class="header">
      <div class="user-info">
        <div class="avatar-box">
          <i class="user-icon">👤</i>
        </div>
        <div class="text-group">
          <h1 class="nickname">小宇</h1>
          <p class="uid">UID: 10023</p>
        </div>
      </div>
      <button class="check-in-btn">
        <span class="calendar-icon">📅</span> 打卡
      </button>
    </header>

    <div class="card streak-card">
      <div class="streak-num">12</div>
      <div class="streak-label">连续打卡天数</div>
      <div class="streak-tip">
        <span class="fire-icon">🔥</span> 已超过 78% 的用户
      </div>
    </div>

    <div class="card growth-card">
      <div class="tree-display">
        <div class="tree-circle">
          <span class="tree-emoji">🌲</span>
        </div>
      </div>
      <div class="growth-info">
        <div class="stage-tag">🌱 幼苗期</div>
        <div class="days-large">12 天</div>
        <div class="next-stage">再坚持 3 天进入生长期</div>
      </div>
    </div>

    <section class="achievement-section">
      <h2 class="section-title">成就徽章</h2>
      <div class="badge-list">
        <div class="badge-item">
          <div class="badge-icon icon-blue">⚙️</div>
          <p class="badge-name">初露锋芒</p>
          <p class="badge-desc">首次打卡</p>
        </div>
        <div class="badge-item">
          <div class="badge-icon icon-cyan">📅</div>
          <p class="badge-name">持之以恒</p>
          <p class="badge-desc">连续 7 天</p>
        </div>
        <div class="badge-item">
          <div class="badge-icon icon-star">⭐</div>
          <p class="badge-name">周活跃</p>
          <p class="badge-desc">本周 5 次</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.garden-page {
  padding: 15px;
  background-color: #ffffff;
  min-height: 100%;
}

/* 头部样式 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px 20px;
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar-box {
  width: 50px;
  height: 50px;
  background: #e8f2ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}

.text-group {
  margin-left: 12px;
}

.nickname {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.uid {
  font-size: 12px;
  color: #99aab5;
  margin: 2px 0 0;
}

.check-in-btn {
  background: #5dc381;
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0 4px 12px rgba(93, 195, 129, 0.3);
}

/* 通用卡片样式 */
.card {
  border-radius: 30px;
  padding: 25px;
  margin-bottom: 20px;
}

/* 打卡天数卡片 - 浅橙色 */
.streak-card {
  background-color: #fffaf0;
  text-align: center;
}

.streak-num {
  font-size: 60px;
  font-weight: bold;
  color: #ff9d42;
  line-height: 1;
}

.streak-label {
  font-size: 14px;
  color: #8a7e72;
  margin: 10px 0;
}

.streak-tip {
  font-size: 13px;
  color: #333;
  font-weight: 500;
}

/* 成长状态卡片 - 浅绿色 */
.growth-card {
  background-color: #f0f9f1;
  display: flex;
  align-items: center;
}

.tree-display {
  flex: 1;
  display: flex;
  justify-content: center;
}

.tree-circle {
  width: 100px;
  height: 100px;
  background: #e1f2e4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
}

.growth-info {
  flex: 1.5;
}

.stage-tag {
  color: #4a8c5a;
  font-weight: bold;
  font-size: 16px;
}

.days-large {
  font-size: 32px;
  font-weight: bold;
  color: #4a8c5a;
  margin: 5px 0;
}

.next-stage {
  display: inline-block;
  background: #ffffff;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 11px;
  color: #9ab5a0;
}

/* 成就徽章部分 */
.achievement-section {
  margin-top: 30px;
}

.section-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
  padding-left: 5px;
}

.badge-list {
  display: flex;
  gap: 15px;
  overflow-x: auto; /* 允许横向滚动 */
  padding-bottom: 10px;
}

.badge-item {
  min-width: 100px;
  background: #ffffff;
  border: 1px solid #f0f5ff;
  border-radius: 25px;
  padding: 20px 10px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(220, 230, 250, 0.5);
}

.badge-icon {
  font-size: 30px;
  margin-bottom: 10px;
}

.badge-name {
  font-size: 13px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.badge-desc {
  font-size: 10px;
  color: #abb4bd;
}

/* 滚动条隐藏（可选） */
.badge-list::-webkit-scrollbar {
  display: none;
}
</style>