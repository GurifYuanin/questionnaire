<template>
<section id="container">
  <Card id="time-card">
    <Timeline>
      <TimelineItem>创建了第一份问卷</TimelineItem>
      <TimelineItem>删除了第一份问卷</TimelineItem>
      <TimelineItem>又创建一份问卷</TimelineItem>
    </Timeline>
  </Card>
</section>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>

<style scoped>
#container {
  padding-left: 50px;
}
#time-card {
  position: fixed;
  /*top: 0;*/
  right: 0;
}
</style>
