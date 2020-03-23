import React, { useState, useEffect, Children } from 'react'
import { Layout } from 'antd'
import { connect } from 'umi'

import Classify from '../components/Classify'
import ResourceList from '../components/List'

const { Sider, Content } = Layout

function Resource({ resourceType, resource, dispatch, hasMore, loading }: any) {
    useEffect(() => {
        dispatch({
            type: 'resource/getResourceAndTag',
        })
    }, []);

    function filterResource(tag: Number) {
        dispatch({
            type: 'resource/filterResourceByTag',
            payload: {
                tag
            }
        })
    }
    return (
        <Layout>
            <Sider
                breakpoint="md"
                collapsedWidth="0"
                width={250}>
                <Classify title="资源分类" data={resourceType} onhandleClassify={filterResource} />
            </Sider>
            <Content>
                <ResourceList data={resource} flag={false} hasMore={hasMore} loading={loading} />
            </Content>
        </Layout>
    )
}

function mapStateToProps({ resource }: any) {
    return {
        resourceType: resource.tags,
        resource: resource.list,
        hasMore: resource.hasMore,
        loading: resource.loading,
    }
}
export default connect(mapStateToProps)(Resource)