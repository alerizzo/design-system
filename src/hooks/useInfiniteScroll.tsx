import React, { useCallback, useEffect, useRef } from 'react'

/** @deprecated Use useInfiniteScrollRef instead */
export function useInfiniteScroll<T extends Element>(
  ref: React.RefObject<T>,
  onLoadMore?: () => void,
  containerRef?: Element | null
) {
  const observer = useRef<IntersectionObserver>()
  const handleLoadMore: IntersectionObserverCallback = useCallback(
    (entries) => {
      if (entries[0].isIntersecting && onLoadMore) {
        onLoadMore()
      }
    },
    [onLoadMore]
  )

  useEffect(() => {
    if (ref.current) {
      observer.current = new IntersectionObserver(handleLoadMore, { root: containerRef })
      observer.current.observe(ref.current)
    }

    return () => {
      if (observer.current) observer.current.disconnect()
    }
  }, [ref, handleLoadMore, containerRef])
}

export default function useInfiniteScrollRef<T extends Element>(
  onLoadMore?: () => void,
  containerRef?: Element | null
) {
  const observer = useRef<IntersectionObserver>()
  const [ref, setRef] = React.useState<T | null>(null)

  const handleLoadMore: IntersectionObserverCallback = useCallback(
    (entries) => {
      if (entries[0].isIntersecting && onLoadMore) {
        onLoadMore()
      }
    },
    [onLoadMore]
  )

  const refCallback = useCallback((node: T) => {
    setRef(node)
  }, [])

  useEffect(() => {
    if (ref) {
      observer.current = new IntersectionObserver(handleLoadMore, { root: containerRef })
      observer.current.observe(ref)
    }

    return () => {
      if (observer.current) observer.current.disconnect()
    }
  }, [ref, handleLoadMore, containerRef])

  return refCallback
}
