<template>
  <!-- <NuxtLayout> <NuxtPage /> </NuxtLayout> -->
  <NuxtPage />
</template>

<script setup>
// useHead({
//   title: "My App",
//   meta: [{ name: "description", content: "My amazing site." }],
//   bodyAttrs: {
//     class: "test",
//   },
//   script: [{ innerHTML: "console.log('Hello world')" }],
// });
// 安全版，会处理脚本相关
// useHeadSafe({
//   script: [
//     { id: 'xss-script', innerHTML: 'alert("xss")' }
//   ],
//   meta: [
//     { 'http-equiv': 'refresh', content: '0;javascript:alert(1)' }
//   ]
// })
/** 上面会输出以下，恶意脚本会排除
 * script id="xss-script" script
 * meta content="0;javascript:alert(1)"
 */
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
