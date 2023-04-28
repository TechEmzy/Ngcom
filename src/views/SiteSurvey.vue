<template>
    <!-- App Header -->
    <div>
        <AppHeader title="My Site Survey" />
    </div>
    <!--* App Header -->
    
    <!-- My Site Survey Table -->
    <div v-if="responseData">
      <table>
        <thead>
          <tr className="table-heading">
            <th>Client Name</th>
            <th>Date Raised</th>
            <th>Survey Date</th>
            <th>Client Email</th>
            <th>Client Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in responseData.data" :key="item.id">
            <!-- <router-link :to="{ name: 'SurveyDetails', params: { id: item.id } }"> -->
              <td>{{ item.clientname }}</td>
              <td>{{ item.created }}</td>
              <td>{{ item.surveydate }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.phone }}</td>
              <td><button> Button</button></td>
            <!-- </router-link> -->
          </tr>
        </tbody>
      </table>
    </div>
    <!--* My Site Survey Table -->
  </template>
  
  <script>
  import axios from "axios";
  import AppHeader from '../components/AppHeader.vue'
  
  export default {
    name: 'SiteSurvey',
    components: { AppHeader },
    data() {
      return {
        responseData: null,
      };
    },
    mounted() {
      this.fetchData();
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
            "Site_Survey URL",
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
button {
 border: none;
 color: #fff;
 background-image: linear-gradient(30deg, #fe5919, #e09577);
 border-radius: 20px;
 background-size: 100% auto;
 font-family: inherit;
 font-size: 17px;
 padding: 0.6em 1.5em;
}

button:hover {
 background-position: right center;
 background-size: 200% auto;
 -webkit-animation: pulse 2s infinite;
 animation: pulse512 1.5s infinite;
}

@keyframes pulse512 {
 0% {
  box-shadow: 0 0 0 0 #05bada66;
 }

 70% {
  box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
 }

 100% {
  box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
 }
}
.appHeader{
    height: 100px;
}
table{
  margin-top: 100px;
  border-collapse: collapse;
  width: 100%;
  background-color: white;
 }
 .table-heading {
font-weight: bold;
font-size: 15px;
border: 1px solid #dddfe1;
margin-top: 100px;
background-color: #eaf0f7;
}
th{
  padding: 12px 30px 12px 12px;
  border: 1px solid #dddfe1;
}
td{
  border: 1px solid #dddfe1;
  padding: 12px;
}
table tr:nth-child(even) {
    background-color: #eaf0f7;   
}
.appHeader.transparent {
    background: white;
}
button {
    background-color: white;
}
</style>


