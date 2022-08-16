// src/index.ts
import { ref } from "vue";
function useBoolean(initValue = false) {
  const bool = ref(initValue);
  function setBool(value) {
    bool.value = value;
  }
  function setTrue() {
    setBool(true);
  }
  function setFalse() {
    setBool(false);
  }
  function toggle() {
    setBool(!bool.value);
  }
  return {
    bool,
    setBool,
    setTrue,
    setFalse,
    toggle
  };
}
export {
  useBoolean as default
};
//# sourceMappingURL=index.mjs.map