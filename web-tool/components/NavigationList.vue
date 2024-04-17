<template>
  <div class="index_page">
    <div class="nya-container">
      <div class="nya-title">
        <i class="eva eva-thermometer-plus-outline"></i><span>工具</span>
      </div>

      <a
        target="_self"
        class="tools-card hot badge"
        v-for="(item, index) in list"
        :key="index"
        :href="item.path"
      >
        <IconTool />
        <div class="tools-card-text">
          <div class="tools-card-name">
            {{ item?.meta?.title || item.name }}
          </div>
          <div class="tools-card-desc">{{ item.desc }}</div>
        </div></a
      >
    </div>
  </div>
</template>

<script setup>
import IconTool from "~/components/icons/tool.vue";
const routes = [
  {
    path: "/",
    name: "layout",
    redirect: "/vscode-snippet-generator",
    children: [
      {
        path: "/",
        name: "home-page",

        meta: {
          title: "首页",
        },
      },
      {
        path: "preview-html",
        name: "preview-html",
        meta: {
          title: "三件套预览html",
        },
      },
      {
        path: "/vscode-snippet-generator",
        name: "vscode-snippet-generator",
        meta: {
          title: "vscode用户代码片段",
        },
      },
      {
        path: "/format-css-style",
        name: "format-css-style",
        meta: {
          title: "css style➡️对象",
        },
      },
      {
        path: "/template-to-string",
        name: "template-to-string",
        meta: {
          title: "模板字符串➡️普通字符串",
        },
      },

      {
        path: "/cut-image",
        name: "cut-image",

        meta: {
          title: "图片去黑边",
        },
      },
      {
        path: "/image-to-icon",
        name: "image-to-icon",

        meta: {
          title: "图片转icon",
        },
      },
      {
        path: "/package-to-cli",
        name: "package-to-cli",

        meta: {
          title: "依赖包转命令",
        },
      },
      {
        path: "string-transform",
        name: "string-transform",

        meta: {
          title: "字符转换",
        },
      },
      {
        path: "vue-to-jsx",
        name: "vue-to-jsx",

        meta: {
          title: "vue-to-jsx",
        },
      },
      {
        path: "/tax-calculation",
        name: "tax-calculation",
        meta: {
          title: "个税计算器",
        },
      },
    ],
  },
  {
    path: "/ikun-keyboard",
    name: "ikun-keyboard",
  },
];
const list = ref(routes[0].children.filter((r) => r.path !== "/"));
list.value.push({
  path: "/html/text-reading.html",
  name: "文字朗读",
});
</script>

<style lang="scss" scoped>
.index_page {
  position: relative;
  max-width: 62.5rem;
  // min-height: calc(100vh - 18px);

  box-sizing: border-box;
  margin: 88px auto;
  padding: 0 6vw 0;

  --theme: #249ffd;
  --color-text: #2f3e4c;
}
.nya-container {
  background-color: #fff;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0.5rem 0.875rem 2.375rem rgba(39, 44, 49, 0.06),
    0.0625rem 0.1875rem 0.5rem rgba(39, 44, 49, 0.03);
  margin-bottom: 3.125rem;
  margin-top: 1.125rem;
  padding: 1.5625rem 2rem;
  position: relative;
}

.nya-container .nya-title {
  background-color: var(--theme);
  border-radius: 0.5rem;
  box-shadow: 0 0.3125rem 0.5rem rgba(36, 159, 253, 0.302);
  color: #fff;
  font-size: 0;
  font-weight: 700;
  left: 1.875rem;
  padding: 0.5rem 0.9375rem;
  position: absolute;
  top: -1.125rem;
}

.nya-container .nya-title i {
  font-size: 1.25rem;
  margin-right: 0.3125rem;
  vertical-align: middle;
}

.nya-container .nya-title span {
  font-size: 1.0625rem;
  line-height: 1.25rem;
  vertical-align: middle;
}

.tools-card {
  align-items: center;
  background-color: transparent;
  border: none;
  box-shadow: 0 0.0625rem 0.5rem 0.0625rem rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  color: var(--color-text) !important;
  cursor: pointer;
  display: inline-flex;
  letter-spacing: 0.0625rem;
  margin: 0.4375rem;
  padding: 0.625rem;
  position: relative;
  transform: translateZ(0);
  transition: transform 0.1s ease, background-color 0.1s ease,
    color 0.05s ease-out;
  vertical-align: top;
  width: calc(25% - 0.875rem);

  border-radius: 0.5rem;
  font-size: 0;
}
.tools-card:hover {
  background-color: var(--theme);
  box-shadow: 0 0 0.0625rem 0 rgba(8, 11, 14, 0.06),
    0 0.375rem 0.375rem -0.0625rem rgba(8, 11, 14, 0.1);
  transform: translateY(-0.125rem);
}
.tools-card:hover,
.tools-card:hover svg {
  color: #fff !important;
}
.tools-card svg {
  color: var(--theme);
  margin-right: 0.5rem;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.7;
  transition: all 0.1s ease;
  height: 1.55rem;
  width: 1.55rem;
}

.badge:after {
  border-radius: 50%;
  color: #fff;
  content: "";
  font-weight: lighter;
  height: 0.5rem;
  position: absolute;
  right: 0.3125rem;
  text-shadow: 0.0625rem 0.0625rem 0.0625rem rgba(0, 0, 0, 0.2);
  top: 0.3125rem;
  transform: translateZ(0);
  width: 0.5rem;
}

.tools-card-text {
  width: calc(100% - 2.375rem);

  .tools-card-name {
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 0.3125rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tools-card-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 0.75rem;
    opacity: 0.85;
  }
}
</style>
