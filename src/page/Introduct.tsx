/*
 * @Author: super
 * @Date: 2019-04-11 17:18:31
 * @Last Modified by: super
 * @Last Modified time: 2019-09-04 18:01:45
 * @ function 组件，使用 react hook
 */

/**
 * 基于 react hook 的实践，函数组件与类组件的不同
 */
import React, { useState } from 'react';

function Introduct() {
    // count = 0 , setCount 为 count 的设置方法
    const [count, setCount] = useState(0);

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
            <p>
                This project will help you create a React project step by step.
            </p>
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

export default Introduct;
