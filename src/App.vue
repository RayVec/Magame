<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@keyframes expand {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.07);
  }
  90% {
    transform: scale(1);
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
  border-radius: 0;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: #323838;
  transition: color 0.2s ease;
}
</style>
