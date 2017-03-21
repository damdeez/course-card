import React from 'react';
import styles from '../styles/main.scss';
import Card from './Card';

export default class Courses extends React.Component {
    render() {
        return (
            <div className='courses'>
                <h1>Courses</h1>
                <Card data={this.props.data}/>
            </div>
        );
    }
}
