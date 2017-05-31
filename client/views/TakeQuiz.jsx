import React from 'react';
import { Menu, Button, Segment, Header, Icon, Modal, Radio, Progress, Grid } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Feedback from './../components/Feedback.jsx';

export default class TakeQuiz extends React.Component {
  constructor(props) {
    super();
    this.state={
      submit : false,
      percent : 0,
      timer : 20
    }
    this.handleOpenConfirmSubmit=this.handleOpenConfirmSubmit.bind(this);
    this.handleCloseConfirmSubmit=this.handleCloseConfirmSubmit.bind(this);
    this.handleFinalSubmit=this.handleFinalSubmit.bind(this);
  }
  componentDidMount() {
    setInterval(() => this.timer(),1000);
  }
  timer(){
    if (this.state.timer===0) {

    }
    var currentTime=this.state.timer;
    this.setState({timer:currentTime-1});
  }
  handleOpenConfirmSubmit(){
    this.setState({submit:true});
  }
  handleCloseConfirmSubmit(){
    this.setState({submit:false});
  }
  handleFinalSubmit(){
    this.setState({submit:false, timer:0});
  }
  render(){
    var remTime = this.state.timer+'s';
    var modal=<Modal basic size='small' open={this.state.submit} >
                <Header icon='warning' content='Confirm Submit' />
                <Modal.Content>
                  <p>Are you sure you want to submit?</p>
                </Modal.Content>
                <Modal.Actions>
                  <Button basic color='red' inverted onClick={this.handleCloseConfirmSubmit} >
                    <Icon name='remove' /> No
                  </Button>
                  <Button color='green' inverted onClick={this.handleFinalSubmit} >
                    <Icon name='checkmark' /> Yes
                  </Button>
                </Modal.Actions>
              </Modal>
    if (this.state.timer<=0) {
      return(
        <Feedback />
      );
    }
    else {
      return(
        <div>
        <Menu fixed='top'>
          <Menu.Menu>
            <center><h1 style={{color : "#42A4F4"}}>ReactJS</h1></center>
          </Menu.Menu>
          <Menu.Menu width='20' position='right'>
            <Menu.Item><Icon name='hourglass half' size='large'/><b>{remTime}</b></Menu.Item>
          </Menu.Menu>
        </Menu>
        <br />
        <br />
        <br />
        <br />
        <Grid>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={14}>
              <Segment.Group>
                <Segment.Group>
                  <Segment raised style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
                <Segment.Group>
                  <Segment style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
                <Segment.Group>
                  <Segment style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
                <Segment.Group>
                  <Segment style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
                <Segment.Group>
                  <Segment style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
                <Segment.Group>
                  <Segment style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
                <Segment.Group>
                  <Segment style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
                <Segment.Group>
                  <Segment style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
                <Segment.Group>
                  <Segment style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
                <Segment.Group>
                  <Segment style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
                <Segment.Group>
                  <Segment style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
                <Segment.Group>
                  <Segment style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
                <Segment.Group>
                  <Segment style={{backgroundColor : "#42A4F4"}}>
                    <h4>What is ReactJS</h4>
                  </Segment>
                  <Segment>
                    <Radio label='framework'  />
                  </Segment>
                </Segment.Group>
              </Segment.Group>
              <br/>
              <center>
                <Button inverted color='green' onClick={this.handleOpenConfirmSubmit} >Submit</Button>
              </center>
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
          {modal}
        </Grid>
      </div>
      );
    }
  }
}
