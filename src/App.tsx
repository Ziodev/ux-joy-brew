import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import Index from "./pages/Index";
import Integraciones from "./pages/Integraciones";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Index />} />
            <Route path="integraciones" element={<Integraciones />} />
            <Route path="comunicacion" element={<div className="p-6">Comunicación</div>} />
            <Route path="contactos" element={<div className="p-6">Contactos</div>} />
            <Route path="campanas" element={<div className="p-6">Campañas</div>} />
            <Route path="automatizaciones" element={<div className="p-6">Automatizaciones</div>} />
            <Route path="inventario" element={<div className="p-6">Inventario</div>} />
            <Route path="clientes" element={<div className="p-6">Clientes</div>} />
            <Route path="ordenes" element={<div className="p-6">Órdenes</div>} />
            <Route path="telegram" element={<div className="p-6">Telegram</div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
