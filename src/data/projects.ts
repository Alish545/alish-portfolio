import pickNCareHero from "@/assets/Screenshot 2026-10-28 at 12.59.46 PM.png";

export const projects = [
  {
    title: "PickNCare",
    type: "Healthcare · Web & mobile",
    image: pickNCareHero,
    description:
      "A care platform connecting careseekers with individual caregivers and care agencies for babysitting, childcare, and elderly care across web, iOS, and Android.",
    contribution:
      "Built React frontend modules and the Flutter/Dart frontend, integrated Stripe and Apple In-App Purchase flows, and supported localization in four languages and iOS releases.",
    tags: ["React", "Flutter", "TypeScript", "Stripe"],
    link: "https://pickncare.com",
    label: "Visit website",
  },
  {
    title: "CareKTM Student",
    type: "Education · Cross-platform mobile",
    description:
      "A cross-platform learning app for Care Kathmandu students, bringing secure course access, offline study, schedules, and live Zoom classes together.",
    contribution:
      "Built with the team using React Native and NativeWind. Integrated authentication, courses, and profiles with TanStack Query; tracked learning progress with Zustand and managed iOS/iPadOS builds and submission.",
    tags: ["React Native", "NativeWind", "Zustand", "TanStack Query"],
    note: "Android APK in student use · iOS submitted for review",
  },
  {
    title: "Real Estate / CRM",
    type: "Property · Web application",
    image: "real-estate.webp",
    description:
      "Agency and agent workflows, from dynamic landing pages to property listing creation and editing.",
    contribution:
      "Built step-based listing forms and CRM-connected agency pages; collaborated on deal management using TanStack Query, Formik, Yup, and REST APIs.",
    tags: ["React", "TypeScript", "TanStack Query"],
    note: "Deployment phase",
  },
  {
    title: "Cryptica Digital",
    type: "Agency · Website & content management",
    image: "crypticadigital.webp",
    description:
      "A digital agency website with service, pricing, blog, and contact pages.",
    contribution:
      "Built the main frontend pages and dynamic theme category and blog management features, including create and edit flows.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    note: "Agency website & content management",
  },
  {
    title: "School Management System",
    type: "Education · Admin dashboard",
    image: "SMS.webp",
    description:
      "Role-based interfaces for school administrators, teachers, and students.",
    contribution:
      "Built reusable UI components, searchable lists, protected frontend views, and permission-based navigation during my internship.",
    tags: ["React", "React Query", "Formik", "Yup"],
    note: "Internship project",
  },
  {
    title: "Vehicle Number Plate Detection and Character Recognition",
    type: "Academic · Team of three",
    image: "number-plate.webp",
    description:
      "An automatic number plate recognition prototype for Nepali embossed plates, combining YOLOv8 detection and CNN character recognition with image/video uploads and saved results.",
    contribution:
      "Contributed to dataset preparation, image labeling, YOLO training, frontend UI, testing, and documentation.",
    tags: ["Python", "YOLOv8", "TensorFlow", "OpenCV", "FastAPI", "MySQL"],
    link: "https://github.com/Alish545/Number-Plate-Project",
    label: "View repository",
  },
];
