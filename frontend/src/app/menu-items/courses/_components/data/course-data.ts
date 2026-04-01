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
  video: string,      // just like image
  description: string,
  features: string[], // 2 short ,points
  Syllabus: string[]
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
        price: "Rs14,999/+",
        image: course1,
        video: "",
        description: "",
        features: ["Beginner to Advanced", "Hands-on Projects"],
        Syllabus: [""],
      },
      {
        id: 2,
        title: "Data Structures & Algorithms Mastery",
        price: "Rs14,999/+",
        image: course2,
        video: "",
        description: "",
        features: ["Core DSA Concepts", "Interview Preparation"],
        Syllabus: [""],
      },
      {
        id: 3,
        title: "System Design Fundamentals",
        price: "Rs14,999/+",
        image: course3,
        video: "",
        description: "",
        features: ["Scalable Systems", "Real-world Cases"],
        Syllabus: [""],
      },
      {
        id: 4,
        title: "Git, Linux & Developer Tools Bootcamp",
        price: "Rs14,999/+",
        image: course4,
        video: "",
        description: "",
        features: ["Version Control", "CLI Mastery"],
        Syllabus: [""],
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
        price: "Rs14,999/+",
        image: course5,
        video: "",
        description: "",
        features: ["Frontend + Backend", "Project Based"],
        Syllabus: [""],
      },
      {
        id: 6,
        title: "Backend Engineering with Spring Boot",
        price: "Rs14,999/+",
        image: course6,
        video: "",
        description: "",
        features: ["REST APIs", "Spring Ecosystem"],
        Syllabus: [""],
      },
      {
        id: 7,
        title: "Frontend Engineering with React",
        price: "Rs14,999/+",
        image: course7,
        video: "",
        description: "",
        features: ["Modern UI", "State Management"],
        Syllabus: [""],
      },
      {
        id: 8,
        title: "REST API & Microservices Development",
        price: "Rs14,999/+",
        image: course8,
        video: "",
        description: "",
        features: ["Microservices", "API Design"],
        Syllabus: [""],
      },
      {
        id: 9,
        title: "DevOps & Cloud Deployment (Docker + AWS)",
        price: "Rs14,999/+",
        image: course9,
        video: "",
        description: "",
        features: ["CI/CD Pipelines", "Cloud Deployment"],
        Syllabus: [""],
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
        price: "Rs14,999/+",
        image: course10,
        video: "",
        description: "",
        features: ["Data Cleaning", "Visualization"],
        Syllabus: [""],
      },
      {
        id: 11,
        title: "SQL for Data Professionals",
        price: "Rs14,999/+",
        image: course11,
        video: "",
        description: "",
        features: ["Advanced Queries", "Database Design"],
        Syllabus: [""],
      },
      {
        id: 12,
        title: "Advanced Excel for Business Intelligence",
        price: "Rs14,999/+",
        image: course12,
        video: "",
        description: "",
        features: ["Dashboards", "Automation"],
        Syllabus: [""],
      },
      {
        id: 13,
        title: "Power BI & Tableau Dashboard Mastery",
        price: "Rs14,999/+",
        image: course13,
        video: "",
        description: "",
        features: ["Data Visualization", "Interactive Reports"],
        Syllabus: [""],
      },
      {
        id: 14,
        title: "Data Engineering with Kafka & Spark",
        price: "Rs14,999/+",
        image: course14,
        video: "",
        description: "",
        features: ["Big Data", "Stream Processing"],
        Syllabus: [""],
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
        price: "Rs14,999/+",
        image: course15,
        video: "",
        description: "",
        features: ["ML Models", "Deployment"],
        Syllabus: [""],
      },
      {
        id: 16,
        title: "Deep Learning & Computer Vision",
        price: "Rs14,999/+",
        image: course16,
        video: "",
        description: "",
        features: ["CNNs", "Image Processing"],
        Syllabus: [""],
      },
      {
        id: 17,
        title: "MLOps & Production ML Systems",
        price: "Rs14,999/+",
        image: course17,
        video: "",
        description: "",
        features: ["Model Lifecycle", "CI/CD for ML"],
        Syllabus: [""],
      },
      {
        id: 18,
        title: "AI Model Deployment",
        price: "Rs14,999/+",
        image: course18,
        video: "",
        description: "",
        features: ["APIs", "Scalable Serving"],
        Syllabus: [""],
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
        price: "Rs14,999/+",
        image: course19,
        video: "",
        description: "",
        features: ["LLMs", "AI Applications"],
        Syllabus: [""],
      },
      {
        id: 20,
        title: "Transformer Architecture & LLM Fundamentals",
        price: "Rs14,999/+",
        image: course20,
        video: "",
        description: "",
        features: ["Transformers", "Attention Mechanism"],
        Syllabus: [""],
      },
      {
        id: 21,
        title: "Retrieval-Augmented Generation (RAG) Systems",
        price: "Rs14,999/+",
        image: course21,
        video: "",
        description: "",
        features: ["RAG Pipelines", "Knowledge Retrieval"],
        Syllabus: [""],
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
        price: "Rs14,999/+",
        image: course22,
        video: "",
        description: "",
        features: ["Agent Systems", "Coordination"],
        Syllabus: [""],
      },
      {
        id: 23,
        title: "Agentic AI",
        price: "Rs14,999/+",
        image: course23,
        video: "",
        description: "",
        features: ["Autonomous Agents", "Decision Making"],
        Syllabus: [""],
      },
      {
        id: 24,
        title: "Advanced AI System Design",
        price: "Rs14,999/+",
        image: course24,
        video: "",
        description: "",
        features: ["AI Architecture", "Scalability"],
        Syllabus: [""],
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
        price: "Rs14,999/+",
        image: course25,
        video: "",
        description: "",
        features: ["Mock Interviews", "Problem Solving"],
        Syllabus: [""],
      },
      {
        id: 26,
        title: "AI Startup Builder Program",
        price: "Rs14,999/+",
        image: course26,
        video: "",
        description: "",
        features: ["Startup Strategy", "MVP Building"],
        Syllabus: [""],
      },
      {
        id: 27,
        title: "Resume, LinkedIn & Personal Branding Mastery",
        price: "Rs14,999/+",
        image: course27,
        video: "",
        description: "",
        features: ["Resume Building", "LinkedIn Growth"],
        Syllabus: [""],
      },
      {
        id: 28,
        title: "Open Source & Research Publishing Bootcamp",
        price: "Rs14,999/+",
        image: course28,
        video: "",
        description: "",
        features: ["Open Source", "Research Writing"],
        Syllabus: [""],
      },
    ],
  },
];

