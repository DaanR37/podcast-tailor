import Homepage from "./components/homepage/homepage";
import PersoonlijkePodcasts from "./components/Persoonlijkepodcasts/PersoonlijkePodcasts";
import ZakelijkePodcasts from "./components/Zakelijkepodcasts/ZakelijkePodcasts";
import Makers from "./components/Makers/Makers";

function App() {
  return (
    <>
      <Homepage />
      <PersoonlijkePodcasts />
      <ZakelijkePodcasts />
      <Makers />
    </>
  );
}

export default App;
