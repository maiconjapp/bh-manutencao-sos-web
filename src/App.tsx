
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import SitemapRoute from "./components/SitemapRoute";

// Silo Pages - Marido de Aluguel
import MaridoDeAluguelPilar from "./pages/silos/MaridoDeAluguelPilar";
import MaridoDeAluguelPampulha from "./pages/silos/MaridoDeAluguelPampulha";
import MaridoDeAluguelPequenosReparos from "./pages/silos/MaridoDeAluguelPequenosReparos";
import MaridoDeAluguelPrateleiras from "./pages/silos/MaridoDeAluguelPrateleiras";
import MaridoDeAluguelMoveis from "./pages/silos/MaridoDeAluguelMoveis";
import MaridoDeAluguelFechaduras from "./pages/silos/MaridoDeAluguelFechaduras";

// Silo Pages - Encanador
import EncanadorPilar from "./pages/silos/EncanadorPilar";
import EncanadorPampulha from "./pages/silos/EncanadorPampulha";
import EncanadorVazamentos from "./pages/silos/EncanadorVazamentos";
import EncanadorTorneiras from "./pages/silos/EncanadorTorneiras";
import EncanadorDescarga from "./pages/silos/EncanadorDescarga";
import EncanadorInstalacao from "./pages/silos/EncanadorInstalacao";

// Silo Pages - Eletricista
import EletricistaPilar from "./pages/silos/EletricistaPilar";
import EletricistaPampulha from "./pages/silos/EletricistaPampulha";
import EletricistaDisjuntores from "./pages/silos/EletricistaDisjuntores";
import EletricistaTomadas from "./pages/silos/EletricistaTomadas";
import EletricistaChuveiro from "./pages/silos/EletricistaChuveiro";
import EletricistaManutencao from "./pages/silos/EletricistaManutencao";

// Silo Pages - Desentupimento
import DesentupimentoPilar from "./pages/silos/DesentupimentoPilar";
import DesentupimentoPampulha from "./pages/silos/DesentupimentoPampulha";
import DesentupimentoRalo from "./pages/silos/DesentupimentoRalo";
import DesentupimentoPia from "./pages/silos/DesentupimentoPia";
import DesentupimentoVaso from "./pages/silos/DesentupimentoVaso";
import DesentupimentoTubulacao from "./pages/silos/DesentupimentoTubulacao";

// Local Pages
import PampulhaPage from "./pages/local/PampulhaPage";
import SavassiPage from "./pages/local/SavassiPage";
import BuritisPage from "./pages/local/BuritisPage";
import CasteloPage from "./pages/local/CasteloPage";
import SantaEfigeniaPage from "./pages/local/SantaEfigeniaPage";
import SionPage from "./pages/local/SionPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Hub Central */}
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/sitemap.xml" element={<SitemapRoute />} />

            {/* Silo 1 - Marido de Aluguel */}
            <Route path="/marido-de-aluguel" element={<MaridoDeAluguelPilar />} />
            <Route path="/marido-de-aluguel/pampulha" element={<MaridoDeAluguelPampulha />} />
            <Route path="/marido-de-aluguel/pequenos-reparos" element={<MaridoDeAluguelPequenosReparos />} />
            <Route path="/marido-de-aluguel/instalacao-prateleiras" element={<MaridoDeAluguelPrateleiras />} />
            <Route path="/marido-de-aluguel/montagem-moveis" element={<MaridoDeAluguelMoveis />} />
            <Route path="/marido-de-aluguel/troca-fechaduras" element={<MaridoDeAluguelFechaduras />} />

            {/* Silo 2 - Encanador */}
            <Route path="/encanador" element={<EncanadorPilar />} />
            <Route path="/encanador/pampulha" element={<EncanadorPampulha />} />
            <Route path="/encanador/conserto-vazamentos" element={<EncanadorVazamentos />} />
            <Route path="/encanador/troca-torneiras" element={<EncanadorTorneiras />} />
            <Route path="/encanador/conserto-descarga" element={<EncanadorDescarga />} />
            <Route path="/encanador/instalacao-hidraulica" element={<EncanadorInstalacao />} />

            {/* Silo 3 - Eletricista */}
            <Route path="/eletricista" element={<EletricistaPilar />} />
            <Route path="/eletricista/pampulha" element={<EletricistaPampulha />} />
            <Route path="/eletricista/troca-disjuntores" element={<EletricistaDisjuntores />} />
            <Route path="/eletricista/instalacao-tomadas" element={<EletricistaTomadas />} />
            <Route path="/eletricista/instalacao-chuveiro" element={<EletricistaChuveiro />} />
            <Route path="/eletricista/manutencao-eletrica" element={<EletricistaManutencao />} />

            {/* Silo 4 - Desentupimento */}
            <Route path="/desentupimento" element={<DesentupimentoPilar />} />
            <Route path="/desentupimento/pampulha" element={<DesentupimentoPampulha />} />
            <Route path="/desentupimento/ralo" element={<DesentupimentoRalo />} />
            <Route path="/desentupimento/pia" element={<DesentupimentoPia />} />
            <Route path="/desentupimento/vaso-sanitario" element={<DesentupimentoVaso />} />
            <Route path="/desentupimento/limpeza-tubulacao" element={<DesentupimentoTubulacao />} />

            {/* Páginas Locais */}
            <Route path="/atendimento/pampulha" element={<PampulhaPage />} />
            <Route path="/atendimento/savassi" element={<SavassiPage />} />
            <Route path="/atendimento/buritis" element={<BuritisPage />} />
            <Route path="/atendimento/castelo" element={<CasteloPage />} />
            <Route path="/atendimento/santa-efigenia" element={<SantaEfigeniaPage />} />
            <Route path="/atendimento/sion" element={<SionPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
