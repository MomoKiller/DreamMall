<template>
    <div class="index-wrap">
        <!--搜索logo-->
        <header>
            <h1 class="logo"></h1>
            <section class="search-input">
                <yd-search v-model="value1" :placeholder="'请输入关键词进行搜索'"></yd-search>
            </section>
        </header>
        <!--轮播-->
        <yd-slider autoplay="3000">
            <yd-slider-item>
                <a href="http://www.ydcss.com">
                    <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
                </a>
            </yd-slider-item>
        </yd-slider>
        <!--滚动通告-->
        <section class="roll-wrap">
            <span class="roll-icon">
                <yd-icon name="weibiaoti555" :custom="true" slot="icon" size="16px"></yd-icon>
            </span>
            <yd-rollnotice autoplay="2000">
                <yd-rollnotice-item><span></span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
            </yd-rollnotice>
        </section>
        <yd-grids-group :rows="3" item-height="100px">
            <yd-grids-item v-for="n in 6" :key="n">
                <div slot="else">
                    <img src="//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg" >
                </div>
            </yd-grids-item>
        </yd-grids-group>
        <!--标题-->
        <h2 class="module-title">
            <img src="../assets/images/new-products.png" />
            <span class="more-btn"><em>MORE</em><yd-icon name="you" :custom="true" slot="icon" size="16px"></yd-icon></span>
        </h2>
        <h2 class="module-title">
            <img src="../assets/images/hot-products.png" />
            <span class="more-btn"><em>MORE</em><yd-icon name="you" :custom="true" slot="icon" size="16px"></yd-icon></span>
        </h2>
        <h2 class="module-title">
            <img src="../assets/images/distribution-zone.png" />
            <span class="more-btn"><em>MORE</em><yd-icon name="you" :custom="true" slot="icon" size="16px"></yd-icon></span>
        </h2>
        <yd-spinner :longpress="false" v-model="spinner6"></yd-spinner>
        <!--列表-->
        <yd-list theme="1">
            <yd-list-item v-for="item, key in list" :key="key">
                <img slot="img" :src="item.img">
                <span slot="title">{{item.title}}</span>
                <yd-list-other slot="other">
                    <span class="list-price"><em>¥</em>{{item.price}}</span>
                </yd-list-other>
            </yd-list-item>
        </yd-list>
        <!--底部导航-->
        <Footer/>
    </div>
</template>
<style lang="stylus">
    @import '../assets/css/index.css'
</style>
<script type="text/babel">
    import Footer from '@/components/footer'
    export default {
        data() {
            return {
                value1:'',
                spinner6:0,
                list: [
                    {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
                ]
            }
        },
        components:{
            Footer
        }
    }
</script>