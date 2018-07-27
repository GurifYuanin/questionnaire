<template>
<article id="#app">
  <Layout>
    <Header><Head></Head></Header>
    <Layout>
      <Sider>
        <Menu @on-select="move">
          <MenuItem name="create">创建问卷</MenuItem>
          <MenuItem name="manage">管理问卷</MenuItem>
          <MenuItem name="answer">回答问卷</MenuItem>
          <MenuItem name="setting">个人信息</MenuItem>
        </Menu>
      </Sider>
      <Content>
        <router-view />
      </Content>
    </Layout>
    <Footer><Foot></Foot></Footer>
  </Layout>
</article>
</template>

<script>
import Head from '@/view/head.vue';
import Foot from '@/view/foot.vue';
export default {
  name: 'App',
  methods: {
    move (name) {

    }
  },
  components: {
    Head,
    Foot
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
