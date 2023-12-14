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
    <AppHeader title="Sitesurvey Details" />
  </div>
  <!--* App Header -->

  <!-- break -->
  <br />
  <br />
  <!--* break -->

  <!-- My SiteSurvey details Table -->
  <div class="" id="actionSheetForm" tabindex="-1" role="dialog" v-if="!isLoading">
    <div class="modal-dialog" role="document">

      <div class="modal-content">
        <!-- My SiteSurvey details header -->
        <div class="modal-header">
          <h5>Edit</h5>
        </div>
        <!-- My SiteSurvey details header -->

        <!-- My SiteSurvey details form body -->
        <div class="modal-body">
          <div class="action-sheet-content">
            <form @submit.prevent="submitForm">

              <div class="form-group basic">
                <div class="input-wrapper">
                  <label class="label" for="account1">Achievable:</label>
                  <select
                    class="form-control custom-select"
                    id="account1"
                    v-model="responseData.achievable"
                    required
                  >
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                  </select>
                </div>
                <div class="input-info">Select Achievable</div>
              </div>

              <div
                class="form-group basic"
                v-if="responseData.achievable === 'YES'"
              >
                <label class="label">Client Name:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.clientname"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Client name</div>
              </div>

              <div
                class="form-group basic"
                v-if="responseData.achievable === 'YES'"
              >
                <div class="input-wrapper">
                  <label class="label" for="account1">Fibre:</label>
                  <select
                    class="form-control custom-select"
                    id="account1"
                    v-model="responseData.is_fibre"
                    required
                  >
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                  </select>
                </div>
                <div class="input-info">Select fibre</div>
              </div>

              <div
                class="form-group basic"
                v-if="
                  responseData.achievable === 'YES' &&
                  responseData.is_fibre === 'NO'
                "
              >
                <div class="input-wrapper">
                  <label class="label" for="account1">Recommended Radio:</label>
                  <select
                    class="form-control custom-select"
                    id="account1"
                    v-model="responseData.installation_radio"
                    required
                  >
                    <option value="Power Beam">Power Beam</option>
                    <option value="NanoStation M5">NanoStation M5</option>
                    <option value="NanoStation M2">NanoStation M2</option>
                    <option value="Power Bridge M5">Power Bridge M5</option>
                    <option value="Rocket M5">Rocket M5</option>
                    <option value="Cambium Epmp 180">Cambium Epmp 180</option>
                    <option value="Cambium Epmp 190">Cambium Epmp 190</option>
                    <option value="Cambium Epmp 200">Cambium Epmp 200</option>
                    <option value="Cambium Epmp 500">Cambium Epmp 500</option>
                    <option value="Cambium Epmp 1000">Cambium Epmp 1000</option>
                    <option value="Cambium Epmp 2000">Cambium Epmp 2000</option>
                  </select>
                </div>
                <div class="input-info">Select recommended radio</div>
              </div>

              <div
                class="form-group basic"
                v-if="
                  responseData.achievable === 'YES' &&
                  responseData.is_fibre === 'YES'
                "
              >
                <div class="input-wrapper">
                  <label class="label" for="account1"
                    >Recommended Router:</label
                  >
                  <select
                    class="form-control custom-select"
                    id="account1"
                    v-model="responseData.recommended_router"
                    required
                  >
                    <option value="TP-Link Router">TP-Link Router</option>
                    <option value="ZTE Router">ZTE Router</option>
                    <option value="ZTE Router">ZTE Router</option>
                    <option value="Tenda Router">Tenda Router</option>
                    <option value="GPON F660">GPON F660</option>
                    <option value="Mikrotik Router">Mikrotik Router</option>
                    <option value="ZTE F660">ZTE F660</option>
                  </select>
                </div>
                <div class="input-info">Select recommended router</div>
              </div>

              <div
                class="form-group basic"
                v-if="
                  responseData.achievable === 'YES' &&
                  responseData.is_fibre === 'YES'
                "
              >
                <div class="input-wrapper">
                  <label class="label" for="account1">Router Type:</label>
                  <select
                    class="form-control custom-select"
                    id="account1"
                    v-model="responseData.router_type"
                    required
                  >
                    <option value="G-pon">G-pon</option>
                    <option value="E-pon">E-pon</option>
                  </select>
                </div>
                <div class="input-info">Select router type</div>
              </div>

              <div
                class="form-group basic"
                v-if="
                  responseData.achievable === 'YES' &&
                  responseData.is_fibre === 'NO'
                "
              >
                <label class="label">Cable Length:</label>
                <div class="input-group">
                  <input
                    v-if="responseData"
                    v-model="responseData.estimatedcablelengthmetres"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Recommended cable length</div>
              </div>

              <div
                class="form-group basic"
                v-if="responseData.achievable === 'YES'"
              >
                <label class="label">Materials Needed:</label>
                <div class="input-group">
                  <textarea
                    v-if="responseData"
                    v-model="responseData.othermaterialsneeded"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">other materials needed</div>
              </div>
             
              <div
                class="form-group basic"
                v-if="responseData.achievable === 'YES'"
              >
                <label class="label">Survey Date:</label>
                <div class="input-group">
                  <Datepicker
                    v-if="responseData"
                    v-model="selectedDate"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Select survey date</div>
              </div>

              <div
                class="form-group basic"
                v-if="responseData.achievable === 'YES'"
              >
                <label class="label">Client Email:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.email"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Client email</div>
              </div>

              <div
                class="form-group basic"
                v-if="responseData.achievable === 'YES'"
              >
                <label class="label">Phone Number:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.phone"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Client phone number</div>
              </div>

              <div
                class="form-group basic"
                v-if="responseData.achievable === 'YES'"
              >
                <label class="label">Survey Number:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.sitesurveynumber"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Survey number</div>
              </div>

              <div
                class="form-group basic"
                v-if="responseData.achievable === 'YES'"
              >
                <label class="label">Site Survey Type:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.site_survey_type"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Site survey type</div>
              </div>

              <div
                class="form-group basic"
                v-if="responseData.achievable === 'YES'"
              >
                <label class="label">Address:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.siteaddress"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Address</div>
              </div>

              <div
                class="form-group basic"
                v-if="
                  responseData.achievable === 'YES' &&
                  responseData.is_fibre === 'NO'
                "
              >
                <div class="input-wrapper">
                  <label class="label" for="account1">Mast Installed:</label>
                  <select
                    class="form-control custom-select"
                    id="account1"
                    v-model="responseData.isamastinstalled"
                    required
                  >
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                  </select>
                </div>
                <div class="input-info">Select mast installed</div>
              </div>

              <div
                class="form-group basic"
                v-if="
                  responseData.achievable === 'YES' &&
                  responseData.is_fibre === 'NO'
                "
              >
                <div class="input-wrapper">
                  <label class="label" for="account1"
                    >Possible Obstacles:</label
                  >
                  <select
                    class="form-control custom-select"
                    id="account1"
                    v-model="responseData.possibleobstacles"
                    required
                  >
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                  </select>
                </div>
                <div class="input-info">Select possible obstacles</div>
              </div>

              <div
                class="form-group basic"
                v-if="responseData.achievable === 'YES'"
              >
                <label class="label">Type of Obstacles:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.typeofobstacles"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">type of obstacles</div>
              </div>

              <div
                class="form-group basic"
                v-if="responseData.achievable === 'YES'"
              >
                <label class="label">Path Analysis:</label>
                <div class="input-group">
                  <textarea
                    v-model="responseData.pathanalysis"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="input-info">Path analysis</div>
              </div>

              <div
                class="form-group basic"
                v-if="
                  responseData.achievable === 'YES' &&
                  responseData.is_fibre === 'NO'
                "
              >
                <label class="label">Image 1:</label>
                <div class="input-group">
                  <input
                    type="file"
                    class="form-control"
                    @change="onFileSelected"
                    name="image1"
                    ref="fileInput1"
                  />
                  <button v-if="!capturedImageData1" class="btn btn-primary" @click="captureImage(1)">Capture Image</button>
                </div>
                <img v-if="capturedImageData1" :src="capturedImageData1" style="max-width: 100px; margin-top: 10px;" /> 
                <div class="input-info">Add image 1</div>
              </div>

              <div
                class="form-group basic"
                v-if="
                  responseData.achievable === 'YES' &&
                  responseData.is_fibre === 'NO'
                "
              >
                <label class="label">Image 2:</label>
                <div class="input-group">
                  <input
                    type="file"
                    class="form-control"
                    @change="onFileSelected2"
                    name="image2"
                    ref="fileInput2"
                  />
                  <button v-if="!capturedImageData2" class="btn btn-primary" @click="captureImage(2)">Capture Image</button>
                </div>
                <img v-if="capturedImageData2" :src="capturedImageData2" style="max-width: 100px; margin-top: 10px;" /> 
                <div class="input-info">Add image 2</div>
              </div>

              <div
                class="form-group basic"
                v-if="
                  responseData.achievable === 'YES' &&
                  responseData.is_fibre === 'NO'
                "
              >
                <label class="label">Image 3:</label>
                <div class="input-group">
                  <input
                    type="file"
                    class="form-control"
                    @change="onFileSelected3"
                    name="image3"
                    ref="fileInput3"
                  />
                  <button v-if="!capturedImageData3" class="btn btn-primary" @click="captureImage(3)">Capture Image</button>
                </div>
                <img v-if="capturedImageData3" :src="capturedImageData3" style="max-width: 100px; margin-top: 10px;" /> 
                <div class="input-info">Add image 3</div>
              </div>

              <div
                class="form-group basic"
                v-if="responseData.achievable === 'YES'"
              >
                <div class="input-wrapper">
                  <label class="label" for="account1">Base Station:</label>
                  <select
                    class="form-control custom-select"
                    id="account1"
                    v-model="responseData.map"
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

              <div
                class="form-group basic"
                v-if="
                  responseData.achievable === 'YES' &&
                  responseData.is_fibre === 'NO'
                "
              >
                <label class="label">client Coordinate:</label>
                <div class="input-group">
                  <input
                    v-model="responseData.clientcoordinate"
                    type="text"
                    class="form-control"
                    @change="calculateDistance"
                    required
                  />
                  <span class="btn btn-dark" @click.prevent="getCurrentLocation"
                    >Get Current Coord</span
                  >
                </div>
                <div class="input-info">client coordinate</div>
              </div>

              <div
                class="form-group basic"
                v-if="
                  responseData.achievable === 'YES' &&
                  responseData.is_fibre === 'NO'
                "
              >
                <label class="label" for="distance">Distance (km):</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"></span>
                  <input
                    v-model="responseData.distance"
                    id="distance"
                    type="text"
                    class="form-control"
                    readonly
                    required
                  />
                  <span class="btn btn-dark" @click.prevent="calculateDistance"
                    >Calculate Distance</span
                  >
                </div>
                <div class="input-info">Distance</div>
              </div>

              <div class="form-group basic">
                <button
                  type="submit"
                  class="btn btn-primary btn-block btn-lg"
                  data-bs-dismiss="modal"
                >
                  Execute Survey
                </button>
              </div>
            </form>
            <br />
            <br />
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
import Datepicker from "vue3-datepicker";
import Swal from "sweetalert";
import { useCamera } from "../useCamera";

export default {
  props: ["baseStations"],
  name: "SurveyDetails",
  components: { AppHeader, AppBottomMenu, Datepicker },
  data() {
    return {
      surveyId: "",
      baseStations: {},
      selectedFile: null,
      selectedFile2: null,
      selectedFile3: null,
      responseData: {
        id: "",
        achievable: "",
        installation_radio: "",
        recommended_router: "",
        is_fibre: "",
        estimatedcablelengthmetres: "",
        router_type: "",
        surveydate: "",
        othermaterialsneeded: "",
        email: "",
        phone: "",
        sitesurveynumber: "",
        site_survey_type: "",
        isamastinstalled: "",
        possibleobstacles: "",
        pathanalysis: "",
        typeofobstacles: "",
        siteaddress: "",
        created: "",
        clientname: "",
        executed: "",
        map: null,
        clientcoordinate: "",
        distance: "",
      },
      isLoading: true,
      selectedDate: null,
      capturedImageData1: null,
      capturedImageData2: null,
      capturedImageData3: null,
    };
  },

  mounted() {
    let id = this.$route.params.id;
    this.fetchData(id);
    this.fetchData2();
  },

  methods: {
    // fetching sitesurveys by its id
    fetchData(id) {
      this.surveyId = id;
      axios
        .get(
          `${process.env.VUE_APP_SITESURVEY_ID_URL}?id=${id}`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "x-api-key": localStorage.getItem("api_key"),
            },
          }
        )
        .then((response) => {
          this.responseData = response.data.data;
          // console.log(this.responseData);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    // Function to handle file selection
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },

    async captureImage(imageNumber) {
      try {
        const imageData = await useCamera.captureImage();

        // Set the captured image data based on the image number
        switch (imageNumber) {
          case 1:
            this.capturedImageData1 = "data:image/jpeg;base64," + imageData;
            break;
          case 2:
            this.capturedImageData2 = "data:image/jpeg;base64," + imageData;
            break;
          case 3:
            this.capturedImageData3 = "data:image/jpeg;base64," + imageData;
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(error);
      }
    },

    // function to submit the form
    submitForm(e) {
      e.preventDefault();
      // sweetalert modal
      Swal({
        title: "Confirmation",
        text: "Are you sure you want to execute the survey?",
        icon: "warning",
        buttons: ["Cancel", "Execute"],
        dangerMode: true,
      }).then((execute) => {
        if (execute) {
          // User clicked Execute button
          let formData = new FormData();
          for (let key in this.responseData) {
            formData.append(key, this.responseData[key]);
          }
          formData.append("image1", this.capturedImageData1);
          formData.append("image2", this.capturedImageData2);
          formData.append("image3", this.capturedImageData3);
          formData.append("id", this.surveyId);
          formData.append("username", "admin");
          formData.append("achievable", "YES");
          formData.append("achievable", "YES");

          // submitting to the api with the post method
          axios
            .post(
              process.env.VUE_APP_EXECUTE_SITESURVEY_URL,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                  "x-api-key": process.env.VUE_APP_API_KEY,
                },
              }
            )
            .then((response) => {
              this.responseData = response.data;
              // handle success response
              // console.log(this.responseData);
              // console.log(response.status);
              Swal(
                "Success",
                "Sitesurvey executed successfully",
                "success"
              ).then(() => {
                // Close the modal or do something else
                const modal = document.getElementById("your-modal-id");
                // Redirect to SiteSurvey route
                this.$router.push("/site_surveyList");
              });
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
      // console.log(distance);
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
              'cookie': process.env.VUE_APP_BASESTATION_COOKIE,
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
  border: none;
  border-bottom: 1px solid #dcdce9;
  padding: 0 30px 0 0;
  border-radius: 0;
  height: 40px;
  color: #27173e;
  font-size: 15px;
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
