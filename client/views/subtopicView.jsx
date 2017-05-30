import React from 'react';
import { Grid,Button,Icon,Popup} from 'semantic-ui-react';
import Appbar from './../components/appbar.jsx';
import SubtopicList from './../components/subtopicList.jsx';

export default class SubtopicView extends React.Component
{
  render()
  {
    return(<Grid celled='internally'>
            <Grid.Row>
              <Grid.Column width={16}>
                <Appbar/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row >
              <Grid.Column width={16}>
                <SubtopicList />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
  }
}
