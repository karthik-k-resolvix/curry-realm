import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarCheck, List, CheckCircle2, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="overflow-hidden bg-[hsl(var(--background))]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text column */}
          <div className="order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Wellness That Thinks for You.</h1>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">One weekly plan for fitness, food & mental balance — in just 10 minutes.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium">
                <CalendarCheck className="h-4 w-4 text-primary" /> Weekly plans
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium">
                <List className="h-4 w-4 text-accent" /> Smart grocery lists
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/100 px-3 py-1 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4 text-secondary" /> 1-min check-ins
              </span>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Button asChild className="w-full md:w-auto rounded-full h-12 px-6 text-base bg-primary text-primary-foreground hover:bg-primary/90 soft-transition">
                <a href="#access" className="flex items-center justify-center gap-2">🧘 Join the Early Access List</a>
              </Button>
              <span className="hidden md:inline text-sm text-muted-foreground">No spam. Only Calm Energy!</span>
            </div>
          </div>

          {/* Visual column */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-72">
              {/* Brand SVG - warmer, leaf + sun motif */}
              <div className="flex items-center justify-center w-full h-full rounded-2xl bg-primary/5 border shadow-sm">
                <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                  <rect x="2" y="2" width="176" height="176" rx="24" fill="#FDF7F0" />
                  <g transform="translate(40,30)">
                    <circle cx="50" cy="18" r="12" fill="#DDB892" opacity="0.9" />
                    <path d="M50 40c16 0 28 12 28 28s-28 40-28 40-28-24-28-40 12-28 28-28z" fill="#A3B18A" opacity="0.95" />
                    <rect x="86" y="32" width="40" height="18" rx="6" fill="#BBD0C9" />
                  </g>
                </svg>
              </div>

              {/* small mockup cards for desktop */}
              <motion.div
                initial={{ x: -20, y: -10, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block absolute -left-6 -top-6 w-44 rounded-xl bg-card p-3 border shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-sm">Weekly Calendar</h5>
                    <p className="text-xs text-muted-foreground">A plan that actually works!</p>
                  </div>
                  <CalendarCheck className="h-5 w-5 text-primary" />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 10, y: 10, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="hidden md:block absolute right-0 top-24 w-48 rounded-xl bg-card p-3 border shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-sm">Grocery List</h5>
                    <p className="text-xs text-muted-foreground">Smart shopping list.</p>
                  </div>
                  <List className="h-5 w-5 text-accent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="hidden md:block absolute left-10 bottom-2 w-40 rounded-xl bg-primary/5 p-2 border shadow-xs"
              >
                <div className="flex items-center gap-3 text-sm">
                  <Leaf className="h-5 w-5 text-primary" />
                  <div>
                    <h6 className="font-medium">Quick Move</h6>
                    <p className="text-xs text-muted-foreground">30-min tailored session.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
