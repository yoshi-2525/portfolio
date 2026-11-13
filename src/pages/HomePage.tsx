import { type CSSProperties } from "react"
import { Link } from "react-router"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"
import WorkCard from "@/components/WorkCard"
import { cardColors, accentColors } from "@/styles/palette"
import { pageHeadings } from "@/data/pageHeadings"
import { works } from "@/data/works"
import homeImg from "@/imports/images/typing.webp"
import heroTitleImg from "@/imports/images/hero-title.svg"
import keywordCreativityImg from "@/imports/images/keyword-creativity.svg"
import keywordInsightImg from "@/imports/images/keyword-insight.svg"
import keywordInspirationImg from "@/imports/images/keyword-inspiration.svg"
import keywordIdeaImg from "@/imports/images/keyword-idea.svg"

const navCardConfig = [
  { key: "learning", color: cardColors.blue, accentColor: accentColors.blue },
  {
    key: "commitment",
    color: cardColors.coral,
    accentColor: accentColors.coral,
  },
  { key: "dreams", color: cardColors.gray, accentColor: accentColors.gray },
  { key: "profile", color: cardColors.amber, accentColor: accentColors.brown },
] as const

const navCards = navCardConfig.map(({ key, color, accentColor }) => {
  const {
    to,
    label,
    title,
    description,
    illustrationSrc: image,
  } = pageHeadings[key]
  return { to, label, title, description, color, accentColor, image }
})

// 「創作への思い」のキーワードも、ヒーローと同じくぴょすふぉんとふりぃの字形を SVG にしたもの。
// ratio は SVG の viewBox の幅/高さ。文言を変えるときは SVG を作り直す。
const keywords = [
  { text: "創造性", src: keywordCreativityImg, ratio: "313/105" },
  { text: "洞察", src: keywordInsightImg, ratio: "209/105" },
  { text: "ひらめき", src: keywordInspirationImg, ratio: "417/105" },
  { text: "アイデア", src: keywordIdeaImg, ratio: "417/105" },
]

function GlyphText({
  text,
  src,
  ratio,
}: {
  text: string
  src: string
  ratio: string
}) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span
        aria-hidden="true"
        className="block h-[1em] bg-current"
        style={{
          aspectRatio: ratio,
          maskImage: `url(${src})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
        }}
      />
    </>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <SiteHeader />

      <main>
        <div className="max-w-6xl mx-auto px-8 pt-16 pb-8">
          {/* Hero */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-16">
            {/* 見出しはぴょすふぉんとふりぃの字形を SVG にしたもの。フォントファイルは配布できないため画像で使う。
                色は currentColor（text-accent-blue）を mask で塗る。文言を変えるときは SVG を作り直す。 */}
            <h1 className="text-accent-blue text-6xl sm:text-7xl lg:text-8xl shrink-0 animate-fade-in-left">
              <span className="sr-only">とにかくものを創りつづける</span>
              <span
                aria-hidden="true"
                className="block h-[2.62em] aspect-[452.3/262.1] bg-current"
                style={{
                  maskImage: `url(${heroTitleImg})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                }}
              />
            </h1>

            <div
              className="relative w-full max-w-xl mx-auto md:mx-0 md:shrink-0 animate-fade-in-right"
              style={{ animationDelay: "120ms" }}
            >
              <div className="rounded-3xl border border-border-dark overflow-hidden">
                <img
                  fetchPriority="high"
                  src={homeImg}
                  alt="デスクで作業する筆者のイラスト"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 創作への思い：すりガラスの台紙の上に、後ろにずらした coral のカードを重ねる。キーワードにはマーカーを順に引く */}
          <div
            className="relative my-12 animate-fade-in-left"
            style={{ animationDelay: "150ms" }}
          >
            {/* 台紙の後ろの色のにじみ。これが透けることでガラスに見える */}
            <div
              aria-hidden="true"
              className="absolute -top-8 left-[6%] size-56 rounded-full bg-accent-coral/35 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-10 right-[8%] size-64 rounded-full bg-accent-blue/25 blur-3xl"
            />

            <div className="relative rounded-[2.25rem] p-5 md:p-8 bg-linear-to-br from-surface-white/65 to-surface-white/25 backdrop-blur-xl border border-surface-white/80 shadow-[inset_0_1px_0_0_var(--color-surface-white),0_12px_40px_-16px_color-mix(in_srgb,var(--color-ink-444)_30%,transparent)]">
              <div className="relative mr-3 mb-3">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-1 translate-y-1 rounded-3xl bg-card-coral border border-border-dark/50"
                />

                <div className="relative overflow-hidden px-8 py-12 md:px-14 rounded-3xl bg-surface-white border border-border-dark">
                  <span
                    aria-hidden="true"
                    className="absolute top-2 left-5 font-maru font-bold text-[9rem] leading-none text-accent-coral/15 select-none pointer-events-none"
                  >
                    &ldquo;
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-16 right-5 font-maru font-bold text-[9rem] leading-none text-accent-coral/15 select-none pointer-events-none"
                  >
                    &rdquo;
                  </span>

                  {/* 左上の引用符と重ならないよう、本文は左に余白をとる */}
                  <div className="relative w-full pl-12 md:pl-16">
                    <p className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 text-ink-222 text-4xl">
                      {keywords.map((word, i) => (
                        <span
                          key={word.text}
                          className="marker-coral motion-safe:animate-marker"
                          style={{ animationDelay: `${600 + i * 350}ms` }}
                        >
                          <GlyphText {...word} />
                        </span>
                      ))}
                      <span
                        aria-hidden="true"
                        className="font-maru font-bold text-2xl text-accent-coral"
                      >
                        {[0, 1, 2, 3].map((i) => (
                          <span
                            key={i}
                            className="inline-block motion-safe:animate-dot-blink"
                            style={{ animationDelay: `${2000 + i * 200}ms` }}
                          >
                            ・
                          </span>
                        ))}
                      </span>
                    </p>
                    <div className="font-kaku font-medium text-ink-222 text-base leading-loose tracking-[0.8px]">
                      <p>
                        このような言葉に魅せられながら、私はこの世に生かされてきました。
                      </p>
                      <p>
                        わたしのポートフォリオでは、創造的な衝動に駆られ続けるわたしの軌跡を残していきます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-divider my-10" />

          {/* Quick links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mb-4 py-8">
            {navCards.map((card, index) => (
              <Link
                key={card.to}
                to={card.to}
                className="relative block rounded-[20px] border-2 border-border-gray hover:border-(--accent) p-12 pt-12 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-[box-shadow,border-color,translate] animate-fade-in-up"
                style={
                  {
                    "--accent": card.accentColor,
                    backgroundColor: card.color,
                    animationDelay: `${index * 100 + 120}ms`,
                  } as CSSProperties
                }
              >
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent-coral text-white text-base font-maru font-bold tracking-[1.1px] px-6 py-2 rounded-full whitespace-nowrap">
                  {card.label}
                </span>

                <div className="border border-border-dark rounded-lg aspect-video mb-6 overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={card.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="font-maru font-bold text-accent-blue text-2xl tracking-[1px] mb-2">
                  {card.title}
                </h2>
                <p className="font-kaku font-medium text-[#222] text-base tracking-[0.5px] leading-relaxed">
                  {card.description.join("")}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-8">
          <div className="border-t-2 border-divider my-2" />
        </div>

        {/* Creation thoughts + featured works */}
        <section className="max-w-6xl mx-auto p-8">
          <div className="max-w-6xl mx-auto py-4">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="font-kaku font-medium text-accent-coral text-sm tracking-[1px] mb-3">
                  WORKS
                </p>
                <h2 className="font-maru font-bold text-accent-blue text-4xl tracking-[3px]">
                  作品集
                </h2>
              </div>
              <Link
                to="/works"
                className="shrink-0 inline-flex items-center gap-2 font-maru font-bold text-accent-coral text-base tracking-[1px] hover:opacity-70 transition-opacity"
              >
                作品一覧を見る →
              </Link>
            </div>

            <div className="flex flex-col gap-8">
              {works.slice(0, 2).map((work, i) => (
                <WorkCard key={work.id} work={work} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
