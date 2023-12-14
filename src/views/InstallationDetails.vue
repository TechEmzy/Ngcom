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
    <AppHeader title="Installation Details" />
  </div>
  <!--* App Header -->

  <!-- break -->
  <br />
  <br />
  <!--* break -->

  <!-- My Site Survey Details Table -->
  <div class="" id="actionSheetForm" tabindex="-1" role="dialog" v-if="!isLoading">
    <div class="modal-dialog" role="document">

      <div class="modal-content">
        <!-- installation details header -->
        <div class="modal-header">
          <h5 class="modal-title">Edit</h5>
        </div>
        <!--* installation details header -->

        <!-- installation details form body -->
        <div class="modal-body">
          <div class="action-sheet-content">
            <form @submit.prevent="submitForm">

              <div class="form-group basic">
                <div class="input-wrapper">
                  <label class="label">Installation Title:</label>
                  <div class="input-group">
                    <input
                      v-model="responseData.installationtitle"
                      type="text"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="input-info">Installation Title</div>
                </div>

                <div class="form-group basic">
                  <div class="input-wrapper">
                    <label class="label" for="account1"
                      >Installation Type:</label
                    >
                    <select
                      class="form-control custom-select"
                      id="account1"
                      v-model="responseData.installationtype"
                      required
                    >
                      <option value="YES">Radio</option>
                      <option value="NO">Fibre</option>
                    </select>
                  </div>
                  <div class="input-info">Select Intallation Type</div>
                </div>

                <div class="form-group basic">
                  <label class="label">Radio IP Ap:</label>
                  <input
                    v-model="responseData.radioipap"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Radio IP Ap</div>
              </div>
              
              <div class="form-group basic">
                <label class="label">Installation Date:</label>
                <div class="input-group">
                  <Datepicker
                    v-if="responseData"
                    v-model="selectedDate"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Select Installation Date</div>
              </div>

              <div class="form-group basic">
                <label class="label">Customer:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.customer"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Customer name</div>
              </div>

              <div class="form-group basic">
                <label class="label">Phone:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.customer_phone"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Customer Contact</div>
              </div>

              <div class="form-group basic">
                <label class="label">Public IP:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.publicip"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Public IP</div>
              </div>

              <div class="form-group basic">
                <label class="label">PPOE Username:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.pppoeusername"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">PPOE Username</div>
              </div>

              <div class="form-group basic">
                <label class="label">Client's Radio Username:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.radiousername"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Client's Radio Username</div>
              </div>

              <div class="form-group basic">
                <label class="label">Client's Radio Password:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.radiopassword"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Client's Radio Password</div>
              </div>

              <div class="form-group basic">
                <label class="label">Signal Strength:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.signalstrength"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Signal Strength</div>
              </div>

              <div class="form-group basic">
                <div class="input-wrapper">
                  <label class="label" for="account1">Base Station:</label>
                  <select
                    class="form-control custom-select"
                    id="account1"
                    v-model="responseData.basestation"
                    required
                  >
                    <option
                      v-for="(baseStation, id) in baseStations"
                      :key="id"
                      :value="baseStation.id"
                    >
                      {{ baseStation.name }} - {{ baseStation.coordinates }}
                    </option>
                  </select>
                </div>
                <div class="input-info">Select a base station</div>
              </div>

              <div class="form-group basic">
                <label class="label">AP:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.ap"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">AP</div>
              </div>

              <div class="form-group basic">
                <label class="label">Radio Config Img:</label>
                <div class="input-group">
                  <input
                    type="file"
                    class="form-control"
                    @change="onFileSelected"
                    name="image1"
                    :v-model="responseData.radioconfigimg"
                  />
                </div>
                <div class="input-info">Radio Config Img</div>
              </div>

              <div class="form-group basic">
                <label class="label">Ping Img:</label>
                <div class="input-group">
                  <input
                    type="file"
                    class="form-control"
                    @change="onFileSelected2"
                    name="image2"
                    :v-model="responseData.pingimg"
                  />
                </div>
                <div class="input-info">Ping Img</div>
              </div>

              <div class="form-group basic">
                <label class="label">Speed Test Img:</label>
                <div class="input-group">
                  <input
                    type="file"
                    class="form-control"
                    @change="onFileSelected3"
                    name="image3"
                    :v-model="responseData.speedtestimg"
                  />
                </div>
                <div class="input-info">Speed Test Img</div>
              </div>

              <div class="form-group basic">
                <label class="label">Address:</label>
                <div class="input-group">
                  <textarea
                    v-if="responseData"
                    v-model="responseData.location"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Address</div>
              </div>

              <div class="form-group basic">
                <button
                  type="submit"
                  class="btn btn-primary btn-block btn-lg"
                  data-bs-dismiss="modal"
                >
                  Execute Installation
                </button>
              </div>
            </form>
            <br />
            <br />
          </div>
        </div>
        <!--* installation details form body -->
      </div>
    </div>
  </div>
  <!--* My Site Survey Details Table -->

  <!-- bottom menu -->
  <AppBottomMenu />
  <!--* bottom menu -->
</template>

<script>
import axios from "axios";
import AppHeader from "../components/AppHeader.vue";
import AppBottomMenu from "../components/AppBottomMenu.vue";
import useGeolocation from "../useGeolocation";
import Datepicker from 'vue3-datepicker';
import Swal from "sweetalert";

export default {
  props: ["baseStations"],
  name: "InstallationDetails",
  components: { AppHeader, AppBottomMenu, Datepicker, useGeolocation },
  data() {
    return {
      surveyId: "",
      baseStations: {},
      selectedFile: "",
      selectedFile2: "",
      selectedFile3: "",
      responseData: {
        id: "",
        installationtitle: "",
        installationtype: "",
        radioipap: "",
        installation_date: "",
        customer: "",
        customer_phone: "",
        publicip: "",
        pppoeusername: "",
        radiousername: "",
        radiopassword: "",
        signalstrength: "",
        basestation: "",
        ap: "",
        radioconfigimg: "",
        pingimg: "",
        speedtestimg: "",
        location: "",
      },
      isLoading: true,
      selectedDate: null,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.fetchData(id);
    this.fetchData2();
  },
  methods: {
    // fetching installation report by its id
    fetchData(id) {
      this.surveyId = id;
      axios
        .get(
          `${process.env.VUE_APP_INSTALLATION_ID_URL}?id=${id}`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "x-api-key": localStorage.getItem("api_key"),
              cookie: process.env.VUE_APP_INSTALLATION_COOKIE,
            },
          }
        )
        .then((response) => {
          // Check if response.data.data is not null before accessing properties
          if (response.data.data) {
            this.responseData = response.data.data;
            // console.log(this.responseData);
          } else {
            console.error("API response data is null or undefined.");
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    // Function to handle file selection for the first file input
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },

    // Function to handle file selection for the second file input
    onFileSelected2(event) {
      this.selectedFile2 = event.target.files[0];
    },

    // Function to handle file selection for the third file input
    onFileSelected3(event) {
      this.selectedFile3 = event.target.files[0];
    },

    // function to submit the form
    submitForm(e) {
      e.preventDefault();
      // sweetalert modal
      Swal({
        title: "Confirmation",
        text: "Are you sure you want to execute the installation report?",
        icon: "warning",
        buttons: ["Cancel", "Execute"],
        dangerMode: true,
      }).then((execute) => {
        if (execute) {
          // User clicked Execute button

          let formData = new FormData();

          // Append each field of responseData to the formData object
          for (let key in this.responseData) {
            formData.append(key, this.responseData[key]);
          }

          // Append file data
          formData.append("radioconfigimg", this.selectedFile);
          formData.append("pingimg", this.selectedFile2);
          formData.append("speedtestimg", this.selectedFile3);

          // Append additional data
          formData.append("id", this.surveyId);
          formData.append("radioipap", "192.168.1.1");

          // submitting to the api with the post method
          axios
            .post(
              process.env.VUE_APP_EXECUTE_INSTALLATION_URL,
              formData,
              {
                headers: {
                  "x-api-key": process.env.VUE_APP_API_KEY,
                },
              }
            )
            .then((response) => {
              // console.log(response);
              // console.log(this.responseData);
              // console.log(response.status);
              Swal("Success", "Installation report Executed successfully", "success").then(
                () => {
                  // Close the modal or do something else
                  const modal = document.getElementById("your-modal-id");
                  // Redirect to SiteSurvey route
                  this.$router.push("/installation_report");
                }
              );
            })
            .catch((error) => {
              // handle error response
              console.log(error);
              Swal(
                "Error",
                "An error occurred while submitting the form",
                "error"
              );
            });
        } else {
          // User clicked Cancel button
          // Do something else or simply close the alert
          const modal = document.getElementById("your-modal-id");
        }
      });
    },

    // get current location
    getCurrentLocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.responseData.clientcoordinate = `${latitude},${longitude}`;
        },
        (error) => {
          console.error(error);
          alert("Unable to retrieve your location");
        }
      );
    },

    // calculating the distance from the base station to the client cordinate
    calculateDistance() {
      const R = 6371; // km
      const [clientLat, clientLon] =
        this.responseData.clientcoordinate.split(",");
      const [baseLat, baseLon] =
        this.baseStations[this.responseData.map].coordinates.split(",");
      const dLat = this.toRad(baseLat - clientLat);
      const dLon = this.toRad(baseLon - clientLon);
      const lat1 = this.toRad(clientLat);
      const lat2 = this.toRad(baseLat);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
          Math.sin(dLon / 2) *
          Math.cos(lat1) *
          Math.cos(lat2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c;
      this.responseData.distance = d.toFixed(1);
      console.log(distance);
    },

    toRad(value) {
      return (value * Math.PI) / 180;
    },

    // fetching the base station
    fetchData2() {
      axios
        .get(
          process.env.VUE_APP_GET_BASESTATION_URL,
          {
            headers: {
              "x-api-key": process.env.VUE_APP_API_KEY,
              cookie: process.env.VUE_APP_BASESTATION_COOKIE,
            },
          }
        )
        .then((response) => {
          this.baseStations = response.data.data;
          // console.log(response.status);
          // console.log(this.baseStations);
        })
        .catch((error) => {
          console.log(`Error fetching data: ${error.message}`);
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
  font-weight: 600;
  font-size: 20px;
}
.form-group .label {
  font-size: 11px;
  margin: 0;
  font-weight: 500;
  color: #27173e;
  display: block;
  line-height: 1.2em;
  text-align: left;
}
.v3dp__datepicker {
  width: 100%;
}
</style>
