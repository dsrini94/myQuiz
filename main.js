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
import QuizAdded from './client/components/QuizAdded.jsx';
import Leaderboard from './client/views/leaderBoard.jsx';
import QuizResult from './client/components/QuizResult.jsx';
injectTapEventPlugin();

ReactDom.render(
  <MuiThemeProvider>
    <HashRouter>
      <div>
        <Route exact path='/' component={LoginPage} />
        <Route path='/dashboard/:aQuiz/:tScore/:rank/:hQuiz/:image/:userId' component={Dashboard} />
        <Route path='/eventList/:tScore' component={EventList} />
        <Route path='/subTopic/:topicName' component={SubtopicView} />
        <Route path='/createQuiz' component={CreateQuiz} />
        <Route path='/quizAdded/:date/:time' component={QuizAdded} />
        <Route path='/takeQuiz/confirm/:topic/:subtopic/:date/:uid' component={confirmTakeQuiz} />
        <Route path='/takeQuiz/quiz/:topic/:subtopic/:date/:uid' component={TakeQuiz} />
        <Route path='/takeQuiz/result/:topic/:subtopic/:date/:selected/:uid' component={QuizResult} />
        <Route path='/leaderboard' component={Leaderboard} />
      </div>
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById("content")
);
