<template>
  <div class="t-demo-tabs">
    <div class="t-demo-tabs__desc">
      <t-radio-group v-model="theme" variant="default-filled">
        <t-radio-button value="normal"> 常规型 </t-radio-button>
        <t-radio-button value="card"> 卡片型 </t-radio-button>
      </t-radio-group>
    </div>
    <t-tabs :value="value" :theme="theme" @change="handlerChange">
      <t-tab-panel value="first">
        <template #label> <t-icon name="home" class="tabs-icon-margin" /> 首页 </template>
        <p style="padding: 25px">
          {{ `${theme}选项卡1内容` }}
        </p>
      </t-tab-panel>
      <t-tab-panel value="second">
        <template #label> <t-icon name="calendar" class="tabs-icon-margin" /> 日程 </template>
        <p style="padding: 25px">
          {{ `${theme}选项卡2内容` }}
        </p>
      </t-tab-panel>
      <t-tab-panel value="third">
        <template #label> <t-icon name="layers" class="tabs-icon-margin" /> 事项 </template>
        <p style="padding: 25px">
          {{ `${theme}选项卡3内容` }}
        </p>
      </t-tab-panel>
    </t-tabs>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const value = ref('first');
const theme = ref('normal');

const handlerChange = (newValue) => {
  value.value = newValue;
};
</script>
<style lang="less">
.t-demo-tabs {
  &__desc {
    margin-bottom: 20px;
    color: #333;
    font-size: 14px;

    &:not(:first-of-type) {
      margin-top: 20px;
    }

    p {
      margin-bottom: 20px;
    }
  }
}
.tabs-icon-margin {
  margin-right: 4px;
}
</style>
