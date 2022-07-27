// src/index.ts
import {ref} from "vue";
function useComputed(value) {
  const w = ref(value)
  return w.value + 111;
}
export {
  useComputed
};
