<template>
  <div class="dashboard">
    <!-- App Header -->
    <div class="appHeader bg-primary text-light">
      <div class="left">
        <a
          href="#"
          class="headerButton"
          data-bs-toggle="modal"
          data-bs-target="#sidebarPanel"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </a>
      </div>
      <div class="pageTitle">
        <img src="../assets/img/ngcom_net.jpg" alt="logo" class="logo" />
      </div>
      <div class="right">
        <a href="#" class="headerButton">
          <img
            src="../assets/img/Settings.jpg"
            alt="image"
            class="imaged w32"
          />
        </a>
      </div>
    </div>
    <!-- * App Header -->

    <!-- App Capsule -->
    <div id="appCapsule">
      <!-- Wallet Card -->
      <div class="section wallet-card-section pt-1">
        <div class="wallet-card">
          <!-- Balance -->
          <div class="balance">
            <div class="left">
              <span class="title">Welcome</span>
              <h1 class="total">Administrator</h1>
            </div>
          </div>
          <!-- * Balance -->

          <!-- current date and time -->
          <div class="left">
            <p> {{ currentTime }} </p>
          </div>
          <!-- * current date and time -->

          <!-- Wallet Footer -->
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
            <!-- <div class="item">
              <a href="app-cards.html">
                <div class="icon-wrapper bg-success">
                  <ion-icon name="card-outline"></ion-icon>
                </div>
                <strong>Cards</strong>
              </a>
            </div> -->
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
          <!-- * Wallet Footer -->
        </div>
      </div>
      <!-- Wallet Card -->

      <!-- Deposit Action Sheet -->
      <div
        class="modal fade action-sheet"
        id="depositActionSheet"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Balance</h5>
            </div>
            <div class="modal-body">
              <div class="action-sheet-content">
                <form>
                  <div class="form-group basic">
                    <div class="input-wrapper">
                      <label class="label" for="account1">From</label>
                      <select class="form-control custom-select" id="account1">
                        <option value="0">Savings (* 5019)</option>
                        <option value="1">Investment (* 6212)</option>
                        <option value="2">Mortgage (* 5021)</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group basic">
                    <label class="label">Enter Amount</label>
                    <div class="input-group mb-2">
                      <span class="input-group-text" id="basic-addona1">$</span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter an amount"
                        value="100"
                      />
                    </div>
                  </div>

                  <div class="form-group basic">
                    <button
                      type="button"
                      class="btn btn-primary btn-block btn-lg"
                      data-bs-dismiss="modal"
                    >
                      Deposit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- * Deposit Action Sheet -->

      <!-- Transactions -->
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
      <!-- * Transactions -->

      <!-- Transactions -->
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
                <p>{{ item.scheduledtimeforinstallation }}</p>
              </div>
            </div>
          </div>
          <!-- * item -->    
        </div>
      </div>
      <!-- * Transactions -->
      <br />
      <br />

      <!-- app footer -->
      <div class="appFooter">
        <div class="footer-title">Copyright © Ngcom Networks Solutions.</div>
        All Rights Reserved.
      </div>
      <!-- * app footer -->
    </div>
    <!-- * App Capsule -->
  </div>

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
      // currentTime: new Date().toLocaleString(),
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
    
    getSurvey() {
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
          this.survey = response.data.data;
          console.log(this.survey["data"]);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getInstallation() {
      axios
        .get(
          "process.env.VUE_APP_INSTALLATION_URL",
          {
            headers: {
              "x-api-key": localStorage.getItem("api_key"),
            },
          }
        )
        .then((response) => {
          this.installation = response.data.data;
          console.log(this.installation["data"]);
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
</style>