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

  return (
    <section id="skills" className="py-20 relative">
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
            className="h-1 bg-gradient-accent mx-auto mb-12"
          />

          <div className="max-w-4xl mx-auto">
            {/* Skills List */}
            <div className="space-y-8">
              {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + categoryIndex * 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-secondary">{category}</h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-foreground flex items-center gap-2">
                            <skill.icon className="w-5 h-5" />
                            {skill.name}
                          </span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.8 }}
                            className="h-full bg-gradient-primary"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
