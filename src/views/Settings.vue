<template>
    <!-- App Header -->
    <div>
      <AppHeader title="Settings" />
    </div>
    <!-- * App Header -->
  
    <!-- App Capsule -->
    <div id="appCapsule">
  
  <div class="section mt-3 text-center">
      <div class="avatar-section">
          <a href="#">
              <img src="../assets/img/sample/avatar1.jpg" alt="avatar" class="imaged w100 rounded">
              <span class="button">
                  <ion-icon name="camera-outline"></ion-icon>
              </span>
          </a>
      </div>
  </div>
  
  <!-- <div class="listview-title mt-1">Theme</div>
  <ul class="listview image-listview text inset no-line">
      <li>
          <div class="item">
              <div class="in">
                  <div>
                      Dark Mode
                  </div>
                  <div class="form-check form-switch  ms-2">
                      <input class="form-check-input dark-mode-switch" type="checkbox" id="darkmodeSwitch" @click="toggleDarkMode">
                      <label class="form-check-label" for="darkmodeSwitch"></label>
                  </div>
              </div>
          </div>
      </li>
  </ul> -->
  
  
  <div class="listview-title mt-1">Profile Settings</div>
  <ul class="listview image-listview text inset">
      <li>
          <a href="#" class="item">
              <div class="in">
                  <div>Change Username</div>
              </div>
          </a>
      </li>
  </ul>
  
  <div class="listview-title mt-1">Security</div>
  <ul class="listview image-listview text mb-2 inset">
      <li>
          <a href="#" class="item">
              <div class="in">
                  <div>Update Password</div>
              </div>
          </a>
      </li>
  
      <li>
          <a href="#" class="item">
              <div class="in">
                  <div>Log Out</div>
              </div>
          </a>
      </li>
  </ul>
  
  
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
//   import Base from '@/assets/js/base.js';
  // import Splide from "@/assets/js/plugins/splide/splide.min.js";
  
  export default {
    name: "Settings",
    components: { AppHeader, AppBottomMenu },
    data() {
      return {
      };
    },
//     methods: {
//     toggleDarkMode() {
//       const pageBody = document.body;
//       const darkModeActive = pageBody.classList.contains('dark-mode');

//       if (darkModeActive) {
//         pageBody.classList.remove('dark-mode');
//         localStorage.setItem('FinappDarkmode', '0');
//       } else {
//         pageBody.classList.add('dark-mode');
//         localStorage.setItem('FinappDarkmode', '1');
//       }
//     }
//   }
  };
  </script>
  
  <style></style>