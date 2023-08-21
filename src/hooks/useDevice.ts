import { useEffect, useState } from 'react';

interface useDeviceType {
  isMobile: boolean;
}

export const useDevice = (): useDeviceType => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const checkoutDevice = (): void => {
    setIsMobile(window.innerWidth <= 635);
  };
  useEffect(() => {
    window.addEventListener('resize', checkoutDevice);
    return () => {
      window.removeEventListener('resize', checkoutDevice);
    };
  }, []);

  return {
    isMobile
  };
};
