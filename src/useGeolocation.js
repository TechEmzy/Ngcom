import { ref } from 'vue';

export default function useGeolocation() {
  const position = ref(null);
  const error = ref(null);

  const getCurrentLocation = () => {
    window.getCordovaGeolocation(
      (pos) => {
        position.value = pos.coords;
      },
      (err) => {
        error.value = err.message;
      }
    );
  };

  return {
    position,
    error,
    getCurrentLocation,
  };
}
