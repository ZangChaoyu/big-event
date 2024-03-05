//导入请求工具类
import request from '@/utils/request.js'

// //文章分类列表查询
// export const articleCategoryListService = ()=>{
//     return request.get('/category')
// }

//导入@/stores/token.js
import { useTokenStore } from '../stores/token'

//文章列表查询
export const commoditiesListService = (params) => {
    return request.get('/commodity', { params: params })
}