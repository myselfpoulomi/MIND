import React from "react";

const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

export default function ResponsiveComponent() {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    return null; // Optional: show a loading spinner or placeholder
  }

  return (
    <div>
      {isMobile ? (
        <p>You are using a mobile device.</p>
      ) : (
        <p>You are using a desktop device.</p>
      )}
    </div>
  );
}
