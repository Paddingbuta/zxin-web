<template>
    <q-page class="q-pa-xl">
      <div class="grid-container">
        <!-- 标题 -->
        <!-- 动态网格 -->
        <div class="grid-wrapper">
          <div 
            v-for="(item, index) in gridItems"
            :key="index"
            class="grid-item"
            :class="`type-${item.type}`"
            :style="gridItemStyle(item)"
            @click="handleClick(item)"
          >
            <q-img
              v-if="item.image"
              :src="item.image"
              :ratio="item.ratio"
              class="grid-image"
            >
              <div class="image-overlay flex flex-center column">
                <div class="text-h6 text-white text-center">{{ item.title }}</div>
                <div class="text-caption text-grey-3 q-mt-sm">{{ item.desc }}</div>
              </div>
            </q-img>
  
            <div v-else class="text-card flex flex-center column">
              <q-icon :name="item.icon" size="xl" :color="themeColor"/>
              <div class="text-h6 q-mt-md">{{ item.title }}</div>
              <div class="text-caption text-grey-7 q-mt-sm text-center">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        themeColor: '#00a352',
        gridItems: [
          // 竖图项目（3:4比例）
          { type: 'vertical', image: '/statics/images/a1.jpg', ratio: 3/4, title: '生产车间', desc: '全自动生产线实景' },
          { type: 'horizontal', image: '/statics/images/b1.jpg', ratio: 16/12, title: '企业全景', desc: '现代化工业园区' },
          { type: 'text', icon: 'business', title: '25年行业经验', desc: '专业陶瓷材料研发生产' },
          { type: 'vertical', image: '/statics/images/a2.jpg', ratio: 3/4, title: '质检流程', desc: '严格的质量检测体系' },
          { type: 'horizontal', image: '/statics/images/b2.jpg', ratio: 16/12, title: '企业全景', desc: '现代化工业园区' },
          { type: 'text', icon: 'business', title: '25年行业经验', desc: '专业陶瓷材料研发生产' },
          { type: 'vertical', image: '/statics/images/a3.jpg', ratio: 3/4, title: '质检流程', desc: '严格的质量检测体系' },
          { type: 'horizontal', image: '/statics/images/b3.png', ratio: 16/12, title: '企业全景', desc: '现代化工业园区' },
          { type: 'text', icon: 'business', title: '25年行业经验', desc: '专业陶瓷材料研发生产' },
          { type: 'vertical', image: '/statics/images/a4.jpg', ratio: 3/4, title: '质检流程', desc: '严格的质量检测体系' },
          { type: 'horizontal', image: '/statics/images/b4.png', ratio: 16/9, title: '企业全景', desc: '现代化工业园区' },
          { type: 'vertical', image: '/statics/images/a5.jpg', ratio: 3/4, title: '质检流程', desc: '严格的质量检测体系' },
          { type: 'vertical', image: '/statics/images/a6.jpg', ratio: 3/4, title: '质检流程', desc: '严格的质量检测体系' },
          { type: 'horizontal', image: '/statics/images/b5.png', ratio: 16/9, title: '企业全景', desc: '现代化工业园区' },
          { type: 'vertical', image: '/statics/images/a7.jpg', ratio: 3/4, title: '质检流程', desc: '严格的质量检测体系' },
        ]
      }
    },
    methods: {
      gridItemStyle(item) {
        const styles = {
          vertical: { gridColumn: 'span 1', gridRow: 'span 2' },
          horizontal: { gridColumn: 'span 2', gridRow: 'span 1' },
          text: { 
            gridColumn: 'span 1', 
            gridRow: 'span 1',
            background: '#f8f9fa',
            borderRadius: '8px'
          }
        }
        return styles[item.type]
      },
      handleClick(item) {
        // 处理点击事件
        console.log('点击项目:', item.title)
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .grid-container {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .grid-wrapper {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 200px;
  }
  
  .grid-item {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
  
    &.type-horizontal {
      grid-column: span 2;
    }
  
    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.2);
      padding: 20px;
    }
  
    .text-card {
      padding: 30px;
      height: 100%;
      transition: all 0.3s;
      
      &:hover {
        background: rgba(0,163,82,0.05);
      }
    }
  }
  
  @media (max-width: 768px) {
    .grid-wrapper {
      grid-template-columns: 1fr;
      
      .grid-item {
        grid-column: span 1 !important;
        grid-row: span 1 !important;
      }
    }
  }
  .grid-image {
    transition: transform 0.3s ease;
    transform-origin: center center;

    &:hover {
        transform: scale(1.05);
    }
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    // 保证容器隐藏溢出部分
    .grid-item {
    overflow: hidden; // 确保这个属性存在
    }
    .grid-item.type-horizontal {
    grid-column: span 3;  // 保持横向占2列
    grid-row: span 1;     // 高度保持单行
    }
  </style>