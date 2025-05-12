<template>
    <q-page class="q-pa-xl bg-grey-1">
      <q-card class="q-pa-xl shadow-2 rounded-borders" style="max-width: 1000px; margin: auto;">
        <div class="text-center q-mb-md">
        <q-icon name="business" size="48px" :color="theme_color" />

        <!-- 主标题：加大加粗，减小下边距 -->
        <h2 class="q-mt-sm" :style="`color: ${theme_color}; font-size: 32px; font-weight: bold; margin-bottom: 0px;`">
            公司简介
        </h2>

        <!-- 英文副标题：增大字号，加粗 -->
        <div :style="`font-size: 18px; font-weight: 500; color: #666;`">
            Company Introduction
        </div>

        <q-separator class="q-my-sm" />
        </div>


  
        <div class="text-body1 text-justify content-fade-in">
          <p>
            唐山庄信科技有限公司成立于1998年，座落于中国的北方瓷都--河北唐山。20多年来，公司专注于卫生陶瓷和日用陶瓷行业的釉料及熔块的研发、生产和技术服务，公司生产智洁釉、抗菌釉、无铅釉、及陶瓷熔块等系列产品，服务于30多家品牌工厂，每年有5000万件卫生洁具产品应用我公司釉料产品。
          </p>
          <p>
            庄信科技秉承诚信经营、品质服务，绿色健康的发展理念，不断研发新产品，与国内院校、科研院所建立了密切的产学研合作关系。
          </p>
          <p>
            为了全方位服务好客户，公司经营陶瓷釉料的全系列产品，如：水洗钾长石粉、纤维素CMC、硅酸锆、煅烧氧化锌、煅烧氧化铝粉、方解石粉、白云石粉。
          </p>
          <p>
            为了迎接新时代发展战略，公司与高校及科研院所，共同研究开发新能源储能电池材料，金属防护材料，利用固废生产发泡陶瓷绿色建材等，符合国家战略性新型产业的研究。
          </p>
          <p class="q-mt-md text-weight-medium text-subtitle1">
            “专业铸就品质，诚信创造价值”，公司将以先进的研发手段，严格的管理制度，稳定的产品质量，强有力的营销网络，完善的服务体系，为陶瓷行业的客户提供专业化、标准化的技术服务。
          </p>
        </div>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    name: "CompanyIntro",
    data() {
      return {
        theme_color: "rgb(0, 163, 82)"
      }
    }
  }
  </script>
  
  <style scoped>
  .content-fade-in {
    animation: fadeInUp 0.8s ease;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  