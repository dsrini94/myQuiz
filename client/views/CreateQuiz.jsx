import React from 'react';
import { Form, TextArea, Input, Segment, Accordion, Label, Message,
  Menu, Modal, Header, Icon, Button, Divider } from 'semantic-ui-react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import AttachFile from 'material-ui/svg-icons/editor/attach-file';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Snackbar from 'material-ui/Snackbar';
import _ from 'lodash'

/**
 * A contrived example using a transition between steps
 */
export default class HorizontalTransition extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      stepIndex: 0,
      snack:false,
      topic: '',
      subtopic: '',
      questions: [],
      que : '',
      correctoption : '',
      option2:'',
      option3:'',
      option4:''
    };
    this.dummyAsync=this.dummyAsync.bind(this);
    this.handleNext=this.handleNext.bind(this);
    this.handlePrev=this.handlePrev.bind(this);
    this.getStepContent=this.getStepContent.bind(this);
    this.handleDateChange=this.handleDateChange.bind(this);
    this.handleTopic=this.handleTopic.bind(this);
    this.handleSubTopic=this.handleSubTopic.bind(this);
    this.handleAddQuestions=this.handleAddQuestions.bind(this);
    this.handleDeleteChip=this.handleDeleteChip.bind(this);
    this.handleTouchTapChip=this.handleTouchTapChip.bind(this);
    this.handleQuestion=this.handleQuestion.bind(this);
    this.handleCorrectOption=this.handleCorrectOption.bind(this);
    this.handleOption2=this.handleOption2.bind(this);
    this.handleOption3=this.handleOption3.bind(this);
    this.handleOption4=this.handleOption4.bind(this);
    this.handleSnackClose=this.handleSnackClose.bind(this);
  }

  dummyAsync(cb){
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext(){
    var a = this.state.stepIndex;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: a + 1,
        finished: a >= 2
      }));
    }
  };

  handlePrev(){
    var a = this.state.stepIndex;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: a - 1
      }));
    }
  };

  handleTopic(e){
    var topic = e.target.value;
    this.setState({topic: topic});
  }

  handleSubTopic(e){
    var subtopic = e.target.value;
    this.setState({subtopic:subtopic});
  }

  handleQuestion(e){
    var que = e.target.value;
    this.setState({que:que});
  }

  handleCorrectOption(e){
    var corOpt = e.target.value;
    this.setState({correctoption:corOpt});
  }

  handleOption2(e){
    var opt = e.target.value;
    this.setState({option2:opt});
  }

  handleOption3(e){
    var opt = e.target.value;
    this.setState({option3:opt});
  }

  handleOption4(e){
    var opt = e.target.value;
    this.setState({option4:opt});
  }

  handleAddQuestions(){
    var questions = this.state.questions;
    var optArr = [];
    optArr.push(this.state.correctoption);
    optArr.push(this.state.option2);
    optArr.push(this.state.option3);
    optArr.push(this.state.option4);
    var obj = {
        question : this.state.que,
        options : optArr,
        correctoption : this.state.correctoption
    };
    questions.push(obj);
    this.setState({questions:questions, que:'',correctoption:'',option2:'',option3:'',option4:'',snack:true});
  }

  handleDeleteChip(t, i){
    console.log('deleted',i);
  }

  handleTouchTapChip(t, i){
    console.log('touched',i);
  }

  handleSnackClose(){
    this.setState({snack:false});
  }

  getStepContent(stepIndex) {
    var prev=null;
    if(stepIndex>0){
      prev=<RaisedButton style={{margin:"20px",marginTop:"40px"}} label="Prev" onClick={this.handlePrev}/>
  }

    var controls=<div>
                  {prev}
                  <RaisedButton style={{margin:"20px",marginTop:"40px"}} primary={true} label={this.state.stepIndex==3?"Launch":"Next"} onClick={this.handleNext}/>
                </div>

   switch (stepIndex) {
     case 0:
       return (
         <div>
         {/* <Menu widths={3} style={{backgroundColor:'#37474F'}}>
           <Menu.Item>Topic</Menu.Item>
           <Menu.Item></Menu.Item>
           <Menu.Item></Menu.Item>
         </Menu> */}
         <center style={{marginTop:"10px"}}>
         <Form.Field>
         <Input placeholder='Topic' onChange={this.handleTopic} />
         </Form.Field>
           {controls}
           </center>
         </div>
       );
     case 1:
       return (
         <div>
           <Menu widths={2} style={{backgroundColor:'#37474F'}}>
             <Menu.Item><span style={{color:'White'}}>{this.state.topic}</span></Menu.Item>
             <Menu.Item></Menu.Item>
           </Menu>
         <Divider/>
         <center style={{marginTop:"10px"}}>
         <Form.Field>
         <Input placeholder='Sub Topic' onChange={this.handleSubTopic} />
         </Form.Field>
           {controls}
           </center>
         </div>
       );
     case 2:
       return (
         <div>
           <Menu widths={2} style={{backgroundColor:'#37474F'}}>
             <Menu.Item><span style={{color:'White'}}>{this.state.topic}</span></Menu.Item>
             <Menu.Item><span style={{color:'White'}}>{this.state.subtopic}</span></Menu.Item>
           </Menu>
         <Divider/>
         <Form style={{padding:"10px"}} >
            <TextArea placeholder='Question' value={this.state.que} autoHeight onChange={this.handleQuestion} />
          </Form>
        <IconButton style={{float:"right"}}><AttachFile/></IconButton>
        <Header>Options</Header>
        <Input style={{padding:"10px"}} value={this.state.correctoption} placeholder='Correct Option' onChange={this.handleCorrectOption} />
        <Input style={{padding:"10px"}} value={this.state.option2} placeholder='Option' onChange={this.handleOption2}/>
        <Input style={{padding:"10px"}} value={this.state.option3} placeholder='Option' onChange={this.handleOption3}/>
        <Input style={{padding:"10px"}} value={this.state.option4} placeholder='Option' onChange={this.handleOption4}/>
        <RaisedButton style={{marginLeft:"10px"}} label="Add" primary={true} onTouchTap={this.handleAddQuestions} />
           <center>{controls}</center>
        <Snackbar
           open={this.state.snack}
           message="Question has been added!"
           autoHideDuration={2000}
           onRequestClose={this.handleSnackClose}
         />
         </div>
       );
     case 3:
       return(
         <div>
         <Header><span style={{color:'white'}}>Launch</span></Header>
         <Divider/>

            <DatePicker hintText="Quiz Date" mode="landscape" />

         <TimePicker hintText="Start Time" autoOk={true}/>

         <TimePicker hintText="End Time" autoOk={true}/>
         <center>{controls}</center>
        </div>
       )
     default:
       return 'You\'re a long way from home sonny jim!';
    }
  }

  handleDateChange(date){
    this.setState({
       startDate: date
     });
  }

  render() {
    console.log('obj que : ',this.state.que, this.state.correctoption);
    console.log('l : ', this.state.questions);
    var QuePreview = '';
    var preview = this.state.questions.map(function(item, i){
      return(
        <Segment.Group horizontal>
          <Segment style={{backgroundColor:'#37474F', color:'white', width:'40%'}}>{item.question}</Segment>
          <Segment style={{backgroundColor:'#C5E1A5', width:'15%'}}>{item.options[0]}</Segment>
          <Segment style={{width:'15%'}}>{item.options[1]}</Segment>
          <Segment style={{width:'15%'}}>{item.options[2]}</Segment>
          <Segment style={{width:'15%'}}>{item.options[3]}</Segment>
        </Segment.Group>
      );
    });
    if (this.state.questions.length>0) {
      QuePreview =  <div>
                      <Divider horizontal>Question Preview</Divider>
                      <Segment style={{backgroundColor:'#0097A7'}}>
                        {preview}
                      </Segment>
                    </div>
    }
    var display = <div>
                    <Segment style={{backgroundColor:'#37474F'}} >
                      <Stepper activeStep={this.state.stepIndex}>
                       <Step>
                           <StepLabel style={{color:'white'}}>Choose / Create your Topic</StepLabel>
                       </Step>
                       <Step>
                           <StepLabel style={{color:'white'}}>Choose / Create your Sub Topic</StepLabel>

                       </Step>
                       <Step>
                           <StepLabel style={{color:'white'}}>Add Questions</StepLabel>

                       </Step>
                       <Step>
                       <StepLabel style={{color:'white'}}>Launch Quiz</StepLabel>
                       </Step>
                      </Stepper>
                    </Segment>
                    <Segment raised style={{margin:"20px",backgroundColor:'#e57373'}}>
                      <ExpandTransition loading={this.state.loading} open={true}>
                        {this.getStepContent(this.state.stepIndex)}
                      </ExpandTransition>
                    </Segment>
                    {QuePreview}
                  </div>
    return(
      <div>
        {display}
      </div>
    );
  }
}
