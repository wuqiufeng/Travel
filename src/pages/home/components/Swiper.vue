<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
		    <swiper-slide v-for="item of swiperList" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl" />
		    </swiper-slide>
	    	<div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
	  	
  	</div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		// data: function() {}
		data () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					loop: true
				},
				swiperList: [{
					id: '0001',
					imgUrl: "https://image.xiaozhustatic1.com/00,1600,700/23,0,97,12797,1600,700,eed4fc3c.jpg"
				}, {
					id: '0002',
					imgUrl: "https://image.xiaozhustatic1.com/00,1600,700/23,0,34,12847,1600,700,a64fd830.jpg",
				}, {
					id: '0003',
					imgUrl: "https://image.xiaozhustatic2.com/00,1600,700/23,0,90,12695,1600,700,2f9b9838.jpg",
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
    // background: red !important    
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
