import { createRouter, createWebHistory } from 'vue-router'

import LayoutView from '@/views/index/layout.vue'
import MineView from '@/views/index/mine.vue'
import ExploreView from '@/views/index/explore.vue'
import HomeView from '@/views/index/home.vue'
import GardenView from '@/views/index/garden.vue'
import CommunityView from '@/views/index/community.vue'
import AiConsultView from '@/views/index/AIConsult.vue'
import EmotionRegulationView from '@/views/index/EmotionRegulation.vue'
import EmotionView from '@/views/index/emotion.vue'
import SuicideTestView from '@/views/assessment/SuicideTest.vue'
import ExpertConsultationView from '@/views/consult/ExpertConsultation.vue'
import ConsultationRecordView from '@/views/consult/ConsultationRecord.vue'
import CognitionView from '@/views/index/cognition.vue'
import OccupationView from '@/views/index/occupation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',
      name: 'layout', 
      component: LayoutView,
      redirect: '/home',
      children: [
      {path: 'mine', name: 'mine', component: MineView},
      {path: 'explore', name: 'explore', component: ExploreView},
      {path: 'home', name: 'home', component: HomeView},
      {path: 'garden', name: 'garden', component: GardenView},
      {path: 'community', name: 'community', component: CommunityView},
      {path: 'ai-consult', name: 'ai-consult', component: AiConsultView},
      {path: 'emotion-regulation', name: 'emotion-regulation', component: EmotionRegulationView},
      {path: 'emotion', name: 'emotion', component: EmotionView},
      {path: 'cognition', name: 'cognition', component: CognitionView},
      {path: 'occupation', name: 'occupation', component: OccupationView},
      {path: 'expert-consultation', name: 'expert-consultation', component: ExpertConsultationView}
     ]
    },
    {
      path: '/suicide-test',
      name: 'suicide-test',
      component: SuicideTestView
    },
    {
      path: '/consultation-record',
      name: 'consultation-record',
      component: ConsultationRecordView
    }
  ]
})

export default router
