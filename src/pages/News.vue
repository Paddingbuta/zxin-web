<template>
    <section class="news-section q-pa-xl bg-grey-2">
      <!-- 标题部分 -->
      <div class="row q-mb-xl">
        <div class="col-12 text-center">
          <h5 class="text-h4 text-weight-bold">
            新闻资讯
            <span class="text-h6 text-grey-7 block q-mt-sm">News Center</span>
          </h5>
        </div>
      </div>
  
      <!-- 新闻卡片 -->
      <div class="row q-col-gutter-lg justify-center">
        <div 
          v-for="(news, index) in newsList" 
          :key="index"
          class="col-12 col-sm-6 col-md-4"
        >
          <q-card 
            class="news-card"
            flat
            bordered
            :style="cardHoverStyle(index)"
          >
            <!-- 新闻图片 -->
            <q-img
              :src="news.image"
              :ratio="16/9"
              class="news-image"
            >
              <div class="absolute-bottom q-pa-sm text-white text-left">
                <div class="text-h6">{{ news.title }}</div>
                <div class="text-caption">{{ news.date }}</div>
              </div>
              <div class="absolute-full hover-overlay"/>
            </q-img>
  
            <!-- 新闻内容 -->
            <q-card-section class="q-pt-md">
              <div class="text-body2 news-content">
                {{ news.content }}
              </div>
            </q-card-section>
  
            <!-- 操作按钮 -->
            <q-card-actions class="q-px-md q-pb-md">
              <q-btn
                unelevated
                :color="themeColor"
                text-color="white"
                label="阅读全文"
                class="full-width"
                @click="handleReadMore(news)"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'NewsSection',
    data() {
      return {
        themeColor: '#00a352',
        hoverIndex: -1,
        newsList: [
          {
            title: '新产品发布会圆满成功',
            date: '2023-07-25',
            content: '公司最新研发的环保陶瓷材料正式发布，该材料具有优异的耐高温和抗腐蚀性能...',
            image: '/statics/images/b1.jpg'
          },
          {
            title: '荣获行业创新大奖',
            date: '2023-07-22', 
            content: '在年度行业评选中，我司凭借先进的生产工艺荣获"技术创新示范企业"称号...',
            image: '/statics/images/a8.jpg'
          },
          {
            title: '新生产基地正式投产',
            date: '2023-07-18',
            content: '投资5亿元建设的新生产基地正式投入使用，年产能提升至500万件...',
            image: '/statics/images/a7.jpg'
          }
        ]
      }
    },
    methods: {
      cardHoverStyle(index) {
        return {
          transform: this.hoverIndex === index ? 'translateY(-5px)' : 'none',
          transition: 'transform 0.3s ease'
        }
      },
      handleReadMore(news) {
        // 处理阅读更多逻辑
        console.log('查看新闻详情:', news.title)
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .news-section {
    .news-card {
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      
      &:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        
        .hover-overlay {
          opacity: 1;
        }
      }
  
      .news-image {
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }
      }
  
      .hover-overlay {
        background: rgba(0,0,0,0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
  
      .news-content {
        line-height: 1.6;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  
    @media (max-width: 600px) {
      .news-card {
        margin-bottom: 20px;
        
        .text-h6 {
          font-size: 1.1rem;
        }
      }
    }
  }
  </style>