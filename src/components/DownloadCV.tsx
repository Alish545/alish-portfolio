import { useState } from "react";
import { Download, LoaderCircle } from "lucide-react";

type Props = { className?: string };

const DownloadCV = ({ className = "text-link" }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const download = async () => {
    if (loading) return;
    setLoading(true);
    setError(false);
    let url: string | undefined;
    try {
      const response = await fetch(
        `${import.meta.env.BASE_URL}Alish_Tuladhar_CV.pdf`,
      );
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      if (!blob.type.includes("pdf")) throw new Error("Invalid file");
      url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Alish_Tuladhar_CV.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      const downloadUrl = url;
      window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 60000);
    } catch {
      if (url) URL.revokeObjectURL(url);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <span className="cv-download">
      <button
        type="button"
        className={className}
        onClick={download}
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? (
          <LoaderCircle size={16} className="cv-spinner" />
        ) : (
          <Download size={16} />
        )}
        {loading ? "Preparing CV…" : "Download CV"}
      </button>
      <span className="cv-download-status" role="status">
        {error ? "Couldn't download. Please try again." : ""}
      </span>
    </span>
  );
};
export default DownloadCV;
