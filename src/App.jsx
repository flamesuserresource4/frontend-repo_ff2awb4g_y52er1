import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Brain, Clock, Settings, FileText, Shield, Map, Check, AlertCircle, XCircle, CheckCircle2 } from 'lucide-react'
import WaitlistModal from './components/WaitlistModal'

function SectionContainer({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative w-full ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 2xl:px-20">
        {children}
      </div>
    </section>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans scroll-smooth">
      {/* CSS Variables for palette */}
      <style>{`
        :root{
          --background: 0 0% 4%;
          --foreground: 0 0% 100%;
          --primary: 210 100% 56%;
          --primary-glow: 210 100% 70%;
          --secondary: 210 45% 20%;
          --muted: 0 0% 15%;
          --muted-foreground: 0 0% 50%;
          --border: 210 100% 56%;
          --input: 0 0% 15%;
        }
        .text-gradient{background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-glow))); -webkit-background-clip: text; background-clip:text; color: transparent}
        .tech-lines{background-image: linear-gradient(to bottom, hsla(var(--primary),0.15) 1px, transparent 1px); background-size: 100% 40px; opacity:.3}
        .tech-grid{background-image: linear-gradient(hsla(var(--primary),0.1) 1px, transparent 1px), linear-gradient(90deg, hsla(var(--primary),0.1) 1px, transparent 1px); background-size:50px 50px; opacity:.2}
        .shadow-glow{box-shadow: 0 0 40px hsl(210 100% 56% / 0.4)}
        .shadow-card{box-shadow: 0 8px 32px hsl(210 100% 56% / 0.2)}
        .shadow-button{box-shadow: 0 8px 24px hsl(210 100% 56% / 0.3)}
        .btn-primary{background-color: hsl(var(--primary)); color:white; padding:.875rem 1.25rem; border-radius:.75rem; font-weight:600; transition: all .3s cubic-bezier(0.4,0,0.2,1)}
        .btn-primary:hover{filter: drop-shadow(0 0 24px hsl(210 100% 56% / .6))}
        .btn-outline{border:1px solid hsl(var(--border)); color:hsl(var(--primary)); padding:.875rem 1.25rem; border-radius:.75rem; font-weight:600; background:transparent; transition: all .3s cubic-bezier(0.4,0,0.2,1)}
        .btn-outline:hover{background-color: hsla(var(--primary),0.08)}
        .card{background-color: hsl(0 0% 8%); border:1px solid hsla(var(--primary),0.2); border-radius:.75rem}
        .bg-input{background-color: hsl(var(--input))}
        .text-muted-foreground{color: hsl(var(--muted-foreground))}
      `}</style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-[#0A0A0A] pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 2xl:px-20 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-black/40 border border-white/10 rounded-full px-3 py-1 backdrop-blur">
              <Check className="w-4 h-4 text-[hsl(210,100%,56%)]" /> Programa guiado por médica. Exclusivo para médicos.
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Reprogramed</span>
              <span className="block text-gradient">O único programa de IA prática para médicos</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Lançamento em Janeiro de 2026. Aprenda a usar inteligência artificial de forma simples, aplicável e ética — sem precisar ser um programador. Vagas limitadas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="btn-primary shadow-button" onClick={() => setOpen(true)}>Entrar na Lista VIP</button>
              <a href="#solution" className="btn-outline">Como funciona?</a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">"Inscreva-se agora e garanta desconto exclusivo no lançamento."</p>
          </div>
        </div>
      </section>

      {/* 2. Pain Identification Section */}
      <SectionContainer id="dor" className="py-20 bg-[hsl(0,0%,8%)]">
        <div className="grid gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Você já percebeu que o mundo da medicina está mudando rápido demais — e ninguém parou pra te explicar o que fazer com isso?</h2>
          <p className="text-muted-foreground">De repente, todos falam sobre inteligência artificial, automação, ChatGPT, prontuário inteligente... Mas, no meio de tanta novidade, surge uma sensação comum entre os médicos: "por onde eu começo?"</p>
          <p className="text-muted-foreground">Talvez você já tenha sentido isso — a pressão para acompanhar as mudanças, sem tempo, sem suporte e com medo de errar. Enquanto o discurso sobre tecnologia avança, o dia a dia continua o mesmo: consultas, laudos, plantões, gestão, burocracia… e uma avalanche de informação impossível de acompanhar sozinho.</p>
          <div className="p-6 card">
            <p className="font-semibold">Você não está atrasado.</p>
            <p className="text-muted-foreground">Você só não teve quem te mostrasse como começar, de forma segura, prática e sem precisar virar 'especialista em tecnologia'.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold mb-4">Você vai se reconhecer se:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[hsl(210,100%,56%)]"/> já ouviu falar de IA, mas nunca entendeu como ela realmente se aplica à medicina;</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[hsl(210,100%,56%)]"/> sente que a tecnologia pode ajudar, mas tem medo de perder o controle ou a essência humana do cuidado;</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[hsl(210,100%,56%)]"/> tenta acompanhar o que está surgindo, mas não sabe o que é relevante e o que é só moda;</li>
              <li className="flex items-start gap-2"><Check className="w-5 h-5 text-[hsl(210,100%,56%)]"/> tem curiosidade, mas falta tempo e um passo a passo confiável pra começar.</li>
            </ul>
          </div>
          <p className="text-muted-foreground">É exatamente por isso que eu criei o Reprogramed — um programa feito para médicos que querem começar do zero, com clareza, segurança e propósito.</p>
        </div>
      </SectionContainer>

      {/* 3. Problem Section */}
      <SectionContainer id="problem" className="py-20 relative">
        <div className="absolute inset-0 tech-lines" />
        <div className="relative grid gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Por Que Médicos Excepcionais Ainda Não Dominam IA?</h2>
          <p className="text-muted-foreground">Não é falta de interesse. Não é resistência à tecnologia. É falta de tempo para errar.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {["Você não pode testar 50 ferramentas.", "Não pode arriscar sigilo de pacientes.", "Não pode perder 3 meses aprendendo o que não funciona."].map((t,i)=> (
              <div key={i} className="card p-5 flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-[hsl(210,100%,56%)]" />
                <p>{t}</p>
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-semibold">E os cursos genéricos de IA não resolvem:</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Ensinam ChatGPT básico que você já conhece","Ignoram ética médica e conformidade","Não entendem sua rotina e dores reais","Vendem ferramentas, não ensinam estratégia"].map((t,i)=> (
              <div key={i} className="card p-5 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-500" />
                <p>{t}</p>
              </div>
            ))}
          </div>
          <div className="card p-6 border-2 border-[hsl(210,100%,56%)]">
            <h3 className="text-xl font-semibold mb-3">Você precisa de:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2 items-center"><Check className="w-5 h-5 text-[hsl(210,100%,56%)]"/> Mentalidade estratégica, não catálogo de ferramentas</li>
              <li className="flex gap-2 items-center"><Check className="w-5 h-5 text-[hsl(210,100%,56%)]"/> Soluções práticas para o seu dia a dia de verdade</li>
              <li className="flex gap-2 items-center"><Check className="w-5 h-5 text-[hsl(210,100%,56%)]"/> Ética e segurança em cada decisão</li>
              <li className="flex gap-2 items-center"><Check className="w-5 h-5 text-[hsl(210,100%,56%)]"/> Um método validado por quem entende medicina</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* 4. Solution Section */}
      <SectionContainer id="solution" className="py-20">
        <div className="grid gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">A inteligência artificial não é o futuro da medicina. Ela já é o presente — e o Reprogramed é o seu primeiro passo para fazer parte dele.</h2>
          <p className="text-muted-foreground">O Reprogramed é um programa criado para médicos que querem aprender a usar inteligência artificial do zero, de forma prática, ética e segura. Sem tecnicês, sem necessidade de saber programar, e sem promessas impossíveis.</p>
          <p className="text-muted-foreground">Você vai aprender o essencial para pensar estrategicamente com IA — aplicando na sua rotina de trabalho real: na consulta, na gestão da clínica, na comunicação com pacientes e até na tomada de decisão.</p>
          <div className="p-6 card">
            <p className="text-muted-foreground">Mais do que um curso, o Reprogramed é uma mudança de mentalidade: um passo a passo para transformar medo em clareza, e confusão em autonomia.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-3">Criado por quem entende os dois mundos: medicina e tecnologia.</h3>
            <p className="text-muted-foreground">Sou médica formada pela UFBA, mestre em Saúde Digital pela UERJ, empreendedora serial e Head de IA. Depois de 15 anos entre a prática médica, a educação e o desenvolvimento de soluções digitais, percebi uma verdade simples:</p>
            <p className="text-muted-foreground mt-2"><span className="font-semibold">médicos não precisam ser experts em tecnologia</span> — precisam de alguém que traduza isso com clareza, propósito e método.</p>
            <p className="text-muted-foreground mt-2">O Reprogramed nasceu para isso.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-3">Depois do Reprogramed, você vai:</h3>
            <ul className="space-y-2">
              {[
                'Entender o que é (e o que não é) inteligência artificial na prática médica;',
                'Aprender a usar ferramentas que economizam horas no seu dia;',
                'Tomar decisões informadas sobre quais tecnologias adotar (ou não);',
                'Pensar estrategicamente sobre o futuro da sua carreira;',
                'Aplicar IA com ética, segurança e responsabilidade.'
              ].map((t,i)=> (
                <li key={i} className="flex gap-2 items-start"><Check className="w-5 h-5 text-[hsl(210,100%,56%)]"/> <span>{t}</span></li>
              ))}
            </ul>
            <p className="mt-4">Você não precisa ser um gênio da tecnologia. Você só precisa de clareza, método e um guia confiável.</p>
            <div className="mt-5"><button className="btn-primary" onClick={()=>setOpen(true)}>Quero Transformar Minha Prática Médica</button></div>
          </div>
        </div>
      </SectionContainer>

      {/* 5. What You Learn Section */}
      <SectionContainer id="learn" className="py-20 bg-[hsl(0,0%,8%)]">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">O que você vai aprender no Reprogramed vai muito além de apertar botões. Você vai aprender a pensar diferente.</h2>
        <p className="text-muted-foreground mt-4 max-w-3xl">Cada módulo do Reprogramed foi desenhado para transformar a forma como você entende e usa a inteligência artificial — do básico ao aplicado — sem precisar saber nada de tecnologia.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            {icon: Brain, title: 'Fundamentos da IA para médicos', body: 'Entenda o que é (e o que não é) inteligência artificial... Resultado: você ganha segurança para conversar sobre IA com clareza — e deixar de lado o medo do desconhecido.'},
            {icon: Clock, title: 'Como a IA pode trabalhar a seu favor', body: 'Aprenda a usar ferramentas e fluxos práticos... Resultado: mais tempo para o que importa — pacientes, gestão e qualidade de vida.'},
            {icon: Settings, title: 'Reprogramando sua forma de pensar tecnologia', body: 'Desenvolva o raciocínio estratégico por trás da IA... Resultado: você deixa de ser espectador e passa a ser protagonista.'},
            {icon: FileText, title: 'Aplicações práticas na rotina médica', body: 'Veja exemplos reais de como IA pode apoiar consultas... Resultado: você entende onde aplicar — e onde não aplicar.'},
            {icon: Shield, title: 'IA com ética, segurança e responsabilidade', body: 'Aprenda os princípios de uso responsável... Resultado: confiança para adotar IA de forma segura.'},
            {icon: Map, title: 'O passo seguinte: criando sua jornada com IA', body: 'Monte um plano pessoal de adoção... Resultado: você sai com um mapa claro.'}
          ].map((m, i) => (
            <div key={i} className="card p-6 hover:shadow-[0_0_40px_hsl(210_100%_56%_/_0.2)] transition">
              <m.icon className="w-6 h-6 text-[hsl(210,100%,56%)]" />
              <h3 className="mt-3 font-semibold text-xl">{m.title}</h3>
              <p className="text-muted-foreground mt-2">{m.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8"><button className="btn-primary" onClick={()=>setOpen(true)}>Quero Aprender Tudo Isso</button></div>
      </SectionContainer>

      {/* 6. Who Teaches Section */}
      <SectionContainer id="who" className="py-20">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Quem vai te guiar nessa jornada</h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-muted-foreground">Sou médica formada pela UFBA e mestre em Saúde Digital pela UERJ. Nos últimos anos, atuei como Head de IA, empreendedora e educadora digital — unindo o raciocínio clínico com a linguagem da tecnologia.</p>
            <p className="text-muted-foreground">Criei o Reprogramed porque vi de perto o quanto a inteligência artificial pode libertar médicos da sobrecarga e devolver o que há de mais humano na medicina: o tempo, a atenção e o propósito.</p>
            <p className="text-muted-foreground">Hoje, minha missão é ensinar médicos — mesmo os que nunca usaram IA — a dominarem essa nova ferramenta com segurança, ética e confiança.</p>
            <blockquote className="border-l-4 border-[hsl(210,100%,56%)] pl-4 italic text-muted-foreground">"Eu falo as duas línguas: a da saúde e a da tecnologia. E estou aqui pra traduzir esse novo mundo pra você, passo a passo."</blockquote>
            <div className="flex gap-3">
              <button className="btn-primary" onClick={()=>setOpen(true)}>Quero Aprender com a Dra. Maria Fernanda</button>
              <a className="btn-outline" href="#history">Conheça Minha História Completa</a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[hsl(0,0%,8%)] aspect-[4/3]"></div>
        </div>
      </SectionContainer>

      {/* 7. Investment (Waitlist) Section */}
      <SectionContainer id="investment" className="py-20 relative">
        <div className="absolute inset-0 tech-grid" />
        <div className="relative grid gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Lançamento em Janeiro de 2026</h2>
          <p className="text-muted-foreground max-w-3xl">Seja um dos primeiros a garantir sua vaga no programa que vai transformar a forma como você pratica medicina com inteligência artificial.</p>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 card p-6 border-2 border-[hsl(210,100%,56%)]">
              <div className="inline-flex text-xs bg-black/40 border border-white/10 rounded-full px-3 py-1">Lista VIP - Pré-Lançamento</div>
              <h3 className="text-2xl font-semibold mt-4">Garanta seu desconto exclusivo</h3>
              <p className="text-muted-foreground">Quem entra na lista VIP agora terá acesso prioritário e desconto especial no lançamento</p>
              <h4 className="mt-4 font-semibold">Benefícios da Lista VIP:</h4>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                {[
                  'Acesso prioritário ao programa em janeiro de 2026',
                  'Desconto exclusivo no valor do curso',
                  'Conteúdo bônus especial para membros VIP',
                  'Atualizações em primeira mão sobre o lançamento',
                  'Possibilidade de entrar em grupo exclusivo',
                  'Todos os prompts e frameworks prontos inclusos'
                ].map((t,i)=> (
                  <li key={i} className="flex gap-2 items-start"><Check className="w-5 h-5 text-[hsl(210,100%,56%)]"/> {t}</li>
                ))}
              </ul>
              <div className="mt-6"><button className="btn-primary w-full sm:w-auto" onClick={()=>setOpen(true)}>Entrar na Lista VIP Agora</button></div>
              <p className="text-xs text-muted-foreground mt-2">Seja um dos primeiros a dominar IA na medicina.</p>
              <div className="mt-4 flex items-center gap-2"><Shield className="w-5 h-5 text-[hsl(210,100%,56%)]"/> <span className="text-sm">Garantia Incondicional. Você terá total transparência sobre o programa antes de qualquer decisão de compra. Zero risco.</span></div>
            </div>
            <div className="card p-6 bg-[hsl(0,0%,12%)]">
              <p className="text-muted-foreground">Vagas limitadas. Este programa foi desenhado especialmente para médicos que querem adotar IA de forma prática e ética. Ao entrar na lista VIP, você garante prioridade no acesso e benefícios exclusivos que não estarão disponíveis após o lançamento.</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA Section + Inspirational Footer + Footer (compact for MVP) */}
      <SectionContainer id="final" className="py-20">
        <div className="card p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Pronto para dar o primeiro passo?</h2>
          <p className="text-muted-foreground mt-2">Entre para a Lista VIP e comece sua jornada com IA de forma prática, ética e segura.</p>
          <div className="mt-6"><button className="btn-primary" onClick={()=>setOpen(true)}>Quero Entrar na Lista VIP</button></div>
        </div>
        <div className="mt-10 text-center text-muted-foreground">
          <p>"Reprogramed" — criado para médicos que buscam clareza, autonomia e propósito.</p>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>© 2025 Reprogramed. Todos os direitos reservados. Política de Privacidade • Termos de Uso</p>
        </div>
      </SectionContainer>

      <WaitlistModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
