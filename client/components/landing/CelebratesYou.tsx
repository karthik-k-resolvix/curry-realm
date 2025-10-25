export function CelebratesYou() {
  const badges = [
    { title: "Active Week", emoji: "🏃", color: "bg-[hsl(160,20%,92%)]" , subtitle: "Daily movement streaks & adaptive workouts"},
    { title: "Meal Maestro", emoji: "🥗", color: "bg-[hsl(82,28%,94%)]", subtitle: "Tasty, simple recipes" },
    { title: "Peace Maintainer", emoji: "🌿", color: "bg-[hsl(30,52%,88%)]", subtitle: "Short resets & breathwork" },
    { title: "Move Maker", emoji: "🏅", color: "bg-[hsl(200,20%,94%)]", subtitle: "Short activity boosts & streak rewards" },
  ];

  return (
    <section className="bg-accent/5">
      <div className="container mx-auto py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center max-w-3xl mx-auto">You Don’t Just Track Progress. You Feel It.</h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Earn beautiful rewards each week based on your consistency — share them or keep them private.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div key={b.title} className={`rounded-3xl p-6 ${b.color} border flex flex-col items-center text-center` }>
              <div className="h-16 w-16 sm:h-18 sm:w-18 md:h-14 md:w-14 rounded-full bg-white/60 flex items-center justify-center text-2xl shadow-sm mb-3">{b.emoji}</div>
              <div>
                <h4 className="font-semibold">{b.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{b.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
