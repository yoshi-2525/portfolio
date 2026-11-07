import { useRef, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeading from "@/components/PageHeading";
import LearningRecordCard from "@/components/LearningRecordCard";
import LearningCategoryFilter from "@/components/LearningCategoryFilter";
import LearningPagination from "@/components/LearningPagination";
import { records, categories } from "@/data/learningRecords";
import { pageHeadings } from "@/data/pageHeadings";

const PER_PAGE = 9;

export default function LearningPage() {
  const [active, setActive] = useState("すべて");
  const [page, setPage] = useState(1);
  const listTopRef = useRef<HTMLDivElement>(null);

  const filtered = active === "すべて" ? records : records.filter((r) => r.category === active);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setActive(category);
    setPage(1);
  };

  const handlePageChange = (next: number) => {
    setPage(next);
    listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="min-h-screen bg-page-bg"
    >
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <PageHeading {...pageHeadings.learning} />

        <div ref={listTopRef} className="scroll-mt-8">
          <LearningCategoryFilter categories={categories} active={active} onChange={handleCategoryChange} />
        </div>

        {/* Record cards */}
        <div key={`${active}-${currentPage}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paged.map((record, i) => (
            <LearningRecordCard key={record.id} record={record} index={i} />
          ))}
        </div>

        <LearningPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={handlePageChange}
          className="mt-12"
        />

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-maru font-bold text-[#aaa] text-xl tracking-[1px]">
              該当する記録がありません
            </p>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
