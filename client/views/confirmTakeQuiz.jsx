import React from 'react';
import {Button, Message} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class confirmTakeQuiz extends React.Component{
  render(){
    return(
      <div>
        <center>
          <Message visible  header='Confirm Start!'
            content='Click the start button below to start the quiz.
            Note: Once the quiz gets started you can not cancel.'/>
          <Button.Group>
            <Button>Cancel</Button>
            <Button.Or />
            <Link to={'/takeQuiz/quiz'}><Button positive>Start</Button></Link>
          </Button.Group>
        </center>
      </div>
    );
  }
}
