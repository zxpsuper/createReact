import React, { useState } from 'react';
import { Button } from '@/style';

// 利用useState实现 this.setState()的功能
// 直接变量count，省去了以往this.state.count获取变量写法的麻烦
export default function UseStateDemo() {
    // count = 0 , setCount 为 count 的设置方法
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>Click me</Button>
        </div>
    );
}
