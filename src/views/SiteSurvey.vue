<template>
  <!-- App Header -->
  <div>
    <AppHeader title="Site Survey" />
  </div>
  <!-- * App Header -->
  <br />

  <!-- Transactions -->
  <div class="section mt-4" v-if="responseData">
    <div class="section-heading">
      <h2 class="left">Pending</h2>
    </div>
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

    <br />

    <!-- pagination buttons -->
    <div class="text-end">
      <div class="pagination" v-if="totalPages > 0">
        <button type="button" class="btn btn-icon btn-info me-1" v-if="currentPage > 1" @click="currentPage--">
          <ion-icon name="play-back-outline"></ion-icon>
        </button>
        
        <button type="button" class="btn btn-icon btn-info me-1" v-if="currentPage < totalPages" @click="currentPage++">
          <ion-icon name="play-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
    <!--* pagination buttons -->
  </div>

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
    item(value) {
      this.$router.push({
        name: "SiteSurvey",
        params: {
          id: value,
        },
      });
    },
    fetchData() {
      axios
        .get(
          "process.env.VUE_APP_GET_PENDING_SITESURVEY_URL",
          {
            headers: {
              "x-api-key": localStorage.getItem("api_key"),
            },
          }
        )
        .then((response) => {
          this.responseData = response.data;
          console.log(this.responseData["data"]);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
/* button {
  border: none;
  color: #fff;
  background-image: linear-gradient(30deg, #fe5919, #e09577);
  border-radius: 20px;
  background-size: 100% auto;
  font-family: inherit;
  font-size: 17px;
  padding: 0.6em 1.5em;
} */

/* button:hover {
  background-position: right center;
  background-size: 200% auto;
  -webkit-animation: pulse 2s infinite;
  animation: pulse512 1.5s infinite;
} */

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  /* background-color: white; */
  position: absolute;
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
</style>