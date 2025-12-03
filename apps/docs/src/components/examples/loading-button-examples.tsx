"use client";

import { LoadingButton } from "@geckoui/geckoui";
import { useState } from "react";

export function AsyncOperationExample() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Simulate API call or file download
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // In real app: await fetchReportData() and downloadFile()
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <LoadingButton
      loading={isDownloading}
      loadingText="Downloading..."
      onClick={handleDownload}
      variant="outlined"
      size="lg">
      Download Report
    </LoadingButton>
  );
}
