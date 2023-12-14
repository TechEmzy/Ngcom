<template>
  <!-- Overlay -->
  <div id="overlay" v-if="isLoading">
    <div class="overlay-content">
      <img
        src="../assets/img/loading-circle.png"
        alt="Loading"
        class="loading-icon"
      />
    </div>
  </div>
  <!-- * Overlay -->

  <!-- App Header -->
  <div>
    <AppHeader title="Engineering" />
  </div>
  <!-- * App Header -->

  <br />

  <!-- App Capsule -->
  <div id="appCapsule" v-if="!isLoading">

    <!-- card block for Pending Survey -->
    <div class="card-block mb-2" id="cards-block">
      <div class="card-main">
        <img src="../assets/img/pending.png" alt="logo" class="icon" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <ul class="listview image-listview inset mb-2">
        <li>
          <router-link :to="{ name: 'SiteSurvey' }" class="item">
            <div class="in">Pending Surveys</div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- * card block for Pending Survey -->

    <!-- card block for Pending Installations -->
    <div class="card-block mb-2" id="cards-block">
      <div class="card-main">
        <img src="../assets/img/installation2.jpeg" alt="logo" class="icon" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ul class="listview image-listview inset mb-2">
        <li>
          <router-link :to="{ name: 'Installation' }" class="item">
            <div class="in">Pending Installations</div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- * card block for Pending Installations -->
  </div>
  <!-- * App Capsule -->

  <!-- bottom menu -->
  <div>
    <AppBottomMenu />
  </div>
  <!--* bottom menu -->
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppBottomMenu from "../components/AppBottomMenu.vue";

export default {
  name: "Engineering",
  components: { AppHeader, AppBottomMenu },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style scoped>
#cards-block {
  background-color: #d9d9dd;
}
.icon {
  margin-left: 45px;
  color: #fe5919;
  width: 200px;
  transform-origin: center;
  padding-bottom: 40px;
  border-radius: 50%;
}
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fe5919;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* Ensure the overlay is above other elements */
}

.overlay-content {
  text-align: center;
}

.loading-icon {
  width: 150px;
  height: 150px;
  animation: spin 1s infinite linear; /* Add animation properties */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
