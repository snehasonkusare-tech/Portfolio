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
  Hexa,
  iBase,
  Neu,
  carrent,
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
    title: "Associate Software Engineer",
    company_name: "Hexaware Texchnology LTD",
    icon: Hexa,
    iconBg: "#383E56",
    date: "September 2021 - January 2024",
    points: [
      "Developed and optimized machine learning models for anomaly detection and root cause analysis, improving system efficiency by 40%.",
      "Designed and implemented function-based and semi-supervised labeling strategies, enhancing predictive model accuracy.",
      "Led data science initiatives, leveraging Python, SQL, and Spark to analyze large-scale datasets and drive business insights.",
      "Conducted A/B testing and iterative validation to refine model performance based on real-world feedback.",
      "Collaborated with cross-functional teams to deploy predictive algorithms into production environments on cloud platforms."
    ],
  },
  {
    title: "Software Intern",
    company_name: "iBase Technologyies",
    icon: iBase,
    iconBg: "#E6DEDD",
    date: "November 2020 - August 2021",
    points: [
      "Built machine learning models for clustering and classification, enabling actionable insights for business applications.",
      "Designed scalable MySQL databases, improving query performance and data integrity in production environments.",
      "Optimized deep learning algorithms in Python, enhancing computational efficiency and predictive performance."
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
    company: "2024 - 2026 | Pursuing",
    image:UMD


  },
  {
    testimonial:"MIT Art, Desgin and Technology University",
    name: "Bachelors in Electronics and Communication Engineering",
    Percentage:"7.57/10",
    company: "2017 - 2021",
    image: MIT,
  },
];

const projects = [
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
