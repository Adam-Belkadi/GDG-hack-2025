import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LogInPage from './pages/Auth/LogIn/Page';
import SignUp from './pages/Auth/SignUp/Page';
import Events from './pages/Event/Page';
import PostsInC from './pages/Communities/Posts/Page';
import EventsInC from './pages/Communities/Events/Page';
import RankingInC from './pages/Communities/Ranking/Page';
import Ranking from './pages/Ranking/Page';
import Communities from './pages/Communities/Page';

import Body from './Body';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Navigate to="/Auth/logIn" replace />} />
          <Route path="Auth/LogIn" element={<LogInPage />} />
          <Route path="Auth/SignUp" element={<SignUp />} />
          <Route path="Events" element={<Events />} />
          <Route path='Communities' element={<Communities></Communities>}></Route>
          <Route path='Ranking' element={<Ranking></Ranking>}></Route>
          <Route path="Communities/:communityId/Posts" element={<PostsInC />} /> 
          <Route path="Communities/:communityId/Events" element={<EventsInC />} /> 
          <Route path="Communities/:communityId/Ranking" element={<RankingInC />} /> 

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
