import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, User, Calendar, Leaf, Bell, MessageSquare } from "lucide-react";

export function EarlyAccessForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast("You’re on the list! We’ll reach out soon.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  return (
    <section id="access" className="bg-secondary/50">
      <div className="container mx-auto py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Be the First to Try</h2>
        <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
          We’re launching soon. Get early access and a free week of personalized plans.
        </p>
        <form onSubmit={onSubmit} className="mt-10 max-w-3xl mx-auto rounded-2xl border bg-background p-6 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <div className="mt-1 flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <Input id="name" name="name" required placeholder="Your full name" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="mt-1 flex items-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label>Age Group</Label>
              <div className="mt-1 flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <Select name="age" className="flex-1">
                  <SelectTrigger className="flex-1"><SelectValue placeholder="Select age group" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="18-24">18–24</SelectItem>
                    <SelectItem value="25-34">25–34</SelectItem>
                    <SelectItem value="35-44">35–44</SelectItem>
                    <SelectItem value="45+">45+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label>Diet</Label>
              <div className="mt-1 flex items-center gap-3">
                <Leaf className="h-5 w-5 text-muted-foreground" />
                <Select name="diet" className="flex-1">
                  <SelectTrigger className="flex-1"><SelectValue placeholder="Choose diet preference" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="veg">Veg</SelectItem>
                    <SelectItem value="non-veg">Non-veg</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label>Interested in updates?</Label>
              <div className="mt-1 flex items-center gap-3">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <Select name="updates" className="flex-1">
                  <SelectTrigger className="flex-1"><SelectValue placeholder="Yes / No" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="blocker">What’s your biggest wellness blocker?</Label>
            <div className="mt-1 flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-muted-foreground mt-2" />
              <Textarea id="blocker" name="blocker" className="flex-1" placeholder="Time, motivation, injuries…" />
            </div>
          </div>
          <div className="pt-2">
            <Button type="submit" disabled={loading} className="rounded-full h-12 px-6 text-base soft-transition">
              {loading ? "Adding…" : "Add me to the list"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
