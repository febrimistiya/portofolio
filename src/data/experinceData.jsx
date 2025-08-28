const experienceData = {
  title: "Experience",
  subtitle:
    "A glimpse of where I've been — from work experience to organizational life that shaped who I am.",

  tabs: ["Work", "Organization"],

  experiences: [
    // === Work Experience ===
    {
      icon: "bx bx-code-alt",
      tab: "Work",
      title: "Frontend Developer Intern",
      company: "PT Teknologi Kode",
      year: "Jan 2025 - Apr 2025",
      location: "Remote",
      description: [
        "Build responsive UI with React & Tailwind",
        "Integrate REST APIs for dashboard",
        "Fix bugs & optimize performance"
      ],
      tech: ["React", "Tailwind", "Axios"]
    },
 
    // === Organization Experience ===

    {
      icon: "bx bx-calendar-event",
      tab: "Organization",
      title: "Data Analytics Bootcamp Participant",
      company: "RevoU",
      year: "2025",
      location: "Yogyakarta",
      description: [
        "Data Processing.",
        "Visualization.",
        "Insight Generation."
      ],
      tech: ["Python", "Excel", "Power BI"]
    },
  ]
};

export default experienceData;
