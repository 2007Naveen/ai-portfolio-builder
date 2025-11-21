import { useState } from "react";
import { motion } from "framer-motion";

const themes = [
  { name: "Cyan", primary: "184 100% 50%", secondary: "280 100% 65%", accent: "330 100% 60%" },
  { name: "Green", primary: "142 76% 36%", secondary: "158 64% 52%", accent: "173 80% 40%" },
  { name: "Blue", primary: "221 83% 53%", secondary: "262 83% 58%", accent: "290 84% 60%" },
  { name: "Orange", primary: "25 95% 53%", secondary: "45 93% 58%", accent: "10 90% 58%" },
];

export const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeTheme = (theme: typeof themes[0]) => {
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--secondary", theme.secondary);
    document.documentElement.style.setProperty("--accent", theme.accent);
    document.documentElement.style.setProperty("--neon-cyan", theme.primary);
    document.documentElement.style.setProperty("--neon-purple", theme.secondary);
    document.documentElement.style.setProperty("--neon-pink", theme.accent);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-cyan"
      >
        <span className="text-xl">🎨</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-12 right-0 glassmorphism rounded-lg p-4 space-y-2"
        >
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => changeTheme(theme)}
              className="flex items-center gap-2 w-full px-4 py-2 rounded-md hover:bg-muted transition-colors"
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{ background: `hsl(${theme.primary})` }}
              />
              <span className="text-sm">{theme.name}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};
