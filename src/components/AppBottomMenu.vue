<template>
  <id class="appBottomMenu">
    <!-- App Bottom Menu -->
    <div class="appBottomMenu">
      <!-- Dashboard section -->
      <router-link :to="{ name: 'Dashboard' }" class="item" :class="{ active: isActiveRoute('Dashboard') }">
        <div class="col">
          <ion-icon name="pie-chart-outline" class="ionicon s-ion-icon"></ion-icon>
          <strong>Overview</strong>
        </div>
      </router-link>

      <!-- Engineering section -->
      <router-link :to="{ name: 'Engineering' }" class="item" :class="{ active: isActiveRoute('Engineering') }">
        <div class="col">
          <ion-icon name="compass-outline" class="ionicon s-ion-icon"></ion-icon>
          <strong>Engineering</strong>
        </div>
      </router-link>

      <!-- Settings section -->
      <router-link :to="{ name: 'Settings' }" class="item" :class="{ active: isActiveRoute('Settings') }">
        <div class="col">
          <ion-icon name="settings-outline" class="ionicon s-ion-icon"></ion-icon>
          <strong>Settings</strong>
        </div>
      </router-link>
    </div>
    <!-- * App Bottom Menu -->
  </id>
</template>

<script>
export default {
  methods: {
    isActiveRoute(routeName) {
      return this.$route.name === routeName;
    }
  }
}
</script>

<style>
.active {
    color: #fe5919;
  }

.item {
    color: #27173e;
  }
</style>