import { ListChecks, CheckCircle2, Moon, RefreshCcw } from "lucide-react";

const Step = ({ index, title, desc, Icon }: { index: string; title: string; desc: string; Icon: any }) => (
  <div className="rounded-2xl border bg-card p-6 flex flex-col items-start gap-4">
    <div className="flex items-center gap-3">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"> 
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
);

export function HowItWorks() {
  return (
    <section id="how" className="bg-background">
      <div className="container mx-auto py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">How It Works</h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">A simple, four-step flow that fits into real life — brief, clear, and adaptive.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Step index="1" title="Set your profile" desc="Quick setup: goals, diet, schedule, injuries." Icon={ListChecks} />
          <Step index="2" title="Get your plan" desc="A concise weekly plan: meals, movement, mindfulness." Icon={CheckCircle2} />
          <Step index="3" title="Check in nightly" desc="1-minute reflection to tune next week." Icon={Moon} />
          <Step index="4" title="Plans adapt weekly" desc="We adjust based on your feedback & energy." Icon={RefreshCcw} />
        </div>
      </div>
    </section>
  );
}
