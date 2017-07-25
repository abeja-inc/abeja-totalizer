<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.m-t {
  margin-top: 15px;
}

.m-t-large {
  margin-top: 30px;
}

.m-b {
  margin-bottom: 15px;
}

.m-b-large {
  margin-bottom: 30px;
}

.m-l {
  margin-left: 15px;
}

.m-l-large {
  margin-left: 30px;
}

.m-r {
  margin-right: 15px;
}

.m-r-large {
  margin-right: 30px;
}
</style>
