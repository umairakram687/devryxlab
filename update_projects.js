const fs = require('fs');

let content = fs.readFileSync('src/components/sections/ProjectSection.tsx', 'utf8');

// 1. Move Ketofit Admin to fitness
content = content.replace(
`    {
      title: "Ketofit Admin",
      description: "A comprehensive web application providing intuitive user experience.",
      image: "/portfolio/placeholder.svg",
      link: "https://kito-fit-admin.netlify.app/",
      tags: ["E-Commerce", "Admin", "Dashboard"],
    },
`, "");

content = content.replace(
`  fitness: [
    {
      title: "ExerciseNow",
      description: "EMR-integrated wellness platform for healthcare providers featuring custom exercise programs, remote monitoring, and return-to-play protocols.",
      image: "/portfolio/exercisenow.png",
      link: "https://exercisenow.org/",
      tags: ["Wellness", "EMR", "Next.js"],
    },`,
`  fitness: [
    {
      title: "ExerciseNow",
      description: "EMR-integrated wellness platform for healthcare providers featuring custom exercise programs, remote monitoring, and return-to-play protocols.",
      image: "/portfolio/exercisenow.png",
      link: "https://exercisenow.org/",
      tags: ["Wellness", "EMR", "Next.js"],
    },
    {
      title: "Ketofit Admin",
      description: "A comprehensive web application providing intuitive user experience.",
      image: "/portfolio/placeholder.svg",
      link: "https://kito-fit-admin.netlify.app/",
      tags: ["Fitness", "Admin", "Dashboard"],
    },`);

// 2. Replace all "/portfolio/placeholder.svg" with the thum.io link based on that object's 'link'
const projectRegex = /\{\s*title:.*?,.*?\s*image:\s*"\/portfolio\/placeholder\.svg",\s*link:\s*"(https?:\/\/[^"]+)",.*?\}/gs;

content = content.replace(projectRegex, (match, link) => {
  const screenshotUrl = `https://image.thum.io/get/width/1200/crop/800/${link}`;
  return match.replace(/"\/portfolio\/placeholder\.svg"/, `"${screenshotUrl}"`);
});

fs.writeFileSync('src/components/sections/ProjectSection.tsx', content);
