import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, 
  Package, 
  BarChart3, 
  ShoppingCart, 
  Shield, 
  Menu,
  X,
  Receipt,
  FileCheck
} from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

export function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="logo-icon">
                <Zap className="h-8 w-8 text-violet-500 relative z-10" />
              </div>
              <span className="ml-2 text-xl font-bold gradient-text">NexoVendas</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">Recursos</a>
              <a href="#fiscal" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">Área Fiscal</a>
              <a href="#benefits" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">Benefícios</a>
              <button onClick={handleRegister} className="btn-primary">Começar Agora</button>
            </div>

            {/* Theme Toggle and Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Theme Toggle */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2">Recursos</a>
              <a href="#fiscal" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2">Área Fiscal</a>
              <a href="#benefits" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2">Benefícios</a>
              <button onClick={handleRegister} className="btn-primary w-full mt-4">Começar Agora</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="logo-icon">
              <Zap className="h-16 w-16 text-violet-500 relative z-10" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            Potencialize seu
            <span className="block gradient-text mt-2">Negócio Digital</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Sistema completo para gestão de vendas, PDV intuitivo e emissão de documentos fiscais.
            A solução que evolui junto com seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handleRegister} className="btn-primary">Experimente Grátis</button>
            <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
              Agendar Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recursos <span className="gradient-text">Principais</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card">
              <ShoppingCart className="h-10 w-10 text-violet-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">PDV Intuitivo</h3>
              <p className="text-gray-600 dark:text-gray-400">Interface moderna e fácil de usar para agilizar suas vendas e atendimento ao cliente.</p>
            </div>
            <div className="feature-card">
              <Package className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Controle de Estoque</h3>
              <p className="text-gray-600 dark:text-gray-400">Gerencie seu estoque em tempo real com alertas automáticos e controle preciso.</p>
            </div>
            <div className="feature-card">
              <BarChart3 className="h-10 w-10 text-violet-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Relatórios Detalhados</h3>
              <p className="text-gray-600 dark:text-gray-400">Análises completas de vendas, produtos mais vendidos e desempenho do negócio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fiscal Section */}
      <section id="fiscal" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Área <span className="gradient-text">Fiscal</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Emissão de Documentos Fiscais</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Receipt className="h-6 w-6 text-violet-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">NFC-e (Nota Fiscal de Consumidor)</h4>
                    <p className="text-gray-600 dark:text-gray-400">Emissão rápida e simplificada para vendas ao consumidor final, ideal para varejo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FileCheck className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">NF-e (Nota Fiscal Eletrônica)</h4>
                    <p className="text-gray-600 dark:text-gray-400">Emissão completa de notas fiscais eletrônicas para operações entre empresas.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-4 text-gray-600 dark:text-gray-400">
                <p>• Conformidade com a legislação fiscal</p>
                <p>• Validação automática de dados</p>
                <p>• Gestão de certificados digitais</p>
                <p>• Arquivamento seguro de documentos</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800/30 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-6">Recursos Fiscais Inclusos</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-violet-500" />
                  <span>SPED Fiscal automático</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span>Relatórios fiscais detalhados</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-violet-500" />
                  <span>Gestão de tributos simplificada</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span>Validação de dados fiscais</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-violet-500" />
                  <span>Backup automático de documentos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher o <span className="gradient-text">NexoVendas</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Gestão Completa</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>• PDV rápido e intuitivo para agilizar o atendimento</li>
                <li>• Controle de estoque para nunca perder uma venda</li>
                <li>• Relatórios gerenciais completos</li>
                <li>• Emissão de NFC-e e NF-e integrada ao PDV</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Suporte Especializado</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>• Atendimento técnico e fiscal</li>
                <li>• Treinamento completo incluso</li>
                <li>• Atualizações constantes</li>
                <li>• Adaptável ao seu regime tributário</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Comece agora mesmo e descubra como o NexoVendas pode ajudar sua empresa a crescer com segurança fiscal.
          </p>
          <button onClick={handleRegister} className="btn-primary">Começar Gratuitamente</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="logo-icon">
              <Zap className="h-8 w-8 text-violet-500 relative z-10" />
            </div>
            <span className="ml-2 text-xl font-bold gradient-text">NexoVendas</span>
          </div>
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 NexoVendas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}