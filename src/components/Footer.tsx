import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaTelegram, FaGithub, FaHeart } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaInstagram, url: "#", label: "Instagram" },
    { icon: FaFacebook, url: "#", label: "Facebook" },
    { icon: FaWhatsapp, url: "#", label: "WhatsApp" },
    { icon: FaTelegram, url: "#", label: "Telegram" },
    { icon: FaGithub, url: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex items-center gap-2">
              Made with <FaHeart className="text-red-500" /> by Your Name
            </p>
            <p className="text-sm mt-2">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
