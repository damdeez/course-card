import React from 'react';
import styles from '../styles/main.scss';
import {MdAddBox, MdArrowDropDown, MdCreate, MdNoteAdd, MdAnnouncement, MdModeComment, MdFolder} from 'react-icons/lib/md';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    renderClasses(props) {
        if (this.props.data.classes) {
            const classData = this.props.data.classes;
            const classMarkup = [];
            const path = '//demo.damirhara.com/courses/images/';

            classData.map((data, index) => {
                classMarkup.push(
                    <li key={index} className="card">
                        <header className="class-heading">
                            <span><MdAddBox /></span>
                            <img src={`${path}uofu-${index}.jpg`} alt="Class Image"/>
                        </header>
                        <div className="inner-card">
                            <h2>{data.name}</h2>
                            <h3>{data.code}</h3>
                            <p className="card-description" onClick={this.expandCardDescription}>
                                {data.description}
                                <span className="description-overlay" />
                            </p>
                            <span><MdArrowDropDown /></span>
                            <nav className="card-nav">
                                <ul>
                                    <li><MdNoteAdd /></li>
                                    <li><MdAnnouncement /></li>
                                    <li><MdModeComment /></li>
                                    <li><MdFolder /></li>
                                </ul>
                            </nav>
                        </div>
                    </li>
                );
            });

            return classMarkup;
        } else {
            <div className="loading">...Loading</div>
        }
    }
    expandCardDescription(e) {
        if (e.target.classList.contains('card-description')) {
            if (e.target.classList.contains('expanded')) {
                e.target.classList.remove('expanded');
                e.target.children[0].style.visibility = 'visible';
            } else {
                e.target.classList.add('expanded');
                e.target.children[0].style.visibility = 'hidden';
            }
        }
    }
    render(props) {
        return (
            <div className="card-container">{this.renderClasses()}</div>
        )
    }
}
