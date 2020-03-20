import React, { useState, useEffect } from 'react'
import { Layout } from 'element-react'
import MemberAPI from '../../api/member'
import DoMainAPI from '../../api/domain'
import Classify from '../../components/Classify'
import MemberList from '../../components/MemberList'

function Member(props) {
    const [domain, setDomain] = useState([])
    const [userInfoList, setUserInfoList] = useState([])
    const [newuserInfoList, setNewuserInfoList] = useState({})
    const [grade, setGrade] = useState([])
    useEffect(() => {
        getAllData()
    }, [])
    function getAllData() {
        let data = null;
        MemberAPI.getMemberInfo()
            .then(res => {
                if (res.success) {
                    data = res.data
                }
            })
        DoMainAPI.getDoMainInfo()
            .then(res => {
                if (res.success) {
                    setDomain(filterDomainNum(res.data, data))
                    setNewuserInfoList(filterUserByGrade(data))
                    setUserInfoList(data)
                    setGrade(filterGrade(data))
                }
            })
            .catch(err => {
                return;
            })

    }
    function filterDomainNum(domain, data) {
        let offset = 999
        let num = []
        for (let i = 0; i < domain.length; i++) {
            if (domain[i].id < offset) {
                offset = domain[i].id
            }
        }

        data.map(item => {
            if (!num[item.domain - offset]) {
                num[item.domain - offset] = 0
            }
            num[item.domain - offset]++;
        })
        return domain.map(item => {
            return {
                id: item.id,
                name: item.name,
                num: num[item.id - offset]
            }
        })
    }
    function filterUserByGrade(data) {
        let val = []
        val = data.map(item => {
            if (item.User.status !== 3) {
                return {
                    grade: parseInt(item.id.substring(0, 4)),
                    data: item
                }
            } else {
                return {
                    grade: "指导老师",
                    data: item
                }
            }

        })
        const attr = 'grade'
        val = val.sort((a, b) => {
            if (a[attr] < b[attr]) {
                return -1
            }
            if (a[attr] > b[attr]) {
                return 1
            }
            return 0
        })

        let temp = {};
        for (let i = 0; i < val.length; i++) {
            if (val[i] !== undefined) {
                if (!temp[val[i].grade]) {
                    temp[val[i].grade] = []
                }
                temp[val[i].grade].push(val[i].data)
            }
        }
        return temp
    }
    function filterUser(domainId) {
        let user = []
        if (domainId === 0) {
            user = userInfoList
        } else {
            userInfoList.map(item => {
                if (item.domain === domainId || item.domain === 4) {
                    user.push(item)
                }
            })
        }

        setNewuserInfoList(filterUserByGrade(user))
        setGrade(filterGrade(user))

    }
    function filterGrade(data) {
        let val = []
        val = data.map(item => {
            if (item.User.status !== 3) {
                return {
                    grade: parseInt(item.id.substring(0, 4)),
                    data: item
                }
            } else {
                return {
                    grade: "指导老师",
                    data: item
                }
            }

        })
        const attr = 'grade'
        val = val.sort((a, b) => {
            if (a[attr] < b[attr]) {
                return -1
            }
            if (a[attr] > b[attr]) {
                return 1
            }
            return 0
        })

        let temp = {};
        for (let i = 0; i < val.length; i++) {
            if (val[i] !== undefined) {
                if (!temp[val[i].grade]) {
                    temp[val[i].grade] = []
                }
                temp[val[i].grade].push(val[i].data)
            }
        }

        let grade = []
        for (let item in temp) {
            if (item === '指导老师') {
                grade.unshift(item)
            } else {
                grade.push(item)
            }

        }
        return grade
    }
    function getUserInfo(id) {

    }
    return (
        <Layout.Row className="center" >
            <Layout.Col md="4" offset="3" >
                <Classify title="成员分类" data={domain} onhandleClassify={filterUser} />
            </Layout.Col>
            <Layout.Col md="14">
                <MemberList userList={newuserInfoList} grade={grade} onhandleUserInfo={getUserInfo}></MemberList>

            </Layout.Col>
        </Layout.Row>


    )
}

export default Member
