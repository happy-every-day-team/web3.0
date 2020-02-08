#### server接口编写
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
##### 资源发布接口
