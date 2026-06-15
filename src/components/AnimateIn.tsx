"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Variant = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight";

const variants: Record<Variant, { hidden: string; visible: string }> = {
  fadeUp:    { hidden: "opacity-0 translate-y-10", visible: "opacity-100 translate-y-0" },
  fadeIn:    { hidden: "opacity-0",                visible: "opacity-100" },
  fadeLeft:  { hidden: "opacity-0 -translate-x-10", visible: "opacity-100 translate-x-0" },
  fadeRight: { hidden: "opacity-0 translate-x-10",  visible: "opacity-100 translate-x-0" },
};

interface AnimateInProps {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  as: Tag = "div",
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.9, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { hidden, visible: visibleClass } = variants[variant];

  const TagComponent = Tag as React.ElementType;

  return (
    <TagComponent
      ref={ref}
      className={cn("transition-all duration-700 ease-out", hidden, visible && visibleClass, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </TagComponent>
  );
}
