<template>
  <q-page class="q-pa-xl bg-grey-1">
    <!-- 公司名称标头 -->
    <div class="text-center q-mb-xl">
      <div class="text-h3 text-weight-bold text-primary q-mb-md">
        唐山庄信科技
      </div>
      <q-separator class="q-mx-auto" style="width: 120px; height: 2px" color="primary" />
    </div>

    <!-- 核心内容容器 -->
    <q-card class="company-intro-card q-pa-lg shadow-10">
      <!-- 时间线装饰 -->
      <div class="timeline-deco absolute-left" style="left: 30px"></div>

      <!-- 正文内容 -->
      <div class="content-wrapper q-pl-xl">
        <!-- 第一段 -->
        <section class="q-mb-xl">
          <div class="text-h6 text-weight-medium text-grey-8 q-mb-sm">
            <q-icon name="fas fa-building" size="24px" color="primary" class="q-mr-sm" />
            公司概况
          </div>
          <p class="text-body1 line-height-2 text-grey-9">
            唐山庄信科技有限公司成立于1998年，座落于中国的北方瓷都--河北唐山。20多年来，公司专注于卫生陶瓷和日用陶瓷行业的釉料及熔块的研发、生产和技术服务，公司生产智洁釉、抗菌釉、无铅釉、及陶瓷熔块等系列产品，服务于30多家品牌工厂，每年有5000万件卫生洁具产品应用我公司釉料产品。庄信科技秉承诚信经营、品质服务，绿色健康的发展理念，不断研发新产品，与国内院校、科研院所建立了密切的产学研合作关系。
          </p>
        </section>

        <!-- 第二段 -->
        <section class="q-mb-xl">
          <div class="text-h6 text-weight-medium text-grey-8 q-mb-sm">
            <q-icon name="fas fa-box-open" size="24px" color="primary" class="q-mr-sm" />
            产品体系
          </div>
          <p class="text-body1 line-height-2 text-grey-9">
            为了全方位服务好客户，公司经营陶瓷釉料的全系列产品，如：水洗钾长石粉、纤维素CMC、硅酸锆、煅烧氧化锌、煅烧氧化铝粉、方解石粉、白云石粉。
          </p>
        </section>

        <!-- 第三段 -->
        <section class="q-mb-xl">
          <div class="text-h6 text-weight-medium text-grey-8 q-mb-sm">
            <q-icon name="fas fa-battery-full" size="24px" color="primary" class="q-mr-sm" />
            战略发展
          </div>
          <p class="text-body1 line-height-2 text-grey-9">
            为了迎接新时代发展战略，公司与高校及科研院所，共同研究开发新能源储能电池材料，金属防护材料，利用固废生产发泡陶瓷绿色建材等，符合国家战略性新型产业的研究。
          </p>
        </section>

        <!-- 第四段 -->
        <section>
          <div class="text-h6 text-weight-medium text-grey-8 q-mb-sm">
            <q-icon name="fas fa-handshake" size="24px" color="primary" class="q-mr-sm" />
            企业承诺
          </div>
          <p class="text-body1 line-height-2 text-grey-9">
            “专业铸就品质，诚信创造价值”，公司将以先进的研发手段，严格的管理制度，稳定的产品质量，强有力的营销网络，完善的服务体系，为陶瓷行业的客户提供专业化、标准化的技术服务。
          </p>
        </section>
      </div>

      <!-- 装饰元素 -->
      <div class="absolute-bottom-right q-ma-md">
        <q-icon name="fas fa-industry" size="80px" color="grey-3" />
      </div>
    </q-card>
  </q-page>
</template>

<style lang="scss" scoped>
.company-intro-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 100%;
    background: linear-gradient(to bottom, #1976d2, #4CAF50);
  }

  .timeline-deco {
    width: 2px;
    height: calc(100% - 60px);
    background: repeating-linear-gradient(
      180deg,
      transparent,
      transparent 20px,
      #1976d2 20px,
      #1976d2 22px
    );
    top: 50px;
  }

  .content-wrapper {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      right: -30px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: rgba(0,0,0,0.1);
    }

    section {
      position: relative;
      padding-left: 40px;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 12px;
        width: 24px;
        height: 24px;
        border: 3px solid #1976d2;
        border-radius: 50%;
        background: white;
      }
    }
  }

  .line-height-2 {
    line-height: 2;
    text-indent: 2em;
  }
}

@media (max-width: 600px) {
  .company-intro-card {
    .content-wrapper {
      padding-left: 20px !important;
      
      section {
        padding-left: 30px;
        &::before {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>