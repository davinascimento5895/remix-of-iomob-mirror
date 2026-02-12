

# Plano de Melhorias UI/UX para Landing Page Corporativa da ioMob

Analisei toda a estrutura atual do site e identifiquei as seções que faltam segundo as melhores praticas de landing pages empresariais B2B. Abaixo, o plano completo com **o que adicionar** e **onde posicionar** na pagina.

---

## Estrutura Atual vs. Proposta

```text
ATUAL                          PROPOSTA
--------------------------     --------------------------
TopBar                         TopBar
Navbar                         Navbar
HeroSection                    HeroSection (+ CTA melhorado)
ValueCards                     ValueCards
SolutionsSection               SolutionsSection
TechMarquee                    TechMarquee
WhyUsSection                   WhyUsSection
                               [NOVO] StatsCounter
AboutSection                   AboutSection
                               [NOVO] ProcessSection
TeamSection                    TeamSection
                               [NOVO] ClientLogos
TestimonialsSection            TestimonialsSection
                               [NOVO] FAQSection
BlogSection                    BlogSection
                               [NOVO] CTABanner
ContactSection                 ContactSection
                               [NOVO] WhatsApp Float
Footer                         Footer
```

---

## 1. Contador de Numeros / Social Proof (StatsCounter)
**Posicao:** Entre WhyUsSection e AboutSection

Numeros grandes animados que contam ao entrar na tela. Exemplos:
- **+150** Projetos Entregues
- **+6** Paises Atendidos
- **+50** Clientes Satisfeitos
- **7** Anos de Experiencia

Componente com animacao de contagem (framer-motion + useInView). Fundo escuro (bg-foreground) com texto branco para criar contraste visual.

---

## 2. Secao de Processo / Como Trabalhamos (ProcessSection)
**Posicao:** Entre AboutSection e TeamSection

Uma linha do tempo horizontal (desktop) / vertical (mobile) com 4 etapas:
1. **Descoberta** - Entendemos seu negocio e necessidades
2. **Planejamento** - Definimos escopo, tecnologia e cronograma
3. **Desenvolvimento** - Sprints ageis com entregas incrementais
4. **Lancamento e Suporte** - Deploy, monitoramento e manutencao

Cada etapa com icone, numero circular e breve descricao. Conectadas por uma linha tracejada.

---

## 3. Logos de Clientes / Parceiros (ClientLogos)
**Posicao:** Entre TeamSection e TestimonialsSection

Faixa com logos de clientes conhecidos (URBS, Rotary, Pequeno Cotolengo - ja mencionados nos depoimentos). Titulo: "Empresas que Confiam na ioMob". Estilo similar ao TechMarquee, mas estatico em grid, com filtro grayscale que ganha cor no hover.

---

## 4. Secao de FAQ (FAQSection)
**Posicao:** Entre TestimonialsSection e BlogSection

Perguntas frequentes usando o componente Accordion (ja instalado). Perguntas como:
- Quanto tempo leva para desenvolver um aplicativo?
- Qual tecnologia voces utilizam?
- Voces atendem clientes fora do Brasil?
- Como funciona o processo de orcamento?
- Qual o custo medio de um projeto?
- Voces oferecem suporte apos o lancamento?

Otimo para SEO e para reduzir duvidas antes do contato.

---

## 5. Banner CTA Final (CTABanner)
**Posicao:** Entre BlogSection e ContactSection

Faixa com fundo primario (laranja) com uma frase de impacto e botao grande:
- Titulo: "Pronto para Transformar seu Negocio?"
- Subtitulo: "Agende uma consultoria gratuita com nossos especialistas"
- Botao: "FALE COM UM ESPECIALISTA" (ancora para #contato)

Cria urgencia antes do formulario de contato.

---

## 6. Botao Flutuante do WhatsApp
**Posicao:** Fixo no canto inferior direito (todas as paginas)

Icone do WhatsApp com animacao de pulso sutil. Ao clicar, abre o WhatsApp Web/App com o numero da ioMob (+55 41 98790 3434) e uma mensagem pre-definida como "Ola! Gostaria de saber mais sobre os servicos da ioMob."

---

## Detalhes Tecnicos

- **Animacoes**: Usar `framer-motion` (ja instalado) com `useInView` para revelar secoes ao scroll e animar contadores
- **FAQ**: Usar `@radix-ui/react-accordion` (ja instalado) via componente `src/components/ui/accordion.tsx`
- **Responsividade**: Todas as secoes novas seguem o padrao existente com `container`, grid responsivo (`md:grid-cols-X`, `lg:grid-cols-X`)
- **Cores e estilo**: Manter o padrao atual alternando fundos (`bg-background`, `bg-secondary`, `bg-foreground`, `bg-primary`) para criar ritmo visual
- **Novos arquivos**: 5 componentes novos (`StatsCounter.tsx`, `ProcessSection.tsx`, `ClientLogos.tsx`, `FAQSection.tsx`, `CTABanner.tsx`, `WhatsAppButton.tsx`)
- **Arquivo editado**: `src/pages/Index.tsx` para importar e posicionar os novos componentes

