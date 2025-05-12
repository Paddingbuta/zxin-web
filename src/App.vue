<template>
  <q-layout id="q-app" view="lHh lpr lff">
    <!-- 头部导航 -->
    <q-header class="q-py-sm" style="background-color: #ffffff;" :style="'border-bottom: 2px solid '+ theme_color">
      <q-toolbar>
        <div @click="$router.push('/')" style="display: flex; align-items: center; cursor: pointer; padding-left: 30px;">
          <img :src="require('./statics/icons/main_logo.png')" alt="Logo" style="height: 55px; margin-right: 15px;">
          <span :style="'font-size: 30px; color:' + theme_color + '; font-weight: bold'" class="text-h5 q-mr-md hover-highlight">
            庄信科技
          </span>
        </div>
        <q-space></q-space>
        <q-tabs v-model="selected_tab" shrink>
          <q-tab name="t_0" class="q-mr-sm q-py-xs custom_tab" 
                 @click="$router.push('/')" style="width:120px;min-height:auto !important;color: black" label="首页" />
          <q-tab name="t_1" class="q-mr-sm q-py-xs custom_tab" 
                 @click="$router.push('/about')" style="width:120px;min-height:auto !important;color: black" label="公司简介" />
          <q-tab name="t_2" class="q-mr-sm q-py-xs custom_tab" 
                 @click="$router.push('/products')" style="width:120px;min-height:auto !important;color: black" label="产品展示" />
          <q-tab name="t_4" class="q-mr-sm q-py-xs custom_tab" 
                 @click="$router.push('/news')" style="width:120px;min-height:auto !important;color: black" label="新闻资讯" />
          <q-tab name="t_5" class="q-mr-sm q-py-xs custom_tab" 
                 @click="$router.push('/contact')" style="width:120px;min-height:auto !important;color: black" label="联系我们" />
        <!--  <q-btn class="q-mr-md" size="12px" :style="'min-height:auto !important;background:'+ theme_color +'; color: white; padding:1px'" 
                 dense icon="color_lens">
            <q-tooltip transition-show="flip-right" transition-hide="flip-left" self="center left" anchor="center right">
              Theme color
            </q-tooltip>
            <q-menu anchor="bottom left" self="bottom right" transition-show="flip-right" transition-hide="flip-left">
              <q-color v-model="bg_color" no-header no-footer default-view="palette" class="my-picker" @input="changeBgColor()" />
            </q-menu> -->
          </q-btn>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <!-- 页面内容 -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- 页脚 -->
    <q-footer class="flex flex-center" style="background-color: #2c3e50; min-height: 64px;" :style="'border-top: 2px solid '+ theme_color">
      <div class="full-width row justify-between items-center q-px-xl" style="max-width: 1400px; margin: 0 auto">
        <!-- 左侧版权信息 -->
        <div class="text-caption text-grey-5" style="margin-left: 2%">
          唐山市庄信科技有限公司 版权所有 冀ICP备05028416号
        </div>

        <!-- 右侧导航链接 -->
        <div class="q-gutter-x-lg" style="margin-right: 2%">
          <q-btn 
            flat 
            dense 
            no-caps 
            :style="{ 
              color: $route.path === '/' ? theme_color : '#9e9e9e',
              fontSize: '0.9rem',
              padding: '0 12px'
            }"
            label="首页" 
            @click="$router.push('/')"
          />
          <q-btn 
            flat 
            dense 
            no-caps 
            :style="{ 
              color: $route.path === '/about' ? theme_color : '#9e9e9e',
              fontSize: '0.9rem',
              padding: '0 12px'
            }"
            label="公司简介" 
            @click="$router.push('/about')"
          />
          <q-btn 
            flat 
            dense 
            no-caps 
            :style="{ 
              color: $route.path === '/products' ? theme_color : '#9e9e9e',
              fontSize: '0.9rem',
              padding: '0 12px'
            }"
            label="产品展示" 
            @click="$router.push('/products')"
          />
          <q-btn 
            flat 
            dense 
            no-caps 
            :style="{ 
              color: $route.path === '/news' ? theme_color : '#9e9e9e',
              fontSize: '0.9rem',
              padding: '0 12px'
            }"
            label="新闻资讯" 
            @click="$router.push('/news')"
          />
          <q-btn 
            flat 
            dense 
            no-caps 
            :style="{ 
              color: $route.path === '/contact' ? theme_color : '#9e9e9e',
              fontSize: '0.9rem',
              padding: '0 12px'
            }"
            label="联系我们" 
            @click="$router.push('/contact')"
          />
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected_tab: 't_0',
      bg_color: 'rgb(0, 163, 82)',
      theme_color: 'rgb(0, 163, 82)'
    }
  },
  methods: {
    changeBgColor() {
      this.theme_color = this.bg_color;
    }
  },
  watch: {
    '$route.path'(val) {
      const routeMap = {
        '/': 't_0',
        '/about': 't_1',
        '/products': 't_2',
        '/process': 't_3',
        '/news': 't_4',
        '/contact': 't_5'
      }
      this.selected_tab = routeMap[val] || 't_0';
    }
  }
}
</script>

<style scoped>
.custom_tab {
  width: 130px;
}
.hover-highlight:hover {
  opacity: 0.85;
  transition: all 0.2s ease;
}

/* 页脚响应式调整 */
@media (max-width: 768px) {
  .q-footer {
    min-height: auto;
    padding: 15px 0;
    
    .row {
      flex-direction: column;
      text-align: center;
    }
    
    .q-gutter-x-lg {
      margin: 10px 0;
      flex-wrap: wrap;
      justify-content: center;
      
      .q-btn {
        margin: 5px;
      }
    }
  }
}
</style>