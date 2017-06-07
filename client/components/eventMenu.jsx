import React from 'react'
import { Divider,Card,Icon,Grid, Menu, Segment,Header,Reveal,Image,Statistic,Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
export default class EventMenu extends React.Component {

  constructor(){
    super();
    this.state = { activeItem: 'bio' ,displayArea:''}
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
  }
  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as='h3' block textAlign='center' inverted>
              Events
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row  columns={4}>

          <Grid.Column  >
              <Card>
                <Reveal animated='move up'>
                  <Reveal.Content visible>
                    <Image
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7sMBya6lx0Swy5TyETC_-cqhxZyKCUZ_-CJFZGcnf0dsExfg'
                      size='large' />
                  </Reveal.Content>
                  <Reveal.Content hidden >
                    <Segment color='yellow' inverted>
                      <center>
                        <Statistic size='small'>
                          <Statistic.Value>10</Statistic.Value>
                          <Statistic.Label>Subtopics</Statistic.Label>
                          <Divider />
                          <Statistic.Value>555</Statistic.Value>
                          <Statistic.Label>Particiapnts</Statistic.Label>
                        </Statistic>
                      </center>
                    </Segment>
                  </Reveal.Content>
                </Reveal>
                <Card.Content>
                  <Card.Header>
                    React
                  </Card.Header>
                </Card.Content>
<Link to={'/subTopic'}><Button attached='bottom' color='olive'>Explore</Button></Link>
              </Card>
              <Divider />
            </Grid.Column>

              <Grid.Column  >
              <Card>
                <Reveal animated='move up'>
                  <Reveal.Content visible>
                    <Image
                      src='http://materialdesignblog.com/wp-content/uploads/2015/02/logom.png'
                      size='large' />
                  </Reveal.Content>
                  <Reveal.Content hidden >
                    <Segment color='yellow' inverted>
                      <center>
                        <Statistic size='small'>
                          <Statistic.Value>10</Statistic.Value>
                          <Statistic.Label>Subtopics</Statistic.Label>
                          <Divider />
                          <Statistic.Value>555</Statistic.Value>
                          <Statistic.Label>Particiapnts</Statistic.Label>
                        </Statistic>
                      </center>
                    </Segment>
                  </Reveal.Content>
                </Reveal>
                <Card.Content>
                  <Card.Header>
                    Material UI
                  </Card.Header>
                </Card.Content>
<Button attached='bottom' color='olive'>Explore</Button>
              </Card>
              <Divider />
            </Grid.Column>

              <Grid.Column  >
              <Card>
                <Reveal animated='move up'>
                  <Reveal.Content visible>
                    <Image
                      src='https://www.seeklogo.net/wp-content/uploads/2015/10/mongodb-logo-vector-download.jpg'
                      size='large' />
                  </Reveal.Content>
                  <Reveal.Content hidden >
                    <Segment color='yellow' inverted>
                      <center>
                        <Statistic size='small'>
                          <Statistic.Value>10</Statistic.Value>
                          <Statistic.Label>Subtopics</Statistic.Label>
                          <Divider />
                          <Statistic.Value>555</Statistic.Value>
                          <Statistic.Label>Particiapnts</Statistic.Label>
                        </Statistic>
                      </center>
                    </Segment>
                  </Reveal.Content>
                </Reveal>
                <Card.Content>
                  <Card.Header>
                    MongoDB
                  </Card.Header>
                </Card.Content>
<Button attached='bottom' color='olive'>Explore</Button>
              </Card>
              <Divider />
            </Grid.Column>

              <Grid.Column  >
              <Card>
                <Reveal animated='move up'>
                  <Reveal.Content visible>
                    <Image
                      src='https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg'
                      size='large' />
                  </Reveal.Content>
                  <Reveal.Content hidden >
                    <Segment color='yellow' inverted>
                      <center>
                        <Statistic size='small'>
                          <Statistic.Value>10</Statistic.Value>
                          <Statistic.Label>Subtopics</Statistic.Label>
                          <Divider />
                          <Statistic.Value>555</Statistic.Value>
                          <Statistic.Label>Particiapnts</Statistic.Label>
                        </Statistic>
                      </center>
                    </Segment>
                  </Reveal.Content>
                </Reveal>
                <Card.Content>
                  <Card.Header>
                    NodeJs
                  </Card.Header>
                </Card.Content>
<Button attached='bottom' color='olive'>Explore</Button>
              </Card>
              <Divider />
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Reveal animated='move up'>
                  <Reveal.Content visible>
                    <Image
                      src='data:image/png;base64,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'
                      size='large' />
                  </Reveal.Content>
                  <Reveal.Content hidden >
                    <Segment color='yellow' inverted>
                      <center>
                        <Statistic size='small'>
                          <Statistic.Value>10</Statistic.Value>
                          <Statistic.Label>Subtopics</Statistic.Label>
                          <Divider />
                          <Statistic.Value>555</Statistic.Value>
                          <Statistic.Label>Particiapnts</Statistic.Label>
                        </Statistic>
                      </center>
                    </Segment>
                  </Reveal.Content>
                </Reveal>
                <Card.Content>
                  <Card.Header>
                    Bootstrap
                  </Card.Header>
                </Card.Content>
<Button attached='bottom' color='olive'>Explore</Button>
              </Card>
              <Divider />
            </Grid.Column>

              <Grid.Column  >
              <Card>
                <Reveal animated='move up'>
                  <Reveal.Content visible>
                    <Image
                      src='http://www.logotypes101.com/free_vector_logo_png/93480/830812341256B99B32E1A9F242BB9F5F/CSS3'
                      size='large' />
                  </Reveal.Content>
                  <Reveal.Content hidden >
                    <Segment color='yellow' inverted>
                      <center>
                        <Statistic size='small'>
                          <Statistic.Value>10</Statistic.Value>
                          <Statistic.Label>Subtopics</Statistic.Label>
                          <Divider />
                          <Statistic.Value>555</Statistic.Value>
                          <Statistic.Label>Particiapnts</Statistic.Label>
                        </Statistic>
                      </center>
                    </Segment>
                  </Reveal.Content>
                </Reveal>
                <Card.Content>
                  <Card.Header>
                    CSS3
                  </Card.Header>
                </Card.Content>
<Button attached='bottom' color='olive'>Explore</Button>
              </Card>
              <Divider />
            </Grid.Column>

              <Grid.Column  >
              <Card>
                <Reveal animated='move up'>
                  <Reveal.Content visible>
                    <Image
                      src='http://2ality.com/2011/10/logo-js/js.jpg'
                      size='large' />
                  </Reveal.Content>
                  <Reveal.Content hidden >
                    <Segment color='yellow' inverted>
                      <center>
                        <Statistic size='small'>
                          <Statistic.Value>10</Statistic.Value>
                          <Statistic.Label>Subtopics</Statistic.Label>
                          <Divider />
                          <Statistic.Value>555</Statistic.Value>
                          <Statistic.Label>Particiapnts</Statistic.Label>
                        </Statistic>
                      </center>
                    </Segment>
                  </Reveal.Content>
                </Reveal>
                <Card.Content>
                  <Card.Header>
                    JavaScript
                  </Card.Header>
                </Card.Content>
<Button attached='bottom' color='olive'>Explore</Button>
              </Card>
              <Divider />
          </Grid.Column>

          <Grid.Column  >
          <Card>
            <Reveal animated='move up'>
              <Reveal.Content visible>
                <Image
                  src='http://www.syntaxxx.com/wp-content/uploads/2014/08/html5-logo-600-580x580.jpg'
                  size='large' />
              </Reveal.Content>
              <Reveal.Content hidden >
                <Segment color='yellow' inverted>
                  <center>
                    <Statistic size='small'>
                      <Statistic.Value>10</Statistic.Value>
                      <Statistic.Label>Subtopics</Statistic.Label>
                      <Divider />
                      <Statistic.Value>555</Statistic.Value>
                      <Statistic.Label>Particiapnts</Statistic.Label>
                    </Statistic>
                  </center>
                </Segment>
              </Reveal.Content>
            </Reveal>
            <Card.Content>
              <Card.Header>
                Html 5
              </Card.Header>
            </Card.Content>
<Button attached='bottom' color='olive'>Explore</Button>
          </Card>
          <Divider />
      </Grid.Column>

      <Grid.Column  >
      <Card>
        <Reveal animated='move up'>
          <Reveal.Content visible>
            <Image
              src='https://yt3.ggpht.com/-VPefa8WEmFM/AAAAAAAAAAI/AAAAAAAAAAA/r7Bvqvzlr3I/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'
              size='large' />
          </Reveal.Content>
          <Reveal.Content hidden >
            <Segment color='yellow' inverted>
              <center>
                <Statistic size='small'>
                  <Statistic.Value>10</Statistic.Value>
                  <Statistic.Label>Subtopics</Statistic.Label>
                  <Divider />
                  <Statistic.Value>555</Statistic.Value>
                  <Statistic.Label>Particiapnts</Statistic.Label>
                </Statistic>
              </center>
            </Segment>
          </Reveal.Content>
        </Reveal>
        <Card.Content>
          <Card.Header>
            Java
          </Card.Header>
        </Card.Content>
<Button attached='bottom' color='olive'>Explore</Button>
    </Card>
      <Divider />
  </Grid.Column>

  <Grid.Column  >
  <Card>
    <Reveal animated='move up'>
      <Reveal.Content visible>
        <Image
          src='https://ih0.redbubble.net/image.349540087.8408/flat,900x900,070,f.u1.jpg'
          size='large' />
      </Reveal.Content>
      <Reveal.Content hidden >
        <Segment color='yellow' inverted>
          <center>
            <Statistic size='small'>
              <Statistic.Value>10</Statistic.Value>
              <Statistic.Label>Subtopics</Statistic.Label>
              <Divider />
              <Statistic.Value>555</Statistic.Value>
              <Statistic.Label>Particiapnts</Statistic.Label>
            </Statistic>
          </center>
        </Segment>
      </Reveal.Content>
    </Reveal>
    <Card.Content>
      <Card.Header>
        Docker
      </Card.Header>
    </Card.Content>
<Button attached='bottom' color='olive'>Explore</Button>
  </Card>
  <Divider />
</Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
