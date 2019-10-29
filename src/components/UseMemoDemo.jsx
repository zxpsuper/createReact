import React, { useState, useContext, createContext, useMemo } from 'react';
import { Button } from '@/style';

// 利用useState实现 this.setState()的功能
// 直接变量count，省去了以往this.state.count获取变量写法的麻烦
export default function UseMemoDemo() {
    // count = 0 , setCount 为 count 的设置方法
    const [name, setName] = useState('init name');
    const [content, setContent] = useState('init content');

    return (
        <div>
            <Button onClick={() => setName(new Date().getTime())}>name</Button>
            <Button onClick={() => setContent(new Date().getTime())}>
                content
            </Button>
            <Demo name={name}>{content}</Demo>
        </div>
    );
}

function Demo({ name, children }) {
    function changeName(name) {
        console.log('11'); // 如果 otherName 没有使用useMemo，那么无论name，还是children更新，都会打印 11
        return 'name: ' + name;
    }
    // 每次props更新，otherName都会被重新构建调用一次，使用useMemo方法，避免无用方法的调用，只有name变化时，otherName才重新构建调用
    const otherName = useMemo(() => changeName(name), [name]);
    return (
        <div style={{ lineHeight: '30px', marginTop: '10px' }}>
            <div>{otherName}</div>
            <div>content: {children}</div>
        </div>
    );
}
