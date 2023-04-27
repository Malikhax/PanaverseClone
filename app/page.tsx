import CoreTracks from "./components/widgets/CoreTracks"
import FooterSection from "./components/widgets/FooterSection"
import Hero from "./components/widgets/Hero"
import ProgramOutcome from "./components/widgets/ProgramOutcome"
import SpecializedTracks from "./components/widgets/SpecializedTracks"


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      {/* Core Tracks Section */}
      <CoreTracks />
      {/* Specialized Track */}
      <SpecializedTracks />
      {/* ProgramOutcome Section */}
      <ProgramOutcome />
      {/* Footer Section */}
      <FooterSection />
    </main>
  )
}
