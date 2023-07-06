<template>
    <!-- App Header -->
    <div>
      <AppHeader title="Engineering" />
    </div>
    <!-- * App Header -->
  
    <br>
  
    <!-- App Capsule -->
    <div id="appCapsule">
      <!-- <div class="listview-title mt-1">Engineering</div> -->
      
      <!-- card block -->
      <div class="card-block mb-2" id="cards-block">
        <div class="card-main">
          <img src="../assets/img/pending.png" alt="logo" class="icon" />
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
  
        <ul class="listview image-listview inset mb-2">
          <li>
            <router-link :to="{ name: 'SiteSurvey' }" class="item">
              <!-- <div class="icon-box bg-primary"> -->
                <!-- <ion-icon name="cube-outline"></ion-icon> -->
              <!-- </div> -->
              <div class="in">Pending Surveys</div>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- * card block -->
  
      <!-- card block -->
      <div class="card-block mb-2" id="cards-block">
        <div class="card-main">
          <img src="../assets/img/installation2.jpeg" alt="logo" class="icon" />
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <ul class="listview image-listview inset mb-2">
          <li>
          <router-link :to="{ name: 'Installation' }" class="item">
            <!-- <div class="icon-box bg-primary"> -->
              <!-- <ion-icon name="cube-outline"></ion-icon> -->
            <!-- </div> -->
            <div class="in">Pending Installations</div>
          </router-link>
        </li>
        </ul>
      </div>
      <!-- * card block -->
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
    name: "Settings",
    components: { AppHeader, AppBottomMenu },
    data() {
      return {};
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
  </style>