import React, { useState, useEffect } from 'react';
import { Button } from '@/style';

// 利用useEffect实现componentDidMount 和 componentDidUpdate的功能

export default function UseEffectDemo() {
    // count = 0 , setCount 为 count 的设置方法
    const [count, setCount] = useState(0);

    // 类似于componentDidMount 和 componentDidUpdate，一旦更新或加载便会触发
    useEffect(() => {
        console.log(`update or mount`);
    });

    // 监听某个属性的更新
    useEffect(() => {
        console.log(`count值更新啦，它的值为${count}`);
    }, [count]);

    // 实现组件挂载与销毁， 销毁 return 一个function, 第二参数为空数组
    useEffect(() => {
        console.log('组件挂载, 类似于componentDidMount');
        return function() {
            console.log('组件销毁, 类似于componentWillUnmount');
        };
    }, []);

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>Click me</Button>
        </div>
    );
}
