<template>
<article id="#app">
  <Layout>
    <Header>这里是头部</Header>
    <Layout>
      <Content>
        <router-view />
      </Content>
    </Layout>
    <Footer>这里是页脚</Footer>
  </Layout>
</article>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
