import React, { useEffect, useState } from "react"
import { Layout, Menu } from 'antd'
import { Link } from 'umi'

const { Header, Footer, Sider, Content } = Layout;

import './index.less'
export default function (props: any) {

    return (
        <div>
            <Layout>
                <Header>
                    <div className="container-header">
                        <div className="logo"></div>
                        <Menu mode="horizontal" defaultSelectedKeys={[`${props.location.pathname}`]}>
                            <Menu.Item key="/Article"><Link to="/Article">团队动态</Link></Menu.Item>
                            <Menu.Item key="/Resource"><Link to="/Resource">资源分享</Link></Menu.Item>
                            <Menu.Item key="/Achievement"><Link to="/Achievement">成果展示</Link></Menu.Item>
                            <Menu.Item key="/Member"><Link to="/Member">成员展示</Link></Menu.Item>

                            <Menu.Item key="/Login" className="fr"><Link to="/Login">登录</Link></Menu.Item>
                            <span className="fr">/</span>
                            <Menu.Item key="/Register" className="fr"><Link to="/Register">注册</Link></Menu.Item>
                        </Menu>
                    </div>

                </Header>
                <Content>
                    <div className="container">
                        {props.children}
                    </div>
                </Content>
                <Footer></Footer>
            </Layout>
        </div>
    )
}
