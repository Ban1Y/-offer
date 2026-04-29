<template>
  <div class="community-page">
    <header class="header">
      <h1 class="page-title">社区 · 回声</h1>
      <div class="view-count">👁️ 2.1k</div>
    </header>

    <div class="input-section">
      <div class="avatar-sm">👤</div>
      <div class="search-bar">
        <input type="text" placeholder="匿名写下你的心事..." />
        <button class="send-btn">✈️</button>
      </div>
    </div>

    <div class="filter-tabs">
      <div class="tab active-tab">✨ 推荐</div>
      <div class="tab">🌿 树洞</div>
      <div class="tab">🔥 热门</div>
    </div>

    <div class="post-list">
      <div class="post-card">
        <div class="post-header">
          <span class="user-meta">匿名 · 昨天</span>
          <span class="tag-hot">HOT 7.2k</span>
        </div>
        <h3 class="post-title">双非本秋招 0 offer，还要继续坚持专业对口吗？</h3>
        <div class="post-footer">
          <span>🤍 156</span>
          <span>💬 43</span>
          <span>🔖 收藏</span>
        </div>
      </div>

      <div class="post-card">
        <div class="post-header">
          <span class="user-meta">匿名 · 3 小时前</span>
          <span class="tag-new">新</span>
        </div>
        <h3 class="post-title">面试被问到职业空白期，突然就很崩溃...</h3>
        <div class="post-footer">
          <span>🤍 89</span>
          <span>💬 21</span>
        </div>
      </div>
    </div>

    <div class="stats-card">
      <div class="stat-column">
        <span class="stat-icon orange">⭐</span>
        <p class="stat-label">连续倾诉 7 天</p>
        <p class="stat-value">132 人</p>
      </div>
      <div class="stat-column">
        <span class="stat-icon blue">🗨️</span>
        <p class="stat-label">树洞守护者</p>
        <p class="stat-value">48 人</p>
      </div>
      <div class="stat-column">
        <span class="stat-icon red">❤️</span>
        <p class="stat-label">525 个赞</p>
        <p class="stat-value">榜一</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.community-page {
  padding: 15px;
  background-color: #f8fbff;
  min-height: 100%;
  padding-bottom: 20px;
}

/* 头部 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.page-title {
  font-size: 22px;
  color: #333;
  margin: 0;
}

.view-count {
  background: #e8f2ff;
  color: #4a90e2;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
}

/* 匿名发布栏 */
.input-section {
  background: white;
  padding: 12px 15px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(220, 235, 255, 0.5);
  margin-bottom: 25px;
}

.avatar-sm {
  width: 36px;
  height: 36px;
  background: #e8f2ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar {
  flex: 1;
  display: flex;
  align-items: center;
}

.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #333;
}

.send-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #4a90e2;
  cursor: pointer;
}

/* 分类标签 */
.filter-tabs {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  padding: 0 5px;
}

.tab {
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  color: #7d8c97;
  background: white;
  border: 1px solid #eee;
}

.active-tab {
  background: #4a90e2;
  color: white;
  border-color: #4a90e2;
}

/* 帖子卡片 */
.post-card {
  background: white;
  border-radius: 25px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 12px rgba(230, 240, 255, 0.6);
}

.post-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.user-meta {
  font-size: 12px;
  color: #abb4bd;
}

.tag-hot {
  background: #fff5eb;
  color: #ff9d42;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: bold;
}

.tag-new {
  background: #fff0f0;
  color: #ff5c5c;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
}

.post-title {
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  margin: 0 0 15px 0;
}

.post-footer {
  display: flex;
  gap: 20px;
  font-size: 13px;
  color: #7d8c97;
}

/* 底部统计卡片 */
.stats-card {
  background: white;
  border-radius: 40px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  box-shadow: 0 5px 20px rgba(220, 235, 255, 0.8);
}

.stat-column {
  text-align: center;
}

.stat-icon {
  font-size: 24px;
  display: block;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 13px;
  color: #333;
  margin: 0;
  font-weight: 500;
}

.stat-value {
  font-size: 12px;
  color: #7d8c97;
  margin: 4px 0 0;
}
</style>