<template>
  <yd-tabbar :fixed="true" :active-color="'#e1251b'">
      <yd-tabbar-item title="首页" active link="index">
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
</template>