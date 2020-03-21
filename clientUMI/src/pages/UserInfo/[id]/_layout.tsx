import { connect, history } from 'umi'
import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { PhoneOutlined, SmileOutlined, IdcardOutlined, EyeTwoTone } from '@ant-design/icons'
import "./layout.less"

const { Content, Sider } = Layout

const UserInfo = ({ user, userOther, dispatch, match, children }: any) => {
    const userMenu = [
        { name: '课题', key: `/UserInfo/${match.params.id}/topic` },
        { name: '文章', key: `/UserInfo/${match.params.id}/article` },
        { name: '成果', key: `/UserInfo/${match.params.id}/achievement` },
        { name: '资源', key: `/UserInfo/${match.params.id}/resource` },
        { name: '收藏', key: `/UserInfo/${match.params.id}/love` }

    ]
    useEffect(() => {
        dispatch({
            type: 'user/getUserInfo',
            payload: { id: match.params.id },
        })
    }, [])
    function menuSwitch(item: any) {
        history.push(item.key)
    }
    return (
        <Layout className="user">
            <Content>
                <div className="content-header">
                    <div className="user-left">
                        <div className="user-avatar">
                            <img src={user.avatar} className="user-img" />
                        </div>
                    </div>
                    <div className="user-right">
                        <div className="user-right-name"><h2>{user.name}</h2></div>
                        <div className="user-right-text">
                            <i><PhoneOutlined /></i>
                            <span>{user.phone}</span>
                        </div>
                        <div className="user-right-text">
                            <i><IdcardOutlined /></i>
                            <span>{user.school + '/' + user.major}</span>
                        </div>
                        <div className="user-right-text">
                            <i><SmileOutlined /></i>
                            <span>{user.description}</span>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <Menu
                        className="content-body-navbar"
                        mode="horizontal"
                        defaultSelectedKeys={[`/UserInfo/${match.params.id}/topic`]}
                        onSelect={menuSwitch}>{
                            userMenu.map(item => {
                                return <Menu.Item key={item.key} >{item.name}</Menu.Item>
                            })}
                    </Menu>
                    <div className="content-body-list">{children}</div>
                </div>

            </Content>
            <Sider width={250}>
                <div className="sider-user-title">个人成就</div>
                <div className="sider-user-articleNum">
                    <EyeTwoTone />
                    <span>文章被阅读了{userOther.readNum}次</span>
                </div>
                <div className="sider-user-aar">
                    <div className="sider-user-aar-item">
                        <p >文章</p>
                        <p>{userOther.articleNum}</p>
                    </div>
                    <div className="sider-user-aar-item">
                        <p>成果</p>
                        <p>{userOther.achievementNum}</p>
                    </div>
                    <div className="sider-user-aar-item">
                        <p>资源</p>
                        <p>{userOther.resourceNum}</p>
                    </div>
                </div>
                <div className="sider-user-info">
                    <div className="sider-user-info-item">
                        <span className="fl">收藏</span>
                        <span className="fr">{userOther.favoriteNum}</span>
                    </div>
                    <div className="sider-user-info-item">
                        <span className="fl">研究方向</span>
                        <span className="fr">{user.domain.name}</span>
                    </div>
                    <div className="sider-user-info-item">
                        <span className="fl">加入时间</span>
                        <span className="fr">{user.createDate}</span>
                    </div>
                </div>


            </Sider>
        </Layout>
    )
}
function mapStateToProps({ user }: any) {
    return {
        user: user.userInfo,
        userOther: user.other
    }
}


export default connect(mapStateToProps)(UserInfo) 