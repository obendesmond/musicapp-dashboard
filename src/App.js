import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";

function App() {
  return (
    <div className="bg-myDark h-[auto] w-[100%] min-h-[100vh] flex">
      <div className="flex-[0.2]">
        <LeftSection />
      </div>
      <div className="flex-[0.8]">
        <RightSection />
      </div>
    </div>
  );
}

export default App;
