import { title } from "framer-motion/client";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  mongodb,
  git,
  R,
  Pyhton,
  SQL,
  MySQL,
  PowerBI,
  regression,
  clustering,
  deeplearning,
  decisiontree,
  randomforest,
  nlp,
  Matplotlib,
  Seaborn,
  Plotly,
  ggplot,
  cassandra,
  AWS,
  Azure,
  Java,
  Umass,
  Hexa,
  iBase,
  Neu,
  carrent,
  LearnAI,
  Bio,
  JobSeeker,
  Chat,
  Dynamic,
  Business,
  BlinkIt,
  FlightPrice,
  BT,
  FP,
  SC,
  SkinCancer,
  jobit,
  tripguide,
  UMD,
  MIT,
  memoji
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id:"project",
    title:"Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
  

];

const services = [
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Machine Learning Enigneer",
    icon: mobile,
  },
  {
    title: "AI Engineer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies ={ 
  languages: [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  /*
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },*/
  {
    name: "R",
    icon: R,
  },
  {
    name: "Python",
    icon: Pyhton,
  },
  {
    name:"Java",
    icon: Java,
  },
  /*
  {
    name: "PowerBI",
    icon: PowerBI,
  },*/
  {
    name: "SQL",
    icon: SQL,
    title:SQL
  },
  /*
  {
    name: "MySQL",
    icon: MySQL,
 },*/
],
machineLearning:[
  {name:"Regression",icon:regression},
  {name:"clustering",icon:clustering},
  {name:"Decision Trees",icon:decisiontree},
  {name:"Random Forest",icon:randomforest},
  {name:"Deep Learning",icon:deeplearning},
  {name:"Natural Language Processing",icon:nlp},
],
dataScience:[
  {name:"MySQL",icon:MySQL},
  {name:"PowerBI",icon:PowerBI},
  {name:"Matplotlib",icon:Matplotlib},
  {name:"Seaborn",icon:Seaborn},
  {name:"Plotly",icon:Plotly},
  {name:"ggplot2",icon:ggplot},
],
BigDataandCloud:[
  {name:"Cassandra",icon:cassandra},
  {name:"AWS",icon:AWS},
  {name:"Azure",icon:Azure},
  {name:"MongoDB",icon:mongodb},
]
};

const experiences = [
  {
    title: "Graduate Research Assistant",
    company_name: "UMass Dartmouth School for Marine Science and Technology",
    icon: Umass,
    iconBg: "#383E56",
    date: "January 2025 - December 2025",
    points: [
      "Performed EDA on 500K+ oceanographic records, engineered domain-specific features, and trained Random Forest and CNN models (PyTorch/TensorFlow) — achieving 85% accuracy with all experiments tracked via MLflow for full reproducibility.",
      "Optimized model performance through cross-validation and precision/recall/F1 tuning; translated complex findings into actionable insights for non-technical research teams, directly informing marine conservation decisions.",
      "Spearheaded metadata standardization and data governance across 5+ research systems — reducing data inconsistencies by 25% and ensuring model reproducibility across both research and IT teams.",
      "Built and deployed large-scale Apache Spark pipelines for ingestion, preprocessing, and transformation of raw sensor data; collaborated with marine scientists to align model outputs with real-world research needs, improving data accuracy by 20%.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Hexaware Texchnology LTD",
    icon: Hexa,
    iconBg: "#383E56",
    date: "September 2021 - January 2024",
    points: [
      "Translated business pain points from finance, operations, and product stakeholders into data solutions by writing complex SQL queries (joins, aggregations, window functions) across 5+ source systems — reducing data errors by 30% and saving 10+ hours of weekly manual corrections.",
      "Uncovered recurring fraud and credit risk anomalies through EDA and statistical hypothesis testing; deployed Scikit-learn classification models that improved decision accuracy by 25% and maintained 8+ Power BI dashboards cutting report generation time by 35%.",
      "Defined 15+ KPIs across finance, product, and operations in collaboration with senior stakeholders, enabling self-serve analytics that reduced ad-hoc data requests by 20% and eliminated recurring manual reporting rebuilds.",
      "Diagnosed and resolved 20+ pipeline failures in Agile cross-functional teams, applying targeted fixes that boosted processing speed by 30% and reduced query runtime by 40% — communicating impact clearly to non-technical stakeholders throughout the process.", 
    ],
  },
  {
    title: "Operations Data Analyst",
    company_name: "iBase Technologyies",
    icon: iBase,
    iconBg: "#E6DEDD",
    date: "December 2020 - July 2021",
    points: [
      "Built and automated end-to-end ETL pipelines integrating multi-source operational data across manufacturing workflows — reducing manual processing time by 40% and ensuring consistent, reliable data flow.",
      "Optimized SQL databases and query performance for supply chain and operations reporting, achieving 30% faster data retrieval and a 25% boost in overall analytics efficiency.",
      "Applied K-Means clustering and regression models to analyze production trends, detect anomalies, and support quality control initiatives — improving decision-making accuracy by 20%.",
      "Designed interactive Power BI dashboards and automated reporting systems tracking KPIs across production, quality control, and supply chain operations, enabling faster and more informed decisions.",
      "Leveraged statistical analysis and hypothesis testing to evaluate process performance and surface operational inefficiencies, driving measurable improvements in manufacturing strategy and execution.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Neurapses Technology",
    icon: Neu,
    iconBg: "#383E56",
    date: "July 2020 - December 2020",
    points: [
      "Developed and maintained company websites using HTML, CSS, JavaScript,Bootstrap and AngularJS, improving user experience and responsiveness.",
      "Collaborated with designers and backend developers to implement interactive UI components and optimize website performance",
      "Integrated MySQL for dynamic content management and ensured seamless data retrieval and storage for web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:"University of Massachusetts Dartmouth",
    name: "Masters in Data Science",
    Percentage:"3.7/4",
    company: " January 2024 - December 2025 | Graduated",
    image:UMD


  },
  {
    testimonial:"Maharashtra Institute of Technology",
    name: "Bachelors in Electronics and Communication Engineering",
    Percentage:"7.57/10",
    company: "August 2017 - July 2021 | Graduated",
    image: MIT,
  },
];

const projects = [
  {
  name: "AI-Powered Learning Platform",
  description:
    "Deployed an AI learning platform using LLaMA 3.3 70B and Groq API that generates personalized courses from a single input, featuring 10+ tools including Mock Interview, Quiz Generator, and AI Doubt Solver. Engineered a prompt system consolidating 7 API calls into 1 — reducing generation time by 80% — with a 3-model fallback chain and multilingual support across 12-chapter lessons.",
  tags: [
    { name: "LLaMA3.3", color: "blue-text-gradient" },
    { name: "GroqAPI", color: "green-text-gradient" },
    { name: "GenerativeAI", color: "pink-text-gradient" },
    { name: "Python", color: "yellow-text-gradient" },
    { name: "PromptEngineering", color: "red-text-gradient" },
  ],
  image: LearnAI, 
  source_code_link: "https://snehasonkusare-tech-learnai-app-ot4rox.streamlit.app",
},
{
  name: "Job Market Intelligence & Career Advisor",
  description:
    "Built a real-time pipeline that scrapes hundreds of daily job postings, extracts in-demand skills via NLP, and predicts salaries using XGBoost with SHAP explainability. Includes a Personal Career Advisor that takes a user's skillset, predicts their market rate, and recommends the top 3 skills to maximize salary growth — powered by a custom Job Market Health Index (0–100 scale).",
  tags: [
    { name: "XGBoost", color: "blue-text-gradient" },
    { name: "NLP", color: "green-text-gradient" },
    { name: "SHAP", color: "pink-text-gradient" },
    { name: "WebScraping", color: "yellow-text-gradient" },
    { name: "Python", color: "red-text-gradient" },
  ],
  image: JobSeeker, 
  source_code_link: "https://snehasonkusare-tech-job-market-analysis-dashboardapp-pwdwip.streamlit.app",
},
{
  name: "Medical Chatbot | Instruction Fine-Tuning",
  description:
    "Production-ready medical chatbot built by instruction fine-tuning LLMs using LoRA/QLoRA with a RAG pipeline backed by Neo4j knowledge graphs — improving response accuracy by 30% and achieving 92% user satisfaction across 500+ beta users. Deployed end-to-end on AWS with real-time latency and drift monitoring, maintaining 99.7% uptime while serving 1,000 concurrent users.",
  tags: [
    { name: "LLM", color: "blue-text-gradient" },
    { name: "LoRA/QLoRA", color: "green-text-gradient" },
    { name: "RAG", color: "pink-text-gradient" },
    { name: "Neo4j", color: "yellow-text-gradient" },
    { name: "AWS", color: "red-text-gradient" },
  ],
  image: Chat, 
  source_code_link: "https://github.com/snehasonkusare-tech/Instruction_Finetuning_Chatbot",
},
{
  name: "AI-Driven Business Intelligence System",
  description:
    "Engineered an end-to-end BI pipeline ingesting SQL data, applying Pandas transformations and orchestrating ETL via Apache Airflow into Snowflake. Deployed ML models for anomaly detection and forecasting, surfacing real-time insights through interactive dashboards.",
  tags: [
    { name: "Snowflake", color: "blue-text-gradient" },
    { name: "ApacheAirflow", color: "green-text-gradient" },
    { name: "Pandas", color: "pink-text-gradient" },
    { name: "AnomalyDetection", color: "yellow-text-gradient" },
    { name: "SQL", color: "red-text-gradient" },
  ],
  image: Business, // replace with actual screenshot
  source_code_link: "https://github.com/snehasonkusare-tech/AI_BI_Pipeline_project/tree/main/ai_bi_pipeline_project",
},
{
  name: "Dynamic Pricing Revenue Optimization",
  description:
    "Architected a pricing optimization pipeline in R using Prophet forecasting, price elasticity regression, and causal inference to support insight-driven decisions. Centralized data on Amazon Redshift and built real-time revenue simulation dashboards in Amazon QuickSight.",
  tags: [
    { name: "R", color: "blue-text-gradient" },
    { name: "Prophet", color: "green-text-gradient" },
    { name: "AmazonRedshift", color: "pink-text-gradient" },
    { name: "QuickSight", color: "yellow-text-gradient" },
    { name: "CausalInference", color: "red-text-gradient" },
  ],
  image: Dynamic, // replace with actual screenshot
  source_code_link: "https://github.com/snehasonkusare-tech/Dynamic_Pricing_Revenue_Optimization",
},
{
  name: "Bioinformatics Analytics Platform",
  description:
    "Optimized distributed workflows using Apache Spark, automating ETL and data validation pipelines in Python and SQL. Consolidated datasets into Google BigQuery and built Power BI dashboards with DAX queries to visualize genomic mutation trends.",
  tags: [
    { name: "ApacheSpark", color: "blue-text-gradient" },
    { name: "BigQuery", color: "green-text-gradient" },
    { name: "PowerBI", color: "pink-text-gradient" },
    { name: "DAX", color: "yellow-text-gradient" },
    { name: "Python", color: "red-text-gradient" },
  ],
  image: Bio, // replace with actual screenshot
  source_code_link: "https://github.com/snehasonkusare-tech/bioinformatics-analytics-platform-one-container/tree/main/bioinformatics-analytics-platform-one-container",
},
  {
    name: "BlinkIt",
    description:
      "An interactive sales dashboard in Power BI to analyze total sales, outlet performance, product-wise revenue, and customer insights. Used DAX calculations to track sales trends, top-selling categories, and the impact of outlet size & location. Integrated filters, drill-through reports, and dynamic KPIs to enable data-driven decision-making and optimize business strategies. ",
    tags: [
      {
        name: "PowerBI",
        color: "yellow-text-gradient",
      },
      {
        name: "DAX",
        color: "green-text-gradient",
      },
      {
        name: "DataAnalysis",
        color: "pink-text-gradient",
      },
      {
        name: "DataVisualization",
        color: "blue-text-gradient",
      },
      {
        name: "BusinessIntelligence",
        color: "red-text-gradient",
      }
    ],
    image: BlinkIt,
    source_code_link: "https://github.com/snehasonkusare-tech/Power_BI-Projects",
    video_link:BT,
  },
  {
    name: "Flight Price prediction",
    description:
      "A flight price prediction model that forecasts ticket prices with high accuracy by analyzing historical airfare data. It cleans and processes raw data to ensure reliable insights while automating data handling and model training. The system is scalable and deployable on the cloud. Fine-tuning enhances prediction accuracy, helping travelers and businesses make informed airfare decisions",
    tags: [
      {
        name: "MachineLearning",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "XGBoost",
        color: "pink-text-gradient",
      },
      {
        name: "RandomForest",
        color: "yellow-text-gradient",
      },
      {
        name: "AzureML",
        color: "green-text-gradient",
      },


    ],
    image: FlightPrice,
    source_code_link: "https://github.com/snehasonkusare-tech/Flight-Price-Prediction",
    video_link:FP,
  },
  {
    name: "Skin Cancer detection",
    description:
      "An ML model for skin cancer detection using CNNs, achieving 85-95% accuracy. Optimized thresholds with Reinforcement Learning, boosting precision by 10%. Deployed the model on Azure ML for real-time predictions and integrated MongoDB for image management. Applied hypothesis testing to fine-tune performance and validate medical diagnosis predictions.",
    tags: [
      {
        name: "MedicalAI",
        color: "blue-text-gradient",
      },
      {
        name: "MachineLearning",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
      {
        name: "AzureML",
        color: "yellow-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "FineTuning",
        color: "red-text-gradient",
      },

    ],
    image: SkinCancer,
    source_code_link: "https://github.com/snehasonkusare-tech/Skin-Cancer-Detection",
    video_link:SC,
  },
];

export { services, technologies, experiences, testimonials, projects };
