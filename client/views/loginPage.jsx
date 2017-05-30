import React from 'react';
import { Grid, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react';

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
                      <center> <span className='brand' style={{color:'white',fontSize:'50px'}}> Login </span> </center>
                       </Header>
                     <br/>
                     <br/>
                     <center><Input icon='user' iconPosition='left' placeholder='ADID' style={{width:'400px'}}/></center>
                     <br/>
                     <center><Input icon='unlock' iconPosition='left' placeholder='password' style={{width:'400px'}}/></center>
                     <br/>
                     <br/>
                    <center><Button basic size='massive' ><span className='loginButton' >login</span></Button></center>
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
