import React from 'react';
import { Divider,Icon,Card,Header,Button,Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
export default class Events extends React.Component
{
  constructor(props)
  {
    super(props);
  }


  render()
  {
    return(
      <div>
        <Header as='h3' block textAlign='center' inverted>
          Events
        </Header>
        <Card.Group>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7sMBya6lx0Swy5TyETC_-cqhxZyKCUZ_-CJFZGcnf0dsExfg' />
              <Card.Header>
                React
              </Card.Header>
              <Card.Meta>
                Components
              </Card.Meta>
              <Card.Description>
                <strong>5/18/2017</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Take Quiz
                </Button>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://cdn.worldvectorlogo.com/logos/docker.svg' />
              <Card.Header>
                Docker
              </Card.Header>
              <Card.Meta>
                Containers
              </Card.Meta>
              <Card.Description>
                <strong>6/18/2017</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Take Quiz
                </Button>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='data:image/png;base64,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' />
              <Card.Header>
                NodeJs
              </Card.Header>
              <Card.Meta>
                Callback
              </Card.Meta>
              <Card.Description>
                <strong>6/18/2017</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Take Quiz
                </Button>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7sMBya6lx0Swy5TyETC_-cqhxZyKCUZ_-CJFZGcnf0dsExfg' />
              <Card.Header>
                React
              </Card.Header>
              <Card.Meta>
                Components
              </Card.Meta>
              <Card.Description>
                <strong>5/18/2017</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Take Quiz
                </Button>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7sMBya6lx0Swy5TyETC_-cqhxZyKCUZ_-CJFZGcnf0dsExfg' />
              <Card.Header>
                React
              </Card.Header>
              <Card.Meta>
                Components
              </Card.Meta>
              <Card.Description>
                <strong>5/18/2017</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Take Quiz
                </Button>
              </div>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7sMBya6lx0Swy5TyETC_-cqhxZyKCUZ_-CJFZGcnf0dsExfg' />
              <Card.Header>
                React
              </Card.Header>
              <Card.Meta>
                Components
              </Card.Meta>
              <Card.Description>
                <strong>5/18/2017</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Take Quiz
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>

        <br/>
        <Link to={'/eventList'}><Button
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
