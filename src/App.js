import HomePage from "./components/Homepage/HomePage";
import PersoonlijkePodcasts from "./components/Persoonlijkepodcasts/PersoonlijkePodcasts";
import ZakelijkePodcasts from "./components/Zakelijkepodcasts/ZakelijkePodcasts";
import Makers from "./components/Makers/Makers";

function App() {
  return (
    <>
      <HomePage />
      <PersoonlijkePodcasts />
      <ZakelijkePodcasts />
      <Makers />
    </>
  );
}

export default App;
