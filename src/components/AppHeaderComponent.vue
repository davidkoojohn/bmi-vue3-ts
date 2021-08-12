<template>
  <div class="header">
    <div class="more-icon">
      <svg @click="showDrawer" t="1628776862772" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2072" width="24" height="24"><path d="M66.488889 211.781818h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485 0-27.397172-22.768485-49.648485-50.980202-49.648485H66.488889C38.341818 112.484848 15.508687 134.723232 15.508687 162.133333s22.833131 49.648485 50.980202 49.648485z m891.009293 248.242424H66.488889C38.277172 460.024242 15.508687 482.262626 15.508687 509.672727s22.768485 49.648485 50.980202 49.648485h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485-0.012929-27.410101-22.923636-49.648485-50.993131-49.648485z m0 351.63798H66.488889c-28.134141 0-50.980202 22.238384-50.980202 49.648485s22.833131 49.648485 50.980202 49.648485h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485-0.012929-27.397172-22.781414-49.648485-50.993131-49.648485z m0 0" p-id="2073" fill="#d4237a"></path></svg>
    </div>
    <router-link class="logo" :to="{name: 'Landing'}" style="margin-right: 30px">
      集中营
    </router-link>
    <a-menu mode="horizontal" theme="dark">
      <a-menu-item key="mail">
        <router-link :to="{name: 'Landing'}">
          首页
        </router-link>
      </a-menu-item>
      <a-menu-item key="app">
        <router-link :to="{name: 'TS'}">
          妹纸
        </router-link>
      </a-menu-item>
      <a-sub-menu>
        <template #title>干货</template>
        <a-menu-item-group>
          <a-menu-item key="setting:1">Option 1</a-menu-item>
          <a-menu-item key="setting:2">Option 2</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <router-link :to="{name: 'About'}">
          关于
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
  <a-drawer
      title="Basic Drawer"
      placement="left"
      :closable="false"
      v-model:visible="visible"
      :after-visible-change="afterVisibleChange"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const visible = ref<boolean>(false);

const afterVisibleChange = (bool: boolean) => {
  console.log('visible', bool);
};

const showDrawer = () => {
  visible.value = true;
};

const current = ref<string[]>(['mail']);

</script>

<style scoped>
.header {
  display: flex;
  height: 100%;
  align-items: center;
}

.header .more-icon {
  display: none;
  align-items: center;
}

@media only screen and (max-width: 768px) {
  .header .more-icon {
    display: flex;
  }
}
</style>

<style>
@media only screen and (max-width: 768px) {
  .ant-layout-header {
    padding: 0 20px;
    height: 50px;
  }
}
</style>
