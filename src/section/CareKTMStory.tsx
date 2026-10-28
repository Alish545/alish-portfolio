import CareKTMScreens from "./CareKTMScreens";
import {
  ShieldCheck,
  Download,
  Video,
  TabletSmartphone,
  ArrowRight,
} from "lucide-react";
const highlights = [
  {
    icon: ShieldCheck,
    title: "Institution-managed access",
    text: "Administrator-created accounts, one-time activation codes, and registered-device login help limit unauthorized account sharing.",
  },
  {
    icon: Download,
    title: "Learning, online or offline",
    text: "Courses, organized materials, video and document viewing, offline downloads, and Continue Learning keep study in one place.",
  },
  {
    icon: Video,
    title: "Scheduled live classes",
    text: "Course schedules and Zoom Meeting SDK integration connect students to live lessons at the appropriate class times.",
  },
  {
    icon: TabletSmartphone,
    title: "iPhone & iPad layouts",
    text: "Responsive portrait and landscape interfaces, with consistent light and dark appearance across learning screens.",
  },
];
const CareKTMStory = () => (
  <div className="pickncare-story carektm-story">
    <section className="pick-role">
      <div>
        <p className="eyebrow">The product & my role</p>
        <h2>
          One place to learn.
          <br />
          <em>Built around enrolled students.</em>
        </h2>
      </div>
      <div>
        <p>
          CareKTM Student gives Care Kathmandu students access to courses,
          materials, downloads, schedules, and live classes. The challenge was
          to combine reliable study access with institution-managed accounts and
          device registration.
        </p>
        <p className="care-role-copy">
          As a <strong>mobile application developer</strong>, I collaborated
          with the team on the React Native student experience: UI
          implementation, API integration, activation, learning materials,
          offline features, Zoom integration, debugging, and iOS release
          preparation.
        </p>
        <div className="tags">
          {[
            "React Native",
            "TypeScript",
            "NativeWind",
            "Zustand",
            "TanStack Query",
            "Zoom SDK",
            "Xcode / CocoaPods",
          ].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
    <section className="care-journey" aria-label="Student access journey">
      <p className="eyebrow">From enrollment to learning</p>
      <ol>
        {[
          "Institution registration",
          "Code activation",
          "Device-linked login",
          "Courses & classes",
        ].map((step, i) => (
          <li key={step}>
            <span>0{i + 1}</span>
            {step}
            {i < 3 && <ArrowRight size={16} aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </section>
    <section className="pick-highlights" aria-label="Key features">
      {highlights.map(({ icon: Icon, title, text }, i) => (
        <article key={title}>
          <div className="pick-card-top">
            <Icon size={24} strokeWidth={1.5} />
            <span>0{i + 1}</span>
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </section>
    <section
      className="care-screen-section"
      aria-label="CareKTM Student app screenshots"
    >
      <p className="eyebrow">Inside the app</p>
      <h2>From activation to learning.</h2>
      <CareKTMScreens gallery />
    </section>
    <section className="pick-decisions">
      <div>
        <p className="eyebrow">Engineering decisions</p>
        <h2>
          Secure access.
          <br />
          <em>Resilient learning.</em>
        </h2>
      </div>
      <div>
        <p>
          I connected the mobile experience to Care Kathmandu's existing
          backend, keeping server data, local learning progress, and downloaded
          content distinct.
        </p>
        <ul>
          <li>
            <strong>Access:</strong> activation and device registration support
            enrolled students without a public sign-up flow. Device checks help
            reduce sharing; they are not an absolute security guarantee.
          </li>
          <li>
            <strong>Learning state:</strong> TanStack Query handles API data,
            while Zustand tracks learning progress and local storage supports
            downloaded materials.
          </li>
          <li>
            <strong>Native reliability:</strong> investigated and fixed an iOS
            16 launch issue involving a native dependency, resolved archive
            symbol warnings, and validated third-party framework dSYMs.
          </li>
        </ul>
      </div>
    </section>
    <section className="care-release">
      <div>
        <p className="eyebrow">Physical-device validation</p>
        <h3>
          Test the release.
          <br />
          Not just the simulator.
        </h3>
        <p>
          TestFlight testing on physical iPhone and iPad devices covered
          activation, login, navigation, courses, downloads, playback, document
          viewing, schedules, Zoom access, profiles, orientation, and appearance
          modes.
        </p>
      </div>
      <div>
        <p className="eyebrow">App Store preparation</p>
        <h3>
          Make review
          <br />
          reproducible.
        </h3>
        <p>
          I prepared release screenshots, privacy disclosures, reviewer access,
          a physical-device demonstration, and review instructions. Feedback and
          crash reports informed stability improvements before submission.
        </p>
      </div>
    </section>
    <div className="pick-delivery">
      <span className="eyebrow">Status & lessons</span>
      <p>
        Android APK in student use; iOS review pending at the time of my CV.
        Native dependency debugging, physical-device testing, and explicit
        access states were key lessons in delivering a responsive educational
        app.
      </p>
    </div>
  </div>
);
export default CareKTMStory;
