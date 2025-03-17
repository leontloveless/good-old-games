// components/GoogleAdSenseScript.tsx
import Script from "next/script";

const GoogleAdSenseScript = () => {
  const adsenseClientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID;

  if (!adsenseClientId) {
    console.warn(
      "Google AdSense client ID is not defined in environment variables"
    );
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default GoogleAdSenseScript;
