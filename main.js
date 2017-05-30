import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dashboard from './client/views/dashboard.jsx';
import EventList from './client/views/eventList.jsx';
import SubtopicView from './client/views/subtopicView.jsx';
import LoginPage from './client/views/loginPage.jsx';
injectTapEventPlugin();

ReactDom.render(<LoginPage />,document.getElementById("content"));
