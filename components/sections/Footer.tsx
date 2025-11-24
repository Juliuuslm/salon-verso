const currentYear = new Date().getFullYear();

/**
 * FOOTER COMPONENT
 * Pie de página con links de redes sociales
 */
export default function Footer() {
  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Facebook", href: "https://facebook.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-black py-16 md:py-20 border-t border-white/10 text-center">
      <h2 className="text-4xl md:text-6xl font-serif text-white/10 mb-8 tracking-widest select-none">
        VERSO
      </h2>
      <div className="flex justify-center gap-6 md:gap-8 mb-8">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest"
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="text-neutral-700 text-[10px] uppercase tracking-widest">
        © {currentYear} Verso Venue. All rights reserved.
      </p>
    </footer>
  );
}
