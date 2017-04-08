import React from 'react';
import styles from '../styles/main.scss';
import {
    MdAddBox,
    MdArrowDropDown,
    MdArrowDropUp,
    MdCreate,
    MdNoteAdd,
    MdAnnouncement,
    MdModeComment,
    MdFolder
} from 'react-icons/lib/md';
import Spinner from './svgSpinner';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    renderClasses(props) {
        const classData = this.props.data.classes;
        const classMarkup = [];

        classData.map((data, index) => {
            classMarkup.push(
                <li key={index} className="card">
                    <header className="class-heading">
                        <span className="svg"><MdCreate/></span>
                        <img src={require(`../images/uofu-${index}.jpg`)} alt="Class Image"/>
                    </header>
                    <div className="inner-card">
                        <h2 className="class-title">{data.name}</h2>
                        <h3 className="class-number">{data.code}</h3>
                        <div className="card-description" onClick={(e) => this.expandCardDescription(e, index)}>
                            {data.description}
                            <span className="description-overlay"/>
                        </div>
                        <span className="arrow-down svg" onClick={(e) => this.expandCardDescription(e, index)}>
                            <MdArrowDropDown/>
                        </span>
                        <span className="arrow-up svg" onClick={(e) => this.expandCardDescription(e, index)}>
                            <MdArrowDropUp/>
                        </span>
                        <nav className="card-nav">
                            <ul>
                                <li className="svg"><MdNoteAdd/></li>
                                <li className="svg"><MdAnnouncement/></li>
                                <li className="svg"><MdModeComment/></li>
                                <li className="svg"><MdFolder/></li>
                            </ul>
                        </nav>
                    </div>
                </li>
            );
        });

        return classMarkup;
    }
    expandCardDescription(e, index) {
        const $cardDescription = document.querySelectorAll('.card-description')[index];
        const $overlay = document.querySelectorAll('.description-overlay')[index];
        const $downArrow = document.querySelectorAll('.arrow-down')[index];
        const $upArrow = document.querySelectorAll('.arrow-up')[index];

        if ($cardDescription || $overlay) {
            if ($cardDescription.classList.contains('expanded')) {
                $cardDescription.classList.remove('expanded');
                $overlay.style.display = 'block';
                $downArrow.style.display = 'inline';
                $upArrow.style.display = 'none';
            } else {
                $cardDescription.classList.add('expanded');
                $overlay.style.display = 'none';
                $downArrow.style.display = 'none';
                $upArrow.style.display = 'inline';
            }
        } else if (e.target.parentElement.nodeName === 'SPAN' || e.target.nodeName === 'path') {
            if ($cardDescription.classList.contains('expanded')) {
                $cardDescription.classList.remove('expanded');
                $downArrow.style.display = 'inline';
                $upArrow.style.display = 'none';
                $overlay.style.display = 'block';
            } else {
                $cardDescription.classList.add('expanded');
                $downArrow.style.display = 'none';
                $upArrow.style.display = 'inline';
                $overlay.style.display = 'none';
            }
        }
    }
    render(props) {
        return (
            <div className="card-container">
                {this.props.data.classes
                    ? this.renderClasses()
                    : <div className="loading"><Spinner /></div>}
            </div>
        )
    }
}
