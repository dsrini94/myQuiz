import React from 'react';
import { Segment,List,Divider,Icon,Card,Header,Button,Image } from 'semantic-ui-react';

export default class MbileEvents extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleKnowMore = this.handleKnowMore.bind(this);
  }

  handleKnowMore()
  {
    alert('know more');
  }
  render()
  {
    return(
      <div>
        <Header as='h3' block textAlign='center' inverted>
          Events
        </Header>
        <Segment color='brown' >
          <List divided verticalAlign='middle' >
            <List.Item>
              <List.Content floated='right'>
                <Button color='linkedin'>
                  Take Quiz
                </Button>
              </List.Content>
              <Image
                avatar
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE29MrgLlc6QlCUaH2y1TYqBBPvv2oRAw3-SN_YFtGH700SPIe' />
              <List.Content>
                <List.Header as='a'>
                  React,States and Props
                </List.Header>
                <List.Header>  5/22/2017 </List.Header>
              </List.Content>
            </List.Item>
            <br/>
            <List.Item>
              <List.Content floated='right'>
                <Button color='linkedin'>
                  Take Quiz
                </Button>
              </List.Content>
              <Image
                avatar
                src='https://nodejs.org/static/images/logos/nodejs-2560x1440.png' />
              <List.Content>
                <List.Header as='a'>NodeJs,Callback</List.Header>
                <List.Header>  5/22/2017 </List.Header>
              </List.Content>
            </List.Item>
            <br/>
            <List.Item>
              <List.Content floated='right'>
                <Button color='linkedin'>
                  Take Quiz
                </Button>
              </List.Content>
              <Image
                avatar
                src='https://www.docker.com/sites/default/files/social/docker-facebook-share.png' />
              <List.Content>
                <List.Header as='a'>Docker,Containers</List.Header>
                <List.Header>  5/22/2017 </List.Header>
              </List.Content>
            </List.Item>
            <br/>
            <List.Item>
              <List.Content floated='right'>
                <Button color='linkedin'>
                  Take Quiz
                </Button>
              </List.Content>
              <Image
                avatar
                src='http://4.bp.blogspot.com/-Tug31rWl-Ag/Ut-LPbsWhNI/AAAAAAAABgg/N69RN1whKG8/s1600/java_tech.jpg' />
              <List.Content>
                <List.Header as='a'>Java,Threads</List.Header>
                <List.Header>  5/22/2017 </List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <center>
                <Button color='instagram'>
                  Know more events
                </Button>
              </center>
            </List.Item>
          </List>
        </Segment>
      </div>
    );
  }
}
