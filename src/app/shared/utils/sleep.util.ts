export const sleep = (delay = 1000) => {
  return new Promise<void>((res, _rej) => {
    setTimeout(() => {
      res()
    }, delay);
  })
}
