import React, { useEffect, useState } from "react"
import { Layout, Menu } from 'element-react'
import { Link } from 'react-router-dom'

import './index.scss'
function Main(props) {

    return (
        <div className="layout">
            <Layout.Row className="header">
                <Menu theme="dark" mode="horizontal">
                    <div className="fl">
                        <Menu.Item className="header-logo" index="1"><Link to="/"></Link></Menu.Item>
                        <Menu.Item className="header-dynamic" index="2"><Link to="/article">团队动态</Link></Menu.Item>
                        <Menu.Item className="header-resource" index="3"><Link to="/resource">资源分享</Link></Menu.Item>
                        <Menu.Item className="header-result" index="4"><Link to="/achievement">成果分享</Link></Menu.Item>
                        <Menu.Item className="header-member" index="5"><Link to="/member">成员展示</Link></Menu.Item>
                    </div>
                    <div className="fr">
                        <Menu.Item className="header-user" index="6">
                            <span className="login"><Link to="/login">登录</Link> </span>
                            <span> / </span>
                            <span className="register"> <Link to="/register">注册</Link></span>
                        </Menu.Item>
                    </div>
                </Menu>

            </Layout.Row>
            <Layout.Row className="body">
                {this.props.children}
            </Layout.Row>
            <Layout.Row className="foolter">

            </Layout.Row>
        </div>
    )
}
export default Main
