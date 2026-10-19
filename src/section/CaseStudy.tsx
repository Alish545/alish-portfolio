import Navbar from "@/layout/Navbar";
import CareKTMStory from "./CareKTMStory";
import PickNCareStory from "./PickNCareStory";
import { useLayoutEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, CircleCheck, Flag, Lightbulb, Smartphone, Target } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);
const details = [
  {role:"Frontend Developer and Mobile App Deployment Lead",context:"Professional · Binaryburst Solution",problem:"Healthcare booking involves multiple user roles, service requests, subscriptions, and payment journeys across web and mobile.",goal:"Provide clear, responsive workflows for careseekers, caregivers, and administrators.",outcome:"Contributed to a live web and mobile platform, four-language localization, and iOS App Store updates.",focus:["Role-based experiences", "Booking & subscriptions", "Cross-platform delivery"]},
  {role:"Mobile Application Developer",context:"Professional · Team collaboration",problem:"Students need access to course materials and playback even when a reliable internet connection is unavailable.",goal:"Support connected and offline learning while keeping course access and learning progress manageable.",outcome:"Android APK in student use. Managed iOS/iPadOS testing and App Store submission; iOS review pending at the time of the CV.",focus:["Offline learning", "Course materials", "Learning progress"]},
  {role:"Frontend developer",context:"Professional · Binaryburst Solution",problem:"Agencies and agents need structured property data, listing workflows, and CRM-connected pages for their different responsibilities.",goal:"Make property creation and editing easier to follow through validated, step-based interfaces.",outcome:"Delivered listing flows, agency landing pages, and contributions to deal management. Platform in deployment phase at the time of the CV.",focus:["Step-based listing forms", "Agency & agent roles", "CRM data integration"]},
  {role:"Frontend developer",context:"Professional · Binaryburst Solution",problem:"An agency website needs to explain its services clearly while supporting ongoing updates to blog and theme content.",goal:"Build a consistent public website and practical create/edit workflows for managed content.",outcome:"Built the main website pages and dynamic theme category and blog management features.",focus:["Public-facing pages", "Blog management", "Reusable interfaces"]},
  {role:"Frontend developer intern",context:"Professional · Internship",problem:"School administrators, teachers, and students require different views and permissions within shared school workflows.",goal:"Create reusable dashboard components and navigation that reflect each user's access.",outcome:"Contributed tables, forms, modals, searchable lists, and permission-based protected views during the internship.",focus:["Role-based dashboards", "Reusable components", "Permission-based navigation"]},
  {role:"Academic project contributor",context:"Academic · Team of three",problem:"Recognizing Nepali embossed plates requires both locating a plate in an image and extracting its English characters, with dataset limitations to consider.",goal:"Develop and test a computer vision prototype for plate detection and character recognition.",outcome:"Built a prototype that detects plate regions and displays extracted English text. Gained experience in dataset preparation, model testing, and documentation.",focus:["Dataset preparation", "YOLO detection", "CNN recognition"]},
];

const CaseStudy = ({ index }: { index: number }) => {
  const project = projects[index];
  const detail = details[index];
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const oldTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const oldDescription = description?.content;
    if (description) description.content = project.description;
    document.title = `${project.title} | Alish Tuladhar`;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".case-heading > *, .case-meta, .case-cover", { y: 24, opacity: 0, stagger: .1, duration: .8, ease:"power3.out" });
        gsap.utils.toArray<HTMLElement>(".case-overview, .case-fact, .case-showcase, .case-story-section, .pick-role, .pick-highlights article, .pick-decisions, .pick-delivery, .care-journey, .care-release, .case-next").forEach(el => gsap.from(el, {y:24,opacity:0,duration:.7,scrollTrigger:{trigger:el,start:"top 94%",once:true}}));
      },root);
      return () => ctx.revert();
    });
    return () => {media.revert(); document.title = oldTitle; if (description && oldDescription) description.content = oldDescription;};
  }, [project.title, project.description]);
  const home = window.location.pathname;
  return <div ref={root} className={`case-page ${index <= 1 ? "pick-page" : ""}`}>
    <Navbar caseStudy nextProject={(index + 1) % projects.length + 1}/>
    <a className="skip-link" href="#case-content">Skip to content</a>
    <main id="case-content" className="section-wrap">
      <div id="case-overview" className="case-heading"><div><p className="eyebrow">Selected work / 0{index+1}</p><h1>{project.title}<br/><span>{project.type}</span></h1></div><p className="muted">{project.description}</p></div>
      <div className="case-meta"><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><dl><div><dt>My role</dt><dd>{detail.role}</dd></div><div><dt>Context</dt><dd>{detail.context}</dd></div><div><dt>Platform</dt><dd>{project.type.split(" · ")[1]}</dd></div></dl></div>
      <div className="case-cover">{project.image?<img src={`${import.meta.env.BASE_URL}${project.image}`} alt={`${project.title} application overview`}/>:<div className="case-mobile-cover"><Smartphone size={84} strokeWidth={1}/><h2>CareKTM Student</h2><p>Courses. Offline study. Live classes.</p><span>iPhone & iPad · Portrait & landscape · Light & dark</span></div>}</div>
      {index > 1 && <section className="case-overview"><p className="eyebrow">[ Project overview ]</p><div><p className="case-summary">{project.description} <span>{project.contribution}</span></p><div className="case-facts">{[{icon:Lightbulb,title:"Problem",text:detail.problem},{icon:Target,title:"Goal",text:detail.goal},{icon:Flag,title:"Solution",text:project.contribution},{icon:CircleCheck,title:"Outcome",text:detail.outcome}].map(({icon:Icon,title,text})=><article className="case-fact" key={title}><Icon size={30} strokeWidth={1.4}/><h3>{title}</h3><p className="muted">{text}</p></article>)}</div></div></section>}
      {index === 0 && <PickNCareStory/>}
      {index === 1 && <CareKTMStory/>}
      {index > 1 && <section className="case-showcase"><div className="case-focus-grid">{detail.focus.map((text,i)=><div key={text}><span className="eyebrow">0{i+1} / Focus</span><h3>{text}</h3></div>)}</div>{project.image&&<figure className="case-detail-image"><img src={`${import.meta.env.BASE_URL}${project.image}`} alt={`${project.title} interface in detail`} loading="lazy"/><figcaption>{project.title} · Interface preview</figcaption></figure>}{project.link&&<a className="text-link case-external" href={project.link} target="_blank" rel="noreferrer">{project.label}<ArrowUpRight size={18}/></a>}</section>}
      <section className="case-cta"><div><p className="eyebrow">Have a project in mind?</p><h2>Let's build something<br/><em>worth using.</em></h2></div><a className="primary-link" href={`${home}#contact`}>Get in touch<ArrowUpRight size={17}/></a></section>
      <a className="case-next" href={`?project=${(index+1)%projects.length+1}`}><div><span className="eyebrow">Next project</span><h2>{projects[(index+1)%projects.length].title}</h2></div><ArrowRight size={32}/></a>
    </main><footer className="section-wrap case-footer"><a className="wordmark" href={home}>Alish T<span className="text-primary">.</span></a><span>© {new Date().getFullYear()} Alish Tuladhar</span><a href={`${home}#projects`}>Back to selected work ↑</a></footer>
  </div>;
};
export default CaseStudy;
