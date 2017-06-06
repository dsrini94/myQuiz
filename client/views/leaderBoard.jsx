import React from 'react';
import Appbar from './../components/appbar.jsx';
import { Divider,Grid,Segment,Table,Header,Image,Progress  } from 'semantic-ui-react';

export default class Leaderboard extends React.Component
{
  render()
  {
    return(
      <div>
        <Appbar />
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={16}>
              <Segment>
                <Header as='h3' block textAlign='center' inverted>
                  <span style={{color:'#dce1ea'}} className='leaderboardHeader'>Our Leaders</span>
                </Header>
                <Divider horizontal>
                  Your Position
                </Divider>
                <Table singleLine inverted>

                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell width={1}>Score</Table.HeaderCell>
                      <Table.HeaderCell width={15}>Name</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row >
                      <Table.Cell>
                        22
                      </Table.Cell>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Image src='http://www.lte-esafety.co.uk/wp-content/uploads/2015/06/avatar.png' shape='rounded' size='mini' />
                          <Header.Content style={{color:'#dce1ea'}}>
                            SR354095
                            <Header.Subheader style={{color:'#dce1ea'}}>Human Resources</Header.Subheader>
                          </Header.Content>
                        </Header>
                        <Progress percent={80} size='small' color='teal'>
                          <span style={{color:'#dce1ea'}}>Rank 1</span>
                        </Progress>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                <Divider />
                  <Table singleLine inverted>

                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell width={1}>Score</Table.HeaderCell>
                        <Table.HeaderCell width={15}>Name</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
      <Table.Body>
        <Table.Row >
          <Table.Cell>
            22
          </Table.Cell>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='http://www.lte-esafety.co.uk/wp-content/uploads/2015/06/avatar.png' shape='rounded' size='mini' />
              <Header.Content style={{color:'#dce1ea'}}>
                SR354095
                <Header.Subheader style={{color:'#dce1ea'}}>Human Resources</Header.Subheader>
              </Header.Content>
            </Header>
            <Progress percent={80} size='small' color='teal'>
              <span style={{color:'#dce1ea'}}>Rank 1</span>
            </Progress>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            15
          </Table.Cell>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNBx0msMzSif0RJPTzBHELtmPzhe-4y5txYNfGK4QoJbSnzzN' shape='rounded' size='mini' />
              <Header.Content style={{color:'#dce1ea'}}>
                RU353437
                <Header.Subheader style={{color:'#dce1ea'}}>Fabric Design</Header.Subheader>
              </Header.Content>
            </Header>
            <Progress percent={60} size='small'  color='teal'>
              <span style={{color:'#dce1ea'}}>Rank 2</span>

            </Progress>
          </Table.Cell>

        </Table.Row>
        <Table.Row>
          <Table.Cell>
            12
          </Table.Cell>
          <Table.Cell >
            <Header as='h4' image>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzTfqeVVaiXQ_QeKrcc246WC04FNcO4tCGYxeawhTdFs96QVw' shape='rounded' size='mini' />
              <Header.Content style={{color:'#dce1ea'}}>
                VA443322
                <Header.Subheader style={{color:'#dce1ea'}}>Entertainment</Header.Subheader>

              </Header.Content>
            </Header>
            <Progress percent={50} size='small'  color='teal'>
              <span style={{color:'#dce1ea'}}>Rank 3</span>
            </Progress>
          </Table.Cell>

        </Table.Row>
        <Table.Row>
          <Table.Cell>
            11
          </Table.Cell>
          <Table.Cell>
            <Header as='h4' image>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrpLyBVUtD-_Ej_Kckce_w069hMLma5iY4w9BDlIy40esgpoB' shape='rounded' size='mini' />
              <Header.Content style={{color:'#dce1ea'}}>
                ED445566
                <Header.Subheader style={{color:'#dce1ea'}}>Executive</Header.Subheader>
              </Header.Content>
            </Header>
            <Progress percent={10} size='small' color='teal'>
              <span style={{color:'#dce1ea'}}>Rank 4</span>
            </Progress>
          </Table.Cell>

        </Table.Row>
      </Table.Body>
    </Table>
                </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
