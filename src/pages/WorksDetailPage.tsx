import { useEffect } from "react";
import { useParams } from "react-router";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackLink from "@/components/BackLink";
import Breadcrumb from "@/components/Breadcrumb";
import WorkProcessSlider from "@/components/WorkProcessSlider";
import ContentBlocks from "@/components/ContentBlocks";
import { works } from "@/data/works";
import { pageHeadings } from "@/data/pageHeadings";

export default function WorksDetailPage() {
  const { id } = useParams<{ id: string }>();
  const work = works.find((w) => w.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!work) {
    return (
      <div className="min-h-screen bg-page-bg">
        <SiteHeader />
        <main className="max-w-3xl mx-auto px-8 py-24 text-center">
          <p className="font-maru font-bold text-[#aaa] text-xl tracking-[1px] mb-8">
            該当する作品が見つかりませんでした
          </p>
          <BackLink to="/works">作品集一覧へ戻る</BackLink>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-page-bg">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <Breadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", to: "/" },
            { label: pageHeadings.works.label, to: pageHeadings.works.to },
            { label: work.title },
          ]}
        />

        <article
          className="rounded-[20px] border-2 border-border-dark overflow-hidden"
          style={{ backgroundColor: work.color }}
        >
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: 320 }}>
            <img
              fetchPriority="high"
              src={work.detailImage}
              alt={work.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="font-kaku font-medium text-xs tracking-[1px] px-3 py-1 rounded-full border border-current"
                style={{ color: work.accentColor }}
              >
                {work.category}
              </span>
              <span className="font-kaku font-medium text-xs text-[#888] tracking-[0.5px]">
                {work.year}
              </span>
            </div>

            <h1 className="font-maru font-bold text-[#222] text-3xl tracking-[1.5px] mb-1">
              {work.title}
            </h1>
            <p
              className="font-kaku font-medium text-sm tracking-[0.5px] mb-5"
              style={{ color: work.accentColor }}
            >
              {work.subtitle}
            </p>

            <ContentBlocks blocks={work.detailDescription} className="mb-8" />

            {work.githubUrl && (
              <a
                href={work.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub でコードを見る"
                title="GitHub でコードを見る"
                className="inline-flex text-brand-github hover:opacity-70 transition-opacity mb-4"
              >
                {/* GitHub mark (Octicons mark-github) */}
                <svg viewBox="0 0 16 16" aria-hidden="true" className="w-8 h-8 fill-current">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            )}

            <div className="border-t-2 border-border-dark py-2">
              <h2 className="font-maru font-bold text-[#222] text-2xl tracking-[1px] mb-6">
                創作過程
              </h2>

              <WorkProcessSlider key={work.id} process={work.process} accentColor={work.accentColor} />
            </div>
          </div>
        </article>
      </main>

      <SiteFooter backLink={{ to: "/works", label: "作品集一覧へ戻る" }} />
    </div>
  );
}
