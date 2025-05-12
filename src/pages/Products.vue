<template>
  <q-page class="q-pa-xl bg-grey-1">
    <div class="product-container" style="max-width: 1200px; margin: 0 auto">
      <!-- 产品分类导航 -->
      <div class="q-mb-xl text-center">
        <h2 class="text-h4 text-weight-bold" :style="{ color: theme_color }">
          <q-icon name="widgets" class="q-mr-sm" />产品展示
          <div class="text-h6 text-grey-7">Product Catalog</div>
        </h2>
      </div>

      <!-- 产品折叠面板 -->
      <q-card class="shadow-3 product-card" v-for="(product, index) in products" :key="index">
        <q-expansion-item
          group="products"
          :label="product.title"
          :caption="product.subtitle"
          switch-toggle-side
          :style="{ 'border-left': `4px solid ${theme_color}` }"
        >
          <div class="q-pa-md">

            <!-- 产品图片 -->
            <div v-if="product.image">
              <div class="text-h6 q-mb-md" :style="{ color: theme_color }">
                产品图片 Product Image
              </div>
              <q-img
                :src="product.image"
                :alt="product.title"
                style="max-width: 30%; height: auto;"
                :style="{ 'max-height': '400px' }"
                class="q-mb-md"
              />
            </div>

            <!-- 技术参数表格 -->
            <div v-if="product.specs && product.specs.length">
              <div class="text-h6 q-mb-md" :style="{ color: theme_color }">技术参数 Technical Specifications</div>
              <q-markup-table class="spec-table" flat bordered>
                <thead>
                  <tr>
                    <th v-for="(col, colIndex) in product.tableHeaders" :key="colIndex">{{ col }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, rowIndex) in product.specs" :key="rowIndex">
                    <td v-for="(item, itemIndex) in row" :key="itemIndex">{{ item }}</td>
                  </tr>
                </tbody>
              </q-markup-table>
            </div>

            <!-- 化学成份表格 -->
            <div v-if="product.chemicals && product.chemicals.length">
              <div class="text-h6 q-mt-xl q-mb-md" :style="{ color: theme_color }">化学成份 Chemical Composition</div>
              <div class="scroll-wrapper">
                <q-markup-table class="chemical-table" flat bordered>
                  <thead>
                    <tr>
                      <th v-for="(col, colIndex) in product.chemicalHeaders" :key="colIndex">{{ col }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, rowIndex) in product.chemicals" :key="rowIndex">
                      <td v-for="(item, itemIndex) in row" :key="itemIndex">{{ item }}</td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </div>
            </div>

            <!-- 产品说明 -->
            <div class="q-mt-lg" v-if="product.description && product.description.length">
              <div class="text-subtitle1 q-mb-sm" :style="{ color: theme_color }">
                <q-icon name="info" /> 产品说明 Product Description
              </div>
              <div class="text-body1 description-text">
                <p v-for="(desc, descIndex) in product.description" :key="descIndex">{{ desc }}</p>
              </div>
            </div>

            <!-- 包装信息 -->
            <div class="q-mt-md text-caption text-grey-7" v-if="product.package">
              <q-icon name="inventory" /> 包装规格 Package Size: {{ product.package }}
            </div>
          </div>
        </q-expansion-item>
      </q-card>
    </div>
  </q-page>
</template>

  
  <script>
  import productsData from './products-data' // 产品数据单独管理
  
  export default {
    name: 'ProductShowcase',
    data() {
      return {
        theme_color: '#00a352',
        products: productsData
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .product-card {
    margin-bottom: 20px;
    border-radius: 8px;
    transition: transform 0.3s;
    
    &:hover {
      transform: translateY(-3px);
    }
  
    ::v-deep .q-item {
      padding: 16px;
      min-height: 80px;
    }
  
    .spec-table, .chemical-table {
      width: 100%;
      th {
        background: rgba(0,163,82,0.08);
        font-weight: bold;
      }
      td {
        white-space: nowrap;
      }
    }
  
    .scroll-wrapper {
      overflow-x: auto;
    }
  
    .description-text {
      line-height: 1.8;
      p {
        margin: 8px 0;
        text-indent: 2em;
      }
    }
  
    @media (max-width: 600px) {
      ::v-deep .q-item {
        padding: 12px;
      }
      
      .spec-table, .chemical-table {
        font-size: 12px;
      }
      
      .description-text {
        font-size: 14px;
      }
    }
  }
  </style>