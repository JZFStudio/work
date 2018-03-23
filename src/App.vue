<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses" ref="menu">
          <MenuItem class="logoPart" name="logo" @click="toHome">
            <router-link to="/">
              <img src="./assets/logo.png" alt="vue">
            </router-link>
          </MenuItem>
          <MenuItem name="1-1">
            <router-link to="/ios-na">
              <Icon type="ios-navigate"></Icon>
              <span>Option 1</span>
            </router-link>
          </MenuItem>
          <MenuItem name="1-2">
            <router-link to="/steps">
              <Icon type="search"></Icon>
              <span>Option 2</span>
            </router-link>
          </MenuItem>
          <MenuItem name="1-3">
            <router-link to="/card">
              <Icon type="settings"></Icon>
              <span>Option 3</span>
            </router-link>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ];
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse();
    },
    toHome() {
      this.$nextTick(function () {
        this.$refs.menu.currentActiveName = '1-1';
      })
    }
  }
}
</script>

<style lang="less">
  html, body {
    height: 100%;
  }
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
    .ivu-layout {
      height: 100%;
    }
  }
  .logoPart {
    height: 150px;
    img {
      display: block;
      margin: 0 auto;
      position: relative;
    }
  }
  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon {
    transition: all .3s;
  }
  .rotate-icon {
    transform: rotate(-90deg);
  }
  .menu-item {
    span {
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
      margin-left: 10px;
    }
    i {
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
    }
    img {
      top: 25px;
      width: 50px;
      height: 50px;
      transition: top .2s ease, width .2s ease, height .2s ease;
    }
  }
  .collapsed-menu {
    span {
      width: 0px;
      transition: width .2s ease;
    }
    i {
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;
    }
    img {
      top: 15px;
      width: 30px;
      height: 30px;
      transition: top .2s ease, width .2s ease, height .2s ease;
    }
  }
  .ivu-menu-item {
    a, span, i {
      color: rgba(255,255,255,.7);
    }
  }
  .ivu-menu-item-active, .ivu-menu-item-selected   {
    a, span, i {
      color: #fff;
    }
  }
</style>
