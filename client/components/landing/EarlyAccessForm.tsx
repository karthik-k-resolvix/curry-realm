import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, User, Calendar, Leaf, Bell, MessageSquare } from "lucide-react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz69_9OJt8Bh7u0JjzWGno09CbgasnGEYFrkznrTjBngqTt7t55D_UYbbu2CW4rXEeYRQ/exec";

export function EarlyAccessForm() {
  const [loading, setLoading] = useState(false);

  // Controlled values for shadcn Selects so we can submit to the Sheet reliably
  const [age, setAge] = useState<string>("");
  const [diet, setDiet] = useState<string>("");
  const [updates, setUpdates] = useState<string>("");
  const [jobType, setJobType] = useState<string>("");
  const [stress, setStress] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      // Build payload. Select values come from state.
      const payload = {
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        age,
        diet,
        updates,
        blocker: fd.get("blocker") as string,
        jobType,
        stressFrequency: stress,
        missingFeature: fd.get("missingFeature") as string,
        timestamp: new Date().toISOString(),
      };

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Sheet write failed: ${res.status} ${txt}`);
      }

      // Success
      toast("You’re on the list! We’ll reach out soon.");
      form.reset();
      // Reset controlled selects
      setAge("");
      setDiet("");
      setUpdates("");
      setJobType("");
      setStress("");
    } catch (err: any) {
      console.error(err);
      toast.error("Could not add you right now. Please try again in a minute.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="access" className="bg-secondary/50">
      <div className="container mx-auto py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Be the First to Try</h2>
        <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
          We’re launching soon. Get early access and a free week of personalized plans.
        </p>

        <form onSubmit={onSubmit} className="mt-10 max-w-3xl mx-auto rounded-2xl border bg-background p-6 grid gap-4">
          {/* Name + Email */}
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

          {/* Age + Diet + Updates */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label>Age Group</Label>
              <div className="mt-1 flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <Select value={age} onValueChange={setAge}>
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
                <Select value={diet} onValueChange={setDiet}>
                  <SelectTrigger className="flex-1"><SelectValue placeholder="Choose diet preference" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="omnivore">Omnivore / Non-veg</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="pescatarian">Pescatarian</SelectItem>
                    <SelectItem value="keto">Keto</SelectItem>
                    <SelectItem value="paleo">Paleo</SelectItem>
                    <SelectItem value="low-carb">Low-carb</SelectItem>
                    <SelectItem value="low-fodmap">Low-FODMAP</SelectItem>
                    <SelectItem value="gluten-free">Gluten-free</SelectItem>
                    <SelectItem value="dairy-free">Dairy-free</SelectItem>
                    <SelectItem value="jain">Jain</SelectItem>
                    <SelectItem value="halal">Halal</SelectItem>
                    <SelectItem value="other">Other / Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Interested in updates?</Label>
              <div className="mt-1 flex items-center gap-3">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <Select value={updates} onValueChange={setUpdates}>
                  <SelectTrigger className="flex-1"><SelectValue placeholder="Yes / No" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* New row - Job Type + Stress Frequency */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Current job type</Label>
              <div className="mt-1 flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger className="flex-1"><SelectValue placeholder="Select your job type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="software">Software professional</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="sales">Sales or Marketing</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="service">Service industry</SelectItem>
                    <SelectItem value="self-employed">Self employed</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>How often do you feel stressed?</Label>
              <div className="mt-1 flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <Select value={stress} onValueChange={setStress}>
                  <SelectTrigger className="flex-1"><SelectValue placeholder="Choose frequency" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rarely">Rarely</SelectItem>
                    <SelectItem value="sometimes">Sometimes</SelectItem>
                    <SelectItem value="often">Often</SelectItem>
                    <SelectItem value="almost-daily">Almost daily</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Existing blocker */}
          <div>
            <Label htmlFor="blocker">What’s your biggest wellness blocker?</Label>
            <div className="mt-1 flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-muted-foreground mt-2" />
              <Textarea id="blocker" name="blocker" className="flex-1" placeholder="Time, motivation, injuries…" />
            </div>
          </div>

          {/* New open text - missing feature */}
          <div>
            <Label htmlFor="missingFeature">What is the one thing you wish your wellness app had?</Label>
            <div className="mt-1">
              <Textarea id="missingFeature" name="missingFeature" className="w-full" placeholder="Tell us what would really help you" />
            </div>
          </div>

          {/* Hidden inputs to also include controlled select values in FormData, for redundancy */}
          <input type="hidden" name="age" value={age} />
          <input type="hidden" name="diet" value={diet} />
          <input type="hidden" name="updates" value={updates} />
          <input type="hidden" name="jobType" value={jobType} />
          <input type="hidden" name="stressFrequency" value={stress} />

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
