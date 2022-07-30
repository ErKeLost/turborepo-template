// src/index.ts
import { ref, computed } from "vue";
function useComputed(value) {
  const w = ref(value);
  return computed(() => {
    return value.value + 999;
  });
}
export {
  useComputed
};
