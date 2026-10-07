import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeading from "@/components/PageHeading";
import DreamCard from "@/components/DreamCard";
import { dreams } from "@/data/dreams";
import { pageHeadings } from "@/data/pageHeadings";

export default function DreamsPage() {
  return (
    <div
      className="min-h-screen bg-page-bg"
    >
      {/* Header */}
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <PageHeading {...pageHeadings.dreams} />

        {/* Dream cards */}
        <div className="flex flex-col gap-6">
          {dreams.map((dream, index) => (
            <DreamCard key={dream.id} dream={dream} index={index} reverse={index % 2 === 1} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
