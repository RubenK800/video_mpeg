<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
<!--    <hello-world/>-->
<!--    <new-vue-component/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import NewVueComponent from './components/NewVueComponent'
export default {
  name: 'App'
  // components: {NewVueComponent}
  // components: {HelloWorld}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
