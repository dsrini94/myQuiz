import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LoginPage from './client/views/loginPage.jsx';
import Dashboard from './client/views/dashboard.jsx';
import EventList from './client/views/eventList.jsx';
import SubtopicView from './client/views/subtopicView.jsx';
import confirmTakeQuiz from './client/views/confirmTakeQuiz.jsx';
import TakeQuiz from './client/views/TakeQuiz.jsx';
import Feedback from './client/components/Feedback.jsx';
import CreateQuiz from './client/views/CreateQuiz.jsx';
import Leaderboard from './client/views/leaderBoard.jsx';
injectTapEventPlugin();

ReactDom.render(
  <MuiThemeProvider>
    <HashRouter>
      <div>
        <Route exact path='/' component={LoginPage} />
        <Route path='/dashboard/:aQuiz/:tScore/:rank/:hQuiz/:image/:userId' component={Dashboard} />
        <Route path='/eventList/:tScore' component={EventList} />
        <Route path='/subTopic' component={SubtopicView} />
        <Route path='/createQuiz' component={CreateQuiz} />
        <Route path='/takeQuiz/confirm' component={confirmTakeQuiz} />
        <Route path='/takeQuiz/quiz' component={TakeQuiz} />
        <Route path='/leaderboard' component={Leaderboard} />
      </div>
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById("content")
);
