# server



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


### (五)  成员展示

1、方向分类

- /member/getDomainInfo

  ```js
  {
    "success": 1,
    "data": [
      { "id": 1, "name": "前端", "created_at": "2020-02-04", "updated_at": "2020-03-04" }
    ]
  }
  ```

  

2、所有成员 （按年级）

- /member/getMemberInfo 因为一开始展示的是全部，所以就一次性查出来，然后按年级在前端分

  ```js
  {
    "success": 1, "data": [
      {
        "id": "0002250",
        "school": 1,
        "major": 1,
        "domain": 4,
        "avatar": "http://img.pzhuweb.cn/1561811342677",
        "phone": "13092816377",
        "description": "我是指导教师。O(∩_∩)O哈哈~",
        "created_at": "2016-06-26",
        "updated_at": "2019-06-29",
        "School": { "name": "数学与计算机学院" },
        "Major": { "name": "软件工程" },
        "Domain": { "name": "全栈" },
        "User": { "name": "兰老师" }
      },
    ]
  }
  ```

  

### (六)  个人主页

1、个人信息

- /user/getUserInfo/201710803017

  ```js
  {
      "success": 1,
      "data": {
          "id": "201710803017",
          "school": 1,
          "major": 1,
          "domain": 1,
          "avatar": "http://img.pzhuweb.cn/1562294102929",
          "phone": "18383047136",
          "description": "你刚才可不是这么说的！",
          "created_at": "2018-09-01",
          "updated_at": "2019-07-05",
          "School": { "name": "数学与计算机学院" },
          "Major": { "name": "软件工程" },
          "Domain": { "name": "前端" },
          "User": { "name": "曹林" }
      }
  }
  ```

- /user/getOtherInfo/201710803017

  ```js
  {
      "success": 1,
      "data": {
          "articleNum": 7,
          "readNum": 65,
          "achievementNum": 1,
          "resourceNum": 0,
          "favoriteNum": 0
      }
  }
  ```

  