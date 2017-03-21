import React from 'react';
import styles from '../styles/main.scss';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    renderClasses(props) {
        const classData = this.props.data.classes;
        const classMarkup = [];

        classData.map((data, index) => {
            classMarkup.push(
                <main key={index} className="card">
                    <header className="class-heading-title">
                        <img src="" />
                    </header>
                    <h2>{data.name}</h2>
                    <h3>{data.code}</h3>
                    <p>{data.description}</p>
                    <footer className="card-nav">
                        
                    </footer>
                </main>
            );
        });

        return classMarkup;
    }
    render(props) {
        return (
            <div>{this.renderClasses()}</div>
        )
    }
}
