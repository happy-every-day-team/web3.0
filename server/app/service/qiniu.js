'use strict'
const qiniu = require('qiniu');
const Service = require('egg').Service;

class QiniuService extends Service{
    //获取uploadToken,根据AccessKey + SecretKey （可在个人中心=》秘钥管理查看） + bucket（存储空间名称），生成token
    async getUploadToken(scope){
        const {config} = this;
        const option = {scope};
        const mac = new qiniu.auth.digest.Mac(config.qiniuKey.accessKey,config.qiniu.secretKey);
        const putPolicy = new qiniu.rs.putPolicy(option);
        const uploadToken = putPolicy.uploadToken(mac);
        return uploadToken;
    }
    //本地上传代码
    async getCDN(key){
        const mac = new qiniu.auth.digest.Mac(this.config.qiniuKey.accessKey,config.qiniu.secretKey);
        const configs = new qiniu.conf.Config();

        const bucketManager = new qiniu.rs.BucketManager(mac,configs);
        const publicBucketDomain = 'http://idv093d.qiniudns.com';
        const publicDownloadUrl = bucketManager.publicDownloadUrl(publicBucketDomain);
        return publicDownloadUrl;
    }
    //删除文件
    async deleteFile(bucket,key){
        const mac = new qiniu.auth.digest.Mac(config.qiniuKey.accessKey, config.qiniuKey.secretKey);
        const configs = new qiniu.conf.Config();
        configs.zone = qiniu.zone.Zone_z0;//对应的空间,配置对象
        //资源管理的操作对象初始化
        const bucketManager = new qiniu.rs.BucketManager(mac,configs);
        bucketManager.delete(bucket,key,(err,respBody,respInfo)=>{
            if(err){
                return err;
            }else{
                return respInfo.statusCode;
            }
        })
    }
}
module.exports = QiniuService;