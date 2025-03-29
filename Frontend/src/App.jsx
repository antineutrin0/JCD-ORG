import BangladeshMap from '@react-map/bangladesh';
import LanguageSwitcher from './components/LanguageSwitcher';
import Welcome from './components/Welcome';
import Bd_map from './components/Bd_map';

function App() {
  return (
     <>
     <Bd_map></Bd_map>
     <LanguageSwitcher></LanguageSwitcher>
     <Welcome></Welcome>
     </>
    
  );
}

export default App;
