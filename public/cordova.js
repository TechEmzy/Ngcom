document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is ready, now you can access Cordova plugins
}

window.getCordovaGeolocation = function (successCallback, errorCallback) {
  navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback,
    { enableHighAccuracy: true }
  );
};

window.takePhoto = function (successCallback, errorCallback) {
  navigator.camera.getPicture(
    successCallback,
    errorCallback,
    {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
    }
  );
};
