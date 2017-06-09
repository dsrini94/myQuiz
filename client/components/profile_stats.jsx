import React from 'react';
import { Divider,Label,Button,Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


export default class ProfileStats extends React.Component
{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <center> <Label size='huge' color='teal'>Profile Stats</Label></center>
        <br/>
        <Menu  size='small' inverted vertical style={{marginLeft:'10%'}}>
          <Menu.Item name='Quiz Attended'  >
            <Label color='teal'>{this.props.aQuiz}</Label>
            Quiz Attended
          </Menu.Item>
          <Menu.Item name='Total Score'  >
            <Label color='teal'>{this.props.tScore}</Label>
            Total Score
          </Menu.Item>
          <Menu.Item name='Your Rank'  >
            <Label color='teal'>{this.props.rank}</Label>
            Your Rank
          </Menu.Item>
          <Menu.Item name='Hosted Quiz'  >
            <Label color='teal'>{this.props.hQuiz}</Label>
            Hosted Quiz
          </Menu.Item>
        </Menu>
        <br/>
        <Divider />
          <Link to={'/createQuiz/'+this.props.uid}><center><Button color='red'>Create your Quiz</Button></center></Link>
      </div>
    );
  }
}
