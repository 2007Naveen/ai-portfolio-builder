import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            About <span className="glow-text-cyan">Me</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-primary mx-auto mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating
                immersive digital experiences. With expertise in modern web technologies, I transform
                ideas into reality through clean, efficient code.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech has been driven by curiosity and a constant desire to learn.
                I specialize in building responsive, performant applications that users love to interact with.
              </p>

              <div className="flex flex-wrap gap-4">
                {["React", "TypeScript", "Node.js", "Three.js"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-muted text-primary border border-primary"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="relative p-8 glassmorphism rounded-2xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-50" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-accent rounded-full blur-2xl opacity-50" />
                
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                      💼
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Experience</h3>
                      <p className="text-muted-foreground">5+ Years</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center text-2xl">
                      🎯
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Projects</h3>
                      <p className="text-muted-foreground">50+ Completed</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                      ⭐
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Satisfaction</h3>
                      <p className="text-muted-foreground">100% Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
