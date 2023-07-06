import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import SiteSurvey from "../views/SiteSurvey.vue";
import SurveyDetails from "../views/SurveyDetails.vue";
import BaseStation from "../views/BaseStation.vue";
import Installation from "../views/Installation.vue";
import InstallationDetails from "../views/InstallationDetails.vue";
import Engineering from "../views/Engineering.vue";
import Settings from "../views/Settings.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/site_surveyList",
    name: "SiteSurvey",
    component: SiteSurvey,
  },
  {
    path: "/surveyDetails/:id",
    name: "SurveyDetails",
    component: SurveyDetails,
  },
  {
    path: "/base_stations",
    name: "BaseStation",
    component: BaseStation,
  },
  {
    path: "/installation_report",
    name: "Installation",
    component: Installation,
  },
  {
    path: "/installationDetails/:id",
    name: "InstallationDetails",
    component: InstallationDetails,
  },
  {
    path: "/engineering",
    name: "Engineering",
    component: Engineering,
  },
  {
    path: "/Settings",
    name: "Settings",
    component: Settings,
  },
];
const router = createRouter({
  history: createWebHashHistory(), // <--- this is important
  routes
})

export default router;