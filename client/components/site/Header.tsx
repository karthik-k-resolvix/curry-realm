import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className={cn("sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b")}> 
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-3 font-semibold">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F49edbf8db4244684a62f9cd55c379ff8%2Fb9dece2b22dc45de823fa0c294ebe069?format=webp&width=200" alt="Movetribe logo" className="h-8 w-8 rounded-full object-cover" />
          <span className="text-lg">Movetribe</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-primary soft-transition" href="#features">Features</a>
          <a className="hover:text-primary soft-transition" href="#how">How it works</a>
          <a className="hover:text-primary soft-transition" href="#access">Early Access</a>
        </div>
        <a href="#access" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium soft-transition hover:opacity-90">
          Join Early Access
        </a>
      </div>
    </header>
  );
}
