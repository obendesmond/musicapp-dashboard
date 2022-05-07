import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";

function App() {
  return (
    <div className="bg-myDark h-[100vh] w-[100vw] flex">
      <div className="flex-[0.2]">
        <LeftSection />
      </div>
      <div className="flex-[0.8] border border-myMain">
        <RightSection />
      </div>
    </div>
  );
}

export default App;
