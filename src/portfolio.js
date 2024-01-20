/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rupendra Raghu",
  title: "Hi all, I'm Rupendra",
  subTitle: emoji(
    "A versatile Full Stack Software Developer 🚀 holding MCA with 7+ years of experience in developing server side web components, Rest APIs, Microservices using Java technologies and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1MEfZVFL1bwKpTmHZ2B5RX9yymWoSNoxq/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rupendraraghu",
  linkedin: "https://www.linkedin.com/in/rupendra-raghu-4a1689127/",
  gmail: "rupendra.r14@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/rupendraraghu",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Act In",
  subTitle: "Absurd Full Stack Developer Who Is Intense About Investigating All Tech Stacks",
  skills: [
    emoji(
      "⚡ Develop Rest Api's for diffrent services."
    ),
    emoji("⚡ Develop Web based Appication."),
    emoji(
      "⚡ Integration of third party services."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      logo: require("./assets/images/rgpvLogo.png"),
      subHeader: "Master of Computer Application",
      duration: "2012 - 2015"
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "Makhanlal Chaturvedi Rashtriya Patrakarita Vishwavidyalaya",
      logo: require("./assets/images/mcrpvLogo.jpg"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "2008 - 2011"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Consultant",
      company: "Xebia",
      companylogo: require("./assets/images/xebiaLogo.png"),
      date: "April 2022 – Present"
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Software Development Senior Specialist",
      company: "NTT Data",
      companylogo: require("./assets/images/nttLogo.jpg"),
      date: "April 2020 – December 2021"
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Senior Software Developer",
      company: "Sapiens",
      companylogo: require("./assets/images/sapienceLogo.png"),
      date: "August 2019 – April 2020"
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Associate IT Consultant",
      company: "ITC Infotech",
      companylogo: require("./assets/images/itcLogo.png"),
      date: "May 2017 – August 2019"
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer",
      company: "CBSI",
      companylogo: require("./assets/images/cbsiLogo.jpg"),
      date: "April 2016 – May 2017"
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "I assisted a few startups and big companies in creating their tech.",
  projects: [
    {
      image: require("./assets/images/countryDelight.jpg"),
      projectName: "Country Delight (Rapid Delivery)",
      projectDesc: "Country Delight is an online retailer offering natural and fresh dairy and F&V products directly to the doorstep of consumers. The orders are delivered within the delivery time slot chosen by the consumer. Users can also pause & restart the subscription whenever required. With Rapid Delivery products get deliverd within 30-40 minutes to the customer. Consumer ordering and servicing happens through a mobile application.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://countrydelight.in/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wellsFargo.png"),
      projectName: "Wells Fargo (Alert Nex Gen-ANG)",
      projectDesc: "Wells Fargo & Company is an American multinational financial services company with a significant global presence. Alert Next Gen (ANG) is developed to exceed Wells Fargo customer expectations around e-notifications related to their accounts, services, security/risk, fees, legal and fraud alerts, which could drive timely & meaningful customer actions, increase their digital engagement, and keep them up-to-date.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.wellsfargo.com/"
        }
      ]
    },
    {
      image: require("./assets/images/sapiens.png"),
      projectName: "Sapiens (Reinsurance-RI)",
      projectDesc: "Sapiens offers a complete insurance platform, with pre-integrated, low-code solutions and a cloud-first approach that accelerates customers’ digital transformation. Reinsurance is insurance that an insurance company purchases from another insurance company to partly insulate itself from the risk of a major claims event. With reinsurance, the company passes on some part of its own insurance liabilities to the other insurance company.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sapiens.com/"
        }
      ]
    },
    {
      image: require("./assets/images/finastra.jpg"),
      projectName: "Finastra (FBCC)",
      projectDesc: "FusionBanking Corporate Channel(FBCC) delivers next-generation portal technology to unify trade, supply chain finance, cash, lending and treasury services for corporate clients. It enables you to rationalize online services and seize new opportunities for growth in global transaction banking. FBCC provides a single, scalable view into cash, trade and liquidity management  functions, and enables you to provide the working capital optimization features corporate treasuries need to effectively manage cash, trade flow.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.finastra.com/"
        }
      ]
    },
    {
      image: require("./assets/images/tandem.jpg"),
      projectName: "Tandem (Mortgage)",
      projectDesc: "Mortgage Application is an internal web application for Tandem Bank. Earlier mortgage data was being processed manually, data was being captured in excel sheets and then calculations were performed. Once in a month data was being refreshed and sent for BOE. By mortgage application data is managed through User Interface screens with all the necessary fields to enter from the UI screen, all data is pushed into the database. Then this data from the database is consumed for BOE and other reporting purposes.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.tandem.co.uk/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to chat about a project or just say hello? All are welcome to my inbox.",
  number: "+91-7898515623",
  email_address: "rupendra.r14@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
