<template>
  <div id="app">
    <h4 id="author" v-bind:style="{ display: ['none']}" title="halfas">Сергей Гребенюков</h4>
    <taskList/>
  </div>
</template>

<script>
import taskList from './components/taskList'

export default {
  name: 'App',
  components: {
    taskList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
