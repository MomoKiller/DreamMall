<template>
    <section class="cart-wrap">
        <section class="items-module">
            <h3 class="items-title">
                <yd-checkbox val="1" shape="circle">常规</yd-checkbox>
            </h3>
            <ul class="items">
                <li>
                    <yd-checkbox val="1" shape="circle"></yd-checkbox>
                    <div class="pic">
                        <img src="" />
                    </div>
                    <div class="info">
                        <h3 class="name"></h3>
                        <span class="size"></span>
                        <p class="price">
                            <em>¥99.00</em>
                            <yd-spinner :longpress="false" v-model="spinner6"></yd-spinner>
                        </p>
                    </div>
                </li>
            </ul>
        </section>
        
    </section>
</template>
<style lang="stylus">
    .cart-wrap{
        background:#f0eff4;
        padding:10px;
        .items-module{
            margin-bottom:10px;
            background:#fff;
            border-radius:10px;
            .items-title{
                padding:10px 0;
                border-bottom:1px solid #cccccc;
            }
        }
    }
    
</style>
<script>

    export default {
        data() {
            return {
                checklist3: [],
                isCheckAll: false,
                spinner6:0
            }
        },
        methods: {
            change(value, isCheckAll) {
                this.isCheckAll = isCheckAll;
            },
            checkAll() {
                this.isCheckAll = !this.isCheckAll;
                this.$refs.checklistDemo.$emit('ydui.checklist.checkall', this.isCheckAll);
            }
        }
    }
</script>