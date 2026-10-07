import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeading from "@/components/PageHeading";
import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";
import { pageHeadings } from "@/data/pageHeadings";

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filtered =
    activeCategory === "すべて" ? works : works.filter((w) => w.category === activeCategory);

  return (
    <div
      className="min-h-screen bg-page-bg"
    >
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <PageHeading {...pageHeadings.works} />

        {/* Works list */}
        <div className="flex flex-col gap-8">
          {filtered.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      </main>

      <SiteFooter backLink={{ to: "/", label: "ホームへ戻る" }} />
    </div>
  );
}
