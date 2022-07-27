// src/index.ts
import { ref } from "vue";
function useComputed(value) {
  return ref(value) + 111;
}
export {
  useComputed
};
