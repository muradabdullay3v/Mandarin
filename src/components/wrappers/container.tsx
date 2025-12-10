import React from "react";
import { cn } from "@/src/app/lib/utils";

const Container = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-7xl", "mx-auto", "p-4", className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
