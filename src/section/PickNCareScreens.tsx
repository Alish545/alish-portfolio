import bookings from "@/assets/Screenshot 2026-10-01 at 10.04.12 PM.png";
import backgroundCheck from "@/assets/Screenshot 2026-10-01 at 9.12.13 PM.png";

import requests from "@/assets/Screenshot 2026-09-01 at 12.22.53 PM.png";
import profile from "@/assets/Screenshot 2026-09-02 at 10.17.19 AM.png";

const screens = [
  { src: bookings, label: "Booking management" },
  { src: requests, label: "Caregiver requests & approval" },
  { src: backgroundCheck, label: "Background check purchase" },
  { src: profile, label: "Caregiver profile & payout setup" },
];

const PickNCareScreens = ({ captions = false }: { captions?: boolean }) => (
  <div className="care-screens care-screens-preview pick-mobile-screens">
    {screens.map(({ src, label }) => (
      <figure key={label}>
        <img src={src} alt={`PickNCare mobile app — ${label}`} loading="lazy" />
        {captions && <figcaption>{label}</figcaption>}
      </figure>
    ))}
  </div>
);

export default PickNCareScreens;
