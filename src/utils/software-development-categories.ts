
interface SoftwareDevelopmentDictionary {
    [key: string]: string[];
  }
  
  const softwareDevelopmentCategories: SoftwareDevelopmentDictionary = {
    FrontendDevelopment: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js"],
    BackendDevelopment: ["Node.js", "Python (Django, Flask)", "Ruby (Ruby on Rails)", "Java (Spring)", "C# (ASP.NET)", "PHP (Laravel)"],
    DatabaseManagement: ["SQL", "MySQL", "PostgreSQL", "MongoDB (NoSQL)", "Firebase"],
    MobileAppDevelopment: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Xamarin"],
    DataScienceAndAI: ["Python (NumPy, Pandas)", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Computer Vision"],
    GameDevelopment: ["Unity", "Unreal Engine", "C++", "C#", "Python (Pygame)"],
    DevOpsAndSystemAdmin: ["Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform"],
    WebSecurity: ["OWASP Top 10", "Ethical Hacking", "Penetration Testing", "Cryptography"],
    WebDesign: ["UI/UX Design", "Adobe XD", "Figma", "Sketch"],
    CloudComputing: ["AWS", "Microsoft Azure", "Google Cloud Platform (GCP)"],
    Other: [
        "HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js",
        "Node.js", "Python (Django, Flask)", "Ruby (Ruby on Rails)", "Java (Spring)", "C# (ASP.NET)", "PHP (Laravel)",
        "SQL", "MySQL", "PostgreSQL", "MongoDB (NoSQL)", "Firebase",
        "React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Xamarin",
        "Python (NumPy, Pandas)", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Computer Vision",
        "Unity", "Unreal Engine", "C++", "C#", "Python (Pygame)",
        "Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform",
        "OWASP Top 10", "Ethical Hacking", "Penetration Testing", "Cryptography",
        "UI/UX Design", "Adobe XD", "Figma", "Sketch",
        "AWS", "Microsoft Azure", "Google Cloud Platform (GCP)"
      ]
  };
  
export default softwareDevelopmentCategories  