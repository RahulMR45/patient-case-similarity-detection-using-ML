import * as React from "react";
import { cn } from "./utils";
import './card.css';
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, children, ...props }, ref) => (
    <center><h1
      ref={ref}
      className={cn(
        "text-4xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    >
      {children || "Patient case similarity"} {/* Fallback content */}
    </h1></center>
  ));
  CardTitle.displayName = "CardTitle";
  
  

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
