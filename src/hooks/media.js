import { useEffect, useState, useCallback } from "react";

export function useMedia() {
  const [isMobile, setIsMobile] = useState(false);

  const getDevice = useCallback(() => {
    if (window.innerWidth <= "767") {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    getDevice();
    window.addEventListener("resize", getDevice);

    return () => {
      window.removeEventListener("resize", getDevice);
    };
  }, [getDevice]);

  return isMobile;
}
