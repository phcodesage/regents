import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import RegentsExamSection from "./sections/RegentsExamSection";
import WhyChooseSection from "./sections/WhyChooseSection";
import PersonalizedTutoringSection from "./sections/PersonalizedTutoringSection";
import BiologyChemistrySection from "./sections/BiologyChemistrySection";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#d44545] text-white overflow-x-hidden">
      <FirstSection />
      <SecondSection />
      <RegentsExamSection />
      <WhyChooseSection />
      <PersonalizedTutoringSection />
      <BiologyChemistrySection />
    </div>
  );
}

export default App;
