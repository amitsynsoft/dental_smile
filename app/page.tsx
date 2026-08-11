import { TopHeaderBar } from "@/components/dental/TopHeaderBar"
import { DentalNavbar } from "@/components/dental/DentalNavbar"
import { DentalHero } from "@/components/dental/DentalHero"
import { PracticeHighlights } from "@/components/dental/PracticeHighlights"
import { DentalServices } from "@/components/dental/DentalServices"
import { MeetTheDoctor } from "@/components/dental/MeetTheDoctor"
import { PatientReviews } from "@/components/dental/PatientReviews"
import { InsuranceAndInfo } from "@/components/dental/InsuranceAndInfo"
import { LocationAndHours } from "@/components/dental/LocationAndHours"
import { DentalFooter } from "@/components/dental/DentalFooter"

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      <TopHeaderBar />
      <DentalNavbar />
      <DentalHero />
      <PracticeHighlights />
      <DentalServices />
      <MeetTheDoctor />
      <PatientReviews />
      <InsuranceAndInfo />
      <LocationAndHours />
      <DentalFooter />
    </main>
  )
}
