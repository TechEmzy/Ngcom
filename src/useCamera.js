// useCamera.js
export const useCamera = {
  captureImage() {
    return new Promise((resolve, reject) => {
      if (navigator.camera) {
        const options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          encodingType: Camera.EncodingType.JPEG,
          mediaType: Camera.MediaType.PICTURE,
          correctOrientation: true,
        };

        // Call the camera plugin to capture an image
        navigator.camera.getPicture(
          (imageData) => {
            // Resolve with the imageData (Base64-encoded image data)
            resolve(imageData);
          },
          (error) => {
            // Reject with the error message
            reject(error);
          },
          options
        );
      } else {
        // The camera plugin is not available, reject with an error message
        reject("Camera plugin not available");
      }
    });
  },
};
