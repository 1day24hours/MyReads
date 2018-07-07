// 声明
// 借鉴以下 GitHub 项目思路，项目完成建立在理解代码原理基础上，且全部代码均由本人亲自完成及重构，没有复制粘贴
// 地址：https://github.com/schizo99/reactnd-project-myreads-starter
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>, 
    document.getElementById('root')
)

