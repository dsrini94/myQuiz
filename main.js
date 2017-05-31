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
injectTapEventPlugin();

ReactDom.render(
  <MuiThemeProvider>
    <HashRouter>
      <div>
        <Route exact path='/' component={LoginPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/eventList' component={EventList} />
        <Route path='/createQuiz' component={CreateQuiz} />
        <Route path='/takeQuiz/confirm' component={confirmTakeQuiz} />
        <Route path='/takeQuiz/quiz' component={TakeQuiz} />
      </div>
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById("content")
);
