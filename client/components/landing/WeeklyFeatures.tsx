import { Calendar, CheckCircle2, List } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, bullets }: { icon: any; title: string; bullets: string[] }) => (
  <div className="rounded-2xl border bg-card text-card-foreground p-6 soft-transition hover:-translate-y-1 hover:soft-shadow">
    <div className="flex items-start gap-4">
      <div className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-none">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export function WeeklyFeatures() {
  return (
    <section id="features" className="px-6 py-12">
      <h2 className="text-2xl font-bold text-center">Your Personal Weekly Wellness Plan</h2>
      <p className="mt-2 text-center text-muted-foreground max-w-md mx-auto">Small, high-impact actions delivered weekly so you can focus on living.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <FeatureCard
          icon={Calendar}
          title="Diet"
          bullets={["3 balanced meals/day with simple prep","Smart grocery list by aisle & weight","Quick swaps for allergies & preferences"]}
        />
        <FeatureCard
          icon={CheckCircle2}
          title="Fitness"
          bullets={["30-min adaptive sessions","Equipment-free options","Recovery & mobility tips"]}
        />
        <FeatureCard
          icon={List}
          title="Mental Health"
          bullets={["1–3 minute daily practices","Weekly reflection prompts","Guided breathing exercises"]}
        />
      </div>
    </section>
  );
}
