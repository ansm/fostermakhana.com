/**
 * Creates a throttled function that only invokes the provided function at most once per specified interval
 * @param func The function to throttle
 * @param limit The time limit in milliseconds
 * @returns A throttled version of the function
 */
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
    let inThrottle = false
    let lastResult: ReturnType<T> | undefined
  
    return (...args: Parameters<T>): ReturnType<T> | undefined => {
      if (!inThrottle) {
        inThrottle = true
        lastResult = func(...args) as ReturnType<T>
  
        setTimeout(() => {
          inThrottle = false
        }, limit)
      }
  
      return lastResult
    }
  }
  
  