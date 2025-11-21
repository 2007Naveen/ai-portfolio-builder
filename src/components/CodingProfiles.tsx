import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces, SiHackerrank, SiGithub } from "react-icons/si";

const profiles = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    username: "@yourhandle",
    rating: "2000+",
    color: "from-orange-500 to-yellow-500",
    url: "#",
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    username: "@yourhandle",
    rating: "5 Star",
    color: "from-amber-600 to-amber-400",
    url: "#",
  },
  {
    name: "Codeforces",
    icon: SiCodeforces,
    username: "@yourhandle",
    rating: "Expert",
    color: "from-blue-500 to-cyan-500",
    url: "#",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    username: "@yourhandle",
    rating: "Gold Badge",
    color: "from-green-500 to-emerald-500",
    url: "#",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    username: "@yourhandle",
    rating: "500+ Repos",
    color: "from-purple-500 to-pink-500",
    url: "#",
  },
];

export const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative">
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
            Coding <span className="glow-text-purple">Profiles</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-accent mx-auto mb-12"
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {profiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="glassmorphism rounded-2xl p-6 text-center hover:border-primary transition-all duration-300">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${profile.color} flex items-center justify-center shadow-lg group-hover:shadow-glow-cyan transition-all duration-300`}>
                    <profile.icon className="text-4xl text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{profile.username}</p>
                  <p className="text-xs text-primary font-semibold">{profile.rating}</p>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
