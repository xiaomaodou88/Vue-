<template>
<div id="my">
    <headerBar>
        <div slot="my" class="zhaowa-header-bar">
            <span class="logo">
                个人信息
            </span>
        </div>
    </headerBar>
    <ul class="my-bar">
        <li is="router-link" class="fl collect my-bar-li" to="/">
            <Icon type="cube" size="24" color="#f69e32"></Icon><br>
            收藏
        </li>
        <li is="router-link" class="fl history my-bar-li" to="/">
            <Icon type="ios-timer-outline" size="24" color="#658cf5"></Icon><br>
            历史
        </li>
    </ul>
    <div class="tip-item">
        消息通知
    </div>
    <div class="tip-item">
        设置
        <Icon type="ios-arrow-right" size="26" color="#ccc" class="fr to-setup"></Icon>
    </div>
    <bottom-nav></bottom-nav>
</div>
</template>

<script>
import bottomNav from '../components/Bottom-nav.vue'
import headerBar from '../components/Header-bar.vue'
export default {
    components: {
        bottomNav,
        headerBar
    }
}
</script>

<style lang="less">
.zhaowa-header-bar {
    .logo {
        color: #fff;
        font-size: 18px;
        vertical-align: middle;
    }
}
.my-bar {
    height: 1.6rem;
    position: relative;
    border-bottom: 1px solid #ccc;
    margin-top: 1.2rem;
    .my-bar-li {
        width: 50%;
        text-align: center;
        margin-top: 0.2rem;
        box-sizing: border-box;
        font-size: 13px;
        color: #000;
    }
    .collect {
        position: relative;
        display: block;
        &::after {
            content: "";
            box-sizing: border-box;
            position: absolute;
            height: 100%;
            right: 0;
            top: 0;
            border-right: 1px solid #bbb;
        }
    }
}
.tip-item {
    display: block;
    height: 1.1rem;
    width: 100%;
    margin-top: 0.3rem;
    color: #000;
    font-size: 16px;
    line-height: 1.1rem;
    font-weight: bold;
    position: relative;
    padding-left: 0.3rem;
    .to-setup{
        margin-right: .3rem;
        margin-top: .2rem;
    }
}
</style>
