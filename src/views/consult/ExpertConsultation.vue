<template>
  <div class="consult-page-container">
    <header class="consult-navbar">
      <i class="consult-back-icon" @click="router.push('/home')">〈</i>
      <h1 class="consult-nav-title">心理支持</h1>
    </header>

    <div class="consult-tabs">
      <div class="consult-tab-slider right"></div>
      <button class="consult-tab" @click="goAiConsult">AI 咨询</button>
      <button class="consult-tab active">专家咨询</button>
    </div>

    <div class="consult-list-header">
      <span class="consult-section-title">签约专家</span>
      <div class="consult-filter-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#4a90e2"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      </div>
    </div>

    <main class="consult-expert-list">
      <div v-for="(expert, index) in experts" :key="index" class="consult-expert-card">
        <div class="consult-card-left">
          <div class="consult-avatar-box" :style="{ backgroundColor: expert.bgColor }">
            <svg viewBox="0 0 24 24" fill="#fff" width="40" height="40"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
        </div>
        
        <div class="consult-card-right">
          <div class="consult-name-row">
            <span class="consult-expert-name">{{ expert.name }}</span>
            <span class="consult-rating">★ {{ expert.rating }}</span>
          </div>
          <div class="consult-tag-row">
            <span v-for="tag in expert.tags" :key="tag" class="consult-tag">{{ tag }}</span>
          </div>
          <div class="consult-specialty">擅长：{{ expert.specialty }}</div>
          <div class="consult-price">{{ expert.price }} 元/50 分钟</div>
        </div>

        <button class="consult-btn-reserve" @click="openBookingModal(expert)">预约</button>
      </div>
    </main>

    <footer class="consult-coop-footer">
      <div class="consult-dashed-line"></div>
      <div class="consult-coop-info">
        <span class="consult-coop-icon">🤝</span>
        广州市心理学会官方合作支持
      </div>
    </footer>

    <!-- 预约确认弹窗 -->
    <div v-if="showBookingModal" class="consult-modal-mask">
      <div class="consult-modal">
        <h3 class="modal-title">预约确认</h3>
        <div class="modal-content">
          <p><span>咨询专家：</span>{{ selectedExpert?.name }}</p>
          <p><span>咨询费用：</span>{{ selectedExpert?.price }} 元 / 50 分钟</p>
          <p class="modal-tip">点击确认后，专家助手将与您联系确认时间</p>
        </div>
        <div class="booking-modal-actions">
          <div 
            class="booking-modal-cancel-action" 
            role="button" 
            tabindex="0" 
            @click="closeBookingModal"
          ></div>
          <div 
            class="booking-modal-confirm-action" 
            role="button" 
            tabindex="0" 
            @click="confirmBooking"
          ></div>
        </div>
      </div>
    </div>

    <!-- 预约成功 Toast -->
    <div v-if="showToast" class="consult-toast">
      <div class="toast-content">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        <span>预约成功</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goAiConsult = () => {
  router.push('/ai-consult')
}

const experts = ref([
  {
    name: '张敏 老师',
    rating: '4.9',
    tags: ['国家二级心理咨询师', '广州市心理学会'],
    specialty: '就业焦虑、职业决策',
    price: '150',
    bgColor: '#d6e4ff'
  },
  {
    name: '李华 老师',
    rating: '4.8',
    tags: ['国家三级心理咨询师', '8 年经验'],
    specialty: '认知行为疗法、压力管理',
    price: '120',
    bgColor: '#ffe7ba'
  },
  {
    name: '王丽 老师',
    rating: '5.0',
    tags: ['国家二级心理咨询师', '10 年经验'],
    specialty: '职业规划、自我认知',
    price: '180',
    bgColor: '#d9f7be'
  }
])

const showBookingModal = ref(false)
const showToast = ref(false)
const selectedExpert = ref(null)

const openBookingModal = (expert) => {
  selectedExpert.value = expert
  showBookingModal.value = true
}

const closeBookingModal = () => {
  showBookingModal.value = false
  selectedExpert.value = null
}

const confirmBooking = () => {
  showBookingModal.value = false
  showToast.value = true

  setTimeout(() => {
    showToast.value = false
    selectedExpert.value = null
  }, 1600)
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

/* 容器布局 */
.consult-page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8fbff;
  font-family: -apple-system, "PingFang SC", sans-serif;
  padding-bottom: 20px;
  animation: pageFadeIn 0.22s ease-out;
}

/* 顶部模拟状态栏 */
.consult-status-bar {
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  background-color: #f8fbff;
}
.consult-time { font-weight: bold; font-size: 14px; }
.consult-status-icons span { margin-left: 4px; font-size: 12px; }

/* 导航栏 */
.consult-navbar {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #f8fbff;
}
.consult-back-icon {
  font-size: 20px;
  cursor: pointer;
  color: #333;
  font-style: normal;
}
.consult-nav-title {
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin-right: 24px;
}

/* Tab 切换 (滑块样式) */
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

/* 列表头部 */
.consult-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}
.consult-section-title { font-size: 17px; font-weight: bold; color: #333; }

/* 专家卡片列表 */
.consult-expert-list {
  padding: 0 15px;
  flex: 1;
}
.consult-expert-card {
  background-color: #fff;
  border-radius: 18px;
  padding: 18px;
  margin-bottom: 12px;
  display: flex;
  position: relative;
  box-shadow: 0 2px 10px rgba(74, 144, 226, 0.03);
}

/* 左侧头像 */
.consult-card-left {
  margin-right: 15px;
}
.consult-avatar-box {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 右侧内容区 */
.consult-card-right { flex: 1; }
.consult-name-row { display: flex; justify-content: space-between; margin-bottom: 6px; }
.consult-expert-name { font-size: 16px; font-weight: bold; }
.consult-rating { color: #f5a623; font-size: 14px; font-weight: 500; }

.consult-tag-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.consult-tag {
  background-color: #f0f6ff;
  color: #5da9e9;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
}

.consult-specialty { font-size: 13px; color: #8894a0; margin-bottom: 8px; }
.consult-price { font-size: 15px; font-weight: bold; color: #333; }

/* 预约按钮 */
.consult-btn-reserve {
  position: absolute;
  right: 18px;
  bottom: 18px;
  background: linear-gradient(135deg, #ffb347 0%, #ff9f43 100%);
  color: #fff;
  border: none;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(255, 159, 67, 0.3);
  cursor: pointer;
}

/* 底部合作标识 */
.consult-coop-footer {
  text-align: center;
  padding-bottom: 10px;
}
.consult-dashed-line {
  border-top: 1px dashed #dcdfe6;
  margin: 15px 0;
  width: 100%;
}
.consult-coop-info {
  font-size: 12px;
  color: #aeb9c4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.consult-coop-icon { margin-right: 4px; }

/* 手机底部黑条模拟 */
.consult-home-indicator {
  display: none;
}

/* 弹窗遮罩层 */
.consult-modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
}

/* 弹窗主体 */
.consult-modal {
  width: 80%;
  max-width: 320px;
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(-20px);
  animation: slideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.modal-title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0 0 20px 0;
}

.modal-content {
  margin-bottom: 24px;
}

.modal-content p {
  margin: 10px 0;
  font-size: 15px;
  color: #333;
  display: flex;
  align-items: center;
}

.modal-content p span {
  color: #8894a0;
  width: 75px;
  flex-shrink: 0;
}

.modal-tip {
  font-size: 12px;
  color: #f5a623;
  margin-top: 16px;
  line-height: 1.4;
  display: block;
}

/* Toast 提示 */
.consult-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  padding: 16px 24px;
  border-radius: 16px;
  z-index: 1001;
  animation: fadeInOut 1.6s ease-in-out forwards;
}

.toast-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.toast-content span {
  color: #fff;
  font-size: 15px;
  font-weight: 500;
}

/* 动画定义 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(0px); }
  to { opacity: 1; transform: translateY(-20px); }
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translate(-50%, -40%); }
  15% { opacity: 1; transform: translate(-50%, -50%); }
  85% { opacity: 1; transform: translate(-50%, -50%); }
  100% { opacity: 0; transform: translate(-50%, -60%); }
}

.booking-modal-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.booking-modal-cancel-action,
.booking-modal-confirm-action {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 700;
  line-height: 44px;
  cursor: pointer;
  user-select: none;
  text-align: center;
}

.booking-modal-cancel-action {
  background: #f1f3f5;
  color: #666666;
}

.booking-modal-confirm-action {
  background: #ff9f3f;
  color: #ffffff;
}

.booking-modal-confirm-action::after { 
  content: "确认预约"; 
  color: #fff; 
  font-size: 15px; 
  font-weight: 700; 
  display: block; 
} 

.booking-modal-cancel-action::after { 
  content: "取消"; 
  color: #666; 
  font-size: 15px; 
  font-weight: 700; 
  display: block; 
} 

.booking-modal-confirm-action:hover::after, 
.booking-modal-confirm-action:active::after, 
.booking-modal-confirm-action:focus::after{ 
  content: "确认预约"; 
  color: #fff; 
} 

.booking-modal-cancel-action:hover::after, 
.booking-modal-cancel-action:active::after, 
.booking-modal-cancel-action:focus::after{ 
  content: "取消"; 
  color: #666; 
} 
</style>