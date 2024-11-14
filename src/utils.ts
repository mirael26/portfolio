export function throttle<T extends (...args: Parameters<T>) => unknown>(
  callee: T,
  timeout: number
) {
  let timer: number | null = null;

  return function perform(...args: Parameters<T>) {
    if (timer) return;

    timer = window.setTimeout(() => {
      callee(...args);

      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }, timeout);
  };
}
