import React from 'react';
import { Divider,Icon,Card,Header,Button,Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Request from 'superagent';

export default class Events extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      eventsArr : []
    };
  }

  componentDidMount(){
    console.log('inside events',this.props);
    var that = this;
    Request.get('/events').end(function(err, res){
      that.setState({eventsArr : JSON.parse(res.text).eventsArr});
    });
  }

  render(){
    var that = this;
    var cardContent = this.state.eventsArr.map(function(item, i){
      var d = new Date(item.date);
      var month = d.getMonth()+1;
      var date = d.getDate()+'/'+month+'/'+d.getFullYear();
      return(
        <Card key={i}>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src={item.topicImgURL}
            />
            <Card.Header>
              {item.topic}
            </Card.Header>
            <Card.Meta>
              {item.subtopic}
            </Card.Meta>
            <Card.Description>
              <strong>{date}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Link to={'/takeQuiz/confirm/'+item.topic+'/'+item.subtopic+'/'+item.date+'/'+that.props.uid}>
                <Button basic color='green'>
                  Take Quiz
                </Button>
              </Link>
            </div>
          </Card.Content>
        </Card>
      );
    });
    return(
      <div>
        <Header as='h3' block textAlign='center' inverted>
          Events
        </Header>
        <Card.Group >
          {cardContent}
        </Card.Group>

        <br/>
        <Link to={'/eventList/:{this.props.image}' } ><Button
          animated='fade'
          floated='right'
          color='red'>
          <Button.Content visible>
            know more events
          </Button.Content>
          <Button.Content hidden>
            <Icon name='angle double right' />
          </Button.Content>
        </Button></Link>
        <br/>
        <br/>
        <Divider />
      </div>
    );
  }
}
