import React from 'react';
import { Divider,Grid,Table,Header,Image,Segment  } from 'semantic-ui-react';

export default class HostedQuizTable extends React.Component
{
  render()
  {
    return (
      <Segment>
      <Table fixed inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={8}>Participants</Table.HeaderCell>
        <Table.HeaderCell width={8}>Scores</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/assets/images/avatar/small/lena.png' shape='rounded' size='mini' />
            <Header.Content style={{color:'#dce1ea'}} >
              Lena
              <Header.Subheader style={{color:'#dce1ea'}}>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          22
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/assets/images/avatar/small/matthew.png' shape='rounded' size='mini' />
            <Header.Content style={{color:'#dce1ea'}}>
              Matthew
              <Header.Subheader style={{color:'#dce1ea'}}>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          15
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/assets/images/avatar/small/lindsay.png' shape='rounded' size='mini' />
            <Header.Content style={{color:'#dce1ea'}}>
              Lindsay
              <Header.Subheader style={{color:'#dce1ea'}}>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          12
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/assets/images/avatar/small/mark.png' shape='rounded' size='mini' />
            <Header.Content style={{color:'#dce1ea'}}>
              Mark
              <Header.Subheader style={{color:'#dce1ea'}}>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          11
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
</Segment>
    );
  }
}
