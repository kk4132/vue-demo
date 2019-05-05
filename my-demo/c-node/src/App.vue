<template>
  <div id="app">
    <c-header></c-header>
    <router-view name="main"></router-view>
    <router-view name="sidebar"></router-view>
  </div>
</template>

<script>
import cHeader from './components/c-header'
export default {
  components:{
    cHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
}
body,div,span,a,p,ul,li {
	margin: 0;
	padding: 0;
}
li{
  list-style: none;
}
html{
  background-color: #DDDDDD;
}
</style>
