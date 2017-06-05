import React from 'react';
import { Divider,Label,Image } from 'semantic-ui-react';

export default class Avatar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={url:'http://res.cloudinary.com/myquiz/image/upload/v1496406230/'+this.props.image,avatars:['https://www.kanyaanimation.com/image/avatar.png','https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png','https://static.tumblr.com/utoqmk2/4E5n1nrj0/hepdiyorumki.png','http://lh5.googleusercontent.com/-nPAtyK9qCcc/AAAAAAAAAAI/AAAAAAAACho/1-7uhVRQh2E/s512-c/photo.jpg','http://swimmingxsa.com/wp-content/uploads/2015/02/t4.jpg','https://avatars1.githubusercontent.com/u/6580243?v=3&s=460']}
  }
  render()
  {
    return(
      <div>
          <center>
            <Image src={this.state.url} style={{marginLeft:'8%'}} />
          </center>
            <br/>
            <br/>
          <center >
            <Label style={{marginLeft:'10%'}} size='huge' color='brown'>{this.props.uid}</Label>
          </center>
            <br/>
          <Divider/>
      </div>
    );
  }
}
