<template>
  <div class="main-layout">
    <main class="page-container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <nav class="tabbar">
      <router-link to="/home" class="tab-item" active-class="is-active">
        <div class="icon-box">
          <i class="iconfont">🏠</i>
        </div>
        <span class="tab-label">首页</span>
      </router-link>

      <router-link to="/community" class="tab-item" active-class="is-active">
        <div class="icon-box">
          <i class="iconfont">💬</i>
        </div>
        <span class="tab-label">社区</span>
      </router-link>

      <div class="center-placeholder">
        <router-link to="/explore" class="center-btn" active-class="center-active">
          <i class="center-icon">🗺️</i>
        </router-link>
      </div>

      <router-link to="/garden" class="tab-item" active-class="is-active">
        <div class="icon-box">
          <i class="iconfont">🌲</i>
        </div>
        <span class="tab-label">家园</span>
      </router-link>

      <router-link to="/mine" class="tab-item" active-class="is-active">
        <div class="icon-box">
          <i class="iconfont">👤</i>
        </div>
        <span class="tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
// 这里可以处理一些全局逻辑，比如未读消息红点统计等
</script>

<style scoped>
/* 整体布局结构 */
.main-layout {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f8fbff;
}

.page-container {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* 优化 iOS 滚动 */
}

/* 底栏基础样式 */
.tabbar {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 65px;
  background: #ffffff;
  box-shadow: 0 -5px 25px rgba(0, 0, 0, 0.04);
  padding-bottom: env(safe-area-inset-bottom); /* 适配 iPhone 全面屏底部 */
  z-index: 100;
}

/* 普通标签页样式 */
.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #abb4bd; /* 未激活颜色 */
  transition: all 0.3s ease;
}

.icon-box {
  font-size: 22px;
  margin-bottom: 2px;
}

.tab-label {
  font-size: 11px;
  font-weight: 500;
}

/* 激活状态样式 */
.is-active {
  color: #4a90e2 !important;
}

/* 中间凸起按钮容器 */
.center-placeholder {
  position: relative;
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
}

.center-btn {
  position: absolute;
  top: -28px; /* 向上悬浮高度 */
  width: 58px;
  height: 58px;
  background: linear-gradient(135deg, #60afff 0%, #4a90e2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 15px rgba(74, 144, 226, 0.3);
  border: 5px solid #ffffff; /* 关键：白色外圈实现切割视觉效果 */
  text-decoration: none;
  transition: transform 0.2s ease;
}

.center-btn:active {
  transform: scale(0.9) translateY(2px);
}

.center-icon {
  font-size: 26px;
  color: white;
}

/* 简单的页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>