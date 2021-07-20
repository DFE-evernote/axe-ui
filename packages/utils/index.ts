export const throttle = (fn: Function, delay: number = 0) => {
  let start = Date.now()
  return (...args: any) => {
    const end = Date.now()
    if (end - start > delay) {
      fn.apply(this, args)
      start = Date.now()
    }
  }
}
