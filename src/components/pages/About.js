import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/about.jpg';
import Timeline from '../common/Timeline';
import Team from '../common/Team';
class About extends Component {
render(){
    return (
        <div>
            <Header 
                 title="About us"
                 subtitle="It's really a great story"
                 showButton={false}
                 image={image}
                 /> 
            <Timeline />
            <Team />
        </div>
    )
}

}
export default About;