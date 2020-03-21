import { connect } from 'umi'
import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import Classify from '../components/Classify'
import MemberList from '../components/MemberList'
const { Sider, Content } = Layout

const MemberData = (({ dispatch, member,grade,domain}) => {
    useEffect(() => {
        dispatch({
            type: 'member/getMembers',
        })
    }, []);


    function filterUser(domainId) {
       dispatch({
           type: 'member/filterUser',
           domainId
       })
    }
    function getUserInfo(id) {

    }

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0">
                <Classify title="成员分类" data={domain} onhandleClassify={filterUser} />
            </Sider>

            <Content>
                <MemberList userList={member} grade={grade} onhandleUserInfo={getUserInfo}></MemberList>
            </Content>
        </Layout>
    )
})

function mapStateToProps({member}) {
    return {
        domain: member.domain,
        grade:member.grade,
        member: member.member,
        
    }
}

export default connect(mapStateToProps)(MemberData)
