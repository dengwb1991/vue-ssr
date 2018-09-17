<template>
  <div>
    <a>我是一个空连接</a>

    <button @click="toIndex">{{text}}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '返回首页'
    }
  },
  methods: {
    toIndex () {
      this.$router.push('/hello')
    }
  }
}
</script>