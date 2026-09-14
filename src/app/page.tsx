import { Leaf } from "lucide-react";
import { ReviewArticle } from "@/components/site/ReviewArticle";
import { CopyLinkButton } from "@/components/site/CopyLinkButton";
import { meta, introBlocks, bodyBlocks } from "@/data/review-content";

export default function Home() {
  return (
    <>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3">
          <div className="flex items-center">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="ml-2 text-base font-bold tracking-tight text-foreground">
              영은이의 건강일기
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground">
              전체글
            </span>
            <span className="inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
              + 이웃추가
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-background">
        {/* 히어로 */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-5 py-8">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              건강기록
            </span>
            <h1 className="mt-3 text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              {meta.title}
            </h1>
            <div className="mt-5 flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Leaf className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1 leading-tight">
                <p className="text-sm font-bold text-foreground">영은이의 건강일기</p>
                <p className="text-xs text-muted-foreground">2026. 04. 29.</p>
              </div>
              <CopyLinkButton />
            </div>
            <div className="mt-5 border-t border-border" />
          </div>
        </section>

        {/* 후기 본문 */}
        <article className="mx-auto max-w-3xl px-5 py-10">
          <ReviewArticle blocks={introBlocks} />
          <div className="my-8 border-t border-border" />
          <ReviewArticle blocks={bodyBlocks} />
        </article>
      </main>
    </>
  );
}
