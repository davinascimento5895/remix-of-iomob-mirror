import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-topbar text-topbar-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="ioMob" className="h-10 mb-6 brightness-0 invert" />
            <p className="text-sm opacity-70 leading-relaxed">
              Com atuação global e especialistas locais, somos experts no Desenvolvimento de Aplicativos Móveis, Integrações, Gerenciamento de Projetos em TI e Inteligência Artificial.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Contatos</h4>
            <div className="space-y-2 text-sm opacity-70">
              <p>Av. João Gualberto, 1741 - Sala 601</p>
              <p>Curitiba - PR - Brasil</p>
              <p>iomob@iomob.com</p>
              <p>+55 (41) 98790 3434</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Links Rápidos</h4>
            <div className="space-y-2 text-sm opacity-70">
              <a href="#solucoes" className="block hover:text-primary transition-colors">Soluções</a>
              <a href="#sobre" className="block hover:text-primary transition-colors">Sobre</a>
              <a href="#blog" className="block hover:text-primary transition-colors">Blog</a>
              <a href="#contato" className="block hover:text-primary transition-colors">Contato</a>
            </div>
          </div>
        </div>
        <div className="border-t border-topbar-foreground/10 pt-8 text-center text-sm opacity-50">
          © {new Date().getFullYear()} ioMob. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
