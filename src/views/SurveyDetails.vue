<template>
  <!-- App Header -->
  <div>
    <AppHeader title="Sitesurvey Details" />
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
                  <label class="label" for="account1">Achievable:</label>
                  <select class="form-control custom-select" id="account1" v-model="responseData.achievable">
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                  </select>
                </div>
                <div class="input-info">Select Achievable</div>
              </div>

              <div class="form-group basic"  v-if="responseData.achievable === 'YES'">
                <label class="label">Client Name:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"></span>
                  <input
                    v-model="responseData.clientname"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Client name</div>
              </div>
              
              <div class="form-group basic" v-if="responseData.achievable === 'YES'">
                <div class="input-wrapper">
                  <label class="label" for="account1">Fibre:</label>
                  <select class="form-control custom-select" id="account1"  v-model="responseData.is_fibre">
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                  </select>
                </div>
                <div class="input-info">Select fibre</div>
              </div>

              <div class="form-group basic"  v-if="responseData.achievable === 'YES' && responseData.is_fibre === 'NO'">
                <div class="input-wrapper">
                  <label class="label" for="account1">Recommended Radio:</label>
                  <select class="form-control custom-select" id="account1" v-model="responseData.installation_radio">
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
              
              <div class="form-group basic"  v-if="responseData.achievable === 'YES' && responseData.is_fibre === 'YES'">
                <div class="input-wrapper">
                  <label class="label" for="account1">Recommended Router:</label>
                  <select class="form-control custom-select" id="account1" v-model="responseData.recommended_router">
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

              <div class="form-group basic" v-if="responseData.achievable === 'YES' && responseData.is_fibre === 'YES'">
                <div class="input-wrapper">
                  <label class="label" for="account1">Router Type:</label>
                  <select class="form-control custom-select" id="account1"  v-model="responseData.router_type">
                    <option value="G-pon">G-pon</option>
                    <option value="E-pon">E-pon</option>
                  </select>
                </div>
                <div class="input-info">Select router type</div>
              </div>

              <div class="form-group basic" v-if="responseData.achievable === 'YES' && responseData.is_fibre === 'NO'">
                  <label class="label">Cable Length:</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon1"></span>
                    <input
                      v-if="responseData"
                      v-model="responseData.estimatedcablelengthmetres"
                      type="text"
                      class="form-control"  
                    />
                  </div>
                  <div class="input-info">Recommended cable length</div>
              </div>

              <div class="form-group basic" v-if="responseData.achievable === 'YES'">
                  <label class="label">Materials Needed:</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon1"></span>
                    <textarea
                      v-if="responseData"
                      v-model="responseData.othermaterialsneeded"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="input-info">other materials needed</div>
                </div>

              <div class="form-group basic" v-if="responseData.achievable === 'YES'">
                <label class="label">Survey Date:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"></span>
                  <input
                    v-if="responseData"
                    v-model="responseData.surveydate"
                    type="date"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Select survey date</div>
              </div>

              <div class="form-group basic"  v-if="responseData.achievable === 'YES'">
                <label class="label">Client Email:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"></span>
                  <input
                    v-model="responseData.email"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Client email</div>
              </div>

              <div class="form-group basic" v-if="responseData.achievable === 'YES'">
                <label class="label">Phone Number:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"></span>
                  <input
                    v-model="responseData.phone"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Client phone number</div>
              </div>

              <div class="form-group basic" v-if="responseData.achievable === 'YES'">
                <label class="label">Survey Number:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"></span>
                  <input
                    v-model="responseData.sitesurveynumber"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Survey number</div>
              </div>
              
              <div class="form-group basic" v-if="responseData.achievable === 'YES'">
                <label class="label">Site Survey Type:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"></span>
                  <input
                    v-model="responseData.site_survey_type"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Site survey type</div>
              </div>
              
              <div class="form-group basic" v-if="responseData.achievable === 'YES'">
                <label class="label">Address:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"></span>
                  <input
                    v-model="responseData.siteaddress"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Address</div>
              </div>
              
              <div class="form-group basic" v-if="responseData.achievable === 'YES' && responseData.is_fibre === 'NO'">
                <div class="input-wrapper">
                  <label class="label" for="account1">Mast Installed:</label>
                  <select class="form-control custom-select" id="account1" v-model="responseData.isamastinstalled">
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                  </select>
                </div>
                <div class="input-info">Select mast installed</div>
              </div>
              
              <div class="form-group basic" v-if="responseData.achievable === 'YES' && responseData.is_fibre === 'NO'">
                <div class="input-wrapper">
                  <label class="label" for="account1">Possible Obstacles:</label>
                  <select class="form-control custom-select" id="account1"  v-model="responseData.possibleobstacles">
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                  </select>
                </div>
                <div class="input-info">Select possible obstacles</div>
              </div>
              
              <div class="form-group basic" v-if="responseData.achievable === 'YES'">
                <label class="label">Type of Obstacles:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"></span>
                  <input
                    v-model="responseData.typeofobstacles"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">type of obstacles</div>
              </div>
              
              <div class="form-group basic"  v-if="responseData.achievable === 'YES'">
                <label class="label">Path Analysis:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"></span>
                  <textarea
                    v-model="responseData.pathanalysis"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="input-info">Path analysis</div>
              </div>

              <div class="form-group basic" v-if="responseData.achievable === 'YES' && responseData.is_fibre === 'NO'">
                <label class="label">Image 1:</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon1"></span>
                    <input
                      type="file"
                      class="form-control"
                      @change="onFileSelected"
                      name="image1"
                    />
                  </div>
                  <div class="input-info">Add image 1</div>
              </div>

              <div class="form-group basic" v-if="responseData.achievable === 'YES' && responseData.is_fibre === 'NO'">
                <label class="label">Image 2:</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon1"></span>
                    <input
                      type="file"
                      class="form-control"
                      @change="onFileSelected2"
                      name="image2"
                    />
                  </div>
                  <div class="input-info">Add image 2</div>
              </div>

              <div class="form-group basic" v-if="responseData.achievable === 'YES' && responseData.is_fibre === 'NO'">
                <label class="label">Image 3:</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon1"></span>
                    <input
                      type="file"
                      class="form-control"
                      @change="onFileSelected3"
                      name="image3"
                    />
                  </div>
                  <div class="input-info">Add image 3</div>
              </div>

              <div class="form-group basic" v-if="responseData.achievable === 'YES'">
                <div class="input-wrapper">
                  <label class="label" for="account1">Base Station:</label>
                  <select class="form-control custom-select" id="account1" v-model="responseData.map">
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
               
              <div class="form-group basic" v-if="responseData.achievable === 'YES' && responseData.is_fibre === 'NO'">
                <label class="label">client Coordinate:</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"></span>
                  <input
                    v-model="responseData.clientcoordinate"
                    type="text"
                    class="form-control"
                    @change="calculateDistance"
                  />
                  <span class="btn btn-dark" @click.prevent="getCurrentLocation">Get Current Coord</span>
                </div>
                <div class="input-info">client coordinate</div>
              </div>
         
              <div class="form-group basic" v-if="responseData.achievable === 'YES' && responseData.is_fibre === 'NO'">
                <label class="label" for="distance">Distance (km):</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1"></span>
                  <input
                    v-model="responseData.distance"
                    id="distance"
                    type="text"
                    class="form-control"
                    readonly
                  />
                  <span class="btn btn-dark" @click.prevent="calculateDistance">Calculate Distance</span>
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
import useCamera from '../useCamera';

export default {
  props: ["baseStations"],
  name: "SurveyDetails",
  components: { AppHeader, AppBottomMenu, useCamera },
  data() {
    return {
      surveyId: "",
      baseStations: {},
      selectedFile: null,
      selectedFile2: null,
      selectedFile3: null,
      takePhoto: null,
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
          `process.env.VUE_APP_SD_URL`,
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
      for (let key in this.responseData) {
        formData.append(key, this.responseData[key]);
      }
      formData.append("image1", this.selectedFile);
      formData.append("image2", this.selectedFile2);
      formData.append("image3", this.selectedFile3);
      
      formData.append("id", this.surveyId);
      formData.append("username", "admin");
      formData.append("achievable", "YES");
      formData.append("achievable", "YES");


      axios
        .post(
          "process.env.VUE_APP_EXECUTE_SITESURVEY_URL",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "x-api-key": "process.env.VUE_APP_API_KEY",
            },
          }
        )
        .then((response) => {
          this.responseData = response.data;
          // handle success response
          console.log(this.responseData);
          console.log(response.status);
          //this.$toast.success("Form submitted successfully"); // Display success toast
        })
        .then((result) => console.log(result))
        .catch((error) => {
          // handle error response
          console.log(error);
          //this.$toast.error("An error occurred while submitting the form"); // Display error toast
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
          "process.env.VUE_APP_GET_BASESTATION_URL",
          {
            headers: {
              "x-api-key": "process.env.VUE_APP_API_KEY",
              "cookie": "process.en.VUE_APP_BASESTATION_COOKIE",
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
    border: none;
    border-bottom: 1px solid #DCDCE9;
    padding: 0 30px 0 0;
    border-radius: 0;
    height: 40px;
    color: #27173E;
    font-size: 15px;
}
.form-group .label {
    font-size: 11px;
    margin: 0;
    font-weight: 500;
    color: #27173E;
    display: block;
    line-height: 1.2em;
    text-align: left;
}
</style>