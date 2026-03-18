/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  XCircle, 
  FileText, 
  Users, 
  BarChart3, 
  Calendar, 
  ArrowRight,
  AlertCircle,
  Clock,
  ShieldCheck,
  MessageSquare,
  HelpCircle,
  Eye,
  X,
  Banknote
} from "lucide-react";

declare global {
  interface Window {
    Cal: any;
  }
}

const Section = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-6 md:py-24 ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

export default function App() {
  React.useEffect(() => {
    if (window.Cal) {
      window.Cal("init", "reuniao-diagnostico-estrategico", {origin:"https://app.cal.com"});
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-emerald-500/30 selection:text-emerald-100">
      
      {/* Top Navigation / Badge */}
      <div className="pt-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-emerald-400 text-xs font-bold tracking-widest uppercase"
        >
          Arquitetura 3C™ para Escritórios de Contabilidade
        </motion.div>
      </div>

      {/* Hero Section */}
      <Section className="text-center !pt-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-8 max-w-4xl mx-auto"
        >
          Organize os fluxos da sua <span className="text-emerald-500">contabilidade</span> em <span className="text-emerald-500">14 dias</span> <br className="hidden md:block" />
          <span className="text-white">sem aumentar equipe nem depender de planilhas.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Em uma reunião estratégica de 30 minutos, você vai descobrir como organizar os fluxos da sua contabilidade e ter controle real da operação - sem depender da memória da equipe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-24"
        >
          <button 
            data-cal-namespace="reuniao-diagnostico-estrategico"
            data-cal-link="essencia-automacoes-inteligentes-cec30d/reuniao-diagnostico-estrategico"
            data-cal-config='{"layout":"month_view"}'
            className="group px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition-all flex items-center gap-2"
          >
            Agende seu Diagnóstico Estratégico Agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* New Block: O que você recebe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="max-w-5xl mx-auto mt-32 mb-48 text-left"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center">Durante a Reunião Estratégica você recebe:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Diagnóstico dos gargalos do seu negócio",
              "Mapa de automações possíveis com IA",
              "Identificação de oportunidades ocultas",
              "Plano de implementação imediato"
            ].map((item, i) => (
              <div key={i} className="p-5 bg-slate-900/60 border border-teal-500/10 rounded-2xl flex flex-col gap-3 hover:border-teal-500/30 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-teal-500" />
                <span className="text-slate-300 text-sm font-medium leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Situations Block (Image 1 style) */}
        <div className="max-w-4xl mx-auto text-left mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center">
            Você reconhece alguma dessas situações?
          </h2>
          <div className="space-y-3">
            {[
              { text: "Contratos espalhados em planilhas, e-mails ou pastas", icon: FileText },
              { text: "Reajustes que deveriam acontecer, mas acabam sendo esquecidos", icon: AlertCircle },
              { text: "Equipe perdendo tempo procurando informações simples", icon: Clock },
              { text: "Dificuldade para saber quais clientes são realmente rentáveis", icon: BarChart3 },
              { text: "Demandas chegando por vários canais e sem organização", icon: MessageSquare },
              { text: "Falta de clareza sobre o que está sob controle e o que não está", icon: Eye }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-5 p-5 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-emerald-500/30 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <item.icon className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-slate-300 text-base leading-relaxed">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto space-y-3 mb-8"
        >
          <p className="text-xl md:text-2xl text-white font-medium">
            Se isso acontece na sua contabilidade, o problema não é sua equipe.
          </p>
          <p className="text-lg text-slate-500">
            É que não existe um sistema claro de gestão da carteira.
          </p>
        </motion.div>
      </Section>

      {/* Solution Section */}
      <Section className="!pt-8 !pb-12">
        <div className="text-center mb-16">
          <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-lg mb-3">A BOA NOTÍCIA</h2>
          <p className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Existe uma forma de estruturar isso.</p>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A <span className="text-white font-bold">Arquitetura 3C™</span> — Contratos, Clientes e Controle — organiza a gestão da carteira e cria previsibilidade na operação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Contratos",
              desc: "Organização, monitoramento e controle de prazos e reajustes",
              icon: FileText,
              color: "emerald"
            },
            {
              title: "Clientes",
              desc: "Classificação por rentabilidade, risco e impacto operacional",
              icon: Users,
              color: "blue"
            },
            {
              title: "Controle",
              desc: "Indicadores, alertas e visibilidade da operação",
              icon: BarChart3,
              color: "emerald"
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
              <div className={`w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-7 h-7 text-emerald-500`} />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Qualification Section (Image 2 style) */}
      <Section className="border-t border-slate-900 !pt-12 !pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Para quem é */}
          <div className="p-10 bg-slate-900/40 rounded-[2.5rem] border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-display font-bold mb-10 flex items-center gap-4 text-white">
              <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-teal-500" />
              </div>
              Para quem é
            </h3>
            <ul className="space-y-6">
              {[
                "Escritórios que faturam acima de 100k",
                "Mais de 60 clientes ativos",
                "Equipe com pelo menos 10 pessoas",
                "Escritórios que querem crescer com controle",
                "Sócios que querem previsibilidade da carteira"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem não é */}
          <div className="p-10 bg-slate-900/20 rounded-[2.5rem] border border-slate-800/50 opacity-60 shadow-none">
            <h3 className="text-2xl font-display font-bold mb-10 flex items-center gap-4 text-slate-500">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-slate-600" />
              </div>
              Para quem não é
            </h3>
            <ul className="space-y-6">
              {[
                "Escritórios muito pequenos",
                "Quem busca apenas um software barato",
                "Quem não está disposto a organizar processos",
                "Quem quer solução instantânea sem estrutura"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="text-center !pt-8 !pb-16">
        <button 
          data-cal-namespace="reuniao-diagnostico-estrategico"
          data-cal-link="essencia-automacoes-inteligentes-cec30d/reuniao-diagnostico-estrategico"
          data-cal-config='{"layout":"month_view"}'
          className="group px-10 py-5 bg-emerald-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:bg-emerald-500 transition-all flex items-center gap-3 mx-auto mb-6"
        >
          Agende seu Diagnóstico Agora
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
          <span className="flex items-center gap-2 text-slate-400"><Banknote className="w-5 h-5 text-emerald-500" /> Gratuito</span>
          <span className="flex items-center gap-2 text-slate-400"><Clock className="w-5 h-5 text-emerald-500" /> 30 minutos</span>
          <span className="flex items-center gap-2 text-slate-500 italic"><ShieldCheck className="w-5 h-5 text-emerald-500" /> Sem compromisso</span>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-500 text-sm border-t border-slate-900">
        <p>© {new Date().getFullYear()} Arquitetura 3C™ • Gestão Estratégica para Contabilidades</p>
      </footer>
    </div>
  );
}
