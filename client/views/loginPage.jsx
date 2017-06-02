import React from 'react';
import { Grid, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react';
import request from 'superagent';
export default class LoginPage extends React.Component
{

  constructor()
  {
    super();
    this.state={warningMsg:'',userName:'',password:'',userPlaceHolder:'ADID',passPlaceHolder:'password'}
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUserName(e)
  {
    console.log(e.target.value);
    this.setState({userName:e.target.value});
  }
  handlePassword(e)
  {
    console.log(e.target.value);
    this.setState({password:e.target.value});
  }
  handleLogin()
  {
    if(this.state.password || this.state.userName == '')
    {
      this.setState({warningMsg: <Message negative>
                                  <Message.Header>username / password should not be left blank</Message.Header>
                                </Message>});
    }
    else {
      alert('all is fine');
    }
  }
  render()
  {

    return(
        <div>
            <Segment style={{backgroundColor:'#48506d'}}>
              <br/>
              <br/>
              <Header>
              <center> <span className='brand' style={{color:'white',fontSize:'100px'}}> myQuiz </span> </center>
               </Header>
               <br/>
               <br/>
            </Segment>
            <br />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column width={3}>
                </Grid.Column>
                <Grid.Column width={10}>
                  <center>{this.state.warningMsg}</center>
                  <br />
                  <Segment style={{backgroundColor:'#48506d'}}>
                    <br/>
                      <Header>
                      <center> <span className='brand' style={{color:'white',fontSize:'50px'}}> sign in to myQuiz </span> </center>
                       </Header>
                     <br/>
                     <br/>
                     <center><Input onChange={this.handleUserName} icon='user' iconPosition='left' placeholder={this.state.userPlaceHolder} style={{width:'400px'}}/></center>
                     <br/>
                     <center><Input onChange={this.handlePassword} icon='unlock' iconPosition='left' placeholder={this.state.passPlaceHolder} style={{width:'400px'}}/></center>
                     <br/>
                     <br/>
                      <center><Button basic size='massive' className='loginButton' onClick={this.handleLogin}>
                      <span className='loginText'  style={{color:'white'}}>login</span></Button></center>
              </Segment>
                </Grid.Column>
                <Grid.Column width={3}>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </div>

          );
  }
}
