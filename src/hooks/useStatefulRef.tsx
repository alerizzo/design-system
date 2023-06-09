import { MutableRefObject, useRef, useState } from 'react'

export function useStatefulRef<T>(initialVal = null) {
  // eslint-disable-next-line prefer-const
  let [cur, setCur] = useState<T | null>(initialVal)

  const { current: ref } = useRef({
    current: cur,
  })

  Object.defineProperty(ref, 'current', {
    get: () => cur as T,
    set: (value: T) => {
      if (!Object.is(cur, value)) {
        cur = value
        setCur(value)
      }
    },
  })

  return ref as MutableRefObject<T>
}
