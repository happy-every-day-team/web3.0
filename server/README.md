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

#### server接口编写
##### 前端接口编写
##### 资源展示界面的接口

```
   router.get('/client/resource/getResource', controller.client.resource.getResource); // 获取资源列表
    router.get('/client/resource/searchResource', controller.client.resource.searchResource); // 搜索资源
```
##### 成果展示界面的接口
```
    router.get('/client/achievement/getAchievement', controller.client.achievement.getAchievement); // 获取成果展示界面的接口
    router.get('/client/achievement/searchAchievement', controller.client.achievement.searchAchievement); // 搜索成果资源
```
##### 资源发布接口(post接口尚未测试)
```
    router.post('/client/resourceIssue/getResourceIssue', controller.client.resourceIssue.getResourceIssue); // 资源发布界面的信息
    router.post('/client/resourceIssue/uploadResource', controller.client.resourceIssue.uploadResource); // 上传发布资源
    router.post('/client/resourceIssue/uploadResourceCover', controller.client.resourceIssue.uploadResourceCover); // 上传封面图片
    router.post('/client/resourceIssue/delResourceCover', controller.client.resourceIssue.delResourceCover); // 删除资源封面图片
    router.post('/client/resourceIssue/uploadResourceAttachment', controller.client.resourceIssue.uploadResourceAttachment); // 上传资源附件
    router.post('/client/resourceIssue/delResourceAttachment', controller.client.resourceIssue.delResourceAttachment); // 删除附加
```
##### 成果发布接口（POST接口未测试）
```
    router.post('/client/achievementIssue/getAchievementIssue', controller.client.achievementIssue.getAchievementIssue); // 获取成果发布界面的信息
    router.post('/client/achievementIssue/uploadAchievement', controller.client.achievementIssue.uploadAchievement); // 上传成果发布资源
    router.post('/client/achievementIssue/uploadAchievementCover', controller.client.achievementIssue.uploadAchievementCover); // 上传成果封面图片
    router.post('/client/achievementIssue/delAchievementCover', controller.cclient.achievementIssue.delAchievementCover); // 删除资源封面图片
    router.post('/client/achievementIssue/uploadAchievementAttachment', controller.client.achievementIssue.uploadAchievementAttachment); // 上传资源附件
    router.post('/client/achievementIssue/delAchievementAttachment', controller.client.achievementIssue.delAchievementAttachment); // 删除附加
```
##### 个人材料中心
```
    router.post('/client/material/exportMaterials', controller.client.material.exportMaterials); // 个人成果材料导出

```