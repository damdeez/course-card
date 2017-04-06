import React from 'react';
import styles from '../styles/main.scss';
import Card from './Card';

const Courses = (props) => {
    return (
        <div className='courses'>
            <h1>Courses</h1>
            <Card data={props.data}/>
        </div>
    );
}

export default Courses;
