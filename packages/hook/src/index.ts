import { ref } from 'vue'
export function useComputed(value: any) {
  const w = ref(value)
  return w.value + 111
}
