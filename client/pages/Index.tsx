import { Hero } from "@/components/landing/Hero";
import { WhyDifferent } from "@/components/landing/WhyDifferent";
import { WeeklyFeatures } from "@/components/landing/WeeklyFeatures";
import { CelebratesYou } from "@/components/landing/CelebratesYou";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { EarlyAccessForm } from "@/components/landing/EarlyAccessForm";

export default function Index() {
  return (
    <div>
      <Hero />
      <WhyDifferent />
      <WeeklyFeatures />
      <CelebratesYou />
      <HowItWorks />
      <EarlyAccessForm />
    </div>
  );
}
