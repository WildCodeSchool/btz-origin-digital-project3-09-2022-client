"use client";

import CookieConsent from "react-cookie-consent";
import { useAuth } from "../../context/UserContext";

function CookiesConsent() {
  const { handleCookiesConsent, cookiesConsent } = useAuth();
  return (
    <CookieConsent
      onAccept={handleCookiesConsent}
      visible={cookiesConsent ? "hidden" : "show"}
      debug
      buttonText="I accept"
    >
      This site only uses cookies for authentication, do not worry! 😉
    </CookieConsent>
  );
}

export default CookiesConsent;
