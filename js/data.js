/* ==========================================================
   CONTENT · edit everything about the portfolio here.
   Logos come from Simple Icons (cdn.simpleicons.org). If a
   slug is null or fails to load, the text label still shows.
   ========================================================== */

const DATA = {
  profile: {
    name: "Sohil Sarode",
    email: "sohilsarode5@gmail.com",
    phone: "+91 8087263077",
    location: "Bengaluru, India"
  },

  stats: [
    { value: "25s → 2s", label: "Critical analysis API latency at Lowe's" },
    { value: "40%", label: "Faster response time across Infosys services" },
    { value: "250+", label: "DSA problems solved on LeetCode" },
    { value: "9.76", label: "CGPA, B.E. Computer Engineering" }
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "Lowe's India",
      place: "Bengaluru, India",
      period: "Dec 2024 — Present",
      points: [
        "Developed event-driven microservices using Spring Boot, WebFlux, Kafka, Node.js, MongoDB and PostgreSQL for Lowe's Cost Guide platform, supporting multi-billion record datasets.",
        "Built Kafka-based ingestion and transformation pipelines with Avro schemas for high-throughput supplier cost-change processing across enterprise systems.",
        "Cut critical analysis API latency from 25 seconds to 2 seconds through MongoDB query optimization, using partial filter expressions and compound indexes.",
        "Implemented recommendation workflows that combine commodity trends, forex rates, tariffs, regional pricing and business rules to generate supplier negotiation insights.",
        "Implemented HashiCorp Vault, set up Grafana dashboards, and contributed to a MongoDB-to-PostgreSQL migration alongside architects and product teams."
      ]
    },
    {
      role: "Digital Specialist Engineer",
      company: "Infosys",
      place: "Pune, India",
      period: "Jul 2022 — Nov 2024",
      points: [
        "Developed and enhanced enterprise telecom applications for Verizon using Spring Boot, React, Redux Toolkit, Node.js, React Query and SQL Server in a distributed microservice architecture.",
        "Improved application response time by 40% through performance profiling, API optimization, removal of redundant service calls and query tuning, validated with JMeter.",
        "Built and maintained REST APIs and responsive frontend components with cross-functional Agile teams. Recognised with the Insta Award for outstanding project performance."
      ]
    },
    {
      role: "Intern",
      company: "Persistent Systems",
      place: "Pune, India",
      period: "Feb 2022 — Jul 2022",
      points: [
        "Built cart and wishlist features in React to improve customer interaction.",
        "Built Spring Boot and MongoDB backend services for scalable, robust retail customer operations."
      ]
    }
  ],

  skills: [
    {
      group: "Languages",
      items: [
        { name: "Java", logo: "openjdk" },
        { name: "Python", logo: "python" },
        { name: "JavaScript", logo: "javascript" },
        { name: "TypeScript", logo: "typescript" }
      ]
    },
    {
      group: "Backend",
      items: [
        { name: "Spring Boot", logo: "springboot" },
        { name: "Spring WebFlux", logo: "spring" },
        { name: "Spring Cloud", logo: "spring" },
        { name: "Hibernate / JPA", logo: "hibernate" },
        { name: "Apache Kafka", logo: "apachekafka" },
        { name: "Node.js", logo: "nodedotjs" },
        { name: "REST APIs", logo: null },
        { name: "JMS", logo: null },
        { name: "Microservices", logo: null }
      ]
    },
    {
      group: "Frontend",
      items: [
        { name: "React", logo: "react" },
        { name: "Redux Toolkit", logo: "redux" },
        { name: "React Query", logo: "reactquery" }
      ]
    },
    {
      group: "Databases",
      items: [
        { name: "PostgreSQL", logo: "postgresql" },
        { name: "MongoDB", logo: "mongodb" },
        { name: "Apache Cassandra", logo: "apachecassandra" },
        { name: "MySQL", logo: "mysql" },
        { name: "MS SQL Server", logo: "microsoftsqlserver" }
      ]
    },
    {
      group: "Cloud & Tools",
      items: [
        { name: "Kubernetes", logo: "kubernetes" },
        { name: "Docker", logo: "docker" },
        { name: "Rancher", logo: "rancher" },
        { name: "HashiCorp Vault", logo: "vault" },
        { name: "Git", logo: "git" },
        { name: "GitHub", logo: "github" },
        { name: "Bitbucket", logo: "bitbucket" },
        { name: "Jira", logo: "jira" },
        { name: "Redis", logo: "redis" },
        { name: "GraphQL", logo: "graphql" },
        { name: "JWT", logo: "jsonwebtokens" }
      ]
    },
    {
      group: "Testing & Monitoring",
      items: [
        { name: "JUnit", logo: "junit5" },
        { name: "Mockito", logo: null },
        { name: "SonarQube", logo: "sonarqube" },
        { name: "Grafana", logo: "grafana" },
        { name: "Prometheus", logo: "prometheus" },
        { name: "Kibana", logo: "kibana" },
        { name: "Instana", logo: null },
        { name: "Swagger / OpenAPI", logo: "swagger" }
      ]
    },
    {
      group: "Currently Exploring",
      items: [
        { name: "Machine Learning", logo: null },
        { name: "LLM Applications", logo: null },
        { name: "AI Engineering", logo: null }
      ]
    }
  ],

  projects: [
    {
      title: "AmazeKart",
      period: "Apr 2024 — May 2024",
      url: "https://github.com/SKS59",
      desc: "Full-stack e-commerce platform. Razorpay payment gateway integration, secure JWT authentication and authorization with Spring Security, and REST APIs documented with Swagger/OpenAPI.",
      stack: ["React", "Spring Boot", "Spring Security", "JWT", "Hibernate", "MySQL", "React Query", "Tailwind CSS", "Swagger"]
    },
    {
      title: "Sketchful",
      period: "Jun 2024",
      url: "https://github.com/SKS59",
      desc: "Real-time multiplayer drawing and collaboration platform with live chat and synchronised gameplay over WebSockets.",
      stack: ["React", "Spring Boot", "WebSockets", "Bootstrap"]
    },
    {
      title: "Parking System with ANPR",
      period: "Oct 2020 — Nov 2020",
      url: "https://github.com/SKS59",
      desc: "Flutter app where an admin can allow or deny individual vehicles, paired with a Python module that detects number-plate text from camera images.",
      stack: ["Flutter", "Python", "Computer Vision"]
    },
    {
      title: "Tuition Management System",
      period: "Nov 2020",
      url: "https://github.com/SKS59",
      desc: "Admin web application to manage branches, teachers and students of a tuition class.",
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
      title: "CoronaPedia",
      period: "May 2020",
      url: "https://github.com/SKS59",
      desc: "C++ data visualisation of COVID-19 cases (active, deaths, recovered) across countries and Indian states, including covid centres, with Python bar and chart diagrams.",
      stack: ["C++", "Python", "Data Visualisation"]
    }
  ],

  education: [
    {
      year: "2018 — 2022",
      degree: "B.E., Computer Engineering",
      school: "K. K. Wagh Institute of Engineering Education & Research",
      meta: "Savitribai Phule Pune University",
      score: "9.76",
      scoreLabel: "CGPA / 10"
    },
    {
      year: "2016 — 2018",
      degree: "Higher Secondary, Science",
      school: "KCES's Moolijee Jaitha College",
      meta: "Jalgaon",
      score: "88.77%",
      scoreLabel: "Percentage"
    },
    {
      year: "2010 — 2016",
      degree: "10th Boards",
      school: "A. T. Zambare High School",
      meta: "Jalgaon",
      score: "95.20%",
      scoreLabel: "Percentage"
    }
  ],

  certifications: [
    { name: "SQL and Relational Databases", issuer: "Cognitive Class", date: "Jun 2021", id: "e0101186622f4eb78c71a6c898142eb7" },
    { name: "SQL (Basic)", issuer: "HackerRank", date: "May 2021", id: "3AF638046584" },
    { name: "Problem Solving (Basic)", issuer: "HackerRank", date: "Jan 2021", id: "D82EBE5CE72C" },
    { name: "Python (Basic)", issuer: "HackerRank", date: "Aug 2020", id: "A32B37CFF3E4" },
    { name: "Python 3 Programming (Specialization)", issuer: "Coursera", date: "Aug 2020", id: "RDULDRW3KYSF" },
    { name: "Python Project: pillow, tesseract, opencv", issuer: "Coursera", date: "Aug 2020", id: "VWQ9U3LWA6HX" },
    { name: "Data Collection and Processing with Python", issuer: "Coursera", date: "Aug 2020", id: "TUDHJ5HE2BLE" },
    { name: "Programming for Everybody (Getting Started with Python)", issuer: "Coursera", date: "Jul 2020", id: "J2X8DPNY6FNK" }
  ],

  awards: [
    {
      title: "Focus on Customer Award",
      meta: "Lowe's · Cost Guide V1",
      desc: "Recognised for successfully delivering and rolling out Cost Guide V1."
    },
    {
      title: "Insta Award",
      meta: "Infosys · Sep 2023",
      desc: "Recognised for outstanding performance on a project."
    },
    {
      title: "9th Rank, University Merit List",
      meta: "Savitribai Phule Pune University · Jan 2022",
      desc: "Ranked 9th in the SPPU merit list at K. K. Wagh Institute."
    },
    {
      title: "MAH-MBA CET",
      meta: "Score 98% · Sep 2022",
      desc: "Maharashtra MBA Common Entrance Test."
    },
    {
      title: "National Talent Search Examination (NTSE)",
      meta: "State level scholar · Mar 2016",
      desc: "Awarded state-level scholarship under the national talent search."
    },
    {
      title: "LeetCode",
      meta: "250+ DSA problems solved",
      desc: "Solved over 250 data structures and algorithms problems and earned multiple platform badges."
    }
  ],

  languages: [
    { name: "English", level: "Professional working proficiency" },
    { name: "Hindi", level: "Professional working proficiency" },
    { name: "Marathi", level: "Native or bilingual proficiency" }
  ],

  socials: [
    { label: "GitHub", url: "https://github.com/SKS59" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sohil-sarode" },
    { label: "LeetCode", url: "https://leetcode.com/sohilsarode" },
    { label: "Phone", url: "tel:+918087263077" }
  ]
};
