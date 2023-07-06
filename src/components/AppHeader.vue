<template>
  <!-- App Header -->
  <div class="appHeader no-border transparent position-fix">
    <div class="left">
      <!-- <button id="headerBtn" @click="back" class="headerButton goBack"> -->
        <ion-icon name="chevron-back-outline" @click="back"></ion-icon>
      <!-- </button> -->
    </div>
    <div class="pageTitle">
      <h1 class="pTitle">{{ title }}</h1>
    </div>
    <div class="right"></div>
  </div>
  <!-- * App Header -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style>
#headerBtn {
  background-color: #fe5919;
  color: white;
  border: none;
}

.pTitle{
    font-size: 20px;
    font-weight: 700;
    color: white;
    margin-bottom: 0px;
}
</style>
