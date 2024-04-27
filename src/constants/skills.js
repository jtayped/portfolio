import {
  SiTailwindcss,
  SiPython,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiGooglesearchconsole,
  SiGit,
  SiPandas,
  SiFfmpeg,
  SiSelenium,
  SiNumpy,
  SiVisualstudiocode,
  SiPycharm,
  SiTruenas,
} from "react-icons/si";

export const skills = [
  {
    name: "Tailwind CSS",
    percentage: "100",
  },
  {
    name: "Python",
    percentage: "90",
  },
  {
    name: "HTML/CSS",
    percentage: "85",
  },
  {
    name: "SEO",
    percentage: "80",
  },
  {
    name: "React JS",
    percentage: "80",
  },
  {
    name: "Javascript",
    percentage: "75",
  },
  {
    name: "Firebase",
    percentage: "70",
  },
];

const iconSize = 25;
export const skills1 = [
  {
    nameKey: "webdev",
    icons: [
      { name: "Next.js", icon: <SiNextdotjs size={iconSize} /> },
      { name: "React.js", icon: <SiReact size={iconSize} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={iconSize} /> },
      { name: "Express.js", icon: <SiExpress size={iconSize} /> },
      { name: "MongoDB", icon: <SiMongodb size={iconSize} /> },
      { name: "SEO", icon: <SiGooglesearchconsole size={iconSize} /> },
    ],
  },
  {
    nameKey: "python",
    icons: [
      { name: "NumPy", icon: <SiNumpy size={iconSize} /> },
      { name: "Pandas", icon: <SiPandas size={iconSize} /> },
      { name: "Selenium", icon: <SiSelenium size={iconSize} /> },
      { name: "FFmpeg", icon: <SiFfmpeg size={iconSize} /> },
    ],
  },
  {
    nameKey: "other",
    icons: [
      { name: "Git", icon: <SiGit size={iconSize} /> },
      { name: "TrueNAS", icon: <SiTruenas size={iconSize} /> },
      {
        name: "Visual Studio Code",
        icon: <SiVisualstudiocode size={iconSize} />,
      },
      { name: "PyCharm", icon: <SiPycharm size={iconSize} /> },
    ],
  },
];
