import { ReactiveFunction } from './ReactiveFunction'
import { computed, isRef, ref, Ref } from 'vue'

export function paramToRef<T>(param: T | Ref<T> | ReactiveFunction<T>): Ref<T> {
  if (isRef(param)) {
    return param
  } else if (typeof param === 'function') {
    return computed(param as ReactiveFunction<T>)
  } else {
    return ref(param) as any
  }
}
