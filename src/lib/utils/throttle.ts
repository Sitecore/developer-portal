/**
 * Throttle function to limit the rate of function calls
 * @param func - The function to throttle
 * @param delay - Minimum delay between calls in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => Promise<any>>(
  func: T,
  delay: number
): T {
  let lastCallTime = 0;
  let pendingCall: { resolve: (value: any) => void; reject: (error: any) => void; args: Parameters<T> } | null = null;
  let timeoutId: NodeJS.Timeout | null = null;

  const throttled = async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    return new Promise((resolve, reject) => {
      const now = Date.now();
      const timeSinceLastCall = now - lastCallTime;

      if (timeSinceLastCall >= delay) {
        // Can execute immediately
        lastCallTime = now;
        func(...args)
          .then(resolve)
          .catch(reject);
      } else {
        // Need to wait
        const waitTime = delay - timeSinceLastCall;

        // Cancel any pending call
        if (pendingCall) {
          pendingCall.reject(new Error('Throttled: superseded by newer call'));
        }

        // Schedule this call
        pendingCall = { resolve, reject, args };
        
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
          if (pendingCall) {
            lastCallTime = Date.now();
            func(...pendingCall.args)
              .then(pendingCall.resolve)
              .catch(pendingCall.reject);
            pendingCall = null;
            timeoutId = null;
          }
        }, waitTime);
      }
    });
  };

  return throttled as T;
}

/**
 * Create a throttled fetch function
 * @param requestsPerSecond - Maximum number of requests per second
 * @returns Throttled fetch function
 */
export function createThrottledFetch(requestsPerSecond: number) {
  const delay = 1000 / requestsPerSecond; // Convert to milliseconds between requests
  
  return throttle(fetch, delay);
}
