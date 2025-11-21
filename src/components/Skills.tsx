import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Text3D, Center } from "@react-three/drei";

const skills = {
  Frontend: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Three.js", level: 85 },
  ],
  Backend: [
    { name: "Node.js", level: 88 },
    { name: "Express", level: 85 },
    { name: "PostgreSQL", level: 82 },
    { name: "MongoDB", level: 80 },
  ],
  Tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 78 },
    { name: "Figma", level: 85 },
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 3D Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="h-[400px] rounded-2xl overflow-hidden glassmorphism"
            >
              <Canvas>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
                  <meshStandardMaterial
                    color="#b74fff"
                    wireframe
                    emissive="#b74fff"
                    emissiveIntensity={0.5}
                  />
                </Sphere>
              </Canvas>
            </motion.div>

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
                          <span className="text-foreground">{skill.name}</span>
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
