import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ClientesCartSummary from "../../components/clientes/ClientesCartSummary";
import { ClientesCartProvider } from "../../components/clientes/ClientesCartContext";

export default function ClientesLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientesCartProvider>
      <main className="text-slate-900">
        <Navbar />
        {children}
        <Footer />
        <ClientesCartSummary />
      </main>
    </ClientesCartProvider>
  );
}
