import React from 'react';
import { Divider,Label,Image } from 'semantic-ui-react';

export default class Avatar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={avatars:['https://www.kanyaanimation.com/image/avatar.png','https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png','https://static.tumblr.com/utoqmk2/4E5n1nrj0/hepdiyorumki.png','http://lh5.googleusercontent.com/-nPAtyK9qCcc/AAAAAAAAAAI/AAAAAAAACho/1-7uhVRQh2E/s512-c/photo.jpg','http://swimmingxsa.com/wp-content/uploads/2015/02/t4.jpg','https://avatars1.githubusercontent.com/u/6580243?v=3&s=460']}
  }
  render()
  {
    return(
      <div>
          <center>
            <Image src={this.state.avatars[Math.floor(Math.random() * (6 - 0)) + 0]} />
          </center>
            <br/>
            <br/>
          <center>
            <Label size='huge' color='brown'>A Name with hundred letters</Label>
          </center>
            <br/>
            <br/>
          <Divider/>
      </div>
    );
  }
}
