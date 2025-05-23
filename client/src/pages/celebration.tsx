import { useState } from "react";
import LandingPage from "@/components/landing-page";
import AliasPage from "@/components/alias-page";
import AnniversaryPage from "@/components/anniversary-page";
import BirthdayPage from "@/components/birthday-page";

type CelebrationStage = "landing" | "alias" | "anniversary" | "birthday";

export default function Celebration() {
  const [stage, setStage] = useState<CelebrationStage>("landing");

  const handleLandingComplete = () => {
    setStage("alias");
  };

  const handleAliasComplete = () => {
    setStage("anniversary");
  };

  const handleAnniversaryComplete = () => {
    setStage("birthday");
  };

  const handleRestart = () => {
    setStage("landing");
  };

  return (
    <div className="relative">
      {stage === "landing" && <LandingPage onComplete={handleLandingComplete} />}
      {stage === "alias" && <AliasPage onComplete={handleAliasComplete} />}
      {stage === "anniversary" && <AnniversaryPage onComplete={handleAnniversaryComplete} />}
      {stage === "birthday" && <BirthdayPage onRestart={handleRestart} />}
    </div>
  );
}
