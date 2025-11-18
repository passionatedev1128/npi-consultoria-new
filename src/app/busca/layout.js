import { Header } from "../components/ui/header";
import { Footer } from "../components/ui/footer";

// FIXED: Add metadata with canonical tag for search pages
// NOTE: Canonical URL is set dynamically in middleware based on query parameters
// This static metadata is a fallback for initial page load
export const metadata = {
  title: "Buscar Imóveis - NPi Consultoria",
  description: "Busque imóveis de alto padrão em São Paulo, Guarujá e região. Apartamentos e casas de luxo para venda e locação.",
  keywords: "buscar imóveis, imóveis alto padrão, apartamentos de luxo, casas de luxo, imóveis São Paulo",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Buscar Imóveis - NPi Consultoria",
    description: "Busque imóveis de alto padrão em São Paulo e região.",
    url: "https://www.npiconsultoria.com.br/busca",
    type: "website",
  },
};

export default function Layout({ children }) {
  return (
    <div className="h-screen overflow-hidden">
      <Header effect={false} />
      {children}
    </div>
  );
}