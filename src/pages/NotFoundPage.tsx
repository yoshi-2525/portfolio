import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackLink from "@/components/BackLink";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-8 py-16">
        <section className="max-w-3xl mx-auto rounded-[20px] border-2 border-border-dark bg-card-blue px-8 py-16 text-center animate-fade-in-up">
          <p className="font-kaku font-medium text-accent-coral text-sm tracking-[1px] mb-3">
            404 NOT FOUND
          </p>
          <p
            aria-hidden="true"
            className="font-maru font-bold text-accent-blue text-8xl md:text-9xl tracking-[4px] leading-none mb-8"
          >
            404
          </p>
          <h1 className="font-maru font-bold text-accent-blue text-3xl tracking-[3px] leading-tight mb-6">
            ページが見つかりません
          </h1>
          <p className="font-kaku font-medium text-ink-222 text-base tracking-[0.5px] leading-loose mb-10">
            お探しのページは移動したか、削除された可能性があります。
            <br />
            URL に誤りがないか、ご確認ください。
          </p>
          <div className="pt-8 border-t-2 border-border-dark flex justify-center">
            <BackLink to="/" className="self-center">
              ホームへ戻る
            </BackLink>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
