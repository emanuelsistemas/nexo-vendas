import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

export function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de login
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="logo-icon">
              <Zap className="h-12 w-12 text-violet-500 relative z-10" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Bem-vindo de volta</h2>
          <p className="text-gray-600 dark:text-gray-400">Acesse sua conta do NexoVendas</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-900 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-900 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Ainda não tem uma conta?{' '}
            <Link to="/register" className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300">
              Criar conta
            </Link>
          </p>
        </div>

        <Link
          to="/"
          className="mt-8 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}