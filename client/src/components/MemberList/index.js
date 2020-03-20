import { Card, Button } from 'element-react'
import React, { useEffect, useState } from 'react'
import "./index.scss"

function MemberList({ userList, grade, onhandleUserInfo }) {
    function handleUserInfo() {
        onhandleUserInfo()
    }
    return (
        <div className="memberList">
            {grade.map(item => {
                return <Card className="memberList-item" key={item} index={item}
                    header={
                        <div className="title">{item}</div>
                    }>
                    {
                        userList[item].map(item1 => {
                            return <Card key={item1.id} className="member-item">
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
                                    <div className="member-item-right-name"><h3>{item1.User.name}</h3></div>
                                    <div className="member-item-right-text">{item1.phone}</div>
                                    <div className="member-item-right-text">{item1.User.email}</div>
                                    <div className="member-item-right-text">{item1.School.name + '/' + item1.Major.name}</div>
                                    <div className="member-item-right-text">{item1.description}</div>
                                </div>
                            </Card>
                        })
                    }

                </Card>
            })}

        </div>
    )
}

export default MemberList
