<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import AppHeader from "../components/AppHeader.vue";

export default {
  name: "Home",
  components: { Login, AppHeader },
};
</script>
