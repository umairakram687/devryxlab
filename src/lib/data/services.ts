import { 
  Code, 
  Layout, 
  Smartphone, 
  Globe, 
  Cloud, 
  Database,
} from "lucide-react";
import { text } from "stream/consumers";

export const services = [
  {
    id: 1,
    title: "Web Development",
    slug: "web-development",
    description: "Custom websites tailored to your brand's unique needs and goals.",
    longDescription: "We build high-performance, scalable, and secure websites that drive growth. From corporate sites to complex web applications, our team uses the latest technologies to deliver exceptional digital experiences.",
    icon: Globe,
    image:"/portfolio/web-development.png",
    color: "from-blue-400 to-blue-600",
    text: "Web Development",
    portfolioImages: [
      { src: "/portfolio/tabbna.png", label: "Tabbna Academy", url: "https://academy.tabbna.sa/" },
      { src: "/portfolio/egphealth.png", label: "EGP Health", url: "#" },
      { src: "/portfolio/medirecords.png", label: "MediRecords", url: "#" },
      { src: "/portfolio/panasiasurg.png", label: "PanAsia Surgery", url: "#" },
      { src: "/portfolio/spectrumcares.png", label: "Spectrum Cares", url: "https://spectrumcares.ca/" },
      { src: "/portfolio/alura.png", label: "Alura Reset", url: "https://alurareset.com/" },
    ],
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Content Management Systems (CMS)",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "Performance Tuning"
    ],
    process: [
      { title: "Discovery", description: "We analyze your requirements and business goals." },
      { title: "Development", description: "Our team builds your site using modern tech stacks." },
      { title: "Launch", description: "We deploy, test, and optimize for peak performance." }
    ]
  },
  {
    id: 2,
    title: "Mobile Apps",
    slug: "mobile-apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    longDescription: "Turn your ideas into powerful mobile apps. We specialize in creating intuitive, feature-rich applications for both iOS and Android platforms, ensuring a seamless user experience across devices.",
    icon: Smartphone,
    image:"/portfolio/mobile-app.png",
    color: "from-purple-400 to-purple-600",
    text: "Mobile Apps",
    portfolioImages: [
      { src: "/portfolio/mobibo.png", label: "Mobibo", url: "#" },
      { src: "/portfolio/halaair.png", label: "Hala Air", url: "#" },
      { src: "/portfolio/neotest.png", label: "NeoTest", url: "#" },
      { src: "/portfolio/mediqr.png", label: "Medi-QR", url: "#" },
      { src: "/portfolio/nonly.png", label: "Nonly", url: "#" },
      { src: "/portfolio/onyx.png", label: "Onyx", url: "#" },
    ],
    features: [
      "iOS & Android Development",
      "Cross-Platform (React Native/Flutter)",
      "UI/UX Design for Mobile",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality"
    ],
    process: [
      { title: "Prototyping", description: "Wireframes and mockups to visualize the app flow." },
      { title: "Coding", description: "Agile development sprints to bring features to life." },
      { title: "Deployment", description: "Publishing to App Store and Google Play." }
    ]
  },
  {
    id: 3,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Intuitive and engaging user interfaces that delight your customers.",
    longDescription: "Design is at the heart of everything we do. We create user-centric designs that are not only visually stunning but also intuitive and easy to navigate, ensuring high user retention and satisfaction.",
    icon: Layout,
    image:"/portfolio/ui-ux.png",
    color: "from-pink-400 to-pink-600",
    text: "UI/UX Design",
    portfolioImages: [
      { src: "/portfolio/dental_figma.png", label: "Dental Clinic App", url: "#" },
      { src: "/portfolio/exercisenow_figma.png", label: "ExerciseNow App", url: "#" },
      { src: "/portfolio/expatcares_figma.png", label: "ExpatCares", url: "#" },
      { src: "/portfolio/doctrimm_figma.png", label: "Doctrimm", url: "#" },
      { src: "/portfolio/flowcarehub_figma.png", label: "FlowCareHub", url: "#" },
      { src: "/portfolio/nawaqare_figma.png", label: "Nawaqare", url: "#" },
    ],
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
      "Design Systems"
    ],
    process: [
      { title: "Research", description: "Understanding user behavior and pain points." },
      { title: "Design", description: "Creating high-fidelity interfaces and prototypes." },
      { title: "Validation", description: "Testing with real users to ensure usability." }
    ]
  },
  {
    id: 4,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Scalable cloud architecture and deployment services.",
    longDescription: "Leverage the power of the cloud to scale your business. We design and implement secure, robust cloud infrastructures that grow with your needs, reducing costs and improving efficiency.",
    icon: Cloud,
    image:"/portfolio/cloud.png",
    color: "from-orange-400 to-orange-600",
    text: "Cloud Solutions",
    portfolioImages: [
      { src: "/portfolio/egphealth.png", label: "EGP Health Platform", url: "#" },
      { src: "/portfolio/medirecords.png", label: "MediRecords SaaS", url: "#" },
      { src: "/portfolio/tabbna.png", label: "Tabbna Academy", url: "#" },
      { src: "/portfolio/neotest.png", label: "NeoTest Platform", url: "#" },
      { src: "/portfolio/panasiasurg.png", label: "PanAsia Surgery", url: "#" },
      { src: "/portfolio/spectrumcares.png", label: "Spectrum Cares", url: "#" },
    ],
    features: [
      "Cloud Migration",
      "Serverless Architecture",
      "DevOps Automation",
      "Disaster Recovery",
      "Security & Compliance",
      "Cost Optimization"
    ],
    process: [
      { title: "Assessment", description: "Evaluating current infrastructure and needs." },
      { title: "Migration", description: "Seamless transition to cloud environments." },
      { title: "Optimization", description: "Continuous monitoring and performance tuning." }
    ]
  },
  {
    id: 5,
    title: "Database Design",
    slug: "database-design",
    description: "Efficient and secure database schemas for your applications.",
    longDescription: "Data is your most valuable asset. We design and optimize database structures that ensure data integrity, security, and lightning-fast retrieval speeds for your applications.",
    icon: Database,
    image:"/portfolio/database.png",
    color: "from-green-400 to-green-600",
    text: "Database Design",
    portfolioImages: [
      { src: "/portfolio/medirecords.png", label: "MediRecords", url: "#" },
      { src: "/portfolio/egphealth.png", label: "EGP Health", url: "#" },
      { src: "/portfolio/neotest.png", label: "NeoTest", url: "#" },
      { src: "/portfolio/mediqr.png", label: "Medi-QR", url: "#" },
      { src: "/portfolio/tabbna.png", label: "Tabbna Academy", url: "#" },
      { src: "/portfolio/panasiasurg.png", label: "PanAsia Surgery", url: "#" },
    ],
    features: [
      "Schema Design",
      "Data Modeling",
      "Performance Tuning",
      "Data Migration",
      "Backup & Recovery",
      "NoSQL & SQL Solutions"
    ],
    process: [
      { title: "Planning", description: "Defining data requirements and relationships." },
      { title: "Implementation", description: "Setting up secure and efficient databases." },
      { title: "Scaling", description: "Optimizing for high traffic and large datasets." }
    ]
  },
  {
    id: 6,
    title: "API Integration",
    slug: "api-integration",
    description: "Seamless integration with third-party services and APIs.",
    longDescription: "Connect your systems for better efficiency. We build and integrate robust APIs that allow your software to communicate seamlessly with third-party services, enhancing functionality and automation.",
    icon: Code,
    image:"/portfolio/api.png",
    color: "from-teal-400 to-teal-600",
    text: "API Integration",
    portfolioImages: [
      { src: "/portfolio/neotest.png", label: "NeoTest API", url: "#" },
      { src: "/portfolio/mediqr.png", label: "Medi-QR API", url: "#" },
      { src: "/portfolio/medirecords.png", label: "MediRecords API", url: "#" },
      { src: "/portfolio/tabbna.png", label: "Tabbna xAPI", url: "#" },
      { src: "/portfolio/egphealth.png", label: "EGP Health API", url: "#" },
      { src: "/portfolio/spectrumcares.png", label: "Spectrum API", url: "#" },
    ],
    features: [
      "REST & GraphQL APIs",
      "Third-Party Integrations",
      "Payment Gateway Setup",
      "Social Media Login",
      "Real-time Data Sync",
      "API Security"
    ],
    process: [
      { title: "Analysis", description: "Identifying integration points and requirements." },
      { title: "Development", description: "Building secure and efficient API connectors." },
      { title: "Testing", description: "Ensuring reliability and error handling." }
    ]
  },
];
