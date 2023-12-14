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
  
  <div class="dashboard">
    <!-- App Header -->
    <div class="appHeader bg-primary text-light">
      <div class="pageTitle">
        <img src="../assets/img/ngcom_net.jpg" alt="logo" class="logo" />
      </div>
    </div>
    <!-- * App Header -->

    <!-- App Capsule -->
    <div id="appCapsule" v-if="!isLoading">
      <!-- Profile Card -->
      <div class="section wallet-card-section pt-1">
        <div class="wallet-card">
          <!-- Profile -->
          <div class="balance">
            <div class="left">
              <span class="title">Welcome</span>
              <h1 class="total">Administrator</h1>
            </div>
          </div>
          <!-- * Profile -->

          <!-- current date and time -->
          <div class="left">
            <p> {{ currentTime }} </p>
          </div>
          <!-- * current date and time -->

          <!-- Section Footer -->
          <div class="wallet-footer">
            <div class="item">
              <router-link
                :to="{ name: 'SiteSurvey' }"
                data-bs-toggle="modal"
                data-bs-target="#withdrawActionSheet"
              >
                <div class="icon-wrapper bg-danger">
                  <ion-icon name="telescope-outline"></ion-icon>
                </div>
                <strong>My Surveys</strong>
              </router-link>
            </div>

            <div class="item">
              <router-link
                :to="{ name: 'BaseStation' }"
                data-bs-toggle="modal"
                data-bs-target="#sendActionSheet"
              >
                <div class="icon-wrapper">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <strong>Base Station</strong>
              </router-link>
            </div>
  
            <div class="item">
              <router-link
                :to="{ name: 'Installation' }"
                data-bs-toggle="modal"
                data-bs-target="#exchangeActionSheet"
              >
                <div class="icon-wrapper bg-warning">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </div>
                <strong>My Installation</strong>
              </router-link>
            </div>
          </div>
          <!-- * Section Footer -->
        </div>
      </div>
      <!-- Profile Card -->


      <!--Site Survey Section -->
      <div class="section mt-4">
        <div class="section-heading">
          <h2 class="title">Site Survey</h2>
          <router-link :to="{ name: 'SiteSurvey' }" class="link"
            >View All</router-link
          >
        </div>
        <div class="transactions">
          <!-- item -->
          <div
            class="item"
            v-for="item in sortedSurvey.slice(0, 5)"
            :key="item.id"
          >
            <div class="detail">
              <div>
                <strong>{{ item.clientname }}</strong>
                <p>{{ item.siteaddress }}</p>
                <p>{{ item.scheduledtimeforsurvey }}</p>
              </div>
            </div>
          </div>
          <!-- * item -->
        </div>
      </div>
      <!-- * Site Survey Section -->

      <!-- Installation Section -->
      <div class="section mt-4">
        <div class="section-heading">
          <h2 class="title">Installations</h2>
          <router-link :to="{ name: 'Installation' }" class="link">View All</router-link>
        </div>
        <div class="transactions">
          <!-- item -->
          <div class="item"
            v-for="item in sortedInstallation.slice(0, 5)"
            :key="item.id"
          >
            <div class="detail">
              <div>
                <strong>{{ item.customer }}</strong>
                <p>{{ item.location }}</p>
                <p>{{ item.installation_date }}</p>
              </div>
            </div>
          </div>
          <!-- * item -->    
        </div>
      </div>
      <!-- * Installation Section -->
      
    </div>
    <!-- * App Capsule -->
  </div>

  <!-- app footer -->
  <div class="appFooter">
    <div class="footer-title">Copyright © Ngcom Networks Solutions.</div>
    All Rights Reserved.
  </div>
  <!-- * app footer -->

  <!-- bottom menu -->
  <AppBottomMenu />
  <!--* bottom menu -->
</template>

<script>
import AppBottomMenu from "../components/AppBottomMenu.vue";
import axios from "axios";

export default {
  name: "Dashboard",
  components: { AppBottomMenu },

  data() {
    return {
      currentTime: '',
      isLoading: true,
      survey: [],
      installation: [],
    };
  },
  mounted() {
    setInterval(() => {
      this.currentTime = this.formatDate(new Date());
    }, 1000);
    this.getSurvey();
    this.getInstallation();
    //loader or overlay timeout
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
  methods: {
    formatDate(date) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formatter = new Intl.DateTimeFormat("en", options);
    const parts = formatter.formatToParts(date);

    let formattedDate = "";
    let day = "";
    let month = "";
    let year = "";

    for (const part of parts) {
      switch (part.type) {
        case "day":
          day = part.value;
          const dayNumber = parseInt(day, 10);
          let suffix = "th";
          if (dayNumber === 1 || dayNumber === 21 || dayNumber === 31) {
            suffix = "st";
          } else if (dayNumber === 2 || dayNumber === 22) {
            suffix = "nd";
          } else if (dayNumber === 3 || dayNumber === 23) {
            suffix = "rd";
          }
          day = day + suffix;
          break;
        case "month":
          month = part.value;
          break;
        case "year":
          year = part.value;
          break;
      }
    }

    formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  },
    
    // fetching pending site survey
    getSurvey() {
      axios
        .get(
          process.env.VUE_APP_GET_PENDING_SITESURVEY_URL,
          {
            headers: {
              "x-api-key": localStorage.getItem("api_key"),
            },
          }
        )
        .then((response) => {
          this.survey = response.data.data;
          // console.log(this.survey["data"]);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // fetching the pending installation.
    getInstallation() {
      axios
        .get(
          process.env.VUE_APP_INSTALLATION_URL,          {
            headers: {
              "x-api-key": localStorage.getItem("api_key"),
            },
          }
        )
        .then((response) => {
          this.installation = response.data.data;
          // console.log(this.installation["data"]);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  
  computed: {
    sortedSurvey() {
      return this.survey.slice().sort((a, b) => {
        const dateA = new Date(a.scheduledtimeforsurvey);
        const dateB = new Date(b.scheduledtimeforsurvey);
        return dateA - dateB;
      });
    },

    sortedInstallation() {
      return this.installation.slice().sort((a, b) => {
        const dateA = new Date(a.scheduledtimeforinstallation);
        const dateB = new Date(b.scheduledtimeforinstallation);
        return dateA - dateB;
      });
    },
  },
};
</script>

<style scoped>
p {
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: left;
  font-size: 15px;
  font-weight: 900;
  color: #27173e;
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