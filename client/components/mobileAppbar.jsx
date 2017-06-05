import React from 'react';
import {Menu,Icon,Image,Dropdown,Label,Segment} from 'semantic-ui-react';

export default class MobileAppbar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={url:'http://res.cloudinary.com/myquiz/image/upload/v1496406230/'+this.props.image}
    this.handleLogout = this.handleLogout.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }

  handleLogout()
  {
    alert('logout');
  }
  handleProfile()
  {

  }
  render()
  {

    return(
      <Menu size='massive' inverted position='center'>
        <Menu.Item size='massive' name='home' >
          <img
            className="logo"
            src={this.state.url}/>
        </Menu.Item>
        <Menu.Item  name='myQuiz' />
        <Menu.Menu size='massive' position='right'>
          <Menu.Item onClick={this.handleProfile}>
            <Image size='mini' src='https://www.kanyaanimation.com/image/avatar.png'/>
            <Dropdown size='large' color='red'>
            <Dropdown.Menu >
              <Dropdown.Item inverted color='red'>
              <center>  <Label color='brown'>{this.props.uid} </Label> </center>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
              <center>  <Label color='teal'>Profile Stats </Label> </center>
              </Dropdown.Item>

            <center>  <Dropdown.Item name='total score'>
                <Label color='brown'>Total Score </Label>
                <Label color='teal'> {this.props.tScore} </Label>
              </Dropdown.Item>
            </center>
            <center>  <Dropdown.Item>
                <Label color='brown'>Your Rank</Label>s
                <Label color='teal'>{this.props.rank}</Label>
              </Dropdown.Item>
            </center>
              <center>
                <Dropdown.Item>
                <Label color='brown'>Hosted Quiz</Label>
                <Label color='teal'>{this.props.hQuiz}</Label>
              </Dropdown.Item>
            </center>
            </Dropdown.Menu>

          </Dropdown>
          </Menu.Item>
          <Menu.Item
            name='logout'
            onClick={this.handleLogout}>
            <Icon name='power' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
