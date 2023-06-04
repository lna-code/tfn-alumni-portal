export const countDown = (seconds: number) => {
  let remainingSeconds = seconds;

  const timer = setInterval(() => {
    if (remainingSeconds === 0) {
      clearInterval(timer);
    }
    remainingSeconds--;
  }, 1000);
  return remainingSeconds;
};
