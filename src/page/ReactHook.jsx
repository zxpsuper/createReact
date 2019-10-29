import React, {
    useState,
    useEffect,
    useMemo,
    createContext,
    useContext,
    useReducer,
} from 'react';
import styled from 'styled-components';
import UseStateDemo from '@/components/UseStateDemo';
import UseEffectDemo from '@/components/UseEffectDemo';
import UseMemoDemo from '@/components/UseMemoDemo';
import UseCallbackDemo from '@/components/UseCallbackDemo';

export const ColorContext = createContext({});
let Content = styled.div`
    border: 1px solid #eee;
    box-shadow: 0 0 4px 0px #eee;
    padding: 12px 20px;
    margin-bottom: 10px;
`;
let Title = styled.div`
    font-size: 20px;
    color: #333;
    text-align: left;
    margin-bottom: 10px;
`;
let Button = styled.button`
    font-size: 20px;
    color: #333;
    text-align: left;
    background-color: #597ef7;
    border: 1px solid #597ef7;
    color: #fff;
    padding: 5px 16px 5px;
    margin: 0 4px;
`;
const UPDATE_COLOR = 'UPDATE_COLOR'; // 更新颜色
const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color;
        default:
            return state;
    }
};

export default function ReactHook() {
    const [color, dispatchColor] = useReducer(reducer, 'blue'); // useReducer 类似 useState， 传入一个函数和默认值

    return (
        <div>
            <ColorContext.Provider value={{ color, dispatchColor }}>
                <Content>
                    <Title>useState: </Title>
                    <UseStateDemo />
                </Content>

                <Content>
                    <Title>useEffect: </Title>
                    <UseEffectDemo />
                </Content>

                <Content>
                    <Title>useMemo: </Title>
                    <UseMemoDemo />
                </Content>

                <Content>
                    <Title>useCallback: </Title>
                    <UseCallbackDemo />
                </Content>
                <Content>
                    <Title>useContext and useReducer : </Title>
                    <ButtonGroup />
                    <ShowArea />
                </Content>
            </ColorContext.Provider>
        </div>
    );
}

const ButtonGroup = props => {
    const { dispatchColor } = useContext(ColorContext);
    return (
        <React.Fragment>
            <Button
                onClick={() => {
                    dispatchColor({ type: UPDATE_COLOR, color: 'red' });
                }}
            >
                red
            </Button>
            <Button
                onClick={() => {
                    dispatchColor({ type: UPDATE_COLOR, color: 'yellow' });
                }}
            >
                yellow
            </Button>
        </React.Fragment>
    );
};

const ShowArea = props => {
    const { color } = useContext(ColorContext);

    return (
        <div style={{ color: color, marginTop: '10px' }}>
            The font color is {color}
        </div>
    );
};
