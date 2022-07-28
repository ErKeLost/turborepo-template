import { ref, computed } from 'vue'
export function useComputed(value: any) {
  const w = ref(value)
  return computed(() => {
    return value.value + 999
  })
}
