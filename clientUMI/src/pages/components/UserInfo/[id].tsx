import React from 'react'
import { Layout, Card } from 'antd'

const { Content, Sider } = Layout

export default function (props: any) {

    return (
        <Layout>
            <Content>
                <Card key={item1.id} className="member-item">
                    <div className="member-item-left">
                        <div className="member-item-avatar">
                            <img src={item1.avatar} className="member-item-img" />
                        </div>

                        <Button
                            type="primary"
                            onClick={onhandleUserInfo}
                        >查看详情</Button>
                    </div>
                    <div className="member-item-right">
                        <div className="member-item-right-name"><h2>{item1.User.name}</h2></div>
                        <div className="member-item-right-text">
                            <i><PhoneOutlined /></i>
                            <span>{item1.phone}</span>
                        </div>
                        <div className="member-item-right-text">
                            <i><MailOutlined /></i>
                            <span>{item1.User.email}</span>
                        </div>
                        <div className="member-item-right-text">
                            <i><IdcardOutlined /></i>
                            <span>{item1.School.name + '/' + item1.Major.name}</span>
                        </div>
                        <div className="member-item-right-text">
                            <i><SmileOutlined /></i>
                            <span>{item1.description}</span>
                        </div>
                    </div>
                </Card>
            </Content>
            <Sider></Sider>
        </Layout>
    )
} 