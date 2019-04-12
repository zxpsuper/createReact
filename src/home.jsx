import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.history.push('/introduct');
    }
    render() {
        const NavLink = styled(Link)`
            color: #007fff;
            font-size: 20px;
        `;
        return (
            <div className="introduce">
                <a
                    class="github-fork-ribbon right-top"
                    href="https://github.com/zxpsuper/createReact"
                    title="Fork me on GitHub"
                >
                    Fork me on GitHub
                </a>
                <div className="flex y-center x-center">
                    <img
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546084694813&di=198098d59958a7ce5836ea5cfcc63797&imgtype=0&src=http%3A%2F%2Fc.fastcdn.co%2Fu%2F2efb9d47%2F17516396-0-eb967be0-d8bb-11e5-9.png"
                        alt=""
                        className="homeLogo"
                    />
                </div>
                <div className="flex y-center x-center router-link">
                    <NavLink to="/introduct">Introduce</NavLink>
                    <NavLink to="/about_me">About me</NavLink>
                </div>
            </div>
        );
    }
}
export default App;
