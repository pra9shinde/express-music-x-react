import './App.css';
import CenterNav from './components/CenterNav';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className='container'>
      <div className='left-container'>
        <SideNav />
      </div>
      <div className='right-container'>
        <CenterNav />

        {/* <h1>Home</h1> */}
      </div>
    </div>
  );
}

export default App;
