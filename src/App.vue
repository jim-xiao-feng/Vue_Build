<template>
  <div id="app">
    {{ name }}
    <p>{{ allName }}</p>
    <p>{{ allName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'jim'
    }
  },
  computed: {    // computed有缓存机制,如果不更新，只执行一次
    allName () {
      return `lebulang${this.name}`
    }
  },
  beforeCreate () {
    // beforeCreate不能直接操作data里的数据，ajax请求最好在created及后面的钩子
    this.name = 'jim2'
  },
  created () {
    // vue对象实例建构完成
    this.name = 'jim3'
  }
}
</script>

<style lang="less">
  p {
    color: #A3A3A3;
  }
</style>


