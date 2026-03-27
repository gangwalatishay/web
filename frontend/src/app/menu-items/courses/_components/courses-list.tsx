import course1 from "@/assets/courses/courses1.jpg";

import { Button } from "@/components/ui/button";

import { useEffect } from "react";

import {
  useLocation,
  useNavigate
} from "react-router-dom";

const courseGroups = [
  {
    slug: "foundations",
    groupName: "Foundations Track",
    courses: [
      {
        id: 1,
        title: "Programming with Python U+002d Beginner to Advanced",
        price: "₹1,000,000",
        image: course1,
        features: ["Beginner to Advanced", "Hands-on Projects"]
      },
      {
        id: 2,
        title: "Data Structures & Algorithms Mastery",
        price: "₹500,000",
        image: course1,
        features: ["Core DSA Concepts", "Interview Preparation"]
      },
      {
        id: 3,
        title: "System Design Fundamentals",
        price: "₹500,000",
        image: course1,
        features: ["Scalable Systems", "Real-world Cases"]
      },
      {
        id: 4,
        title: "Git, Linux & Developer Tools Bootcamp",
        price: "₹500,000",
        image: course1,
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
        image: course1,
        features: ["Frontend + Backend", "Project Based"]
      },
      {
        id: 6,
        title: "Backend Engineering with Spring Boot",
        price: "₹500,000",
        image: course1,
        features: ["REST APIs", "Spring Ecosystem"]
      },
      {
        id: 7,
        title: "Frontend Engineering with React",
        price: "₹500,000",
        image: course1,
        features: ["Modern UI", "State Management"]
      },
      {
        id: 8,
        title: "REST API & Microservices Development",
        price: "₹500,000",
        image: course1,
        features: ["Microservices", "API Design"]
      },
      {
        id: 9,
        title: "DevOps & Cloud Deployment (Docker + AWS)",
        price: "₹500,000",
        image: course1,
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
        image: course1,
        features: ["Data Cleaning", "Visualization"]
      },
      {
        id: 11,
        title: "SQL for Data Professionals",
        price: "₹500,000",
        image: course1,
        features: ["Advanced Queries", "Database Design"]
      },
      {
        id: 12,
        title: "Advanced Excel for Business Intelligence",
        price: "₹500,000",
        image: course1,
        features: ["Dashboards", "Automation"]
      },
      {
        id: 13,
        title: "Power BI & Tableau Dashboard Mastery",
        price: "₹500,000",
        image: course1,
        features: ["Data Visualization", "Interactive Reports"]
      },
      {
        id: 14,
        title: "Data Engineering with Kafka & Spark",
        price: "₹500,000",
        image: course1,
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
        image: course1,
        features: ["ML Models", "Deployment"]
      },
      {
        id: 16,
        title: "Deep Learning & Computer Vision",
        price: "₹500,000",
        image: course1,
        features: ["CNNs", "Image Processing"]
      },
      {
        id: 17,
        title: "MLOps & Production ML Systems",
        price: "₹500,000",
        image: course1,
        features: ["Model Lifecycle", "CI/CD for ML"]
      },
      {
        id: 18,
        title: "AI Model Deployment",
        price: "₹500,000",
        image: course1,
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
        image: course1,
        features: ["LLMs", "AI Applications"]
      },
      {
        id: 20,
        title: "Transformer Architecture & LLM Fundamentals",
        price: "₹500,000",
        image: course1,
        features: ["Transformers", "Attention Mechanism"]
      },
      {
        id: 21,
        title: "Retrieval-Augmented Generation (RAG) Systems",
        price: "₹500,000",
        image: course1,
        features: ["RAG Pipelines", "Knowledge Retrieval"]
      },
    ],
  },
  {
    slug: "agentic-ai",
    groupName: "Agentic AI Track (Flagship)",
    courses: [
      {
        id: 23,
        title: "Multi-Agent Architectures",
        price: "₹500,000",
        image: course1,
        features: ["Agent Systems", "Coordination"]
      },
      {
        id: 24,
        title: "Agentic AI",
        price: "₹500,000",
        image: course1,
        features: ["Autonomous Agents", "Decision Making"]
      },
      {
        id: 25,
        title: "Advanced AI System Design",
        price: "₹500,000",
        image: course1,
        features: ["AI Architecture", "Scalability"]
      },
    ],
  },
  {
    slug: "career-acceleration",
    groupName: "Career Acceleration Track",
    courses: [
      {
        id: 26,
        title: "FAANG Interview Preparation (DSA + System Design)",
        price: "₹500,000",
        image: course1,
        features: ["Mock Interviews", "Problem Solving"]
      },
      {
        id: 27,
        title: "AI Startup Builder Program",
        price: "₹500,000",
        image: course1,
        features: ["Startup Strategy", "MVP Building"]
      },
      {
        id: 28,
        title: "Resume, LinkedIn & Personal Branding Mastery",
        price: "₹500,000",
        image: course1,
        features: ["Resume Building", "LinkedIn Growth"]
      },
      {
        id: 29,
        title: "Open Source & Research Publishing Bootcamp",
        price: "₹500,000",
        image: course1,
        features: ["Open Source", "Research Writing"]
      },
    ],
  },
];

export default function CoursesList() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="mt-20 md:mt-30 w-full flex flex-col items-center coursespage gap-16 md:gap-32 px-4 md:px-8 lg:px-12">
      {courseGroups.map((group, groupIndex) => (
        <div key={groupIndex} id={group.slug} className="w-full scroll-mt-24 md:scroll-mt-32">
          
          {/* GROUP TITLE */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-10 text-start text-muted-foreground">
            {group.groupName}
          </h2>
          {/* GROUP CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {group.courses.map((course) => (
                <div
                  className="card cursor-pointer"
                  key={course.id}
                  onClick={() => navigate(`/course/${course.id}`)}
                >
                <div
                  className="imgBx"
                  style={{ backgroundImage: `url(${course.image})` }}
                ></div>
                <div className="content">
                  <span className="price">
                    <a href="#">{course.price}</a>
                  </span>
                  <ul>
                    {course.features.map((item, index) => (
                      <li key={index} className="text-xl text-gray-400">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  {/* ACTION BUTTONS */}
                  <div className="flex flex-row justify-between items-center mt-8 gap-x-2">
                    <Button
                      variant="default"
                      className="text-white bg-[#970747] hover:bg-[#970747] text-xs px-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("Added to wishlist!");
                      }}
                    >
                      WishList
                    </Button>
                    <Button
                      variant="outline"
                      className="text-[#970747] hover:text-[#970747] bg-[#232949] hover:bg-[#232949] border-[#970747] text-xs px-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("Added to cart!");
                      }}
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}