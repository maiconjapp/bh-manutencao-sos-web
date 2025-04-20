import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              <span className="text-secondary">S.O.S</span> Manutenções Residenciais
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-secondary font-medium">
                Início
              </Link>
              <Link to="/sobre" className="text-gray-700 hover:text-secondary font-medium">
                Sobre
              </Link>
              <Link to="/servicos" className="text-gray-700 hover:text-secondary font-medium">
                Serviços
              </Link>
              <Link to="/contato" className="text-gray-700 hover:text-secondary font-medium">
                Contato
              </Link>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="p-2 text-gray-600 hover:text-secondary focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-secondary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
                <Link 
                  to="/sobre" 
                  className="text-gray-700 hover:text-secondary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </Link>
                <Link 
                  to="/servicos" 
                  className="text-gray-700 hover:text-secondary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link 
                  to="/contato" 
                  className="text-gray-700 hover:text-secondary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">S.O.S Manutenções Residenciais</h3>
              <p className="mb-2">Marido de Aluguel BH</p>
              <p className="mb-2">R. Ipê Mirim, 550 - Etelvina Carneiro</p>
              <p>Belo Horizonte - MG, 31746-110</p>
              <div className="mt-4 flex items-center">
                <a
                  href="https://www.instagram.com/sosmanutencoesresid_reserva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                  aria-label="Siga-nos no Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Áreas Atendidas</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/bairros/pampulha" className="hover:text-secondary">Pampulha</Link>
                </li>
                <li>
                  <Link to="/bairros/ouro-preto" className="hover:text-secondary">Ouro Preto</Link>
                </li>
                <li>
                  <Link to="/bairros/castelo" className="hover:text-secondary">Castelo</Link>
                </li>
                <li>
                  <Link to="/bairros/jaragua" className="hover:text-secondary">Jaraguá</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <p className="mb-2">Telefone: (31) 98731-6012</p>
              <p className="mb-4">Atendimento 24h</p>
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
          
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} S.O.S Manutenções Residenciais. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
