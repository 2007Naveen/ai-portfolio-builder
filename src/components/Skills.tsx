import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiAutodesk,
  SiGoogle,
  SiDocker
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { Button } from "@/components/ui/button";

const skills = {
  Frontend: [
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React.js", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "Java", icon: FaJava },
    { name: "Express.js", icon: SiExpress },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
  ],
  Tools: [
    { name: "VS Code", icon: VscCode },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Autodesk", icon: SiAutodesk },
    { name: "Google Developers", icon: SiGoogle },
    { name: "Docker", icon: SiDocker },
  ],
};

type CategoryType = keyof typeof skills;

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("Frontend");

  const currentSkills = skills[selectedCategory];

  return (
    <section id="skills" className="py-20 relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            My <span className="glow-text-purple">Skills</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-accent mx-auto mb-8"
          />

          {/* Category Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
          >
            {(Object.keys(skills) as CategoryType[]).map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "hover:border-primary/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Orbital Skills Display */}
          <div className="relative flex items-center justify-center" style={{ height: '600px' }}>
            {/* Center Monitor */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute z-10 w-40 h-40 rounded-full bg-gradient-primary flex items-center justify-center glassmorphism border-2 border-primary/30 shadow-glow"
            >
              <VscCode className="w-20 h-20 text-primary-foreground" />
            </motion.div>

            {/* Orbiting Skills Container with Continuous Rotation */}
            <motion.div
              key={selectedCategory}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={isInView ? { rotate: 360, opacity: 1 } : { opacity: 0 }}
              transition={{
                rotate: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
                opacity: {
                  duration: 0.3,
                }
              }}
            >
              {/* Orbiting Skills */}
              {currentSkills.map((skill, index) => {
                const angle = (index / currentSkills.length) * 2 * Math.PI;
                const radius = 250;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={`${selectedCategory}-${skill.name}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: x,
                      y: y,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    whileHover={{
                      scale: 1.3,
                      transition: { duration: 0.2 },
                    }}
                    className="absolute w-20 h-20 rounded-2xl bg-background/90 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center cursor-pointer hover:border-accent/50 hover:shadow-glow transition-all group"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="flex items-center justify-center"
                    >
                      <skill.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
                    </motion.div>
                    
                    {/* Tooltip on hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-sm px-3 py-1 rounded-lg border border-primary/20 whitespace-nowrap pointer-events-none"
                    >
                      <span className="text-xs text-foreground font-medium">{skill.name}</span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
