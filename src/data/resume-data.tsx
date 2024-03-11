import Link from "next/link";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Harsh Thavai",
  initials: "HT",
  location: "Mumbai",
  about:
    "A data science student with a passion for machine learning and a penchant for exploring cutting-edge AI models, including LLM. Actively seeking internships to apply", 
  contact: {
    email: "harsh.thavai@somaiya.edu",
    tel: "8169207663",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/harsh-thavai",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harsh-thavai-3683301b6/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/harsh_thavai",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Somaiya Vidyavihar University",
      degree: "Bachelor's Degree in Data Science",
      start: "aug-2022",
      end: "expected-aug-2025",
    },
  ],
  skills: [
    "Python",
    "Numpy/Pandas/Matplotlib/Seaborn",
    "Scypy/Scikit-learn/Pytorch/LangChain/LlamaIndex",
    "Open-source and paid LLM models (Llama2, Mistral,OpenAI,Google Gemini Pro)",
    "Streamlit/Flask/Gradio",
    "MongoDB/MySQL/CouchDB/Plsql/AmazonBedrock/Huggingface",
    "Fine-tuning with custom data/VectorEmbedding/NLP"
  ],
  projects: [
    {
      title: "ATS Resume LLM App",
      techStack: [
        "Python",
        "Gemini pro",
        "Streamlit"
      ],
      description: "An application optimizing resumes for ATS using LLM",
      link: {
        label: "Smart ATS",
        href: "https://atsllm.streamlit.app/",
      },
    },
    {
      title: "Chat with PDF",
      techStack: ["StreamLit", "Pyhton", "Langchain", "chromadb","faiss"],
      description:
        "An application to upload PDF files, extract text, and ask questions based on the content",
      link: {
        label: "Chat with PDF",
        href: "https://chatwithpdfgenai.streamlit.app/",
      },
    },
    {
      title: "Penguin Measurements Clustering using K-Means-PCA",
      techStack: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      description:
        "Penguin Measurements Clustering using K-Means and PCA utilizes several technologies and frameworks for data analysis and machine learning tasks",
      link: {
        label: "kaggle.com",
        href: "https://www.kaggle.com/code/harshthavai/penguin-measurements-clustering-using-k-means-pca",
      },
    },   
  ],
  Hackathon: [
    {
      project: "Daily_dac",
      link: "https://devpost.com/software/daily-doc",
      prize: "3rd",
      description:
        "At Daily Doc, our goal was to create an interactive chat interface that connects users with a virtual medical expert, providing instant medical insights and guidance. Inspired by the advancements in natural language processing and the power of OpenAI's GPT-3.5 Turbo model, we set out to build a user-friendly and informative tool for individuals seeking medical information and advice Technologies: python, gradio, gpt3.5-turbo, github",
    },
  ]
} as const;
