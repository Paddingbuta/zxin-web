<template>
  <q-layout view="lHh lpr lFf">
    
    <q-page-container>
      <q-page>
        <q-carousel
          animated
          v-model="slide"
          arrows
          swipeable
          navigation
          infinite
          autoplay
          control-color="white"
          transition-prev="slide-right"
          transition-next="slide-left"
          height="639px"
        >
          <q-carousel-slide class="q-pa-none" :name="1" img-src="/statics/images/image_4.jpg">
<div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.3) !important;">
            <div class="custom-caption">
              <div class="text-h2 main_line animation_2">因为专业 所以信赖</span></div><br><br><br>
              <div class="text-h4 animation_1">专业铸就品质 诚信创造价值</div><br><br><br>
<div class="animation_2">
</div>
            </div>
</div>
          </q-carousel-slide>
          <q-carousel-slide class="q-pa-none":name="2" img-src="/statics/images/image_2.jpg">
<div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.3) !important;">
            <div class="custom-caption">
    	      <div class="text-h2 main_line animation_2" style="font-size:65px;">技术研发 服务客户</div><br><br><br>
              <div class="text-h4 animation_1">科技为本 客户至上</div><br><br><br>
<div class="animation_2">
</div>
            </div>
</div>
          </q-carousel-slide>
          <q-carousel-slide class="q-pa-none":name="3" img-src="/statics/images/image_3.jpg">
<div class="full-height full-width flex flex-center" style="background-color: rgba(0, 0, 0, 0.3) !important;">
            <div class="custom-caption">
    	      <div class="text-h2 main_line animation_2" style="font-size:65px;">源自澳洲 锆然天成</span></div><br><br><br>
              <div class="text-h4 animation_1">锆以为贵 质感非凡</div><br><br><br>
<div class="animation_2">
</div>
            </div>
</div>
          </q-carousel-slide>
        </q-carousel>
        <!--
        <div class="row" style="padding: 80px 20px;">
          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;  transform: scale(0.9);">


              <q-card-section>
                <q-icon size="110px" name="ballot" :style="'color:'+theme_color"/>
                <div class="text-h6">研发创新</div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                20余年专注陶瓷材料研发
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;  transform: scale(0.9);">


              <q-card-section>
                <q-icon size="110px" name="view_comfy" :style="'color:'+theme_color"/>
                <div class="text-h6">绿色生产</div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                环保工艺践行可持续发展
              </q-card-section>
            </q-card>
          </div>
          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;  transform: scale(0.9);">


              <q-card-section>
                <q-icon size="110px" name="people" :style="'color:'+theme_color"/>
                <div class="text-h6">专业团队</div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                百人专业技术团队保驾护航           
              </q-card-section>
            </q-card>
          </div>

          <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
            <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px;  transform: scale(0.9);">


              <q-card-section>
                <q-icon size="110px" name="people" :style="'color:'+theme_color"/>
                <div class="text-h6">品质认证</div>

              </q-card-section>

              <q-card-section class="q-pt-none">
                ISO9001质量管理体系认证
              </q-card-section>
            </q-card>
          </div>
        </div>
        -->

        <!--
<div class="row" id="id_news">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center">新闻资讯
              <br>
              <span
                class="text-center text-grey text-h6">News Center</span>
            </h5>
          </div>
        </div>
        <div class="row text-center flex flex-center">
          <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12 q-gutter-md flex flex-center">
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card @mouseover="hoverOver(1)" @mouseout="hoverOutTimeout(1)" style="border: none;" class="my-card text-center box-shadow" flat bordered>
                <q-img
                  src="/statics/images/about_1.jpg"
                />

                <q-card-section class="text-left">

                  <div :class="about_heading_1" :style="'color: ' + about_heading_color_1" class="about_heading_1 text-h6 q-mt-sm q-mb-xs">LATEST NEWS 1</div>
                  <div class="text-caption text-grey-9 q-mt-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
<div><br>
<q-btn size="sm" :style="'background:'+ theme_color +'; color: white'" label="READ MORE"/>
</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card @mouseover="hoverOver(2)" @mouseout="hoverOutTimeout(2)" :style="'color: ' + about_heading_color_2" style="border: none;" class="my-card text-center box-shadow" flat bordered>
                <q-img
                  src="/statics/images/about_2.jpg"
                />

                <q-card-section class="text-left">

                  <div :class="about_heading_2" :style="'color: ' + about_heading_color_2" class="text-h6 q-mt-sm q-mb-xs">LATEST NEWS 2</div>
                  <div class="text-caption text-grey-9 q-mt-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
<div><br>
<q-btn size="sm" :style="'background:'+ theme_color +'; color: white'" label="READ MORE"/>
</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <q-card @mouseover="hoverOver(3)" @mouseout="hoverOutTimeout(3)" style="border: none;" class="my-card text-center box-shadow" flat bordered>
                <q-img
                  src="/statics/images/about_3.jpg"
                />

                <q-card-section class="text-left">

                  <div :class="about_heading_3" :style="'color: ' + about_heading_color_3" class="text-h6 q-mt-sm q-mb-xs">LATEST NEWS 3</div>
                  <div class="text-caption text-grey-9 q-mt-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </div>
<div><br>
<q-btn size="sm" :style="'background:'+ theme_color +'; color: white'" label="READ MORE"/>
</div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <br>
        <br>
-->  
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
    </q-page-container>
  </q-layout>
</template>

<style src="@quasar/quasar-ui-qflashcard/dist/index.css"></style>

<script>
  import { scroll } from 'quasar'
  const { getScrollTarget, setScrollPosition } = scroll
    
    import {QFlashcard, QFlashcardSection} from '@quasar/quasar-ui-qflashcard'

    export default {
        components: {
            QFlashcard,
            QFlashcardSection
        },
        data() {
            return {
                slide: 1,
		            review_slide: 'style',
                selected_tab: 't_0',
                team_slide: 1,
                bg_color: 'rgb(0, 163, 82)',
                hover: false,
                active: false,
                theme_color: 'rgb(0, 163, 82)',
                background_style: 'background-color:rgba(0, 163, 82, 0.9);',
                about_heading_1: [],
                about_heading_2: [],
                about_heading_3: [],
                about_heading_color_1: '#424242',
                about_heading_color_2: '#424242',
                about_heading_color_3: '#424242',
                themeColor: '#00a352',
                gridItems: [
                  // 竖图项目（3:4比例）
                  { type: 'vertical', image: '/statics/images/a1.jpg', ratio: 3/4, title: '会议中心' },
                  { type: 'vertical', image: '/statics/images/b1.jpg', ratio: 6/8, title: '广交会' },
                  { type: 'vertical', image: '/statics/images/a13.jpg', ratio: 6/8, title: '广交会' },
                  { type: 'vertical', image: '/statics/images/a14.jpg', ratio: 6/8, title: '广交会' },
                  //{ type: 'text', icon: 'business', title: '25年行业经验', desc: '专业陶瓷材料研发生产' },
                  { type: 'vertical', image: '/statics/images/a2.jpg', ratio: 3/4, title: '研发中心'},
                  { type: 'vertical', image: '/statics/images/b2.jpg', ratio: 6/8, title: '产品物流'},
                  { type: 'vertical', image: '/statics/images/a7.jpg', ratio: 3/4, title: '熔块生产车间' },
                  { type: 'vertical', image: '/statics/images/a3.jpg', ratio: 3/4, title: '质检流程' },
                  { type: 'vertical', image: '/statics/images/a4.jpg', ratio: 3/4, title: '质检流程' },
                  { type: 'vertical', image: '/statics/images/a5.jpg', ratio: 3/4, title: '质检流程' },
                  { type: 'vertical', image: '/statics/images/a6.jpg', ratio: 3/4, title: '高温水淬' },
                  { type: 'vertical', image: '/statics/images/a10.jpg', ratio: 3/4, title: '待发货产品' },
                  { type: 'vertical', image: '/statics/images/a8.jpg', ratio: 3/4, title: '创新奖项' },
                  { type: 'vertical', image: '/statics/images/a11.jpg', ratio: 3/4, title: '访问客户' },
                  { type: 'vertical', image: '/statics/images/a12.jpg', ratio: 3/4, title: '校招会' },
                ]
            }
        },
        computed: {
            style() {
                return {
                    width: '340px',
                    height: '263px',
                    backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
                    textAlign: 'center',
                    boxShadow: '1px 1px 2px #e6e6e6',
                    display: 'inline-block'
                }
            },
            team_style() {
                return {
                    width: '260px',
                    height: '263px',
                    backgroundImage: `url('https://raw.githubusercontent.com/quasarframework/quasar-ui-qflashcard/dev/demo/src/statics/bgimg.jpg')`, // eslint-disable-line
                    textAlign: 'center',
                    boxShadow: '1px 1px 2px #e6e6e6',
                    display: 'inline-block'
                }
            }
        },
        methods: {
          scrollToElement (id) {
            let el = document.getElementById(id)
            const target = getScrollTarget(el)
            const offset = el.offsetTop + 3
            const duration = 900
            setScrollPosition(target, offset, duration)
          },
            changeBgColor() {
                this.theme_color = this.bg_color;
                this.background_style = 'background-color:' + this.bg_color.split(')')[0] + ',0.7)';
            },
            hoverOver: function(index) {
              this['about_heading_color_' + index] = this.theme_color;
              this['about_heading_' + index] = ['animated', 'bounceIn'];              
            },
            hoverOutTimeout: function(index) {
              this['about_heading_color_' + index] = '#424242';
              setTimeout(() => {
                this['about_heading_' + index] = [];                
              }, 1000);              
            },
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

<style lang="sass" scoped>
    .main_line
      font-size: 75px;
      letter-spacing: 5px;
      line-height: 60px;
      font-weight: 600;

    .custom-caption
      text-align: center;
      padding: 12px;
      color: white;

    .animation_1
      -webkit-animation: bounceIn 1s ease-in 800ms both;
      animation: bounceIn 1s ease-in 800ms both;

    .animation_2
      -webkit-animation: flipInX 2s ease-in-out 800ms both;
      animation: flipInX 1s ease-in-out 800ms both;

    .animation_3
      -webkit-animation: lightSpeedIn 1s ease-in 800ms both;
      animation: lightSpeedIn 1s ease-in 800ms both;

    .description
      padding: 10px
      background-color: black
      color: white
      box-shadow: 1px 1px 2px #e6e6e6

    .my-header
      width: 200px
      top: 0
      height: 45px
      color: black
      background-color: rgba(255,255,255, 0.8)
      text-transform: uppercase
      text-align: center
      font-size: 17px
      margin: 20px 0 0 68px
      padding: 25px

    .my-text
      width: 100%
      top: 0
      height: 90px
      color: white
      text-align: center
      font-size: 15px
      margin: 79px 0 0 0
      padding: 20px
      line-height: normal
      font-family: Georgia, serif

    .my-button-container
      width: 100%

    .my-button
      text-decoration: none
      text-transform: uppercase
      margin: 0 0 20px 0
      text-align: center
      padding: 7px 14px
      background-color: #000
      color: #fff
      text-transform: uppercase
      box-shadow: 0 0 1px #000
      transition-delay: 0.2s

    .my-button:hover
      box-shadow: 0 0 5px #000

    .box-shadow:hover
      box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12) !important;

    .my-card
      width: 350px
      max-width: 350px
      margin-top: 10px

    .team-header
      width: 100%
      top: 0
      height: 45px
      color: white
      text-transform: uppercase
      text-align: center
      font-size: 17px
      margin: 60px 0 0 0
      padding: 12px

    .team-text
      width: 100%
      top: 0
      height: 90px
      color: white
      text-align: center
      font-size: 15px
      margin: 100px 0 0 0
      padding: 20px
      line-height: normal
      font-family: Georgia, serif
      font-style: italic
    
    .quote
      background: url(/statics/images/parallax.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    
    .pricing
      background: url(/statics/images/pricing.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    
    .contact_us
      background: url(/statics/images/contact_us.jpg);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    
    .custom_tab
      width: 130px;
</style>
<style lang="scss" scoped>
.grid-container {
  background-color: #e6f2ff;  /* 淡蓝背景 */
  padding: 60px 0;            /* 上下60px间距，左右0 */

  width: 100%;
  box-sizing: border-box;
}
.grid-wrapper {
  display: grid;
  gap: 1.5rem;
  width: 80%;
  margin: 0 auto;  /* 内容居中 */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 150px;
  padding: 0 20px; /* 左右内边距，避免太贴边 */
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