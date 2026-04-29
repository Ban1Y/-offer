<template>
  <div class="suicide-page">
    <!-- MainHeader -->
    <header class="suicide-header">
      <button class="suicide-back-btn" @click="goBack">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <h1 class="suicide-title">心理安全评估</h1>
    </header>

    <!-- Main Content Area -->
    <main class="suicide-main">
      <!-- Assessment Card -->
      <div class="suicide-card suicide-left-accent">
        <!-- Icon and Titles -->
        <div class="suicide-info-header">
          <div class="suicide-icon-heart">
            <i class="fa-solid fa-heart-pulse"></i>
          </div>
          <h2 class="suicide-card-title">心理安全评估</h2>
          <p class="suicide-card-desc">我们关心你的心理健康</p>
        </div>

        <!-- Warning Notice -->
        <div class="suicide-warning-box">
          <i class="fa-solid fa-circle-info suicide-warning-icon"></i>
          <p class="suicide-warning-text">如果你正在经历困难时期，请记住：你并不孤单。专业的帮助随时可用。</p>
        </div>

        <!-- Emergency Contacts Section -->
        <div class="suicide-contacts-section">
          <h3 class="suicide-contacts-title">
            <i class="fa-solid fa-phone-volume suicide-phone-icon"></i>
            紧急联系方式
          </h3>
          
          <!-- Contact Item 1 -->
          <div class="suicide-contact-item">
            <div class="suicide-contact-icon-bg">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="suicide-contact-text">
              全国心理援助热线：400-161-9995
            </div>
          </div>
          
          <!-- Contact Item 2 -->
          <div class="suicide-contact-item">
            <div class="suicide-contact-icon-bg">
              <i class="fa-solid fa-mobile-screen"></i>
            </div>
            <div class="suicide-contact-text">
              广州市心理学会：020-83567890
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <button class="suicide-action-btn" @click="startAssessment">
          <i class="fa-regular fa-comments suicide-btn-icon"></i>
          立即联系咨询师
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}

const startAssessment = () => {
  // 未来可在这里接入问卷流程，目前跳转至支持/咨询页面
  router.push('/ai-consult')
}
</script>

<style scoped>
/* 引入 FontAwesome 图标库 */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.suicide-page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background: linear-gradient(to bottom, #f0f7ff 0%, #ffffff 100%);
  min-height: 100vh;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  color: #1f2937; /* text-gray-800 */
}

/* Header */
.suicide-header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: transparent;
  position: relative;
  z-index: 10;
}

.suicide-back-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #1f2937;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  outline: none;
}
.suicide-back-btn:active {
  transform: scale(0.9);
}

.suicide-title {
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #0f2c59;
  margin: 0;
  margin-right: 32px; /* Offset for back button to center text */
}

/* Main Content */
.suicide-main {
  flex: 1;
  overflow-y: auto;
  padding: 16px 16px 96px 16px; /* Bottom padding for scroll clearance */
}

/* Card */
.suicide-card {
  background-color: #ffffff;
  border-radius: 24px;
  padding: 24px;
  position: relative;
  box-shadow: 0 10px 40px -10px rgba(0, 50, 150, 0.1);
}

.suicide-left-accent::before {
  content: '';
  position: absolute;
  left: 0;
  top: 20px;
  bottom: 20px;
  width: 4px;
  background-color: #ff6b6b;
  border-radius: 0 4px 4px 0;
}

/* Card Info Header */
.suicide-info-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.suicide-icon-heart {
  color: #ff6b6b;
  font-size: 36px;
  margin-bottom: 12px;
}

.suicide-card-title {
  font-size: 20px;
  font-weight: 700;
  color: #0f2c59;
  margin: 0 0 4px 0;
}

.suicide-card-desc {
  font-size: 14px;
  color: #9ca3af; /* text-gray-400 */
  margin: 0;
}

/* Warning Box */
.suicide-warning-box {
  background-color: #ffe8e8;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  align-items: flex-start;
  color: #c94b4b;
}

.suicide-warning-icon {
  margin-top: 4px;
  margin-right: 8px;
  font-size: 14px;
}

.suicide-warning-text {
  font-size: 14px;
  line-height: 1.625;
  font-weight: 500;
  margin: 0;
}

/* Contacts Section */
.suicide-contacts-section {
  margin-bottom: 24px;
}

.suicide-contacts-title {
  display: flex;
  align-items: center;
  color: #0f2c59;
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 16px 0;
}

.suicide-phone-icon {
  color: #ff4757;
  margin-right: 8px;
}

.suicide-contact-item {
  display: flex;
  align-items: center;
  background-color: #f9fafb; /* bg-gray-50 */
  border-radius: 16px;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #f3f4f6; /* border-gray-100 */
}

.suicide-contact-icon-bg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff7675;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 12px;
  flex-shrink: 0;
}

.suicide-contact-text {
  font-size: 14px;
  font-weight: 500;
  color: #2d3436;
}

/* Action Button */
.suicide-action-btn {
  width: 100%;
  background-color: #ff9f43;
  color: white;
  font-weight: 700;
  font-size: 16px;
  padding: 16px 0;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  outline: none;
}

.suicide-action-btn:hover {
  background-color: #ff8f23;
}

.suicide-action-btn:active {
  transform: scale(0.95);
}

.suicide-btn-icon {
  margin-right: 8px;
  font-size: 18px;
}
</style>
