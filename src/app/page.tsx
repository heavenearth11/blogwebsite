import { ReviewArticle } from "@/components/site/ReviewArticle";
import { meta, introBlocks, bodyBlocks } from "@/data/review-content";

const PRODUCT_URL = "https://luxnlab.co.kr/product/detail.html?product_no=17";

export default function Home() {
  return (
    <>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-3xl items-center px-5 py-4">
          <span className="text-lg font-bold tracking-tight text-primary">
            에스트록스
          </span>
        </div>
      </header>

      <main className="flex-1 bg-background">
        {/* 히어로 */}
        <section className="bg-secondary/60">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
            <p className="mb-3 text-sm font-medium text-primary">실제 후기</p>
            <h1 className="text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              {meta.title}
            </h1>
            <p className="mt-3 text-xs text-muted-foreground">
              원문: <span className="break-all">{meta.sourceUrl}</span>
            </p>
          </div>
        </section>

        {/* 후기 본문 */}
        <article className="mx-auto max-w-3xl px-5 py-10">
          <ReviewArticle blocks={introBlocks} />
          <div className="my-8 border-t border-border" />
          <ReviewArticle blocks={bodyBlocks} />
        </article>

        {/* 최종 CTA — 콘텐츠 마지막, 자사몰 링크는 여기 하나만 */}
        <section className="border-t border-border bg-secondary/60">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center">
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground transition-all hover:bg-primary/80"
            >
              자세히 알아보기
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-8 text-xs text-muted-foreground">
          <p>에스트록스</p>
          <p className="mt-1">사업자 정보는 확인 후 추가 예정입니다.</p>
        </div>
      </footer>
    </>
  );
}
