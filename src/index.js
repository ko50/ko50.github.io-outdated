import React from 'react';
import ReactDOM from 'react-dom';
import Cotton from './cotton.jpg'
import './index.css';

class Screen extends React.Component {
    renderHeader() {
        return <Header />;
    }

    renderTop() {
        return <Top />;
    }

    render() {
        return (
            <div>
                <div>{this.renderHeader()}</div>
                <div>{this.renderTop()}</div>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <nav className="header">
                <div className="header_ko">Hi, I am KO !</div>
            </nav>
        );
    }
}

class Top extends React.Component {
    render() {
        return (
            <div className="top">
                <div className="cotton_field"><img className="cotton" src={Cotton} sizes="250x250" /></div>
                <h1></h1>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Screen />,
    document.getElementById('root')
);
