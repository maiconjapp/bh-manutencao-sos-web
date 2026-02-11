import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, ChevronDown } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { silos, localPages } from '@/data/silos';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-card shadow-md relative z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              <span className="text-secondary">S.O.S</span> Manutenções Residenciais
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-secondary font-medium">Início</Link>
              <Link to="/sobre" className="text-foreground hover:text-secondary font-medium">Sobre</Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center text-foreground hover:text-secondary font-medium">
                  Serviços <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 bg-card shadow-lg rounded-lg py-2 min-w-[220px] border border-border">
                    {silos.map((silo) => (
                      <Link
                        key={silo.slug}
                        to={`/${silo.slug}`}
                        className="block px-4 py-2 text-foreground hover:bg-muted hover:text-secondary transition"
                      >
                        {silo.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/blog" className="text-foreground hover:text-secondary font-medium">Blog</Link>
              <Link to="/contato" className="text-foreground hover:text-secondary font-medium">Contato</Link>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-muted-foreground hover:text-secondary focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-1">
                <Link to="/" className="text-foreground hover:text-secondary py-2" onClick={() => setIsMenuOpen(false)}>Início</Link>
                <Link to="/sobre" className="text-foreground hover:text-secondary py-2" onClick={() => setIsMenuOpen(false)}>Sobre</Link>

                <div className="py-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center text-foreground hover:text-secondary font-medium w-full"
                  >
                    Serviços <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {silos.map((silo) => (
                        <Link
                          key={silo.slug}
                          to={`/${silo.slug}`}
                          className="block text-muted-foreground hover:text-secondary py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {silo.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/blog" className="text-foreground hover:text-secondary py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                <Link to="/contato" className="text-foreground hover:text-secondary py-2" onClick={() => setIsMenuOpen(false)}>Contato</Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">S.O.S Manutenções Residenciais</h3>
              <p className="mb-2 text-background/80">Marido de Aluguel BH</p>
              <p className="mb-2 text-background/80">R. Ipê Mirim, 550 - Etelvina Carneiro</p>
              <p className="text-background/80">Belo Horizonte - MG, 31746-110</p>
              <div className="mt-4 flex items-center space-x-4">
                <a href="https://www.instagram.com/sosmanutencoesresid_reserva" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-secondary transition-colors" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://youtube.com/@sosmanutencoesresidenciaisbh?si=BZQoAgAxhZQTE8Z5" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-secondary transition-colors" aria-label="YouTube">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                {silos.map((silo) => (
                  <li key={silo.slug}>
                    <Link to={`/${silo.slug}`} className="text-background/80 hover:text-secondary transition">{silo.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Áreas Atendidas</h3>
              <ul className="space-y-2">
                {localPages.map((local) => (
                  <li key={local.slug}>
                    <Link to={`/atendimento/${local.slug}`} className="text-background/80 hover:text-secondary transition">{local.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <p className="mb-2 text-background/80">Telefone: (31) 98731-6012</p>
              <p className="mb-4 text-background/80">Atendimento 24h</p>
              <a
                href="https://wa.me/5531987316012?text=Olá!%20Quero%20um%20orçamento."
                className="bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-4 text-center text-background/60">
            <p>&copy; {new Date().getFullYear()} S.O.S Manutenções Residenciais. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Layout;
