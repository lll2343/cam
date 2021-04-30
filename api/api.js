const app = getApp();

const request = (url,options) => {
    return new Promise((resolve,reject)=>{
        wx.request({
            url: `${app.globalData.host}${url}`,
            method: options.method,
            data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
            success(res) {
                if(res.data.code === 2000){
                    resolve(res.data)
                } else {
                    reject(res.data)
                }
            },
            fail(error){
                reject(error.data)
            }
        })
    })
}

const get = (url,options = {}) => {
    return request(url,{method: 'GET',data: options})
}

const post = (url,options) => {
    return request(url,{method: 'POST', data: options})
}
 
 const put = (url, options) => {
    return request(url, { method: 'PUT', data: options })
 }
 
 // 不能声明DELETE（关键字）
 const remove = (url, options) => {
    return request(url, { method: 'DELETE', data: options })
 }
 
 module.exports = {
    get,
    post,
    put,
    remove
 }
  