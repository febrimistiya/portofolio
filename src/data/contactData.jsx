const contactData = {
    title: "Contact Me",
    subtitle: "Reach out via form, social media, or support platforms.",

    tabs: [
        {
            label: "Form",
            value: "form",
            icon: "bx bx-envelope",
        },
        {
            label: "Social",
            value: "social",
            icon: "bx bx-link",
        },
        {
            label: "Support Me",
            value: "support",
            icon: "bx bx-heart",
        },
    ],

    socials: [
        {
            label: "GitHub",
            href: "https://github.com/febrimistiya",
            icon: "bx bxl-github",
            description: "Explore my code & projects",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/febri-mistiya-45016b368/",
            icon: "bx bxl-linkedin-square",
            description: "Let’s connect professionally",
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/fbrii.msyaa_/",
            icon: "bx bxl-instagram",
            description: "My visual journal & life updates",
        },

    ],

    supportPlatforms: [
        {
            label: "QRIS",
            type: "image",
            imageSrc: "/assets/qris.jpg",
            alt: "Scan to support via QRIS",
        }
    ],

};

export default contactData;
