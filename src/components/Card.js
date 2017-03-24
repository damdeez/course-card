import React from 'react';
import styles from '../styles/main.scss';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    imagesRender(index) {
        const path = '//demo.damirhara.com/courses/images/';

        return `${path}uofu-${index}.jpg`;
    }
    renderClasses(props) {
        if (this.props.data.classes) {
            const classData = this.props.data.classes;
            const classMarkup = [];

            classData.map((data, index) => {
                classMarkup.push(
                    <li key={index} className="card">
                        <header className="class-heading">
                            <img src={this.imagesRender(index)} alt="Class Image"/>
                        </header>
                        <div className="inner-card">
                            <h2>{data.name}</h2>
                            <h3>{data.code}</h3>
                            <p className="card-description" onClick={this.expandCardDescription}>
                                {data.description}
                                <span className="description-overlay" />
                            </p>
                            <nav className="card-nav">

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
        if (e.target.classList.contains('expanded')) {
            e.target.classList.remove('expanded');
        } else {
            e.target.classList.add('expanded');
        }
    }
    render(props) {
        return (
            <div className="card-container">{this.renderClasses()}</div>
        )
    }
}
