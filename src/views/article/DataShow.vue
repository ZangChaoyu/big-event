<script setup>
import {
    Edit,
    Delete
} from '@element-plus/icons-vue'

import { ref } from 'vue'

//文章分类数据模型
const categorys = ref([
    {
        "id": 3,
        "categoryName": "美食",
        "categoryAlias": "my",
        "createTime": "2023-09-02 12:06:59",
        "updateTime": "2023-09-02 12:06:59"
    },
    {
        "id": 4,
        "categoryName": "娱乐",
        "categoryAlias": "yl",
        "createTime": "2023-09-02 12:08:16",
        "updateTime": "2023-09-02 12:08:16"
    },
    {
        "id": 5,
        "categoryName": "军事",
        "categoryAlias": "js",
        "createTime": "2023-09-02 12:08:33",
        "updateTime": "2023-09-02 12:08:33"
    }
])

//用户搜索时选中的分类id
const categoryId = ref('')

//用户搜索时选中的发布状态
const state = ref('')

//文章列表数据模型
const articles = ref([
    {
        "id": 5,
        "title": "陕西旅游攻略",
        "content": "兵马俑,华清池,法门寺,华山...爱去哪去哪...",
        "coverImg": "https://big-event-gwd.oss-cn-beijing.aliyuncs.com/9bf1cf5b-1420-4c1b-91ad-e0f4631cbed4.png",
        "state": "草稿",
        "categoryId": 2,
        "createTime": "2023-09-03 11:55:30",
        "updateTime": "2023-09-03 11:55:30"
    },
    {
        "id": 5,
        "title": "陕西旅游攻略",
        "content": "兵马俑,华清池,法门寺,华山...爱去哪去哪...",
        "coverImg": "https://big-event-gwd.oss-cn-beijing.aliyuncs.com/9bf1cf5b-1420-4c1b-91ad-e0f4631cbed4.png",
        "state": "草稿",
        "categoryId": 2,
        "createTime": "2023-09-03 11:55:30",
        "updateTime": "2023-09-03 11:55:30"
    },
    {
        "id": 5,
        "title": "陕西旅游攻略",
        "content": "兵马俑,华清池,法门寺,华山...爱去哪去哪...",
        "coverImg": "https://big-event-gwd.oss-cn-beijing.aliyuncs.com/9bf1cf5b-1420-4c1b-91ad-e0f4631cbed4.png",
        "state": "草稿",
        "categoryId": 2,
        "createTime": "2023-09-03 11:55:30",
        "updateTime": "2023-09-03 11:55:30"
    },
])

//分页条数据模型
const pageNum = ref(1)//当前页
const total = ref(20)//总条数
const pageSize = ref(3)//每页条数

//当每页条数发生了变化，调用此函数
// const onSizeChange = (size) => {
//     pageSize.value = size
// }
//当前页码发生变化，调用此函数
// const onCurrentChange = (num) => {
//     pageNum.value = num
// }

import { articleCategoryListService, articleListService, articleAddService } from '@/api/article.js'

const articleCategoryList = async () => {
    //获取所有分类
    let resultC = await articleCategoryListService();
    categorys.value = resultC.data
}
articleCategoryList();


//
const articleList = async () => {
    let params = {
        pageNum: pageNum.value,
        pageSize: pageSize.value,
        categoryId: categoryId.value ? categoryId.value : null,
        state: state.value ? state.value : null
    }
    let result = await articleListService(params);
    //渲染列表数据
    articles.value = result.data.items
    //为列表中添加categoryName属性
    for (let i = 0; i < articles.value.length; i++) {
        let article = articles.value[i];
        for (let j = 0; j < categorys.value.length; j++) {
            if (article.categoryId === categorys.value[j].id) {
                article.categoryName = categorys.value[j].categoryName
            }
        }
    }
    //渲染总条数
    total.value = result.data.total
}
articleList()


// // 当每页条数发生了变化，调用此函数
// const onSizeChange = (size) => {
//     pageSize.value = size
//     articleList()
// }
// //当前页码发生变化，调用此函数
// const onCurrentChange = (num) => {
//     pageNum.value = num
//     articleList()
// }


import { Plus } from '@element-plus/icons-vue'
//控制抽屉是否显示
const visibleDrawer = ref(false)
//添加表单数据模型
const articleModel = ref({
    title: '',
    categoryId: '',
    coverImg: '',
    content: '',
    state: ''
})
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'


import { useTokenStore } from '@/stores/token.js'
const tokenStore = useTokenStore();


//上传成功的回调函数
const uploadSuccess = (result) => {
    articleModel.value.coverImg = result.data;
    console.log(result.data);
}

import { ElMessage } from 'element-plus'
//添加文章
const addArticle = async (state) => {
    articleModel.value.state = state
    let result = await articleAddService(articleModel.value);
    ElMessage.success(result.message ? result.message : '添加成功')
    //再次调用articleList,获取文章
    articleList()
    //隐藏抽屉
    visibleDrawer.value = false
}


//----------------------------------------------------------------------------------------

const commodities = ref([
    {
        "id": 1,
        "username": "臧超禹2",
        "context": "水",
        "time": "2021-06-07 08:04:32",
        "likes": 1,
        "imageUrl1": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "imageUrl2": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "imageUrl3": "null",
        "imageUrl1l": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "imageUrl2l": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "imageUrl3l": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "categoryId": 1
    },
    {
        "id": 2,
        "username": "臧超禹2",
        "context": "水",
        "time": "2021-06-07 08:04:32",
        "likes": 1,
        "imageUrl1": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "imageUrl2": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "imageUrl3": "null",
        "imageUrl1l": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "imageUrl2l": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "imageUrl3l": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "categoryId": 3
    },
    {
        "id": 3,
        "username": "臧超禹",
        "context": "水",
        "time": "2021-06-07 08:04:32",
        "likes": 1,
        "imageUrl1": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "imageUrl2": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "imageUrl3": "null",
        "imageUrl1l": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "imageUrl2l": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "imageUrl3l": "https://t11.baidu.com/it/u=4054651374,217838894&fm=30&app=106&f=JPEG?w=640&h=783&s=9D48A35F0F175BCE3A74B1CB0100C070",
        "categoryId": 2
    }
])

import {  commoditiesListService, } from '@/api/commodities.js'
const commoditiesList = async () => {
    let params = {
        pageNum: pageNum.value,
        pageSize: pageSize.value,
        categoryId: categoryId.value ? categoryId.value : null,
        // state: state.value ? state.value : null
    }
    let result = await commoditiesListService(params);
    //渲染列表数据
    commodities.value = result.data.items
    //为列表中添加categoryName属性
    for (let i = 0; i < commodities.value.length; i++) {
        let commodity = commodities.value[i];
        for (let j = 0; j < categorys.value.length; j++) {
            if (commodity.categoryId === categorys.value[j].id) {
                console.log("存在匹配");
                commodity.categoryName = categorys.value[j].categoryName
            }
        }
    }
    //渲染总条数
    total.value = result.data.total
}
commoditiesList()

// 当每页条数发生了变化，调用此函数
const onSizeChange = (size) => {
    pageSize.value = size
    commoditiesList()
}
//当前页码发生变化，调用此函数
const onCurrentChange = (num) => {
    pageNum.value = num
    commoditiesList()
}



</script>
<template>
    <el-card class="page-container">
        <template #header>
            <div class="header">
                <span>数据展示</span>
            </div>
        </template>
        <!-- 搜索表单 -->
        <el-form inline class="demo-form-inline">
            <el-form-item label="商品分类：">
                <el-select placeholder="请选择" v-model="categoryId">
                    <el-option v-for="c in categorys" :key="c.id" :label="c.categoryName" :value="c.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="commoditiesList">搜索</el-button>
                <el-button @click="categoryId = ''">重置</el-button>
            </el-form-item>
        </el-form>
        <!-- 商品列表 -->
        <el-table :data="commodities" style="width: 100%">
            <el-table-column label="id"  align="center" width="60">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ scope.row.id }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="用户名" align="center"  width="100">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ scope.row.username }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="内容"  width="300">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ scope.row.context }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="分类" width="100">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ scope.row.categoryName }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="时间" width="130">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <el-icon></el-icon>
                        <span style="margin-left: 10px">{{ scope.row.time }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="图片1" align="center" min-width="50">
                <template #default="scope">
                    <div class="demo-image__preview">
                        <el-image style="width: 100px; height: 100px" :src="scope.row.imageUrl1" :zoom-rate="1.2"
                            :max-scale="7" :min-scale="0.2" :preview-src-list="[scope.row.imageUrl1]"
                            preview-teleported="true" :initial-index="4" fit="cover" />
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="图片2" align="center" min-width="50">
                <template #default="scope">
                    <div class="demo-image__preview">
                        <el-image style="width: 100px; height: 100px" :src="scope.row.imageUrl2" :zoom-rate="1.2"
                            :max-scale="7" :min-scale="0.2" :preview-src-list="[scope.row.imageUrl2]"
                            preview-teleported="true" :initial-index="4" fit="cover" />
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="图片3" align="center" min-width="50">
                <template #default="scope">
                    <div class="demo-image__preview">
                        <el-image style="width: 100px; height: 100px" :src="scope.row.imageUrl3" :zoom-rate="1.2"
                            :max-scale="7" :min-scale="0.2" :preview-src-list="[scope.row.imageUrl3]"
                            preview-teleported="true" :initial-index="4" fit="cover" />
                    </div>
                </template>
            </el-table-column>
            <template #empty>
                <el-empty description="没有数据哦。。。。。。" />
            </template>
        </el-table>
        <!-- 分页条 -->
        <el-pagination v-model:current-page="pageNum" v-model:page-size="pageSize" :page-sizes="[3, 5, 10, 15]"
            layout="jumper, total, sizes, prev, pager, next" background :total="total" @size-change="onSizeChange"
            @current-change="onCurrentChange" style="margin-top: 20px; justify-content: flex-end" />
    </el-card>
</template>
<style lang="scss" scoped>
.page-container {
    min-height: 100%;
    box-sizing: border-box;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

.demo-form-inline .el-input {
    --el-input-width: 220px;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
}

/* 抽屉样式 */
.avatar-uploader {
    :deep() {
        .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }

        .el-upload {
            border: 1px dashed var(--el-border-color);
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: var(--el-transition-duration-fast);
        }

        .el-upload:hover {
            border-color: var(--el-color-primary);
        }

        .el-icon.avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            text-align: center;
        }
    }
}

.editor {
    width: 100%;

    :deep(.ql-editor) {
        min-height: 200px;
    }
}

.demo-image__error .image-slot {
   font-size: 30px;
}

.demo-image__error .image-slot .el-icon {
   font-size: 30px;
}

.demo-image__error .el-image {
   width: 100%;
   height: 200px;
}
</style>