/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Piyush Chouhan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Piyush Chouhan Portfolio",
    type: "website",
    url: "https://piyushchouhan.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Piyush Chouhan M",
  logo_name: "PiyushChouhan",
  nickname: "Piyush",
  subTitle:
    "Specializing in building scalable web solutions, optimizing .NET applications, and executing seamless cloud migrations with expertise in Angular, MSSQL, and .NET Web API.",
  resumeLink:
    "https://1drv.ms/b/s!Ai_HHQX8idMDkwcw1GU3AsHvtX3r?e=pFtf48",
  portfolio_repository: "https://github.com/Arrow023/portfolio-sleek",
  githubProfile: "https://github.com/Arrow023/",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/Arrow023",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/piyush-chouhan-72b747155/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:piyushchohan48@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/decrypt_me",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/piyush.chohan.1/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/decrypt.me/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular",
        "⚡ Developing MVC apps using .NET framework and .NET Core",
        "⚡ Database management using MS SQL database",
        "⚡ Creating application backend in .NET WebAPI",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "devicon:csharp",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "devicon:postman",
          style: {
            color: "#02569B",
          },
        }
      ],
    },
    {
      title: "Azure Migration Engineer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on various azure services like Azure VM, Azure SQL, Azure App Service, Azure Application Gateway, Azure Storage",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Enhancing On-Premise services with Azure Cloud Services",
        "⚡ Creating architecture for the cloud infrastructure to ensure smooth migration of applications",
        "⚡ Focused on migrating .NET applications to Azure Cloud Services",
      ],
      softwareSkills: [
        {
          skillName: "App Service",
          imageSrc : "app_service.svg",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Virtual Machines",
          imageSrc : "virtual_machine.svg",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Key Vault",
          imageSrc : "key_vault.svg",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Application Gateway",
          imageSrc : "app_gateway.svg",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/piyushchohan48/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/Arrow023",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/arrow023",
    },
    
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Piyushchouhan",
    },
   
  ],
};

const degrees = {
  degrees: [
    {
      title: "Panimalar Engineering College, Anna University",
      subtitle: "B.E. in Computer Science",
      logo_path: "panimalar.png",
      alt_name: "PEC",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Scored 9.05 CGPA, First Class with Distinction. Has been a department topper with a 9.32 GPA in Semester 1.",
      ],
      website_link: "https://panimalar.ac.in/",
    },
    {
      title: "St. Sebastian's Matriculation Higher Secondary School",
      subtitle: "HSC - Computer Science",
      logo_path: "sebastian.png",
      alt_name: "Sebastian Pallavaram",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ Attended school from X to XII. Scored 95.4% in HSC.",
        "⚡ Learned basics of computer science and programming languages.",
        "⚡ Been a consistent topper in the class and school.",
      ],
      website_link: "https://www.stsebastianmhsspvm.com/",
    },
    {
      title: "Holy Queen Matriculation Higher Secondary School",
      subtitle: "SSLC",
      logo_path: "holyqueen.png",
      alt_name: "HQMS Nagalkeni",
      duration: "2009 - 2015",
      descriptions: [
        "⚡ Attended school from IV to X. Scored 95.6% in SSLC.",
        "⚡ Enjoyed a lot!",
        "⚡ Won many prices in academics.",
      ],
      website_link: "https://www.holyqueen.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Azure Developer Associate",
      subtitle: "- Microsoft",
      logo_path: "microsoft.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/users/piyushchouhan-0396/credentials/1ea6052dc007cc1",
      alt_name: "Microsoft Certified: Azure Developer Associate",
      color_code: "#ffffff",
    },
    {
      title: "Azure Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "microsoft.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/users/PiyushChouhan-0396/credentials/B8A958BD54B5E85B",
      alt_name: "Microsoft Certified: Azure Fundamentals",
      color_code: "#ffffff",
    },
    {
      title: "Github Copilot Champion",
      subtitle: "- Cognizant",
      logo_path: "cognizant.png",
      certificate_link:
        "https://1drv.ms/b/s!Ai_HHQX8idMDkDDaj7FgYtsWpELy?e=de4Ghm",
      alt_name: "Cognizant Fusion Hackathon",
      color_code: "#ffffff",
    },
    {
      title: "ASP .NET Core 6",
      subtitle: "- Udemy",
      logo_path: "udemy.svg",
      certificate_link:
        "https://1drv.ms/b/s!Ai_HHQX8idMDhj8XdNdG4MefKTJQ?e=MpLNgg",
      alt_name: "Complete ASP.NET Core 6 MVC",
      color_code: "#ffffff",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org/share/4e859f989ea26c4070ad398fd66e2f64",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Database Management System",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://1drv.ms/u/s!Ai_HHQX8idMDgniq-GYbL3s3MYNA",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Problem Solving in C",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://1drv.ms/u/s!Ai_HHQX8idMDgnd5jW53i3srQ4wm",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Business English Certificate (Preliminary)",
      subtitle: "- Cambridge University",
      logo_path: "cambridge.png",
      certificate_link:
        "https://1drv.ms/b/s!Ai_HHQX8idMDgnw9LCKh1AjJ_JvC",
      alt_name: "BEC Preliminary",
      color_code: "#ffffff",
    },
    {
      title: "Literature Copyright",
      subtitle: "- Govt. of India",
      logo_path: "cpr.png",
      certificate_link:
        "https://1drv.ms/b/s!Ai_HHQX8idMDkw-BxTmfY4m0pJY1?e=bXln2h",
      alt_name: "Copyright © L-104847/2021",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer | Azure Developer",
          company: "Cognizant Technology Solutions",
          company_url: "https://www.cognizant.com/in/en",
          logo_path: "cognizant.png",
          duration: "Oct 2023 - Present",
          location: "Chennai, TN, India",
          description: [
              "⚡	Planned and executed comprehensive cloud migration strategies tailored to each project’s specific needs, including lift-and-shift for quick transitions, re-platforming to modernize applications, and re-architecting to fully leverage cloud-native features and services.",
              "⚡	Implemented Azure Key Vault to securely store and manage sensitive information such as application secrets, encryption keys, and SSL/TLS certificates, ensuring compliance with security standards and protecting against unauthorized access.",
              "⚡	Deployed Azure Application Insights to track application performance metrics, detect anomalies, and gain actionable insights into user behavior and system health, facilitating quick diagnosis and resolution of issues to maintain optimal performance.",
              "⚡	Enhanced application security by implementing Mutual TLS (MTLS) client certificate authentication within the .NET framework, ensuring that only authorized clients can communicate with the application and mitigating the risk of unauthorized access.",
              "⚡	Leveraged Platform-as-a-Service (PaaS) offerings such as Azure App Service and Azure SQL Database to build and deploy applications, significantly reducing infrastructure costs for clients while maintaining high availability, scalability, and performance."
          ],
          color: "#000000",
        },
        {
          title: "Junior Software Engineer | .NET Developer",
          company: "Cognizant Technology Solutions",
          company_url: "https://www.cognizant.com/in/en",
          logo_path: "cognizant.png",
          duration: "Aug 2022 - Sep 2023",
          location: "Chennai, TN, India",
          description: [
              "⚡	Implemented a robust security framework for N-Tier applications using JWT (JSON Web Token) authentication. JWTs were signed with a private key by IBM DataPower and IBM WebSEAL, ensuring secure token issuance. The application validated these JWTs using the corresponding public key, providing a secure and efficient authentication mechanism across multiple application layers.",
              "⚡	Designed and developed high-performance MVC applications using the .NET Core framework. Focused on building scalable architectures that could handle increased loads efficiently, while maintaining clean code separation and modularity for ease of maintenance and future enhancements.",
              "⚡	Deployed Azure Application Insights to provide real-time monitoring and analytics for applications. This included setting up performance metrics, error tracking, and user behavior insights, enabling proactive diagnosis and resolution of issues to ensure consistent application performance.",
              "⚡	Implemented comprehensive authentication and authorization mechanisms using ASP.NET Core Identity. This involved setting up user roles, policies, and claims to control access to various parts of the application, ensuring secure and personalized user experiences.",
              "⚡	Leveraged Entity Framework Core to facilitate efficient data access and management in MVC applications. Implemented code-first and database-first approaches, configured data models and relationships, and optimized LINQ queries to improve data retrieval performance.",
              "⚡	Enhanced application performance and responsiveness by utilizing asynchronous programming techniques in .NET Core. Implemented async/await patterns to manage long-running operations without blocking the main thread, leading to a more responsive user interface and better resource utilization."
          ],
          color: "#000000",
        },
        {
          title: "Software Engineer Trainee | .NET Developer",
          company: "Cognizant Technology Solutions",
          company_url: "https://www.cognizant.com/in/en",
          logo_path: "cognizant.png",
          duration: "Aug 2021 - Aug 2022",
          location: "Chennai, TN, India",
          description: [
              "⚡	Strategically planned and successfully executed the migration of MSSQL databases from the 2012 version to MSSQL 2019. Conducted thorough assessments of existing database schemas, dependencies, and potential compatibility issues. Implemented comprehensive backup and recovery plans to ensure data integrity and minimize downtime during the migration process. Leveraged new features and performance enhancements in MSSQL 2019 to optimize database performance post-migration.",
              "⚡	Developed robust .NET Core MVC applications with integrated Identity management on MSSQL databases. Designed and implemented secure user authentication and authorization systems using ASP.NET Core Identity, ensuring seamless and secure user access control. Configured the MSSQL database to store and manage user credentials, roles, and permissions efficiently.",
              "⚡	Implemented secure authentication and authorization mechanisms using JWT (JSON Web Token) authentication schemes. Developed systems to issue, validate, and manage JWT tokens for user authentication, ensuring secure and stateless communication between clients and servers. Utilized JWTs to enforce access control policies, providing a scalable and secure method for user management.",
              "⚡	Employed Swagger/OpenAPI specifications to create comprehensive and interactive API documentation for .NET Web APIs. Configured Swagger to automatically generate API documentation that included endpoint details, request/response formats, and authentication methods. Enabled client SDK generation directly from the API documentation, facilitating seamless integration for third-party developers and enhancing API usability.",
              "⚡	Integrated advanced logging and monitoring capabilities into applications using Serilog and Azure Application Insights. Configured Serilog to capture detailed logs of application events, errors, and performance metrics. Implemented Application Insights to monitor application health, track performance metrics, and diagnose issues in real-time. Set up alerts and dashboards to proactively identify and resolve performance bottlenecks and errors, ensuring high application reliability and performance.",
          ],
          color: "#000000",
        },
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Programmer Analyst Trainee | Full Stack Developer",
          company: "Cognizant Technology Solutions",
          company_url: "https://www.cognizant.com/in/en",
          logo_path: "cognizant.png",
          duration: "Feb 2021 - Jun 2021",
          location: "Chennai, TN, India",
          description: [
              "⚡	Designed and implemented dynamic, responsive user interfaces using Angular, leveraging its powerful component-based architecture. Created seamless user experiences by integrating Angular applications with back-end services via the HttpClient module for efficient data handling and presentation.",
              "⚡	Developed scalable and robust RESTful APIs to serve as the backbone for full-stack applications. Implemented advanced features such as data validation, error handling, and secure authentication/authorization using ASP.NET Core Identity and JWT, ensuring secure and reliable data interactions.",
              "⚡	Designed efficient database schemas and optimized queries to enhance data storage and retrieval. Utilized Entity Framework Core for seamless ORM (Object-Relational Mapping), allowing for efficient interaction with MSSQL databases using LINQ queries and entity classes. Implemented stored procedures and functions to encapsulate business logic within the database.",
              "⚡	Utilized asynchronous programming techniques in .NET Core to improve application responsiveness and performance. Integrated comprehensive logging and monitoring solutions using Serilog and Azure Application Insights, enabling real-time tracking of application health, performance metrics, and proactive issue resolution.",
              "⚡	Secured N-Tier applications by implementing JWT-based authentication schemes, with JWTs signed by IBM DataPower and IBM WebSEAL and validated within the application using public keys. Ensured secure user management by integrating ASP.NET Core Identity for managing user roles, claims, and access policies across the application stack.",
          ],
          color: "#000000",
        },
        {
          title: "Full Stack Engineer ",
          company: "Predigle India Pvt. Ltd.",
          company_url: "https://predigle.com/",
          logo_path: "predigle.svg",
          duration: "Feb 2021 - Jun 2021",
          location: "Chennai, TN, India",
          description: [
              "⚡	Designed and implemented dynamic, responsive user interfaces using Angular, leveraging its powerful component-based architecture. Created seamless user experiences by integrating Angular applications with back-end services via the HttpClient module for efficient data handling and presentation.",
              "⚡	Developed scalable and robust RESTful APIs to serve as the backbone for full-stack applications. Implemented advanced features such as data validation, error handling, and secure authentication/authorization using ASP.NET Core Identity and JWT, ensuring secure and reliable data interactions.",
              "⚡	Designed efficient database schemas and optimized queries to enhance data storage and retrieval. Utilized Entity Framework Core for seamless ORM (Object-Relational Mapping), allowing for efficient interaction with MSSQL databases using LINQ queries and entity classes. Implemented stored procedures and functions to encapsulate business logic within the database.",
              "⚡	Utilized asynchronous programming techniques in .NET Core to improve application responsiveness and performance. Integrated comprehensive logging and monitoring solutions using Serilog and Azure Application Insights, enabling real-time tracking of application health, performance metrics, and proactive issue resolution.",
              "⚡	Secured N-Tier applications by implementing JWT-based authentication schemes, with JWTs signed by IBM DataPower and IBM WebSEAL and validated within the application using public keys. Ensured secure user management by integrating ASP.NET Core Identity for managing user roles, claims, and access policies across the application stack.",
          ],
          color: "#000000",
        },
        {
          title: "Junior Software Developer | Chatbot developer",
          company: "VRSavvy Technologies Pvt. Ltd.",
          company_url: "https://predigle.com/",
          logo_path: "vrsavvy.jpg",
          duration: "Nov 2019 - Dec 2019",
          location: "Chennai, TN, India",
          description: [
              "⚡	Designed and implemented dynamic, responsive user interfaces using Angular, leveraging its powerful component-based architecture. Created seamless user experiences by integrating Angular applications with back-end services via the HttpClient module for efficient data handling and presentation.",
              "⚡	Developed scalable and robust RESTful APIs to serve as the backbone for full-stack applications. Implemented advanced features such as data validation, error handling, and secure authentication/authorization using ASP.NET Core Identity and JWT, ensuring secure and reliable data interactions.",
              "⚡	Designed efficient database schemas and optimized queries to enhance data storage and retrieval. Utilized Entity Framework Core for seamless ORM (Object-Relational Mapping), allowing for efficient interaction with MSSQL databases using LINQ queries and entity classes. Implemented stored procedures and functions to encapsulate business logic within the database.",
              "⚡	Utilized asynchronous programming techniques in .NET Core to improve application responsiveness and performance. Integrated comprehensive logging and monitoring solutions using Serilog and Azure Application Insights, enabling real-time tracking of application health, performance metrics, and proactive issue resolution.",
              "⚡	Secured N-Tier applications by implementing JWT-based authentication schemes, with JWTs signed by IBM DataPower and IBM WebSEAL and validated within the application using public keys. Ensured secure user management by integrating ASP.NET Core Identity for managing user roles, claims, and access policies across the application stack.",
          ],
          color: "#000000",
        },
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create and deploy web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects & Publications",
  description: "Some of my projects and publications are listed here.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "bloggle",
      name: "Bloggle - Personalized Blogs",
      createdAt: "2021-07-12T00:00:00Z",
      description: "A Web App for Publishing Blogs",
      url: "https://bloggle.netlify.app/",
    },
    {
      id: "copyright-brain",
      name: "Reconstructing Perceived Images from Human Brain Activities Using Twin Deep Neural Network",
      createdAt: "2021-06-30T00:00:00Z",
      description: "Copyright © L-104847/2021",
      url: "https://1drv.ms/b/s!Ai_HHQX8idMDkw-BxTmfY4m0pJY1?e=M3vyOA",
    },
    {
      id: "consistency-models",
      name: "Identification of Fake/Counterfeit Drugs using Blockchain and IoT Network",
      createdAt: "2019-03-22T00:00:00Z",
      description: "Copyright © 4380/2019-CO/L",
      url: "https://1drv.ms/i/s!Ai_HHQX8idMDkxE254J9647EcF-S?e=1uEhAh",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_pic_no_bg.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "No.12, James Street, Gandhi Nagar, Nagalkeni, Chromepet, Chennai- 600044.",
    locality: "Chennai, TN",
    country: "India",
    region: "Chennai",
    postalCode: "600044",
    streetAddress: "James Street",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/oGXAffsmjc5e2iHD7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
