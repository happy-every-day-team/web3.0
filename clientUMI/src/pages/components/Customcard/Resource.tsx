import React from 'react'
import { Button, Card, Avatar } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'

import './resource.less'
export default function ({ data }: any) {


    return (
        <Card className="resource"
            hoverable={true}>
            <div className="resource-header">
                <div className="resource-header-info">
                    <Avatar size={55} src={data.avatar} alt="图片丢失" />
                    <div>
                        <p>{data.username}</p>
                        <p> <CalendarOutlined /> {data.created_at}</p>
                    </div>

                </div>
                <Button href={data.link}>点击获取</Button>
            </div>
            <div className="resource-body">
                <p>{data.title}</p>
                <p>{data.description}</p>
                <div className="resource-body-cover">
                    <img src={data.posterlink} alt="该图片丢失"/>
                </div>
            </div>
        </Card>
    )
}
