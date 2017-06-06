import React from 'react';
import { Divider,Popup,Icon,Card,Header,Label,Button,Menu,Segment,Grid,Image } from 'semantic-ui-react';
import Appbar from './../components/appbar.jsx';
import Avatar from './../components/avatar.jsx';
import ProfileStats from './../components/profile_stats.jsx';
import Events from './../components/events.jsx';
import Leaders from './../components/leaders.jsx';
import MobileAppbar from './../components/mobileAppbar.jsx';
import MobileEvents from './../components/mobileEvents.jsx';
import MobileLeaders from './../components/mobileLeaderboard.jsx';

export default class Dashboard extends React.Component
{
  constructor()
  {
    super();
    this.state={image:'',aQuiz:'',tScore:'',rank:'',userId:'',hQuiz:''}
  }

  componentDidMount()
  {
    this.setState({image:this.props.match.params.image,aQuiz:this.props.match.params.aQuiz,tScore:this.props.match.params.tScore,rank:this.props.match.params.rank,userId:this.props.match.params.userId,hQuiz:this.props.match.params.hQuiz});
  }
  render()
  {
    return(
      <div>
        <Grid >
            <Grid.Row only='mobile' >
              <Grid.Column>
                <MobileAppbar image={this.state.image} aQuiz={this.state.aQuiz} tScore={this.state.tScore} rank={this.state.rank} uid={this.state.userId} hQuiz={this.state.hQuiz}/>
              </Grid.Column>
            </Grid.Row>
              <Grid.Row only='mobile' >
                  <Grid.Column width={16}>
                    <MobileEvents />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row only='mobile'>
                  <Grid.Column >
                    <Divider />
                    <MobileLeaders />
                  </Grid.Column>
                </Grid.Row>



          <Grid.Row only='tablet computer'>
            <Grid.Column >
            <Appbar />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only='tablet computer'  streched>
            <Grid.Column tablet={5} computer={3} >
              <Avatar image={this.state.image} uid={this.state.userId}/>
              <center>
                <ProfileStats aQuiz={this.state.aQuiz}  tScore={this.state.tScore} rank={this.state.rank} hQuiz={this.state.hQuiz}/>
              </center>
            </Grid.Column>
            <Grid.Column  tablet={11} computer={13} >
                <Events image={this.state.image} aQuiz={this.state.aQuiz} tScore={this.state.tScore} rank={this.state.rank} uid={this.state.userId} hQuiz={this.state.hQuiz}/>
                <Leaders />
            </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    )
  }
}
