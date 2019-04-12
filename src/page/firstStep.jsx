/*
 * @Author: super
 * @Date: 2019-04-11 17:18:31
 * @Last Modified by: super
 * @Last Modified time: 2019-04-12 15:31:37
 * @ function 组件，使用 react hook
 */
import { useState, useEffect } from 'react';
import React, { Component } from 'react';

function firstStep() {
    const [count, setCount] = useState(0);

    // 类似于componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 更新文档的标题
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <h1>Welcome to suporka React</h1>
            <p>
                You can use this to develop your project.
                <a
                    href="https://github.com/zxpsuper/createReact"
                    target="_blank"
                >
                    Create React
                </a>
                .
            </p>
            <p>This project will help you create a vue project step by step.</p>
            <p>
                You can learn webpack, react, react-router-dom, mobx, proxy and
                so on.
            </p>
            <p>I hope that can be helpful for you!! And finally,</p>
            <h2>Welcome star!</h2>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default firstStep;
