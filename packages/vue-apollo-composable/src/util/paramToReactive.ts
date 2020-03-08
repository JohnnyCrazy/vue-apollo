import { ReactiveFunction } from './ReactiveFunction'
import { isRef, computed, reactive, Ref } from 'vue'

export function paramToReactive<T>(param: T | Ref<T> | ReactiveFunction<T>): T | Ref<T> {
  if (isRef(param)) {
    return param
  } else if (typeof param === 'function') {
    return computed(param as ReactiveFunction<T>)
  } else if (param) {
    return reactive(param as any) as T
  } else {
    return param
  }
}
