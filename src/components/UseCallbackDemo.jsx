import React, { useState, useCallback } from 'react';
import { Button } from '@/style';

// 函数组件把函数定义写在外面，是可以解决问题。但是，如果handleClick依赖组件内部的一些变量，那handleClick又不得不写在里面（当然利用引用类型可以解决）。或者还是正常写，靠memo第二个参数来控制要不要重新渲染子函数组件。但是无论怎样，都存在一个问题，就是那一块代码写在里面呢，都无法避免代码的执行和函数的重新定义，

export default function UseCallbackDemo() {
    // count = 0 , setCount 为 count 的设置方法
    const [count, setCount] = useState(0);
    const UseCallBack = useCallback(() => {
        console.log(count);
    }, [count]); // 使用useCallback, 当count 不变化时，函数不会被重新定义
    return (
        <div>
            <p>open console to see more data</p>
            <Button onClick={() => UseCallBack()}>useCallback</Button>
        </div>
    );
}
