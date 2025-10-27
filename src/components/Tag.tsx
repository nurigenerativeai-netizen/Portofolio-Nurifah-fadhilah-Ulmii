import React from 'react';
import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Tag({ children, className, ...props }: TagProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-olive-sage/30 bg-cream-mist px-3 py-1 text-xs font-medium text-olive-sage transition-colors hover:bg-olive-sage/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}