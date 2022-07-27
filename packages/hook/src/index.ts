import { ref, computed } from 'vue'
export function useComputed(value: any) {
  return ref(value) + 111
}
