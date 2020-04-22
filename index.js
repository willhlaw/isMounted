import { useRef, useEffect } from 'react';

const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    isMounted.isLongDelay = () => false;
    return () =>
      isMounted.current = {
        unMountedTimestamp: Date.now(),
        isLongDelay: (delayInMs = 3000) => isMounted.unMountedTimestamp - Date.now() > delayInMs
      }
  }, []);
  return isMounted;
};

export default useIsMounted;
