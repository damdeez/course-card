import React from 'react';
import Courses from './components/Courses';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: ''
        }
    }
    componentDidMount(props) {
        const accessToken = '9be624b4d5206a178fc56921d5bf2c2a';
        axios.get('http://canvas-api.herokuapp.com/api/v1/courses?access_token=' + accessToken)
          .then((response) => {
            //console.info('response', response.data);
            const jsonData = response.data;
            const coursesArray = []

            jsonData.map((courses) => {
                coursesArray.push(courses);
            });

            this.setState({
                classes: coursesArray
            });
          })
          .catch((error) => {
            console.log(error);
          });
    }
    render(props) {
        return (
            <div className='app-container'>
                <Courses data={this.state}/>
            </div>
        );
    }
}
