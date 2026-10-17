import { createFileRoute, Link } from '@tanstack/react-router';
import { useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Clock3, CreditCard, Heart, Leaf, MessageCircle, Minus, Plus, Refrigerator, Smile, Snowflake, Sparkles, Utensils, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { flavorsFor, money, unitPrice, whatsapp, type LineId } from '@/lib/menu';
import caseirinha from '@/assets/caseirinha.png.asset.json';
import comfort from '@/assets/comfort.png.asset.json';
import turbinada from '@/assets/turbinada.png.asset.json';
import bowl from '@/assets/brand-bowl.png.asset.json';
import carne from '@/assets/carne-panela.jpg.asset.json';
import macarrao from '@/assets/macarrao.jpg.asset.json';
import panquecaFrango from '@/assets/panqueca-frango.jpg.asset.json';
import panquecaB from '@/assets/panqueca-bolonhesa.jpg.asset.json';
import estrogonofe from '@/assets/estrogonofe.jpg.asset.json';
import escondidinhoF from '@/assets/escondidinho-frango.jpg.asset.json';
import escondidinhoC from '@/assets/escondidinho-carne.jpg.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'VittaLivs | Marmitinhas, sabor e equilíbrio' },
    { name: 'description', content: 'Conheça as linhas Caseirinha, Comfort Food e Turbinada da VittaLivs. Marmitas congeladas, feitas com carinho para sua rotina em Vila Velha.' },
    { property: 'og:title', content: 'VittaLivs | Saúde que cabe na sua rotina' },
    { property: 'og:description', content: 'Oito sabores, três linhas e muito carinho. Escolha suas marmitinhas e fale com a gente pelo WhatsApp.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Home,
});
const lines: { id: LineId; name: string; image: string; volume: string; subtitle: string; title: string; description: string }[] = [
  { id: 'caseirinha', name: 'Caseirinha', image: caseirinha.url, volume: '350 mL', subtitle: 'O básico bem feito :)', title: 'O clássico nunca sai de moda.', description: 'Sabe aquela comida que você bate o olho e já sabe que vai amar? É essa! Sabores conhecidos, combinações certeiras e aquele tempero que faz qualquer refeição ficar melhor.' },
  { id: 'comfort', name: 'Comfort Food', image: comfort.url, volume: '350 mL', subtitle: 'Conforto + sabor :)', title: 'Tem sabor que melhora o dia.', description: 'Tem dias que tudo o que a gente precisa é de uma comida que dá um abraço na alma. Receitas saborosas, aconchegantes e cheias de memória afetiva. É abrir, aquecer e sentir: “hmmm, era isso que eu queria”.' },
  { id: 'turbinada', name: 'Turbinada', image: turbinada.url, volume: '500 mL', subtitle: 'Quando a fome pede mais :)', title: 'Mesmo sabor. Mais comida!', description: 'Porque às vezes uma marmita só não dá conta! Todos os oito sabores do cardápio na versão maior e mais generosa, para quem precisa de uma refeição reforçada. Mais comida e aquele capricho de sempre.' },
];
const photos: Record<string, string> = { 'carne-panela': carne.url, macarrao: macarrao.url, 'panqueca-frango': panquecaFrango.url, 'panqueca-bolonhesa': panquecaB.url, estrogonofe: estrogonofe.url, 'escondidinho-frango': escondidinhoF.url, 'escondidinho-carne': escondidinhoC.url };
function Happy({ className = '' }: { className?: string }) { return <Smile strokeWidth={1.4} className={className} aria-label="Carinha feliz" />; }
function Home() {
  const [active, setActive] = useState<LineId | null>(null);
  const [quantity, setQuantity] = useState(1);
  const catalog = useRef<HTMLDivElement>(null);
  const line = lines.find(l => l.id === active);
  function openLine(id: LineId) { setActive(id); requestAnimationFrame(() => catalog.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' })); }
  return <div className="site-home">
    <div className="delivery-strip"><span><Leaf size={14} /> Comida de verdade. Rotina mais leve.</span><span>Frete grátis em Vila Velha acima de 5 marmitas <span className="ml-1">:)</span></span></div>
    <header className="brand-header page-width">
      <div className="header-side"><span className="little-label">FEITO COM CARINHO</span><span>Marmitinhas congeladas</span></div>
      <Link to="/" className="brand-lockup" aria-label="VittaLivs início"><span className="font-logo">VittaLivs</span><span className="font-slogan">saúde que cabe na sua rotina</span></Link>
      <Button asChild variant="outline" className="contact-top"><a href={whatsapp('Olá, VittaLivs! Quero saber mais sobre as marmitinhas.')} target="_blank" rel="noreferrer"><MessageCircle /> Vamos conversar <ArrowUpRight /></a></Button>
    </header>
    <nav className="main-nav" aria-label="Navegação principal"><a href="#linhas">Nossas marmitinhas</a><Link to="/informacoes-nutricionais">Informações nutricionais</Link><a href="#cuidados">Cuidados com sua marmita</a><a href="#sobre">Quem somos</a></nav>
    <main>
      <section id="linhas" className="page-width line-section">
        <div className="welcome"><span className="little-label">BEM-VINDO, VITTALOVER</span><Happy className="size-6 text-primary" /></div>
        <div className="section-heading"><h1>Qual é a sua fome de hoje?</h1><p>Três linhas. Oito sabores. Um montão de carinho.</p></div>
        <div className="line-grid">{lines.map(l => <Button key={l.id} variant="ghost" className={`line-tile theme-${l.id} ${active === l.id ? 'selected' : ''}`} onClick={() => openLine(l.id)} aria-label={`Conhecer linha ${l.name}`} aria-expanded={active === l.id}>
          <div className="line-art"><img src={l.image} alt={`Linha ${l.name}`} /><span className="volume-tag">{l.volume}</span><Happy className="tile-smile" /></div>
          <div className="tile-bottom"><div><span className="tile-caption">{l.subtitle}</span><span className="tile-link">Conheça os sabores</span></div><span className="arrow-circle"><ArrowUpRight size={23} /></span></div>
        </Button>)}</div>
        <div className="under-lines"><span><Snowflake size={15} /> Congeladinhas, prontas para a sua rotina.</span><span>Seu próximo almoço feliz começa aqui <ArrowDown size={16} /></span></div>
      </section>
      <div ref={catalog} className="catalog-anchor">{line && <section className={`catalog-section theme-${line.id}`} aria-label={`Cardápio ${line.name}`}>
        <div className="page-width">
          <div className="catalog-heading"><div><span className="little-label">LINHA {line.name.toUpperCase()} · {line.volume}</span><h2>{line.title}</h2><p>{line.description}</p></div><Happy className="catalog-smile" /></div>
          <div className="catalog-toolbar"><div className="tier-prices">{[1,3,5].map(q => <span key={q}><strong>{q === 1 ? '1 unidade' : `${q}+ unidades`}</strong>{money(unitPrice(line.id,q))} cada</span>)}</div><label className="quantity-label">Quantidade por sabor<div className="stepper"><Button size="icon" variant="ghost" aria-label="Diminuir quantidade" disabled={quantity <= 1} onClick={() => setQuantity(q => Math.max(1,q-1))}><Minus /></Button><output>{quantity}</output><Button size="icon" variant="ghost" aria-label="Aumentar quantidade" onClick={() => setQuantity(q => q+1)}><Plus /></Button></div></label></div>
          <div className="product-grid">{flavorsFor(line.id).map(f => <article key={f.id} className="product-card">
            {photos[f.id] ? <img className="product-photo" src={photos[f.id]} alt={f.name} loading="lazy" /> : <div className="product-photo missing-photo"><Utensils size={42} /><span>Frango com quiabo</span></div>}
            <div className="product-info"><span className="little-label">{line.volume} · CONGELADA</span><h3>{f.name}</h3><div className="product-price"><strong>{money(unitPrice(line.id,quantity))}</strong><span>/ unidade</span></div><Button asChild className="order-button"><a href={whatsapp(`Olá, VittaLivs! Quero pedir ${quantity} unidade(s) de ${f.name}, linha ${line.name} (${line.volume}). Valor por unidade: ${money(unitPrice(line.id,quantity))}. Total: ${money(unitPrice(line.id,quantity)*quantity)}. Podemos confirmar entrega e disponibilidade?`)} target="_blank" rel="noreferrer">Pedir pelo WhatsApp <ArrowUpRight /></a></Button></div>
          </article>)}</div><p className="catalog-note">Combine seus favoritos e fale com a gente para montar seu pedido :) · Entrega e disponibilidade confirmadas pelo WhatsApp.</p>
        </div>
      </section>}</div>
      <section className="nutrition-band"><div className="page-width nutrition-inner"><div className="nutrition-icon"><Utensils strokeWidth={1.3} /><Happy className="size-7" /></div><div><span className="little-label">SABOR COM EQUILÍBRIO</span><h2>O que tem na sua marmitinha?</h2><p>Confira as informações nutricionais e conheça cada sabor de pertinho.</p></div><Button asChild className="nutrition-button"><Link to="/informacoes-nutricionais">Ver informações nutricionais <ArrowRight /></Link></Button></div></section>
      <section id="cuidados" className="page-width care-section"><div className="section-heading"><span className="little-label text-primary">UM POUQUINHO DE CUIDADO, MUITO SABOR</span><h2>Do congelador ao seu almoço feliz :)</h2><p>Para preservar o sabor, a textura e a qualidade dos alimentos.</p></div><div className="care-grid">{[
        { icon: Snowflake, title: 'Mantenha congelada', text: 'Guarde suas marmitinhas no congelador até o momento de preparar para o consumo.' },
        { icon: Refrigerator, title: 'Planeje seu próximo almoço', text: 'Para um melhor resultado, retire do congelador na noite anterior e deixe na geladeira até a hora de esquentar.' },
        { icon: Utensils, title: 'Descongele antes de aquecer', text: 'Evite levar diretamente do congelador ao micro-ondas. Isso libera excesso de água e pode alterar a textura e o sabor.' },
        { icon: Heart, title: 'Aqueceu? Bom apetite!', text: 'Após aquecida, consuma imediatamente. Não recomendamos recongelar a marmita depois de descongelada.' },
      ].map((c,i) => <div key={c.title} className="care-item"><div className="care-top"><c.icon strokeWidth={1.5} /><span>0{i+1}</span></div><h3>{c.title}</h3><p>{c.text}</p></div>)}</div></section>
      <section className="benefits-band"><div className="page-width"><div className="benefit-title"><h2>Mais vida.<br />Menos louça.</h2><Happy className="benefit-smile" /></div><div className="benefit-grid">{[{ icon: Clock3, text: 'Tempo para você' },{ icon: Sparkles, text: 'Cozinha limpinha' },{ icon: Check, text: 'Praticidade de verdade' },{ icon: Utensils, text: 'Sabor em cada garfada' },{ icon: Leaf, text: 'Equilíbrio na rotina' },{ icon: Wallet, text: 'E ainda economiza!' }].map(b => <div key={b.text}><b.icon strokeWidth={1.5} /><span>{b.text}</span></div>)}</div><div className="behind-meals"><span className="little-label">TEM MUITO CARINHO AQUI DENTRO</span><p>Por trás de cada marmitinha, tem estudo, testes e dedicação. A gente desenvolve combinações, prepara tabelas nutricionais e testa sabores e temperos — tudo para colocar na sua mesa uma refeição que faz bem e dá vontade de repetir.</p></div></div></section>
      <section id="sobre" className="page-width about-section"><div className="about-art"><img src={bowl.url} alt="Ilustração VittaLivs de uma tigela com legumes nas cores da marca" loading="lazy" /><span className="font-logo">VittaLivs</span></div><div className="about-copy"><span className="little-label text-primary">DE MÃE E FILHA, PARA A SUA ROTINA</span><h2>Prazer, somos<br />Kamila e Lívia <span className="text-primary">:)</span></h2><p>A VittaLivs nasceu de uma pergunta bem simples: como cuidar da alimentação quando o dia parece ter menos horas do que a gente precisa?</p><p>Vimos essa dificuldade na rotina de pessoas próximas e resolvemos juntar o que temos de melhor: a experiência e o carinho da <strong>Kamila na cozinha</strong> com os conhecimentos da <strong>Lívia, que está no último período de Nutrição</strong>, quase se formando.</p><p>Somos mãe e filha, unidas pelo desejo de levar saúde e equilíbrio em forma de marmita. Comida gostosa, feita com intenção, para a vida real. Da nossa cozinha para os seus dias mais corridos.</p><span className="about-signoff font-logo">Com carinho, VittaLivs.</span></div></section>
    </main>
    <footer className="site-footer"><div className="page-width"><div className="footer-main"><div><Link to="/" className="footer-logo font-logo">VittaLivs</Link><p className="font-slogan">saúde que cabe na sua rotina</p><Happy className="mt-5 size-10" /></div><div className="payments"><span className="little-label">DO SEU JEITINHO, ATÉ NA HORA DE PAGAR</span><h3>Formas de pagamento</h3><div className="payment-list"><span><CreditCard size={17} /> Crédito e débito</span><span><Wallet size={17} /> Dinheiro</span><span>Pix</span><span>Alelo alimentação</span><span>Alelo refeição</span></div></div><div className="footer-contact"><span className="little-label">FICOU COM ALGUMA DÚVIDA?</span><h3>Chama a gente :)</h3><a href={whatsapp('Olá, VittaLivs! Tenho uma dúvida.')} target="_blank" rel="noreferrer"><MessageCircle size={19} /> (27) 98835-5188 <ArrowUpRight size={18} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} VittaLivs · Feito com carinho.</span><span>Frete grátis em Vila Velha em pedidos com 6 ou mais marmitas.</span></div></div></footer>
  </div>;
}
