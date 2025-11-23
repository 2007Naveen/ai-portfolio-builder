import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

const skills = {
  "Frontend Languages": [
    { name: "HTML5", level: 95, icon: SiHtml5 },
    { name: "CSS3", level: 93, icon: SiCss3 },
    { name: "JavaScript", level: 92, icon: SiJavascript },
    { name: "TypeScript", level: 90, icon: SiTypescript },
    { name: "React.js", level: 95, icon: SiReact },
    { name: "Tailwind CSS", level: 92, icon: SiTailwindcss },
  ],
  "Backend Languages": [
    { name: "Node.js", level: 88, icon: SiNodedotjs },
    { name: "Python", level: 85, icon: SiPython },
    { name: "Java", level: 80, icon: FaJava },
    { name: "Express.js", level: 85, icon: SiExpress },
    { name: "PostgreSQL", level: 82, icon: SiPostgresql },
    { name: "MongoDB", level: 80, icon: SiMongodb },
  ],
  "Development Tools": [
    { name: "VS Code", level: 95, icon: VscCode },
    { name: "Git", level: 90, icon: SiGit },
    { name: "GitHub", level: 90, icon: SiGithub },
    { name: "Autodesk", level: 75, icon: SiAutodesk },
    { name: "Google Developers", level: 82, icon: SiGoogle },
    { name: "Docker", level: 75, icon: SiDocker },
  ],
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allSkills = [
    ...skills["Frontend Languages"],
    ...skills["Backend Languages"],
    ...skills["Development Tools"],
  ];

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
            className="h-1 bg-gradient-accent mx-auto mb-16"
          />

          {/* Orbital Skills Display */}
          <div className="relative flex items-center justify-center" style={{ height: '600px' }}>
            {/* Center Monitor */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute z-10 w-40 h-40 rounded-full bg-gradient-primary flex items-center justify-center glassmorphism border-2 border-primary/30"
            >
              <VscCode className="w-20 h-20 text-primary-foreground" />
            </motion.div>

            {/* Orbiting Skills Container with Continuous Rotation */}
            <motion.div
              className="absolute inset-0"
              animate={isInView ? { rotate: 360 } : {}}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Orbiting Skills */}
              {allSkills.map((skill, index) => {
              const angle = (index / allSkills.length) * 2 * Math.PI;
              const radius = 280;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          x: x,
                          y: y,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.8 + index * 0.05,
                    duration: 0.6,
                  }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  className="absolute w-16 h-16 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-primary/50 transition-colors group"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex flex-col items-center justify-center gap-1"
                  >
                    <skill.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                    <span className="text-[8px] text-muted-foreground text-center leading-tight">
                      {skill.name}
                    </span>
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
