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
                        <Menu mode="horizontal" defaultSelectedKeys={["article"]}>
                            <Menu.Item key="article"><Link to="/article">团队动态</Link></Menu.Item>
                            <Menu.Item key="resource"><Link to="/resource">资源分享</Link></Menu.Item>
                            <Menu.Item key="achievement"><Link to="/achievement">成果展示</Link></Menu.Item>
                            <Menu.Item key="member"><Link to="/Member">成员展示</Link></Menu.Item>

                            <Menu.Item key="login" className="fr"><Link to="/login">登录</Link></Menu.Item>
                            <span className="fr">/</span>
                            <Menu.Item key="register" className="fr"><Link to="/register">注册</Link></Menu.Item>
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
