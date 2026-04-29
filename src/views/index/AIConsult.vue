<template>
  <div class="ai-consult-page">
    <header class="header">
      <i class="back-icon" @click="goTo('/home')">〈</i>
      <h1 class="title">心理支持</h1>
    </header>

    <div class="consult-tabs">
      <div class="consult-tab-slider"></div>
      <button class="consult-tab active">AI 咨询</button>
      <button class="consult-tab" @click.stop.prevent="goExpert">专家咨询</button>
    </div>

    <div class="chat-container">
      <div class="ai-profile">
        <div class="avatar-wrapper">
          <div class="avatar-circle">😊</div>
          <span class="online-status"></span>
        </div>
        <div class="ai-info">
          <h3>AI 咨询助手</h3>
          <p class="status-text">○ 在线 · 即时响应</p>
        </div>
      </div>

      <div class="message-list">
        <div class="message-item user">
          <div class="bubble">我最近找工作很焦虑</div>
        </div>

        <div class="message-item ai">
          <div class="ai-avatar">😊</div>
          <div class="bubble">
            我理解你的感受，很多同学在这个阶段都会有类似的焦虑。可以具体跟我说说吗？
          </div>
        </div>
      </div>

      <div class="quick-replies">
        <div class="reply-tag">我感到压力很大</div>
        <div class="reply-tag">我不知道选什么职业</div>
        <div class="reply-tag">面试总是不通过</div>
      </div>
    </div>

    <footer class="footer">
      <div class="input-box">
        <input type="text" placeholder="说说你的困扰..." />
        <i class="send-icon">✈️</i>
      </div>
      <p class="disclaimer">ⓘ AI 助手可提供初步支持，如需深度咨询请预约专业咨询师</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goTo = (path) => {
  router.push(path)
}

const goExpert = () => {
  router.push('/expert-consultation')
}
</script>

<style scoped>
@keyframes pageFadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ai-consult-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f8fbff;
  font-family: sans-serif;
  animation: pageFadeIn 0.22s ease-out;
}

/* 顶部导航 */
.header {
  display: flex;
  align-items: center;
  padding: 15px;
  background: #f8fbff;
}
.back-icon { font-size: 20px; cursor: pointer; color: #333; }
.title { flex: 1; text-align: center; font-size: 18px; margin-right: 20px; color: #1a3a5f; }

/* 切换卡 (滑块样式) */
.consult-tabs {
  position: relative;
  display: flex;
  margin: 0 20px 20px;
  height: 44px;
  padding: 4px;
  border-radius: 999px;
  background: #edf3fb;
}

.consult-tab-slider {
  position: absolute;
  top: 4px;
  left: 4px;
  width: calc(50% - 4px);
  height: calc(100% - 8px);
  border-radius: 999px;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(74, 144, 226, 0.15);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.consult-tab-slider.right {
  transform: translateX(100%);
}

.consult-tab {
  position: relative;
  z-index: 1;
  flex: 1;
  border: none;
  background: transparent;
  font-size: 15px;
  font-weight: 600;
  color: #7d8c97;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
}

.consult-tab.active {
  color: #4a90e2;
}

/* 聊天区域 */
.chat-container {
  flex: 1;
  padding: 0 20px;
  overflow-y: auto;
}

.ai-profile {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.avatar-wrapper {
  position: relative;
  margin-right: 12px;
}
.avatar-circle {
  width: 50px;
  height: 50px;
  background: #4a90e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
.online-status {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #5dc381;
  border: 2px solid white;
  border-radius: 50%;
}
.ai-info h3 { margin: 0; font-size: 18px; color: #333; }
.status-text { margin: 4px 0 0; font-size: 13px; color: #5dc381; font-weight: 500; }

/* 气泡样式 */
.message-item {
  display: flex;
  margin-bottom: 20px;
}
.message-item.user { justify-content: flex-end; }
.message-item.ai { justify-content: flex-start; }

.bubble {
  max-width: 75%;
  padding: 12px 16px;
  border-radius: 20px;
  font-size: 15px;
  line-height: 1.5;
}
.user .bubble {
  background: #f1f3f5;
  color: #333;
  border-bottom-right-radius: 4px;
}
.ai .bubble {
  background: #e8f2ff;
  color: #1a3a5f;
  border-bottom-left-radius: 4px;
}
.ai-avatar {
  width: 35px;
  height: 35px;
  background: #4a90e2;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

/* 快捷回复 */
.quick-replies {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}
.reply-tag {
  background: white;
  border: 1px solid #e8f2ff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  color: #1a3a5f;
  box-shadow: 0 2px 8px rgba(230, 240, 255, 0.5);
}

/* 底部输入框 */
.footer {
  padding: 20px;
  background: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
.input-box {
  background: #f8fbff;
  border-radius: 25px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  border: 1px solid #e8f2ff;
}
.input-box input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 15px;
}
.send-icon {
  font-size: 20px;
  color: #4a90e2;
  transform: rotate(45deg);
}
.disclaimer {
  text-align: center;
  font-size: 11px;
  color: #abb4bd;
  margin-top: 15px;
}
</style>