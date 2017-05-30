import React from 'react';
import { Divider,Label,Button,Menu} from 'semantic-ui-react';

export default class ProfileStats extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return(
      <div>
        <center> <Label size='huge' color='teal'>Profile Stats</Label></center>
        <br/>
        <Menu  size='small' inverted vertical>
          <Menu.Item name='Quiz Attended'  >
            <Label color='teal'>1</Label>
            Quiz Attended
          </Menu.Item>
          <Menu.Item name='Total Score'  >
            <Label color='teal'>1</Label>
            Total Score
          </Menu.Item>
          <Menu.Item name='Your Rank'  >
            <Label color='teal'>1</Label>
            Your Rank
          </Menu.Item>
          <Menu.Item name='Hosted Quiz'  >
            <Label color='teal'>1</Label>
            Hosted Quiz
          </Menu.Item>
        </Menu>
        <br/>
        <Divider />
          <center><Button color='red'>Create your Quiz</Button></center>
      </div>
    );
  }
}
