<template>
  <!-- App Header -->
  <div>
    <AppHeader title="Installation Report" />
  </div>
  <!--* App Header -->

  <!-- break -->
  <br />
  <br />
  <!--* break -->

  <!-- My Site Survey Details Table -->
  <div class="" id="actionSheetForm" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit</h5>
        </div>
        <div class="modal-body">
          <div class="action-sheet-content">
            <form @submit.prevent="submitForm">
              <div class="form-group basic">
                <div class="input-wrapper">
                  <label class="label">Installation Title:</label>
                  <div class="input-group">
                    <!-- <span class="input-group-text" id="basic-addon1"></span> -->
                    <input
                      v-model="responseData.installationtitle"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="input-info">Installation Title</div>
                </div>

                <div
                class="form-group basic"
              >
                <div class="input-wrapper">
                  <label class="label" for="account1">Installation Type:</label>
                  <select
                    class="form-control custom-select"
                    id="account1"
                    v-model="responseData.installationtype"
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
                  />
                </div>
                <div class="input-info">Radio IP Ap</div>
              </div>

              <div
                class="form-group basic"
              >
                <label class="label">Installation Date:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
                  <input
                    v-if="responseData"
                    v-model="responseData.installation_date"
                    type="date"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Select Installation Date</div>
              </div>
              
              <div
                class="form-group basic"
              >
                <label class="label">Customer:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
                  <input
                    v-model="responseData.customer"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Customer name</div>
              </div>

              <div
                class="form-group basic"
              >
                <label class="label">Phone:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
                  <input
                    v-model="responseData.customer_phone"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Customer Contact</div>
              </div>
              
              <div
                class="form-group basic"
              >
                <label class="label">Public IP:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
                  <input
                    v-model="responseData.publicip"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Public IP</div>
              </div>

              <div
                class="form-group basic"
              >
                <label class="label">PPOE Username:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
                  <input
                    v-model="responseData.pppoeusername"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">PPOE Username</div>
              </div>

              <div
                class="form-group basic"
              >
                <label class="label">Client's Radio Username:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
                  <input
                    v-model="responseData.radiousername"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Client's Radio Username</div>
              </div>

              <div
                class="form-group basic"
              >
                <label class="label">Client's Radio Password:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
                  <input
                    v-model="responseData.radiopassword"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Client's Radio Password</div>
              </div>

              <div
                class="form-group basic"
              >
                <label class="label">Signal Strength:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
                  <input
                    v-model="responseData.signalstrength"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Signal Strength</div>
              </div>

              <div
                class="form-group basic"
              >
                <div class="input-wrapper">
                  <label class="label" for="account1">Base Station:</label>
                  <select
                    class="form-control custom-select"
                    id="account1"
                    v-model="responseData.basestation"
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

              <div
                class="form-group basic"
              >
                <label class="label">AP:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
                  <input
                    v-model="responseData.ap"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">AP</div>
              </div>

              
              <div
                class="form-group basic"
              >
                <label class="label">Radio Config Img:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
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

              <div
                class="form-group basic"
              >
                <label class="label">Ping Img:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
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

              <div
                class="form-group basic"
              >
                <label class="label">Speed Test Img:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
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

              <div
                class="form-group basic"
              >
                <label class="label">Address:</label>
                <div class="input-group">
                  <!-- <span class="input-group-text" id="basic-addon1"></span> -->
                  <textarea
                    v-if="responseData"
                    v-model="responseData.location"
                    type="text"
                    class="form-control"
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
                  Submit
                </button>
              </div>
            </form>
            <br>
            <br>
          </div>
        </div>
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

export default {
  props: ["baseStations"],
  name: "SurveyDetails",
  components: { AppHeader, AppBottomMenu },
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
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.fetchData(id);
    this.fetchData2();
  },
  methods: {
    fetchData(id) {
      this.surveyId = id;
      axios
        .get(
          `process.env.VUE_APP_INSTALLATION_ID_URL`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "x-api-key": "process.env.VUE_APP_API_KEY",
            },
          }
        )
        .then((response) => {
          this.responseData = response.data.data;
          console.log(this.responseData);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onFileSelected2(event) {
      this.selectedFile2 = event.target.files[0];
    },
    onFileSelected3(event) {
      this.selectedFile3 = event.target.files[0];
    },

    submitForm(e) {
      e.preventDefault();

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

      axios
        .post(
          "process.env.EXECUTE_INSTALLATION_URL",
          formData,
          {
            headers: {
              "x-api-key": "process.env.VUE_APP_API_KEY",
            },
          }
        )
        .then((response) => {
          console.log(response);
          // console.log(this.surveyId);
          console.log(this.responseData);
          console.log(response.status);
          // this.toast.success("Successful", {
          //   timeout: 2000,
          // });
        })
        .catch((error) => {
          console.log(error);
        });
    },

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

    fetchData2() {
      axios
        .get(
          "process.env.VUE_APP_INSTALLATION_REPORT_REQ_URL",
          {
            headers: {
              "x-api-key": "process.env.VUE_APP_API_KEY",
              "cookie": "process.env.VUE_APP_INSTALLATION_COOKIE",
            },
          }
        )
        .then((response) => {
          this.baseStations = response.data.data;
          // console.log(response.status);
          console.log(this.baseStations);
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
</style>