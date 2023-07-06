<template>
  <!-- App Header -->
  <div>
    <AppHeader title="My Base Stations" />
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
          <h5 class="modal-title">Base Stations</h5>
        </div>
        <div class="modal-body">
          <div class="action-sheet-content">
            <form @submit.prevent="submitForm">   
              <div class="form-group basic">
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
               
              <div class="form-group basic">
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
         
              <div class="form-group basic">
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
            </form>
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
import useGeolocation from '../useGeolocation';

export default {
  name: "BaseStation",
  components: { AppHeader, AppBottomMenu, useGeolocation },
  data() {
    return {
      baseStations: {},
      responseData: {
        map: null,
        clientcoordinate: "",
        distance: "",
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get(
          "process.env.VUE_APP_GET_BASESTATION_URL",
          {
            headers: {
              "x-api-key": "process.env.VUE_APP_API_KEY",
              cookie: "process.env.VUE_APP_BASESTATION_COOKIE",
            },
          }
        )
        .then((response) => {
          this.baseStations = response.data.data;
          console.log(this.baseStations);
        })
        .catch((error) => {
          console.log(`Error fetching data: ${error.message}`);
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
      console.log(this.responseData.distance);
    },
    toRad(value) {
      return (value * Math.PI) / 180;
    },
  },
};
</script>