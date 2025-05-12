<template>
  <q-page class="q-pa-xl bg-grey-1">
    <div class="contact-container shadow-5" :style="containerStyle">
      <!-- 地图容器 -->
      <div id="map-container" class="map-wrapper"></div>

      <!-- 联系信息 -->
      <div class="contact-info q-pa-xl">
        <h2 class="text-h4 text-weight-bold q-mb-lg" :style="{ color: theme_color }">
          <q-icon name="location_on" class="q-mr-sm"/>联系我们
        </h2>

        <div class="q-gutter-y-lg">
          <!-- 地址 -->
          <div class="info-item">
            <q-icon name="place" size="24px" :color="theme_color"/>
            <div class="text-body1 q-ml-md">
              <div class="text-weight-medium">公司地址</div>
              <div>河北省唐山市京津冀高端制造产业E家118栋1门</div>
              <div>邮编：063000</div>
            </div>
          </div>

          <!-- 联系方式 -->
          <div class="info-item">
            <q-icon name="phone" size="24px" :color="theme_color"/>
            <div class="text-body1 q-ml-md">
              <div class="text-weight-medium">联系电话</div>
              <div>商务合作：13722507995 薛先生</div>
              <div>商务合作：13932569188 谭先生</div>
              <div>技术支持：13903151235 吴先生</div>
            </div>
          </div>

          <!-- 电子渠道 -->
          <div class="info-item">
            <q-icon name="email" size="24px" :color="theme_color"/>
            <div class="text-body1 q-ml-md">
              <div class="text-weight-medium">电子联系</div>
              <div>邮箱：wuji63@aliyun.com</div>
              <div>微信：庄信科技服务号</div>
            </div>
          </div>
<!--
          <div class="social-links q-mt-xl">
            <q-btn round icon="fab fa-weixin" :color="theme_color" class="q-mr-sm">
              <q-menu anchor="bottom middle" self="top middle">
                <q-img src="/statics/images/qr.jpg" style="width: 150px; height: 150px;" />
              </q-menu>
            </q-btn>

            <q-btn round icon="fab fa-weibo" :color="theme_color" class="q-mr-sm">
              <q-menu anchor="bottom middle" self="top middle">
                <q-img src="/statics/images/qr.jpg" style="width: 150px; height: 150px;" />
              </q-menu>
            </q-btn>

            <q-btn
              round
              icon="language"
              :color="theme_color"
              class="q-mr-sm"
              @click="goToWebsite"
            >
              <q-tooltip>公司官网</q-tooltip>
            </q-btn>
          </div>
        -->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      theme_color: '#00a352',
      map: null,
      mapStyle: {
        features: ["road", "building", "bg"],
        style: "light"
      }
    }
  },
  computed: {
    containerStyle() {
      return {
        borderRadius: '16px',
        border: `2px solid ${this.theme_color}`
      }     
    }
  },
  mounted() {
    this.initBaiduMap()
  },
  beforeDestroy() {
    // 清理地图实例
    this.map && this.map.destroy()
  },
  methods: {
    initBaiduMap() {
      // 异步加载百度地图
      const ak = 'PhEbbCs9AePAOrMuaf1tjWpl'
      const script = document.createElement('script')
      script.src = `https://api.map.baidu.com/api?v=3.0&ak=${ak}&callback=onBMapLoaded`
      document.head.appendChild(script)

      window.onBMapLoaded = () => {
        this.map = new BMap.Map('map-container', {
          enableMapClick: false
        })
        const point = new BMap.Point(118.0394,39.7170)
        this.map.centerAndZoom(point, 15)
        this.map.enableScrollWheelZoom(true)
        
        // 创建自定义HTML标记（使用Font Awesome的📍图标）
        const label = new BMap.Label(`
          <div style="font-size: 28px; color: red;">
            <i class="fa fa-map-marker-alt"></i>
          </div>
        `, {
          position: point,
          offset: new BMap.Size(-14, -30)  // 调整位置偏移
        })

        // 设置样式去除默认边框
        label.setStyle({
          border: 'none',
          backgroundColor: 'transparent'
        })

        this.map.addOverlay(label)

        // 添加信息窗口事件
        label.addEventListener('click', () => {
          this.map.openInfoWindow(infoWindow)
        })

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  background: white;
  display: flex;
  flex-wrap: wrap;
  min-height: 600px;

  .map-wrapper {
    flex: 1;
    min-width: 400px;
    height: 600px;
  }

  .contact-info {
    flex: 0 0 400px;
    min-width: 40%;
    background: linear-gradient(
      to bottom right,
      rgba(255,255,255,0.95),
      rgba(245,245,245,0.98)
    );
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    padding: 16px;
    border-radius: 8px;
    transition: all 0.3s;
    &:hover {
      background: rgba(0,163,82,0.05);
      transform: translateX(5px);
    }
  }

  .social-links {
    border-top: 1px solid rgba(0,0,0,0.1);
    padding-top: 24px;
    ::v-deep .q-btn {
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

@media (max-width: 800px) {
  .contact-container {
    flex-direction: column;
    .map-wrapper,
    .contact-info {
      flex: none;
      width: 100%;
      height: 400px;
    }
  }
}
</style>