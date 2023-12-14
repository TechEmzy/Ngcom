<template>
  <!-- App Capsule -->
  <div id="appCapsule">
    <div class="section mt-2 text-center">
      <img
        src="../assets/img/logo.jpg"
        class="mb-2"
        alt="ngcom image"
        style="width: 40%"
      />
      <!-- <h1>Log in</h1> -->
      <h4>Fill the form to log in</h4>
    </div>
    <div class="section mb-5 p-2">
      <form @submit.prevent="handleSubmit">
        <div class="card">
          <div class="card-body pb-1">
            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="username">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Your Username"
                  v-model="username"
                  required
                />
                <i class="clear-input">
                  <ion-icon name="close-circle"></ion-icon>
                </i>
              </div>
            </div>

            <div class="form-group basic">
              <div class="input-wrapper">
                <label class="label" for="password1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password1"
                  autocomplete="off"
                  placeholder="Your password"
                  v-model="secret"
                  required
                />
                <i class="clear-input">
                  <ion-icon name="close-circle"></ion-icon>
                </i>
              </div>
            </div>
          </div>
        </div>

        <div class="form-button-group transparent">
          <button type="submit" class="btn btn-primary btn-block btn-lg">
            Log in
          </button>
        </div>
      </form>

      <h4 v-if="loginError" class="error" style="color: red; margin-top: 10px;"> {{ loginError }} </h4>

    </div>
  </div>
  <!-- * App Capsule -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      secret: "",
      loginError: "",
      correctUsername: "admin",
      correctPassword: "System", // Replace with the correct password
    };
  },

  mounted() {
    // Check if the user is already authenticated
    const storedUsername = sessionStorage.getItem("username");
    const storedApiKey = sessionStorage.getItem("api_key");

    if (storedUsername && storedApiKey) {
      // User is already authenticated, redirect to the dashboard
      this.$router.push("Dashboard");
    }
  },

  methods: {
    handleSubmit() {
      // Check if the entered password and username are correct
      if (this.secret !== this.correctPassword || this.username !== this.correctUsername) {
        this.loginError = "Incorrect username or password!";
        return;
      }

      // Make a post request to the database to save the user
      axios
        .post(
          "https://testenv.ciphernet.net/ngcomintranetv2/api/v1/auth/getkeys",
          {
            username: this.username,
            secret: this.secret,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          // Save user information in session storage
          sessionStorage.setItem("username", response.data.username);
          sessionStorage.setItem("api_key", response.data.api_key);

          console.log(response.data.username);
          console.log(response.data.api_key);
          
          // Redirect to the dashboard
          this.$router.push("Dashboard");
        })
        .catch((error) => {
          this.loginError = "Network error!";
          console.error("There was an error!", error);
        });
    },
  },
};
</script>