import React, { Component } from 'react'
import 'antd/dist/antd.css'

import ArticleAPI from '../../api/article'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      begin: 0,
      end: 5,
      index: 0,
      technologyStatus: true,
      article: [],
      technology: [],// 技术标签
			slideshow: [],// 轮播图
			hotArticle: [],// 热门文章
    }
  }

  componentDidMount() {
    this.getArticle()
  }

  getArticle = () => {
    let params = {
      begin: this.state.begin,
      end: this.state.end,
      index: this.state.index
    }

    ArticleAPI.getArticle(params).then(res => {
      console.log(res)
      if(this.state.technologyStatus) {
        this.setState({
          technology: res.data.technology,
          slideshow: res.data.slideshow,
          article: res.data.articles,
          hotArticle: res.data.hotArticle,
          technologyStatus: false
        })
      }
    })
  }

  render() {
    return (
      <div>
        <h1>团队动态</h1>
        {
          this.state.hotArticle.map(item => {
          return <div key={item.id}>{item.title}</div>
          })
        }
      </div>
    )
  }
}
