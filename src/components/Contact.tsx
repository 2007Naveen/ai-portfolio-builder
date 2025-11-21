import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setLoading(true);

    try {
      // Initialize EmailJS with your public key
      // emailjs.init("YOUR_PUBLIC_KEY");
      
      // Uncomment and configure when ready to use EmailJS
      /*
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      */

      toast.success("Message sent successfully! I'll get back to you soon.");
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
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
            Get In <span className="glow-text-pink">Touch</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-accent mx-auto mb-12"
          />

          <div className="max-w-2xl mx-auto">
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glassmorphism rounded-2xl p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    name="user_email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  name="message"
                  required
                  placeholder="Your message..."
                  className="bg-background/50 min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-primary hover:shadow-glow-cyan transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Note: To enable email functionality, configure EmailJS with your service ID and template ID.
              </p>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center space-y-4"
            >
              <p className="text-muted-foreground">Or reach me directly at:</p>
              <a
                href="mailto:your.email@example.com"
                className="text-xl text-primary hover:text-secondary transition-colors"
              >
                your.email@example.com
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
