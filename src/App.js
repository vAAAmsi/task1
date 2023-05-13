import logo from './logo.svg';
import './App.css';
import DataAquring from './cards/cards.js';
import { Route, Routes } from 'react-router-dom';
import TeamCreaction from './team/teamcreation';
import ShowTeam from './team/showTeam';
function App() {
  return (
    <div >
      {/* <DataAquring/> */}
      <Routes>
          <Route path='/' element={<DataAquring/>}></Route>
          <Route path='/team-creation' element={<TeamCreaction/>}></Route>
          <Route path='/show-team' element={<ShowTeam/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
