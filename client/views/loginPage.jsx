import React from 'react';
import { Grid, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
export default class LoginPage extends React.Component
{
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
                  <Segment style={{backgroundColor:'#48506d'}}>
                    <br/>
                      <Header>
                      <center> <span className='brand' style={{color:'white',fontSize:'50px'}}> sign in to myQuiz </span> </center>
                       </Header>
                     <br/>
                     <br/>
                     <center><Input icon='user' iconPosition='left' placeholder='ADID' style={{width:'400px'}}/></center>
                     <br/>
                     <center><Input icon='unlock' iconPosition='left' placeholder='password' style={{width:'400px'}}/></center>
                     <br/>
                     <br/>
                    <Link to={'/dashboard'}>
                      <center><Button basic size='massive' className='loginButton' >
                      <span className='loginText'  style={{color:'white'}}>login</span></Button></center>
                    </Link>
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
