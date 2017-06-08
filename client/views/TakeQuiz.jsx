import React from 'react';
import { Menu, Button, Segment, Header, Icon, Modal, Radio, Progress, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Feedback from './../components/Feedback.jsx';
import Request from 'superagent';

export default class TakeQuiz extends React.Component {
  constructor(props) {
    super();
    this.state={
      submit : false,
      percent : 100,
      timer : 30,
      reduction : 3.3333333,
      ajax : true,
      quizData : []
    }
    this.handleOpenConfirmSubmit=this.handleOpenConfirmSubmit.bind(this);
    this.handleCloseConfirmSubmit=this.handleCloseConfirmSubmit.bind(this);
    this.handleFinalSubmit=this.handleFinalSubmit.bind(this);
  }
  componentDidMount() {
    setInterval(() => this.timer(),1000);
    if (this.state.ajax) {
      Request.post('/quiz')
            .send({topic:this.props.match.params.topic, subtopic:this.props.match.params.subtopic, date : this.props.match.params.date})
            .end((err, res)=>{
              this.setState({ajax:false, quizData: JSON.parse(res.text).que});
      });
    }
  }
  timer(){
    var currentTime=this.state.timer;
    var per = this.state.percent;
    var red = this.state.reduction;
    this.setState({percent:per-red,timer:currentTime-1});
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
    var colorStyle={};
    if (this.state.timer<=10) {
      colorStyle = {
        backgroundColor: '#e57373'
      }
    }
    else {
      colorStyle={
        backgroundColor: '#42A4F4'
      }
    }
    var question = this.state.quizData.map((item,i)=>{
      return(
        item.questions.map((item,i)=>{
          return(
            <Segment.Group key={i}>
              <Segment raised style={colorStyle}>
                <h4>{item.question}</h4>
              </Segment>
              <Segment>
                <Radio label={item.options[0]}  />
                <Radio label={item.options[1]}  />
                <Radio label={item.options[2]}  />
                <Radio label={item.options[3]}  />
              </Segment>
            </Segment.Group>
          );
        })
      );
    });
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
          <Menu fixed='true'>
          <Grid className='takeQuizMenu'>
            <Grid.Row>
              <Grid.Column width={2}>
                <center><h1 style={{color : "#757575"}}>ReactJS</h1></center>
              </Grid.Column>
              <Grid.Column width={12}>
                  <Progress percent={this.state.percent} indicating />
              </Grid.Column>
              <Grid.Column width={2} className='timer' >
                <Icon name='hourglass half' size='large'/><b>{remTime}</b>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Menu>
        <br />
        <br />
        <br />
        <br />
        <Grid className= 'takeQuizQue'>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={14}>
              <Segment.Group style={{backgroundColor:'#757575'}}>
                {question}
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
