import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
