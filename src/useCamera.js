import { ref } from 'vue';

export default function useCamera() {
  const photoData = ref(null);
  const error = ref(null);

  const takePhoto = () => {
    window.takePhoto(
      (data) => {
        photoData.value = 'data:image/jpeg;base64,' + data;
      },
      (err) => {
        error.value = err;
      }
    );
  };

  return {
    photoData,
    error,
    takePhoto,
  };
}
