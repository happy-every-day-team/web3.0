import React, { Component } from 'react'

import './index.scss'

import { Link } from 'react-router-dom'

import { BackTop, Row, Col } from 'antd'

export default class Head extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false,  // 是否登录
      avatar: 'http://img.pzhuweb.cn/443625372.jpeg',

    }
  }

  render() { 
    return (
      <div className='container'>
        <BackTop visibilityHeight={100} />
        <Row gutter={24} className="nav">
          <Col xl={4} md={24}>
            <Link to='/'>WEB专业应用团队</Link>
          </Col>
          <Col xl={18}>
            <Col xl={4} md={24}>
              <Link to='/article' activeClassName="active">团队动态</Link>
            </Col>
            <Col xl={4} md={24}>
              <Link to='/' activeClassName="active">资源分享</Link>
            </Col>
            <Col xl={4} md={24}>
              <Link to='/' activeClassName="active">成果展示</Link>
            </Col>
            <Col xl={4} md={24}>
              <Link to='/' activeClassName="active">成员展示</Link>
            </Col>
            <Col xl={4} md={24}>
              <Link to='/' activeClassName="active">会议消息</Link>
            </Col>
          </Col>
          <Col xl={2} md={24}>
            { this.state.status ? (
              <div>wwww</div>
            ) : (
              <div>
                <Link to="/" activeClassName="active">登录</Link>
              </div>
            )}
          </Col> 

        </Row>
        <Row className="content">{this.props.children}</Row>
        <div className="pzhuweb-copyright">
          <Row gutter={24} className="about-us">
            <Col sm={4} xs={24}><Link to="/">关于我们</Link></Col>
            <Col sm={4} xs={24}><Link to="/register">加入我们</Link></Col>
          </Row>
          <Row gutter={24}>
						<Col sm={6} sl={24}><Link to="http://old.pzhuweb.cn">WEB应用专业团队V1.0</Link></Col>
            <Col sm={4} sl={10}><Link to="http://218.6.132.18/meol/jpk/course/layout/lesson/index.jsp?courseId=42728">前端在线学习</Link></Col>
            <Col sm={4} sl={10}><Link to="http://218.6.132.18/meol/jpk/course/layout/lesson/index.jsp?courseId=42657">后台在线学习</Link></Col>
          </Row>
        </div>
      </div>
    )
  }
}
