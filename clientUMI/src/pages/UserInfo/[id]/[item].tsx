import React, { useState } from 'react'
import { List, Tag, Card, Select, Input } from 'antd'
import './index.less'

const { Option } = Select
const { Search } = Input

function Item({ }: any) {
    const [list, setList] = useState([
        { id: 1, title: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈', tag: 'javascript', date: '2020' },
        { id: 2, title: '哈哈哈', tag: 'javascript', date: '2020' },
        { id: 3, title: '哈哈哈', tag: 'javascript', date: '2020' },
        { id: 4, title: '哈哈哈', tag: 'javascript', date: '2020' },
        { id: 5, title: '哈哈哈', tag: 'javascript', date: '2020' },
        { id: 6, title: '哈哈哈', tag: 'javascript', date: '2020' },
        { id: 7, title: '哈哈哈', tag: 'javascript', date: '2020' },
        { id: 8, title: '哈哈哈', tag: 'javascript', date: '2020' },
        { id: 9, title: '哈哈哈', tag: 'javascript', date: '2020' },

    ])
    const [tag, setTag] = useState([
        { id: 1, name: 'javascript' },
        { id: 2, name: 'node' },
        { id: 3, name: 'vue' },
    ])
    function handleChange(value: any) {
        console.log(value)
    }
    return (
        <div className="listContainer">
            <Card
                title={
                    <div>
                        <Select defaultValue={1} style={{ width: 120 }} onChange={handleChange}>
                            {tag.map((item: any) => {
                                <Option value={item.id}>{item.name}</Option>
                            })}
                        </Select>
                    </div>
                }
                extra={
                    <div>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                    </div>
                }>
                <List
                    header={
                        <List.Item>
                            <p>文章名称</p>
                            <p>技术标签</p>
                            <p>发布时间</p>
                        </List.Item>
                    }
                    dataSource={list}
                    renderItem={(item: any) => (
                        <List.Item key={item.id}>
                            <p><a href="">{item.title}</a></p>
                            <p><Tag>{item.tag}</Tag></p>
                            <p>{item.date}</p>

                        </List.Item>
                    )}
                >


                </List>
            </Card>
        </div>
    )
}
export default Item