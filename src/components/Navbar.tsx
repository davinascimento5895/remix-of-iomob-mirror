import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="ioMob" className="h-12" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#solucoes" className="text-foreground hover:text-primary transition-colors font-medium">Soluções</a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">Sobre</a>
          <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">Blog</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-foreground hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <a
            href="#contato"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            FALE CONOSCO
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 space-y-4">
          <a href="#solucoes" className="block py-2 font-medium" onClick={() => setMobileOpen(false)}>Soluções</a>
          <a href="#sobre" className="block py-2 font-medium" onClick={() => setMobileOpen(false)}>Sobre</a>
          <a href="#blog" className="block py-2 font-medium" onClick={() => setMobileOpen(false)}>Blog</a>
          <a href="#contato" className="block bg-primary text-primary-foreground px-6 py-3 rounded-md text-center font-semibold" onClick={() => setMobileOpen(false)}>
            FALE CONOSCO
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
