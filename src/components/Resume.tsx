import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { FaDownload, FaFilePdf } from "react-icons/fa";

export const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume.pdf in the public folder
    link.download = 'Your_Name_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow-cyan"
          >
            <FaFilePdf className="text-6xl text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Download My <span className="glow-text-cyan">Resume</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Get a detailed overview of my experience, skills, and achievements.
            Perfect for recruiters and potential collaborators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300 text-lg px-8 py-6 gap-3"
            >
              <FaDownload className="text-xl" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-8 glassmorphism rounded-xl p-6 inline-block"
          >
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
