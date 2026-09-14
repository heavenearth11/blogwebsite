import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Block, Run, RichText } from "@/data/review-content";

function RunView({ run }: { run: Run }) {
  if (typeof run === "string") return <>{run}</>;
  return (
    <span className={cn(run.bold && "font-bold", run.red && "text-destructive")}>
      {run.text}
    </span>
  );
}

function RichTextView({ text }: { text: RichText }) {
  return (
    <>
      {text.map((run, i) => (
        <RunView key={i} run={run} />
      ))}
    </>
  );
}

function LineGroup({
  lines,
  lineClassName,
}: {
  lines: RichText[];
  lineClassName?: string;
}) {
  return (
    <div className="space-y-1">
      {lines.map((line, i) => (
        <p key={i} className={lineClassName}>
          <RichTextView text={line} />
        </p>
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "lines":
      return (
        <LineGroup
          lines={block.lines}
          lineClassName="text-[15px] leading-7 text-foreground/90"
        />
      );
    case "lead":
      return (
        <LineGroup
          lines={block.lines}
          lineClassName="text-[16px] leading-7 font-bold text-foreground"
        />
      );
    case "quote":
      return (
        <div className="border-l-2 border-primary/40 pl-4">
          <LineGroup
            lines={block.lines}
            lineClassName="text-[15px] leading-7 font-medium text-foreground"
          />
        </div>
      );
    case "h2":
      return (
        <h2 className="pt-2 text-xl font-bold text-primary sm:text-2xl">
          <RichTextView text={block.text} />
        </h2>
      );
    case "h3":
      return (
        <h3 className="pt-6 text-[19px] font-bold text-foreground">
          <RichTextView text={block.text} />
        </h3>
      );
    case "list":
      return (
        <ul className="list-disc space-y-2 pl-5 text-[15px] leading-7 text-foreground/90">
          {block.items.map((item, i) => (
            <li key={i}>
              <RichTextView text={item} />
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure className="mt-2 mb-12">
          <Image
            src={block.src}
            alt={block.caption}
            width={block.width}
            height={block.height}
            className="w-full rounded-xl object-cover"
          />
          <figcaption className="mt-2 text-center text-[13px] font-bold text-[#555555]">
            {block.caption}
          </figcaption>
        </figure>
      );
    case "divider":
      return <hr className="border-border" />;
    case "source":
      return <p className="text-[11px] leading-5 text-[#1b1b1b]">{block.text}</p>;
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}

export function ReviewArticle({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-9">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}
