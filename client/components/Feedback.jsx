import React from 'react';
import {Message, Segment, Icon, Header, Radio, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class Feedback extends React.Component{
  constructor(props){
    super();
    this.state={
      value:''
    }
  }
  render(){
    return(
      <div>
        <Message visible  header='Submitted!'
          content='Your Quiz has been submitted successfully. Provide your valuable feedback below' icon='info' />
        <Segment.Group >
          <Segment>
            <Header as='h1'>
              <Icon name='talk' size='small'/>
              <Header.Content>
                Feedback
              </Header.Content>
            </Header>
          </Segment>
          <Segment.Group>
            <Segment> <h4>The questions are relevent to the topic</h4> <br />
              <Radio label="Strongly Disagree" value='Strongly Disagree' checked={this.state.value === 'this'}/>
              <Radio label="Disagree" value='Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Neutral" value='Neutral' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Agree" value='Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Strongly Agree" value='Strongly Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
            </Segment>
            <Segment> <h4>The questions covers most of the portion in the topic</h4> <br />
              <Radio label="Strongly Disagree" value='Strongly Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Disagree" value='Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Neutral" value='Neutral' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Agree" value='Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Strongly Agree" value='Strongly Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
            </Segment>
            <Segment> <h4>The questions are tougher to answer</h4> <br />
              <Radio label="Strongly Disagree" value='Strongly Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Disagree" value='Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Neutral" value='Neutral' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Agree" value='Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Strongly Agree" value='Strongly Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
            </Segment>
            <Segment> <h4>The time allocated for the quiz is sufficient</h4> <br />
              <Radio label="Strongly Disagree" value='Strongly Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Disagree" value='Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Neutral" value='Neutral' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Agree" value='Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Strongly Agree" value='Strongly Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
            </Segment>
            <Segment> <h4>The quiz increased your technical confidence</h4> <br />
              <Radio label="Strongly Disagree" value='Strongly Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Disagree" value='Disagree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Neutral" value='Neutral' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Agree" value='Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
              <Radio label="Strongly Agree" value='Strongly Agree' checked={this.state.value === 'this'} style={{marginLeft:'20px'}}/>
            </Segment>
          </Segment.Group>
        </Segment.Group>
        <center><Link to={'/takeQuiz/result'}><Button inverted color='green'>Submit and View Scores</Button></Link></center>
      </div>
    );
  }
}
