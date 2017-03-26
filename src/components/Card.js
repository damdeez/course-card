import React from 'react';
import styles from '../styles/main.scss';
import {MdAddBox, MdArrowDropDown, MdArrowDropUp, MdCreate, MdNoteAdd, MdAnnouncement, MdModeComment, MdFolder} from 'react-icons/lib/md';

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
                            <span className="svg"><MdAddBox /></span>
                            <img src={`${path}uofu-${index}.jpg`} alt="Class Image"/>
                        </header>
                        <div className="inner-card">
                            <h2 className="class-title">{data.name}</h2>
                            <h3 className="class-number">{data.code}</h3>
                            <div className="card-description" onClick={(e) => this.expandCardDescription(e, index)}>
                                {data.description}
                                <span className="description-overlay" />
                            </div>
                            <span className="arrow-down svg" onClick={(e) => this.expandCardDescription(e, index)}><MdArrowDropDown /></span>
                            <span className="arrow-up svg" onClick={(e) => this.expandCardDescription(e, index)}><MdArrowDropUp /></span>
                            <nav className="card-nav">
                                <ul>
                                    <li className="svg"><MdNoteAdd /></li>
                                    <li className="svg"><MdAnnouncement /></li>
                                    <li className="svg"><MdModeComment /></li>
                                    <li className="svg"><MdFolder /></li>
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
    expandCardDescription(e, index) {
        const $downArrow = document.querySelectorAll('.arrow-down')[index];
        const $upArrow = document.querySelectorAll('.arrow-up')[index];
        const $overlay = document.querySelectorAll('.description-overlay')[index];

        if (e.target.classList.contains('card-description')) {
            if (e.target.classList.contains('expanded')) {
                e.target.classList.remove('expanded');
                $overlay.style.display = 'block';
                $downArrow.style.display = 'inline';
                $upArrow.style.display = 'none';
            } else {
                e.target.classList.add('expanded');
                $overlay.style.display = 'none';
                $downArrow.style.display = 'none';
                $upArrow.style.display = 'inline';
            }
        } else if (e.target.parentElement.nodeName === 'SPAN' || e.target.nodeName === 'path') {
            const $element = document.querySelectorAll('.card-description')[index];
            if ($element.classList.contains('expanded')) {
                $element.classList.remove('expanded');
                $downArrow.style.display = 'inline';
                $upArrow.style.display = 'none';
                $overlay.style.display = 'block';
            } else {
                $element.classList.add('expanded');
                $downArrow.style.display = 'none';
                $upArrow.style.display = 'inline';
                $overlay.style.display = 'none';
            }
        }
    }
    render(props) {
        return (
            <div className="card-container">{this.renderClasses()}</div>
        )
    }
}
