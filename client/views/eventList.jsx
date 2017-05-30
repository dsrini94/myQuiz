import React from 'react';
import EventMenu from './../components/eventMenu.jsx'
import { Grid,Button,Icon,Popup} from 'semantic-ui-react';
import Appbar from './../components/appbar.jsx';
export default class EventList extends React.Component
{
  render()
  {
    return(
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={16}>
            <Appbar/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={15}>
          <EventMenu />
          </Grid.Column>
          <Grid.Column>
            <Popup inverted
              trigger={<Button className="circular ui icon button" size='huge' color='red' id='createQuizButton'>
                        <Icon name="add"></Icon>
                      </Button>}
              content='Create a new topic'/>

          </Grid.Column>
        </Grid.Row>
      </Grid>
      );
  }
}
