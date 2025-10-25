import { CheckCircle2, XCircle, Calendar, BellOff, Clock, UserCheck, MessageSquare, Smartphone } from "lucide-react";

export function WhyDifferent() {
  return (
    <section className="bg-secondary/40" id="why">
      <div className="container mx-auto py-16">
        <h3 className="text-xl md:text-2xl font-bold text-center max-w-3xl mx-auto">
          Most Wellness Apps Ask for Too Much. 
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-center max-w-3xl mx-auto">
          We Do It For You!
        </h2>

        <div className="mt-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-5 bg-card border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-3 text-destructive font-semibold">
                  <XCircle className="h-6 w-6" /> <span>Them</span>
                </div>
                <div className="text-sm text-muted-foreground">Old way</div>
              </div>

              <ul className="mt-2 space-y-3 text-sm text-muted-foreground list-none">
                <li className="flex items-center gap-3"><Calendar className="h-5 w-5 text-muted-foreground" /><span>Calorie logging daily — heavy data entry.</span></li>
                <li className="flex items-center gap-3"><Smartphone className="h-5 w-5 text-muted-foreground" /><span>Separate apps for mind & body — scattered routines.</span></li>
                <li className="flex items-center gap-3"><BellOff className="h-5 w-5 text-muted-foreground" /><span>Notifications all day — attention fragmentation.</span></li>
              </ul>

              <div className="mt-4 bg-[hsl(var(--secondary))]/10 p-3 rounded-lg text-sm">
                <strong className="text-sm">Result:</strong> Burnout and forgotten goals.
              </div>
            </div>

            <div className="rounded-2xl p-5 bg-card border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-3 text-green-700 font-semibold">
                  <CheckCircle2 className="h-6 w-6" /> <span>Us</span>
                </div>
                <div className="text-sm text-muted-foreground">Better way</div>
              </div>

              <ul className="mt-2 space-y-3 text-sm text-muted-foreground list-none">
                <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-accent" /><span>One 10-minute plan per week — we do the thinking for you.</span></li>
                <li className="flex items-center gap-3"><UserCheck className="h-5 w-5 text-accent" /><span>One AI coach for all — unified guidance for mind & body.</span></li>
                <li className="flex items-center gap-3"><MessageSquare className="h-5 w-5 text-accent" /><span>Gentle 1-minute check-ins — tune, don’t overwhelm.</span></li>
              </ul>

              <div className="mt-4 bg-[hsl(var(--primary))]/8 p-3 rounded-lg text-sm">
                <strong className="text-sm">Result:</strong> Sustainable habits and calm progress.
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-muted-foreground">A clearer view so you can quickly see why MoveTribe reduces noise and boosts results.</div>
        </div>
      </div>
    </section>
  );
}
