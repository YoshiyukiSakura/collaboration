import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import nextApi from "services/nextApi";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
}

export function useIsMounted() {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}

export function useSpace() {
  const router = useRouter();
  const { space } = router.query;
  return space;
}

export function useViewfunc() {
  const [viewFunc, setViewFunc] = useState();
  useEffect(() => {
    import("utils/viewfunc").then((viewFunc) => {
      setViewFunc(viewFunc);
    });
  }, []);
  return viewFunc;
}

export function useNetwork() {
  const [network, setNetwork] = useState();
  const space = useSpace();
  useEffect(() => {
    nextApi.fetch(`spaces/${space}`).then((response) => {
      if (response?.result?.network) {
        setNetwork(response.result.network);
      }
    });
  }, [space]);
  return network;
}
