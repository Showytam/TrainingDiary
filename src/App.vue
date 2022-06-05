<template>
<nav-bar />
   <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100vh;
  background:linear-gradient(45deg, #30a8d0, #330867);
  background-attachment: fixed;
}

#app {
  width: 100vw;
  height: 100vh;
}

</style>
