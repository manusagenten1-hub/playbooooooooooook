import { useState, useMemo, useEffect } from 'react';
import { Search, X, BookOpen, Layers, XCircle, LayoutGrid, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { sections, cards } from './data';
import { PlaybookCard } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCard, setSelectedCard] = useState<PlaybookCard | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  // Scroll lock when modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCard]);

  const filteredCards = useMemo(() => {
    return cards.filter(card => {
      const matchesSection = activeSection === 'all' || card.sectionId === activeSection;
      const matchesSearch = 
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        card.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesSection && matchesSearch;
    });
  }, [activeSection, searchQuery]);

  return (
    <div className="min-h-screen bg-[#1F1F1E] text-white font-sans selection:bg-white/20 selection:text-white flex flex-col">
      {/* Header */}
      <header className="flex h-[88px] items-center justify-between px-4 md:px-8 py-6 bg-[#0a0a0a] border-b border-white/10 sticky top-0 z-40">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors cursor-pointer text-white"
          >
            {isSidebarOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
          <BookOpen className="w-6 h-6 text-white hidden sm:block" />
          <div>
            <h1 className="text-xl font-medium tracking-tight text-white">Playbook de Vendas</h1>
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1">Agência de Marketing Digital</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-12 hidden md:block">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Pesquisar no playbook..."
              className="w-full bg-[#1F1F1E] border border-white/10 rounded-lg px-10 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute left-3 opacity-40 text-white pointer-events-none">
              <Search className="h-4 w-4" />
            </span>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-3 flex items-center text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                <XCircle className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Layout Area */}
      <div className="flex flex-1 relative max-w-[1440px] mx-auto w-full">
        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Dynamic Filters Sidebar */}
        <aside className={`
          fixed md:sticky top-0 md:top-[88px] left-0 z-50 md:z-30 
          h-[100dvh] md:h-[calc(100vh-88px)] w-64 flex flex-col shrink-0 
          bg-[#0a0a0a] border-r border-white/10 
          transition-transform duration-300 ease-in-out md:transition-none
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:hidden'}
        `}>
          <div className="flex-1 p-6 overflow-y-auto scrollbar-hide flex flex-col justify-between">
            <div>
              {/* Mobile Search - Visible only on small screens */}
              <div className="relative flex items-center md:hidden mb-6">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="w-full bg-[#1F1F1E] border border-white/10 rounded-lg px-10 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="absolute left-3 opacity-40 text-white pointer-events-none">
                  <Search className="h-4 w-4" />
                </span>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-3 flex items-center text-white/40 hover:text-white transition-colors cursor-pointer"
                  >
                    <XCircle className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div>
                <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Filtros Dinâmicos
                </h3>
                <div className="flex flex-wrap gap-2">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        if (window.innerWidth < 768) setIsSidebarOpen(false);
                      }}
                      className={`px-3 py-1.5 rounded text-[10px] border transition-all cursor-pointer uppercase tracking-widest ${
                        activeSection === section.id
                          ? 'bg-white/10 border-white/20 text-white'
                          : 'bg-white/5 border-white/5 text-white/60 hover:text-white opacity-60 hover:opacity-100'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Playbook PDF Button */}
            <div className="mt-8 pt-6 border-t border-white/10 shrink-0">
              <a
                href="https://docs.google.com/document/d/1U_91FDVtoOgVZmgrf2Bm5yLQzZWD1gsnbIg0bdPbZro/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white text-[#1F1F1E] py-3 rounded-lg font-bold uppercase tracking-widest text-[10px] hover:opacity-90 transition-opacity cursor-pointer border border-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                <BookOpen className="w-4 h-4" />
                Playbook PDF
              </a>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main id="main-content" className="flex-1 p-4 md:p-8 min-w-0">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-6 h-6 text-white/40" />
              <h2 className="text-2xl font-light text-white">
                {searchQuery ? 'Resultados da Pesquisa' : 'Tópicos do Playbook'} 
              </h2>
            </div>
            <span className="text-xs text-white/40 uppercase tracking-widest bg-white/5 px-3 py-1 rounded border border-white/10">
              Mostrando {filteredCards.length} itens
            </span>
          </div>

          {filteredCards.length === 0 ? (
            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-lg text-center opacity-70">
              <Search className="w-8 h-8 text-white/40 mx-auto mb-4" />
              <h4 className="font-medium text-white mb-1">Nenhum resultado encontrado</h4>
              <p className="text-sm text-white/60">Tente ajustar seus filtros.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredCards.map(card => (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedCard(card)}
                    className="p-5 bg-[#0a0a0a] border border-white/10 rounded-lg hover:border-white/30 transition-all cursor-pointer shadow-xl flex flex-col h-full group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-white line-clamp-2 pr-2">{card.title}</h4>
                      <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest shrink-0 border border-white/20 bg-white/10 px-2 py-0.5 rounded">Tópico</span>
                    </div>
                    <p className="text-sm text-white/80 flex-grow mb-4 line-clamp-3 leading-relaxed">
                      {card.preview}
                    </p>
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors pt-3 border-t border-white/20">
                      <span>Ver Detalhes</span>
                      <BookOpen className="w-3 h-3" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </main>
      </div>

      {/* Modal Overlay matching the Detailed Info Card */}
      <AnimatePresence>
        {selectedCard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setSelectedCard(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-[#1F1F1E] border border-white/10 text-white p-6 md:p-8 rounded-2xl flex flex-col shadow-2xl w-full max-w-4xl max-h-full pointer-events-auto"
              >
                <div className="flex justify-between items-start mb-6 shrink-0">
                  <div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">Visualização Detalhada</span>
                    <h3 className="text-2xl md:text-3xl font-serif font-semibold leading-tight pr-4 text-white">
                      {selectedCard.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="p-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors shrink-0 cursor-pointer"
                  >
                    <X className="w-5 h-5 text-white/60" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pr-2">
                  <section className="p-5 md:p-6 bg-white/5 rounded-lg border border-white/5">
                    <h5 className="text-[11px] font-bold uppercase tracking-widest text-white/80 mb-4">Conteúdo do Tópico</h5>
                    <div className="markdown-body text-white font-sans text-base leading-relaxed">
                      <Markdown remarkPlugins={[remarkGfm]}>{selectedCard.content}</Markdown>
                    </div>
                  </section>
                </div>

                <button 
                  onClick={() => setSelectedCard(null)}
                  className="mt-6 w-full bg-white text-[#1F1F1E] py-4 rounded-xl font-bold tracking-wide hover:opacity-90 transition-opacity cursor-pointer uppercase text-sm shrink-0"
                >
                  Fechar Informação
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
