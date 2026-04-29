<template>
  <div class="explore-page">
    <!-- Fixed Background Layer -->
    <div class="explore-bg"></div>

    <!-- Floating Header Left: Store & Mission Bag -->
    <div class="explore-header">
      <!-- Store Icon and Label -->
      <div class="explore-header-item explore-animate-float">
        <button class="explore-header-btn">
          <span class="explore-icon-text">🏪</span>
        </button>
        <div class="explore-header-label">
          <span>商店</span>
        </div>
      </div>
      <!-- Mission Bag Icon and Label -->
      <div class="explore-header-item explore-animate-float-slow">
        <button class="explore-header-btn">
          <span class="explore-icon-text">🎒</span>
        </button>
        <div class="explore-header-label">
          <span>任务包</span>
        </div>
      </div>
    </div>

    <!-- Path Container (Canvas) -->
    <main class="explore-main">
      <div class="explore-map-container">
        <!-- SVG Path Line -->
        <svg class="explore-svg-path" preserveAspectRatio="none" viewBox="0 0 400 850">
          <!-- Soft Shadow Layer -->
          <path d="M 300,120 L 100,320 L 300,520 L 100,720" fill="transparent" stroke="rgba(0,0,0,0.03)" stroke-linecap="round" stroke-linejoin="round" stroke-width="70" transform="translate(0, 12)"></path>
          <!-- Main Path -->
          <path d="M 300,120 L 100,320 L 300,520 L 100,720" fill="transparent" stroke="#fdfbf0" stroke-linecap="round" stroke-linejoin="round" stroke-width="60"></path>
          <!-- Dashed Center Line -->
          <path d="M 300,120 L 100,320 L 300,520 L 100,720" fill="transparent" stroke="#e8e1cf" stroke-dasharray="12, 18" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
        </svg>

        <!-- Healing Decorative Elements -->
        <!-- Clouds -->
        <div class="explore-decor explore-cloud-1 explore-animate-float-slow">☁️</div>
        <div class="explore-decor explore-cloud-2 explore-animate-float">☁️</div>
        
        <!-- Floating Petals -->
        <div class="explore-petal explore-petal-1">🌸</div>
        <div class="explore-petal explore-petal-2">🌸</div>
        <div class="explore-petal explore-petal-3">🌸</div>
        
        <!-- Nature -->
        <div class="explore-decor explore-nature-1 explore-animate-float-slow">🦋</div>
        <div class="explore-decor explore-nature-2">🌿</div>
        <div class="explore-decor explore-nature-3">🌼</div>
        <div class="explore-decor explore-nature-4">🌳</div>
        <div class="explore-decor explore-nature-5 explore-animate-float">🦋</div>
        <div class="explore-decor explore-nature-6">🍀</div>
        <div class="explore-decor explore-nature-7">🌷</div>
        <div class="explore-decor explore-nature-8">🍄</div>

        <!-- Nodes -->
        <!-- Node 4: 家园 -->
        <div class="explore-node explore-node-4 explore-animate-float" @click="goTo('/garden')">
          <button class="explore-node-btn explore-node-btn-large explore-ambient-glow">
            <span class="explore-node-icon explore-node-icon-large">🌲</span>
          </button>
          <div class="explore-node-label">
            <span>家园</span>
          </div>
        </div>

        <!-- Node 3: 社区 -->
        <div class="explore-node explore-node-3 explore-animate-float-slow" @click="goTo('/community')">
          <button class="explore-node-btn explore-ambient-glow">
            <span class="explore-node-icon">👥</span>
          </button>
          <div class="explore-node-label">
            <span>社区</span>
          </div>
        </div>

        <!-- Node 2: 心理支持 -->
        <div class="explore-node explore-node-2 explore-animate-float" @click="goTo('/ai-consult')">
          <button class="explore-node-btn explore-ambient-glow">
            <span class="explore-node-icon">💬</span>
          </button>
          <div class="explore-node-label">
            <span>心理支持</span>
          </div>
        </div>

        <!-- Node 1: 心理测评 -->
        <div class="explore-node explore-node-1 explore-animate-float-slow" @click="goTo('/emotion')">
          <button class="explore-node-btn explore-ambient-glow">
            <span class="explore-node-icon">📖</span>
          </button>
          <div class="explore-node-label">
            <span>心理测评</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');

.explore-page {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #0b2012;
}

/* Background Layer to prevent stretching on scroll */
.explore-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #e8f5e9 0%, #fff9f0 100%);
  z-index: 0;
  pointer-events: none;
}

/* Floating Header Left */
.explore-header {
  position: fixed;
  top: 24px;
  left: 16px;
  display: flex;
  gap: 16px;
  z-index: 40;
  align-items: center;
}

.explore-header-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.explore-header-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: 4px solid white;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  cursor: pointer;
  outline: none;
}
.explore-header-btn:hover { transform: scale(1.05); }
.explore-header-btn:active { transform: scale(0.95); }

.explore-icon-text {
  font-size: 24px;
  filter: drop-shadow(0 4px 3px rgba(0,0,0,0.07));
}

.explore-header-label {
  margin-top: 8px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 9999px;
  padding: 4px 14px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  font-weight: 700;
  font-size: 11px;
  color: #1f2937;
}

/* Path Container */
.explore-main {
  flex-grow: 1;
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 80px; /* Space for top header */
  padding-bottom: 120px; /* Space for bottom layout tabbar */
}

/* 
  Responsive map container.
  212.5% padding-bottom comes from viewBox 850 / 400 = 2.125
*/
.explore-map-container {
  position: relative;
  width: 100%;
  padding-bottom: 212.5%; 
}

.explore-svg-path {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* Decorative Elements */
.explore-decor {
  position: absolute;
  pointer-events: none;
}

/* Converted to percentages relative to map container */
.explore-cloud-1 { top: 5%; left: 60%; font-size: 32px; opacity: 0.4; }
.explore-cloud-2 { top: 40%; left: 5%; font-size: 40px; opacity: 0.3; }

.explore-nature-1 { top: 10%; left: 15%; font-size: 20px; }
.explore-nature-2 { top: 22%; right: 10%; font-size: 24px; }
.explore-nature-3 { top: 38%; left: 20%; font-size: 20px; }
.explore-nature-4 { top: 48%; right: 25%; font-size: 32px; opacity: 0.8; }
.explore-nature-5 { top: 62%; left: 10%; font-size: 20px; }
.explore-nature-6 { top: 72%; right: 15%; font-size: 26px; }
.explore-nature-7 { top: 85%; left: 45%; font-size: 20px; }
.explore-nature-8 { top: 92%; right: 30%; font-size: 26px; }

/* Nodes */
.explore-node {
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  cursor: pointer;
}

/* Positioning based on viewBox 0 0 400 850 */
.explore-node-4 { top: 14.1%; left: 75%; }
.explore-node-3 { top: 37.6%; left: 25%; }
.explore-node-2 { top: 61.1%; left: 75%; }
.explore-node-1 { top: 84.7%; left: 25%; }

.explore-node-btn {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  border: 4px solid white;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  outline: none;
}
.explore-node-btn-large {
  width: 84px;
  height: 84px;
}

.explore-node-btn:hover { transform: scale(1.05); }
.explore-node-btn:active { transform: scale(0.95); }

.explore-ambient-glow {
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.8));
}

.explore-node-icon {
  font-size: 36px;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.05));
}
.explore-node-icon-large {
  font-size: 42px;
}

.explore-node-label {
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 9999px;
  padding: 4px 16px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  font-weight: 700;
  font-size: 13px;
  color: #1f2937;
}

/* Animations */
@keyframes explore-float {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
.explore-animate-float { animation: explore-float 4s ease-in-out infinite; }
.explore-animate-float-slow { animation: explore-float 6s ease-in-out infinite; }

@keyframes explore-drift {
  0% { transform: translateX(0px) rotate(0deg); opacity: 0; }
  10% { opacity: 0.8; }
  90% { opacity: 0.8; }
  100% { transform: translateX(100px) translateY(50px) rotate(360deg); opacity: 0; }
}

.explore-petal {
  position: absolute;
  pointer-events: none;
  animation: explore-drift 10s linear infinite;
}
.explore-petal-1 { top: 15%; left: 20%; font-size: 18px; animation-delay: 0s; }
.explore-petal-2 { top: 45%; left: 70%; font-size: 16px; animation-delay: 3s; }
.explore-petal-3 { top: 75%; left: 30%; font-size: 14px; animation-delay: 6s; }

</style>
