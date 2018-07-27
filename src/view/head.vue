<template>
<section style="color: white;">
  <Row>
    <Col span="4" class="left"><img @click="$router.push('/')" id="logo" src="/static/images/logo.jpg"></Col>
    <Col span="16" class="right">
      <Form ref="form" :model="form" inline>
        <FormItem style="transform: translateY(50%);">
          <Input v-model="form.keyword" placeholder="站内搜素"></Input>
        </FormItem>
        <FormItem style="transform: translateY(50%);">
          <Button type="primary" @click="search">查询</Button>
        </FormItem>
      </Form>
    </Col>
    <Col span="4" class="right">
      欢迎登录，{{username}} <a id="logout" @click="logout">注销</a>
    </Col>
  </Row>
</section>
</template>

<script>
export default {
  data () {
    return {
      username: '二狗子',
      form: {
        keyword: ''
      }
    };
  },
  methods: {
    search () {

    },
    logout () {

    }
  }
}
</script>

<style scoped>
.left {
  text-align: left;
}
.right {
  text-align: right;
}
#logout {
  color: inherit;
}
#logout:hover {
  text-decoration: underline;
}
#logo {
  max-height: 50px;
  margin-top: 7px;
  cursor: pointer;
}
</style>
