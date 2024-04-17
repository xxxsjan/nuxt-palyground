<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
          <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <el-button @click="ElMessage('hello')">button</el-button>
    <ElButton type="success">button</ElButton>
    <LazyElButton type="warning">lazy button</LazyElButton>
  </div>
</template>

<script setup>
// 自定义使用哪个布局 或者 app.vue里修改NuxtLayout组件的name
definePageMeta({
  layout: "custom",
  // layout: "default",
});
//  you can take full control by setting layout: false
// layout设置为false可以动态设置
function enableCustomLayout() {
  setPageLayout("custom");
}
</script>
