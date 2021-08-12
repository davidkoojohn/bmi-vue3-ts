<template>
  <app-layout>
    <div class="container">
      <h1>home</h1>
      <a-row>
        <a-col flex="auto">
          <div style="width: 500px">
            <a-carousel autoplay effect="fade">
              <div>
                <h3 style="background: red">1</h3>
                <h3>1</h3>
                <h3>1</h3>
                <h3>1</h3>
              </div>
              <div>
                <h3 style="background: royalblue">2</h3>
                <h3>2</h3>
                <h3>2</h3>
                <h3>2</h3>
              </div>
              <div>
                <h3 style="background: gold">3</h3>
                <h3>3</h3>
                <h3>3</h3>
                <h3>3</h3>
              </div>
              <div>
                <h3 style="background: green">4</h3>
                <h3>4</h3>
                <h3>4</h3>
                <h3>4</h3>
              </div>
            </a-carousel>
          </div>

          <div>
            <a-button type="primary">Primary</a-button>
            <a-button>Default</a-button>
            <a-button type="dashed">Dashed</a-button>
            <a-button type="primary">按钮</a-button>
            <a-button type="link">Link</a-button>
          </div>
        </a-col>
        <a-col flex="300px">
          <div style="background: aqua">
            <a-tooltip placement="left" color="pink">
              <template #title>right prompt text</template>
              <a-button type="primary">
                Tooltip
              </a-button>
            </a-tooltip>
          </div>
        </a-col>
      </a-row>
    </div>
  </app-layout>
</template>

<style scoped>
.ant-carousel .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
</style>
