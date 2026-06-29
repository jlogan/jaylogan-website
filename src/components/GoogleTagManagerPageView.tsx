import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const trackedPaths = new Set(["/budgetbytes", "/rapid-media"]);

const GoogleTagManagerPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (!trackedPaths.has(location.pathname)) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: `${location.pathname}${location.search}${location.hash}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default GoogleTagManagerPageView;
