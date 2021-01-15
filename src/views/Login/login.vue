<template>
  <div class="login-wrapper">
    <div class="internationalization">
      <a-dropdown v-model:visible="visible">
        <global-outlined />
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="1"> 中文 </a-menu-item>
            <a-menu-item key="2"> English </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <div class="login-content">
      <div class="login-logo">
        <img src="logo.svg" />
        <span class="title">Wu-yan Admin</span>
        <p class="describe">Ant Design 是西湖区最具影响力的 Web 设计规范</p>
      </div>
      <div class="main">
        <a-form layout="horizontal" :wrapper-col="{ span: 24 }">
          <a-tabs :tab-bar-style="{ textAlign: 'center', borderBottom: 'unset' }">
            <a-tab-pane key="1" tab="账号密码登录">
              <a-form-item>
                <a-input>
                  <template #addonBefore>
                    <user-outlined />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input-password>
                  <template #addonBefore>
                    <lock-outlined />
                  </template>
                </a-input-password>
              </a-form-item>
            </a-tab-pane>
            <a-tab-pane key="2" tab="手机验证码登录">
              <a-form-item>
                <a-input>
                  <template #addonBefore>
                    <user-outlined />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input-password>
                  <template #addonBefore>
                    <lock-outlined />
                  </template>
                </a-input-password>
              </a-form-item>
            </a-tab-pane>
          </a-tabs>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserOutlined, LockOutlined, GlobalOutlined } from "@ant-design/icons-vue";
import { Dropdown as ADropdown, Menu as AMenu, Tabs as ATabs } from "ant-design-vue";
const AMenuItem = AMenu.Item;
const ATabPane = ATabs.TabPane;
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    ADropdown,
    GlobalOutlined,
    AMenu,
    AMenuItem,
    ATabs,
    ATabPane,
  },
  setup() {
    let visible = ref(false);
    return { visible };
  },
  methods: {
    handleMenuClick() {},
  },
});
</script>
<style lang="scss">
.login-wrapper {
}
.internationalization {
  text-align: right;
  margin-right: 25px;
  padding: 10px;
  font-size: 1.2rem;
}
.login-content {
  .login-logo {
    padding: 30px;
    text-align: center;

    img {
      height: 44px;
    }
    .title {
      padding: 10px;
      font-size: 2rem;
      color: rgba(0, 0, 0, 0.85);
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      font-weight: 600;
      position: relative;
      top: 2px;
    }

    .describe {
      opacity: 0.8;
      padding-top: 10px;
    }
  }

  .main {
    min-width: 260px;
    width: 368px;
    margin: 0 auto;
  }
}
</style>
