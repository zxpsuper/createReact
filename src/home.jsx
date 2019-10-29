import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        const NavLink = styled(Link)`
            color: #007fff;
            font-size: 20px;
        `;
        return (
            <div className="introduce">
                <a
                    className="github-fork-ribbon right-top"
                    href="https://github.com/zxpsuper/createReact"
                    title="Fork me on GitHub"
                >
                    Fork me on GitHub
                </a>
                <div className="flex y-center x-center">
                    <img
                        src={require('./super.jpg')}
                        alt=""
                        className="homeLogo"
                    />
                </div>
                <div className="flex y-center x-center router-link">
                    <NavLink to="/introduct">Introduce</NavLink>
                    <NavLink to="/about_me">About me</NavLink>
                    <NavLink to="/react_hook">React Hook</NavLink>
                </div>
            </div>
        );
    }
}
export default App;
