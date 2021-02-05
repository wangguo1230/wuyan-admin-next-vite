<template>
  <div class="login-wrapper">
    <div class="internationalization">
      <a-dropdown v-model:visible="visibleRef">
        <global-outlined />
        <template #overlay>
          <a-menu>
            <a-menu-item key="1"> 中文 </a-menu-item>
            <a-menu-item key="2"> English </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <div class="login-content">
      <div class="login-logo">
        <img :src="logoUrl" />
        <span class="title">Wu-yan Admin</span>
        <p class="describe">Ant Design 是西湖区最具影响力的 Web 设计规范</p>
      </div>
      <div class="main">
        <a-spin :spinning="loading">
          <a-form layout="horizontal" :wrapper-col="{ span: 24 }">
            <a-tabs :tab-bar-style="{ textAlign: 'center', borderBottom: 'unset' }">
              <a-tab-pane key="1" tab="账号密码登录">
                <a-form-item v-bind="validateInfos.username">
                  <a-input
                    v-model:value="login.username"
                    :size="inputSize"
                    placeholder="账号"
                  >
                    <template #prefix>
                      <user-outlined :style="prefixStyle" />
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item v-bind="validateInfos.password">
                  <a-input-password
                    v-model:value="login.password"
                    :size="inputSize"
                    placeholder="密码"
                  >
                    <template #prefix>
                      <lock-outlined :style="prefixStyle" />
                    </template>
                  </a-input-password>
                </a-form-item>
                <a-form-item>
                  <a-row>
                    <a-col :span="14"><a-input :size="inputSize"></a-input></a-col>
                    <a-col :span="2"></a-col>
                    <a-col :span="8"
                      ><img :src="captchaSrc" @click="clickCaptcha"
                    /></a-col>
                  </a-row>
                </a-form-item>
              </a-tab-pane>
              <a-tab-pane key="2" tab="手机验证码登录">
                <a-form-item>
                  <a-input :size="inputSize" placeholder="手机号">
                    <template #prefix>
                      <mobile-outlined :style="prefixStyle" />
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-row>
                    <a-col :span="14">
                      <a-input :size="inputSize" placeholder="验证码">
                        <template #prefix>
                          <mail-outlined :style="prefixStyle" />
                        </template>
                      </a-input>
                    </a-col>
                    <a-col :span="2" />
                    <a-col :span="8">
                      <a-button block :size="inputSize">获取验证码</a-button>
                    </a-col>
                  </a-row>
                </a-form-item>
              </a-tab-pane>
            </a-tabs>
            <a-form-item>
              <a-button block type="primary" @click="onSubmit">登录</a-button>
            </a-form-item>
          </a-form>
        </a-spin>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import {
  UserOutlined,
  LockOutlined,
  GlobalOutlined,
  MobileOutlined,
  MailOutlined,
} from "@ant-design/icons-vue";
import { Dropdown as ADropdown, Menu as AMenu, Tabs as ATabs } from "ant-design-vue";
import { loginReactive } from "@/modules/user/login";
import { ServiceEnum } from "@/enums";

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
    MobileOutlined,
    MailOutlined,
  },
  setup(props) {
    const {
      loading,
      run,
      data,
      visibleRef,
      onSubmit,
      login,
      validateInfos,
      captchaSrc,
      clickCaptcha,
    } = loginReactive();

    const inputSize = ref("large");

    const prefixStyle = reactive({
      color: "rgba(0, 0, 0, 0.25)",
    });

    const logoUrl = ref(ServiceEnum.LogoUrl);
    return {
      visibleRef,
      loading,
      data,
      run,
      login,
      onSubmit,
      validateInfos,
      inputSize,
      prefixStyle,
      logoUrl,
      captchaSrc,
      clickCaptcha,
    };
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
  padding-top: 5%;
  .login-logo {
    padding: 50px;
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
