<template>
  <div class="home-page">
    <header class="header">
      <div class="user-info">
        <div class="avatar-box">
          <i class="user-icon">👤</i>
        </div>
        <div class="text-group">
          <h1 class="welcome">你好，小宇</h1>
          <p class="motto">慢慢来，你已经在路上了</p>
        </div>
      </div>
      <div class="action-icons">
        <span class="icon-sprout" @click="handleCheckIn" style="cursor: pointer;">
          <span :style="{ filter: isCheckedIn ? 'none' : 'grayscale(100%)' }">🌱</span>
        </span>
        <div class="notification" @click="handleReminder" style="cursor: pointer;" :class="{ 'disabled-bg': !isReminderOn }">
          <span class="bell">🔔</span>
          <span class="badge" v-if="isReminderOn">15:00</span>
        </div>
      </div>
    </header>

    <section class="section-card">
      <h2 class="section-title">
        <span class="icon-blue">📋</span> 心理测评
      </h2>
      <div class="test-grid">
        <div class="test-item">
          <router-link to="/emotion" style="text-decoration: none; color: inherit;">
            <span class="emoji">😌</span>
            <h3>情绪</h3>
            <p>焦虑 · 抑郁<br/>压力 · 动机<br/>心理韧性</p>
          </router-link>
        </div>
        <div class="test-item">
          <router-link to="/cognition" style="text-decoration: none; color: inherit;">
            <span class="emoji">🧠</span>
            <h3>认知</h3>
            <p>自我认知<br/>职业认知<br/>职业决策</p>
          </router-link>
        </div>
        <div class="test-item">
          <router-link to="/occupation" style="text-decoration: none; color: inherit;">
            <span class="emoji">🔍</span>
            <h3>职业</h3>
            <p>职业兴趣匹配<br/>职业能力倾向</p>
          </router-link>
        </div>
      </div>
      <div class="special-btn" @click="$router.push('/suicide-test')" style="cursor: pointer;">
        <span class="warning-icon">⚠️</span> 自杀意念专项
      </div>
    </section>

    <section class="section-card">
      <h2 class="section-title">
        <span class="icon-blue">💙</span> 心理支持
      </h2>
      <div class="support-grid">
        <div class="support-item" @click="$router.push('/ai-consult')" style="cursor: pointer;">
          <span class="emoji-large">🤖</span>
          <h3>心理咨询</h3>
          <p>7×24h 即时疏导<br/>专业咨询师一对一</p>
        </div>
        <div class="support-item">
          <router-link to="/emotion-regulation" style="text-decoration: none; color: inherit;">
            <span class="emoji-large">🧘</span>
            <h3>情绪调节</h3>
            <p>经典心理学技术<br/>实用调节方法</p>
          </router-link>
        </div>
      </div>
    </section>

    <Transition name="fade">
      <div v-if="toast.show" class="custom-toast">
        <span class="toast-icon">🌱</span> 
        <span class="toast-icon">✅</span> 
        <span class="toast-text">{{ toast.message }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isCheckedIn = ref(true)  
const isReminderOn = ref(false) 

const toast = ref({
  show: false,
  message: '',
  timer: null
})

const showToast = (msg) => {
  if (toast.value.timer) {
    clearTimeout(toast.value.timer)
  }
  
  toast.value.message = msg
  toast.value.show = true
  
  toast.value.timer = setTimeout(() => {
    toast.value.show = false
  }, 2000)
}

const handleCheckIn = () => {
  isCheckedIn.value = !isCheckedIn.value
  const msg = isCheckedIn.value ? '今日打卡已完成' : '今日打卡已取消'
  showToast(msg)
}

const handleReminder = () => {
  isReminderOn.value = !isReminderOn.value
  const msg = isReminderOn.value ? '预约提醒已开启' : '预约提醒已关闭'
  showToast(msg)
}
</script>

<style scoped>
.home-page {
  padding: 15px;
  background-color: #f8fbff;
  min-height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px 25px;
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

.welcome {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.motto {
  font-size: 13px;
  color: #99aab5;
  margin: 4px 0 0;
}

.action-icons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.notification {
  display: flex;
  align-items: center;
  background: #ff9d42;
  padding: 4px 10px;
  border-radius: 15px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  transition: background 0.3s ease;
  min-height: 24px; /* 保证内部元素隐藏时，高度不塌陷 */
}

.disabled-bg {
  background: #ccc;
}

.badge {
  margin-left: 4px;
}

.section-card {
  background: white;
  border-radius: 25px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 8px 20px rgba(230, 240, 255, 0.7);
}

.section-title {
  font-size: 18px;
  color: #1a3a5f;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.test-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}

.test-item {
  background: #fff;
  border: 1px solid #eef4fe;
  border-radius: 20px;
  padding: 15px 5px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.02);
}

.test-item h3 {
  font-size: 15px;
  margin: 10px 0;
  color: #333;
}

.test-item p {
  font-size: 11px;
  color: #7d8c97;
  line-height: 1.5;
}

.emoji { font-size: 24px; }

.special-btn {
  background: #fff2e8;
  color: #e67e22;
  text-align: center;
  padding: 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #ffdab9;
}

.support-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.support-item {
  background: #fff;
  border: 1px solid #eef4fe;
  border-radius: 20px;
  padding: 20px 10px;
  text-align: center;
}

.emoji-large { font-size: 40px; }

.support-item h3 {
  font-size: 16px;
  margin: 15px 0 8px;
}

.support-item p {
  font-size: 12px;
  color: #99aab5;
  line-height: 1.6;
}

/* ================== 重构的 Toast 样式 ================== */
.custom-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #dcedd6; /* 浅绿背景 */
  color: #1f4e25;            /* 深绿文字 */
  padding: 12px 28px;
  border-radius: 30px;       /* 胶囊圆角 */
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 9999;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* 添加阴影增加悬浮感 */
}

.toast-icon {
  font-size: 18px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -40%); /* 添加轻微的位移动画 */
}
</style>