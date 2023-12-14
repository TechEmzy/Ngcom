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
    <AppHeader title="Settings" />
  </div>
  <!-- * App Header -->

  <!-- App Capsule -->
  <div id="appCapsule" v-if="!isLoading">
    <div class="section mt-3 text-center">
      <!-- select profile photo -->
      <div class="avatar-section">
        <label for="fileInput">
          <input
            type="file"
            id="fileInput"
            style="display: none"
            accept="image/*"
            @change="handleImageUpload"
          />
          <img
          :src="selectedImage || getDefaultImage()"
            alt="avatar"
            class="imaged w100 rounded"
          />
          <span class="button">
            <ion-icon name="camera-outline"></ion-icon>
          </span>
        </label>
      </div>
    </div>

    <!-- profile setting to change username -->
    <div class="listview-title mt-1">Profile Settings</div>
    <ul class="listview image-listview text inset">
      <li>
        <a class="item">
          <div class="in">
            <div>Change Username</div>
          </div>
        </a>
      </li>
    </ul>

    <!-- security setting to change password and logout -->
    <div class="listview-title mt-1">Security</div>
    <ul class="listview image-listview text mb-2 inset">
      <li>
        <a class="item">
          <div class="in">
            <div>Update Password</div>
          </div>
        </a>
      </li>

      <li>
        <a @click="logout" class="item">
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

export default {
  name: "Settings",
  components: { AppHeader, AppBottomMenu },
  data() {
    return {
      isLoading: true,
      selectedImage: null,
    };
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },

  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    getDefaultImage() {
      return this.selectedImage || require("@/assets/img/sample/avatar1.jpg");
    },

    logout() {
      // Clear all sessions and navigate to the login page
      sessionStorage.clear();
      this.$router.push("/login"); // Change "/login" to the appropriate route
    },
  },
};
</script>

<style>
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
