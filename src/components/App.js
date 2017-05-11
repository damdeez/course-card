import React from 'react';
import Courses from './Courses';
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
        const numberOfCourses = '8';
        axios.get(`http://canvas-api.herokuapp.com/api/v1/courses?access_token=${accessToken}&per_page=${numberOfCourses}`).then((response) => {
            const jsonData = response.data;
            const coursesArray = []

            jsonData.map((courses) => {
                coursesArray.push(courses);
            });

            this.setState({classes: coursesArray});
        }).catch((error) => {
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
