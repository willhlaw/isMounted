import { useRef, useEffect } from 'react';

const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    isMounted.isLongDelay = () => false;
    return () => {
      isMounted.current = false;
      isMounted.unMountedTimestamp = date.now();
      isMounted.isLongDelay = (delayInMs = 3000) => isMounted.unMountedTimestamp - date.now() > delayInMs;
    }
  }, []);
  return isMounted;
};

export default useIsMounted;
