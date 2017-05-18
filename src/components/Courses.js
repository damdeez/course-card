import React from 'react';
import styles from '../styles/main.scss';
import Card from './Card';

const Courses = ( {data} ) => {
    return (
        <div className='courses'>
            <h1>Courses</h1>
            <Card data={data}/>
        </div>
    );
}

export default Courses;
