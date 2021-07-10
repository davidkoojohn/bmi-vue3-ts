<template>
  <h1>home</h1>
  <a-row>
    <a-col :span="12">
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
      <a-button type="primary">按钮</a-button>
      <a-button type="link">Link</a-button>
    </a-col>
    <a-col :sapn="12">
      <a-tooltip placement="left" color="pink">
        <template #title>right prompt text</template>
        <a-button type="primary">
          Tooltip will show when mouse enter.
        </a-button>
      </a-tooltip>
    </a-col>
  </a-row>
</template>


