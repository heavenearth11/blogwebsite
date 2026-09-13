import Image from "next/image";
import type { Block } from "@/data/review-content";

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p className="text-[15px] leading-8 text-foreground/90">{block.text}</p>;
    case "quote":
      return (
        <p className="border-l-2 border-primary/40 pl-4 text-[15px] leading-8 font-medium text-foreground">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 className="pt-2 text-xl font-bold text-primary sm:text-2xl">{block.text}</h2>
      );
    case "h3":
      return <h3 className="text-lg font-semibold text-foreground">{block.text}</h3>;
    case "list":
      return (
        <ul className="list-disc space-y-2 pl-5 text-[15px] leading-7 text-foreground/90">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure className="my-2">
          <Image
            src={block.src}
            alt={block.caption}
            width={block.width}
            height={block.height}
            className="w-full rounded-xl object-cover"
          />
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            {block.caption}
          </figcaption>
        </figure>
      );
    case "divider":
      return <hr className="border-border" />;
    case "source":
      return <p className="text-xs text-muted-foreground italic">{block.text}</p>;
  }
}

export function ReviewArticle({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}
