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
    <AppHeader title="Site Survey" />
  </div>
  <!-- * App Header -->
  <br />

  <!-- pending sitesurvey section -->
  <div class="section mt-4" v-if="responseData">

    <div class="section-heading">
      <h2 class="left">Pending</h2>
    </div>

    <!-- list of sitesurveys -->
    <div class="transactions">
      <!-- item -->
      <router-link
        class="item"
        :to="{ name: 'SurveyDetails', params: { id: item.id } }"
        v-for="item in displayedItems"
        :key="item.id"
      >
        <div class="detail">
          <div>
            <strong>{{ item.clientname }}</strong>
                <p>{{ item.siteaddress }}</p>
                <p>{{ item.scheduledtimeforsurvey }}</p>
          </div>
        </div>
        <div class="right">
          <div class="price text-danger">
            <ion-icon
              name="chevron-forward-outline"
              style="font-size: 25px"
            ></ion-icon>
          </div>
        </div>
      </router-link>
      <!-- * item -->
    </div>
    <!--* list of sitesurveys -->

    <br />

    <!-- pagination buttons -->
    <div>
      
      <div class="pagination" v-if="totalPages > 0">
        <div class="left">
          <button type="button" class="btn btn-icon btn-info me-1" v-if="currentPage > 1" @click="currentPage--">
            <ion-icon name="play-back-outline"></ion-icon>
          </button>
        </div>       

        <div class="right">
          <button type="button" class="btn btn-icon btn-info me-1" v-if="currentPage < totalPages" @click="currentPage++">
            <ion-icon name="play-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
      
    </div>
    <!--* pagination buttons -->

  </div>
  <!--* pending sitesurvey section -->

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  
  <!-- bottom menu -->
  <div>
    <AppBottomMenu />
  </div>
  <!--* bottom menu -->
</template>

<script>
import axios from "axios";
import AppHeader from "../components/AppHeader.vue";
import AppBottomMenu from "../components/AppBottomMenu.vue";

export default {
  name: "SiteSurvey",
  components: { AppHeader, AppBottomMenu },
  data() {
    return {
      responseData: null,
      itemsPerPage: 10,
      currentPage: 1,
      isLoading: true,
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    totalPages() {
      if (!this.responseData) return 0;
      return Math.ceil(this.responseData.data.length / this.itemsPerPage);
    },
    displayedItems() {
      if (!this.responseData) return [];
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.responseData.data.slice(start, end);
    },
  },
  methods: {
    // fetching pending sitesurveys
    fetchData() {
      axios
        .get(
          process.env.VUE_APP_GET_PENDING_SITESURVEY_URL, {
            headers: {
              "x-api-key": localStorage.getItem("api_key"),
            },
          }
        )
        .then((response) => {
          this.responseData = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  padding-left: 5px;
  list-style: none;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
  z-index: 1;
  margin-top: 0%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-top: 10px;
  padding-bottom: 15px;
}
.paginationBtn {
  color: white;
  background-color: #333;
  border-radius: 25%;
  padding: 2px 9px;
  margin-top: 3px;
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