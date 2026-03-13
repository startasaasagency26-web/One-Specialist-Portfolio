import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  intro: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  align = "left",
  className,
  intro,
  label,
  title,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span className="inline-flex rounded-full border border-black/8 bg-white/72 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-strong shadow-[0_12px_30px_-20px_rgba(17,17,17,0.2)] backdrop-blur-xl">
        {label}
      </span>
      <h2
        className={cn(
          "mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.05em] text-ink md:text-5xl lg:text-6xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg">
        {intro}
      </p>
    </div>
  );
}
