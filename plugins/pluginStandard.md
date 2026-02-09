# plugin standard lines

一个名叫xxx的组件应该有一个xxx.css和xxx.js

在xxx.js中, 必须提供函数getModule_xxx(), 返回能够解析成html的字符串,
同时,可以提供xxx_$functionName($someparam)为格式的函数供调用
