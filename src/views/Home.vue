<template>
<div id="home" class="clearfix">
    <headerBar>
        <div slot="home" class="zhaowa-header-bar">
            <Icon type="ios-email" size="30" color="#fff" class="fl header-email"></Icon>
            <span class="logo">
                前端头条
            </span>
            <span class="search fr">
                <Icon type="ios-search" size="30" color="#fff" class="header-search"></Icon>
            </span>
        </div>
    </headerBar>
    <transition enter-active-class="bounceInLeft">
        <ul class="list-content animated" v-show="ifReturnMsg">
            <router-link
                v-for="(val,index) in listContent"
                :to="{
                    // 详情页
                }"
                class="news-detail"
                :key="index"
            >
            <!-- 单个内容 -->
            <!-- 单条新闻略缩 -->
            <p class="title">{{ val.title }}</p>
            <div>
                <div>
                    <!-- 通讯社名称 -->
                    <span class="writer">
                        {{ val.media_name }}
                    </span>
                    <!-- 评论数  -->
                    <span class="comment-count">
                        {{ val.comment_count }}
                    </span>
                    <!-- 发布时间 -->
                    <span class="datetime">
                        {{ val.datetime }}
                    </span>
                </div>
            </div>
            </router-link>
        </ul>
    </transition>
    <div class="load-more" v-show="downLoadMore"
        @click="handleClickPull">
        点击加载更多
    </div>
    <bottom-nav></bottom-nav>
</div>
</template>

<script>
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'
import * as type from '../store/mutation-types.js'
import {
    mapActions,
    mapGetters
} from 'vuex'
export default {
    components: {
        headerBar,
        bottomNav
    },
    computed: {
        ...mapGetters([
            'list',
            'ifReturnMsg',
            'routerChange',
            'downLoadMore'
        ]),
        listContent: function() {
            return this.list['__all__'];
        },
    },
    methods: {
        ...mapActions([
            'getList',
            'loadMore'
        ]),
        handleClickPull() {
            // 加载更多逻辑
            this.loadMore({
                kind: '__all__',
                flag: this.routerChange
            })
        }
    },
    mounted() {
        // 初始化数据
        this.getList({
            kind: '__all__',
            flag: this.routerChange
        });
    },
    watch: {
        '$route': function() {
            this.getList({
                kind: '__all__',
                flag: this.routerChange
            });
            this.$store.commit(type.ROUTERCHANGE, true);
        },
    }
}
</script>

<style lang="less" scoped rel="styleheet/less">
@import "../assets/css/transtion.less";
.zhaowa-header-bar {
    & > i {
        margin-top: 0.2rem;
    }
    .logo {
        color: #fff;
        font-size: 18px;
        vertical-align: middle;
    }
    .header-email {
        margin-left: 0.22rem;
    }
    .search{
        display: inline-block;
       .header-search {
            margin-right: 0.22rem;
            margin-top: 0.2rem;
        } 
    }
    
}


// 主内容部分
.list-content {
    margin-top: 1.2rem;
    width: 100%;
    .news-detail {
        width: 94%;
        display: block;
        position: relative;
        margin: 0 auto;
        padding-bottom: 0.15rem;
        border-bottom: 1px solid #ccc;
        .title {
            font-size: 16px;
            font-weight: bold;
            color: #000;
            padding-top: 0.2rem;
            padding-bottom: 0.15rem;
        }
        .news-info {
            font-size: 10px;
            margin-top: 0.15rem;
            .writer {
                color: #000;
            }
            .comment-count {
                color: #000;
            }
            .datetime {
                float: right;
                color: #000;
            }
        }
    }
}
// 加载更多
.load-more {
    margin-bottom: 1.3rem;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    color: #000;
    font-size: 18px;
    text-align: center;
}

// 美化滚动条
::-webkit-scrollbar {
    display: none;
}
</style>
