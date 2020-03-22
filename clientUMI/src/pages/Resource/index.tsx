import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { connect } from 'umi'

import Classify from '../components/Classify'

const { Sider, Content } = Layout

function Resource({ resourceType, resource, dispatch }: any) {
    useEffect(() => {
        dispatch({
            type: 'aar/getArticleAndTag',
            payload: {
                index: 3,
            }
        })
    }, []);

    function filterResource(tag: Number) {
        dispatch({
            type: 'aar/filterByTag',
            payload: {
                tag
            }
        })
    }
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0">
                <Classify title="资源分类" data={resourceType} onhandleClassify={filterResource} />
            </Sider>
            <Content>
                
            </Content>
        </Layout>
    )
}

function mapStateToProps({ aar }: any) {
    console.log(aar)
    return {
        resourceType: aar.tags,
        resource: aar.list
    }
}
export default connect(mapStateToProps)(Resource)