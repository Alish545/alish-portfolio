const courses = new URL("../assets/IMG_7986 2.PNG", import.meta.url).href;
const profile = new URL("../assets/IMG_7988 2.PNG", import.meta.url).href;
import activation from "@/assets/Screenshot 2026-09-29 at 1.26.31 PM.png";
import login from "@/assets/Screenshot 2026-09-29 at 1.26.43 PM.png";

const screens = [
  { src: activation, label: "Account activation" },
  { src: login, label: "Student login" },
  { src: courses, label: "Enrolled courses" },
  { src: profile, label: "Student profile" },
];

const CareKTMScreens = ({ gallery = false }: { gallery?: boolean }) => (
  <div className={`care-screens ${gallery ? "care-screens-gallery" : "care-screens-preview"}`}>
    {(gallery ? screens : [screens[2], screens[1]]).map(({ src, label }) => (
      <figure key={label}>
        <img src={src} alt={`CareKTM Student — ${label}`} loading="lazy" />
        {gallery && <figcaption>{label}</figcaption>}
      </figure>
    ))}
  </div>
);

export default CareKTMScreens;
