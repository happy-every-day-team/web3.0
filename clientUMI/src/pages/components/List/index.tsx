import React from 'react'
import { Card, Col, Row, Skeleton, Input } from 'antd'
import InfiniteScroll from 'react-infinite-scroller';
import Customcard from '../Customcard'

import './index.less'

export default function ({ data, flag, hasMore, loading }: any) {
    const CustomCard = flag ? Customcard.Achievement : Customcard.Resource
    function handleInfiniteOnLoad() { }
    return (
        <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={handleInfiniteOnLoad}
            hasMore={!loading && hasMore}
            useWindow={false}
        >
            <Card
                className="List"
                extra={<Input.Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)} />}>
                <Skeleton loading={loading} active>
                    <Row style={{ width: '100%', margin: 0 }} gutter={16}>
                        {data.map((item: any) => {
                            return <Col md={12} sm={24} span={12} key={item.id}>
                                <CustomCard data={item} />
                            </Col>
                        })}
                    </Row>
                </Skeleton>
            </Card>
        </InfiniteScroll>

    )
}
