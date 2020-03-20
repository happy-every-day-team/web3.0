import React, { useState } from 'react'
import { Menu } from 'antd'
import { connect } from 'umi'
import "./index.less"

function Classify({ title, data, onhandleClassify }) {
    function handleGetData(item) {
        onhandleClassify(parseInt(item.key))
    }

    return (
        <div>
            <div className="title">{title}</div>
            <Menu 
            onSelect={handleGetData}
            defaultSelectedKeys={['0']}>
                <Menu.Item key={0} >全部</Menu.Item>
                {data.map(item => {
                    return <Menu.Item key={parseInt(item.id)}>
                        <span className="fl" >{item.name}</span>
                        <span className="fr">{item.num}</span>
                    </Menu.Item>
                })}
            </Menu>
        </div>

    )
}

function mapStateToProps(state) {
    return {
        data:state.domain,
    }
}

export default Classify
// export default connect(mapStateToProps)(Classify)