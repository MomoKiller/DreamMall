<template>
    <div>
        <section class="roll-wrap">
            <span class="roll-icon">
                <yd-icon name="weibiaoti555" :custom="true" slot="icon" size="16px"></yd-icon>
            </span>
            <yd-rollnotice autoplay="2000">
                <yd-rollnotice-item><span></span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
                <yd-rollnotice-item><span></span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
            </yd-rollnotice>
        </section>
        <yd-list theme="1">
            <yd-list-item v-for="item, key in list" :key="key">
                <img slot="img" :src="item.img">
                <span slot="title">{{item.title}}</span>
                <yd-list-other slot="other">
                    <span class="list-price"><em>¥</em>{{item.price}}</span>
                </yd-list-other>
            </yd-list-item>
        </yd-list>
        <yd-tabbar :fixed="true" :active-color="'#e1251b'">
            <yd-tabbar-item title="首页" active link="#">
                <yd-icon name="shouye" :custom="true" slot="icon" size="16px"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="分类" link="#">
                <yd-icon name="kinds" :custom="true" slot="icon" size="16px"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="购物车" link="#">
                <yd-icon name="yduigouwuchexuanzhong" :custom="true" slot="icon" size="16px"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item title="我的" link="#">
                <yd-icon name="wodemian2" :custom="true" slot="icon" size="16px"></yd-icon>
            </yd-tabbar-item>
        </yd-tabbar>
    </div>
</template>
<style lang="stylus">
    .roll-wrap{
        display:flex;
    }
    .roll-wrap .roll-icon{
        width:35px;
        height:30px;
        text-align:center;
        line-height:30px;
        color:#d81e06;
    }
    .yd-rollnotice-item{
        padding-left:15px;
        font-size:12px;
        color:#002e6d;
    }
    .yd-list{
        background:#fff;
    }
    .yd-list-other{
        display:block;
    }
    .list-price{
        display:block;
        font-size:12px;
        color:#e1251b;
        font-weight:bold;
        text-align:center;
    }

    .yd-tabbar{
        height:50px;
    }
</style>
<script type="text/babel">
    export default {
        data() {
            return {
                list: [
                    {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
                ]
            }
        }
    }
</script>