<template>
<article id="#app">
  <Layout>
    <Header><Head></Head></Header>
    <Layout>
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
