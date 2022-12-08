<template>
  <div class="app_wrapper">
    <sideBarComponent />
    <div class="mian_container">
      <navBarComponent />
      <tagViewComponent />
      <AppMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  navBarComponent,
  sideBarComponent,
  AppMain,
  tagViewComponent
} from './components';
</script>
<style lang="scss" scoped></style>
