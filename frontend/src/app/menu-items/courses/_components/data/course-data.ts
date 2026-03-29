import course1 from "@/assets/courses/courses1.jpg";
import course2 from "@/assets/courses/courses2.jpg";
import course3 from "@/assets/courses/courses3.jpg";
import course4 from "@/assets/courses/courses4.jpg";
import course5 from "@/assets/courses/courses5.jpg";
import course6 from "@/assets/courses/courses6.jpg";
import course7 from "@/assets/courses/courses7.jpg";
import course8 from "@/assets/courses/courses8.jpg";
import course9 from "@/assets/courses/courses9.jpg";
import course10 from "@/assets/courses/courses10.jpg";
import course11 from "@/assets/courses/courses11.jpg";
import course12 from "@/assets/courses/courses12.jpg";
import course13 from "@/assets/courses/courses13.jpg";
import course14 from "@/assets/courses/courses14.jpg";
import course15 from "@/assets/courses/courses15.jpg";
import course16 from "@/assets/courses/courses16.jpg";
import course17 from "@/assets/courses/courses17.jpg";
import course18 from "@/assets/courses/courses18.jpg";
import course19 from "@/assets/courses/courses19.jpg";
import course20 from "@/assets/courses/courses20.jpg";
import course21 from "@/assets/courses/courses21.jpg";
import course22 from "@/assets/courses/courses22.jpg";
import course23 from "@/assets/courses/courses23.jpg";
import course24 from "@/assets/courses/courses24.jpg";
import course25 from "@/assets/courses/courses25.jpg";
import course26 from "@/assets/courses/courses26.jpg";
import course27 from "@/assets/courses/courses27.jpg";
import course28 from "@/assets/courses/courses28.jpg";

export type Course = {
  id: number,
  title: string,      // main heading
  price: string,
  image: string,
  features: string[] // 2 short points
};

export type CourseGroup = {
  groupName: string;
  slug?: string;
  courses: Course[];
};

export const courseGroups: CourseGroup[] = [
  {
    slug: "foundations",
    groupName: "Foundations Track",
    courses: [
      {
        id: 1,
        title: "Programming with Python U+002d Beginner to Advanced",
        price: "₹1,000",
        image: course1,
        features: ["Beginner to Advanced", "Hands-on Projects"]
      },
      {
        id: 2,
        title: "Data Structures & Algorithms Mastery",
        price: "₹500",
        image: course2,
        features: ["Core DSA Concepts", "Interview Preparation"]
      },
      {
        id: 3,
        title: "System Design Fundamentals",
        price: "₹500",
        image: course3,
        features: ["Scalable Systems", "Real-world Cases"]
      },
      {
        id: 4,
        title: "Git, Linux & Developer Tools Bootcamp",
        price: "₹500",
        image: course4,
        features: ["Version Control", "CLI Mastery"]
      },
    ],
  },
  {
    slug: "software-engineering",
    groupName: "Software Engineering Track",
    courses: [
      {
        id: 5,
        title: "Java Full Stack Development Program",
        price: "₹500,000",
        image: course5,
        features: ["Frontend + Backend", "Project Based"]
      },
      {
        id: 6,
        title: "Backend Engineering with Spring Boot",
        price: "₹500,000",
        image: course6,
        features: ["REST APIs", "Spring Ecosystem"]
      },
      {
        id: 7,
        title: "Frontend Engineering with React",
        price: "₹500,000",
        image: course7,
        features: ["Modern UI", "State Management"]
      },
      {
        id: 8,
        title: "REST API & Microservices Development",
        price: "₹500,000",
        image: course8,
        features: ["Microservices", "API Design"]
      },
      {
        id: 9,
        title: "DevOps & Cloud Deployment (Docker + AWS)",
        price: "₹500,000",
        image: course9,
        features: ["CI/CD Pipelines", "Cloud Deployment"]
      },
    ],
  },
  {
    slug: "data-analytics",
    groupName: "Data & Analytics Track",
    courses: [
      {
        id: 10,
        title: "Data Analytics Professional Program",
        price: "₹500,000",
        image: course10,
        features: ["Data Cleaning", "Visualization"]
      },
      {
        id: 11,
        title: "SQL for Data Professionals",
        price: "₹500,000",
        image: course11,
        features: ["Advanced Queries", "Database Design"]
      },
      {
        id: 12,
        title: "Advanced Excel for Business Intelligence",
        price: "₹500,000",
        image: course12,
        features: ["Dashboards", "Automation"]
      },
      {
        id: 13,
        title: "Power BI & Tableau Dashboard Mastery",
        price: "₹500,000",
        image: course13,
        features: ["Data Visualization", "Interactive Reports"]
      },
      {
        id: 14,
        title: "Data Engineering with Kafka & Spark",
        price: "₹500,000",
        image: course14,
        features: ["Big Data", "Stream Processing"]
      },
    ],
  },
  {
    slug: "ai-ml",
    groupName: "AI & Machine Learning Track",
    courses: [
      {
        id: 15,
        title: "Machine Learning Engineering Program",
        price: "₹500,000",
        image: course15,
        features: ["ML Models", "Deployment"]
      },
      {
        id: 16,
        title: "Deep Learning & Computer Vision",
        price: "₹500,000",
        image: course16,
        features: ["CNNs", "Image Processing"]
      },
      {
        id: 17,
        title: "MLOps & Production ML Systems",
        price: "₹500,000",
        image: course17,
        features: ["Model Lifecycle", "CI/CD for ML"]
      },
      {
        id: 18,
        title: "AI Model Deployment",
        price: "₹500,000",
        image: course18,
        features: ["APIs", "Scalable Serving"]
      },
    ],
  },
  {
    slug: "generative-ai",
    groupName: "Generative AI & LLM Track",
    courses: [
      {
        id: 19,
        title: "Generative AI Engineering Program",
        price: "₹500,000",
        image: course19,
        features: ["LLMs", "AI Applications"]
      },
      {
        id: 20,
        title: "Transformer Architecture & LLM Fundamentals",
        price: "₹500,000",
        image: course20,
        features: ["Transformers", "Attention Mechanism"]
      },
      {
        id: 21,
        title: "Retrieval-Augmented Generation (RAG) Systems",
        price: "₹500,000",
        image: course21,
        features: ["RAG Pipelines", "Knowledge Retrieval"]
      },
    ],
  },
  {
    slug: "agentic-ai",
    groupName: "Agentic AI Track (Flagship)",
    courses: [
      {
        id: 22,
        title: "Multi-Agent Architectures",
        price: "₹500,000",
        image: course22,
        features: ["Agent Systems", "Coordination"]
      },
      {
        id: 23,
        title: "Agentic AI",
        price: "₹500,000",
        image: course23,
        features: ["Autonomous Agents", "Decision Making"]
      },
      {
        id: 24,
        title: "Advanced AI System Design",
        price: "₹500,000",
        image: course24,
        features: ["AI Architecture", "Scalability"]
      },
    ],
  },
  {
    slug: "career-acceleration",
    groupName: "Career Acceleration Track",
    courses: [
      {
        id: 25,
        title: "FAANG Interview Preparation (DSA + System Design)",
        price: "₹500,000",
        image: course25,
        features: ["Mock Interviews", "Problem Solving"]
      },
      {
        id: 26,
        title: "AI Startup Builder Program",
        price: "₹500,000",
        image: course26,
        features: ["Startup Strategy", "MVP Building"]
      },
      {
        id: 27,
        title: "Resume, LinkedIn & Personal Branding Mastery",
        price: "₹500,000",
        image: course27,
        features: ["Resume Building", "LinkedIn Growth"]
      },
      {
        id: 28,
        title: "Open Source & Research Publishing Bootcamp",
        price: "₹500,000",
        image: course28,
        features: ["Open Source", "Research Writing"]
      },
    ],
  },
];

