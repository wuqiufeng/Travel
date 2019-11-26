<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
		    <swiper-slide v-for="item of list" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl" />
		    </swiper-slide>
	    	<div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
	  	
  	</div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		props: {
			list: Array
		},
		// data: function() {}
		data () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					loop: true
				},
				// swiperList: [{
				// 	id: '0001',
				// 	imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/abe3418971067bd655fb2794d6e2eeec.jpg"
				// }, {
				// 	id: '0002',

				// 	imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/76e68eda4ed089c0e5b0ce2367efe428.jpg",
				// }, {
				// 	id: '0003',
				// 	imgUrl: "http://imgs.qunarzz.com/vc/de/3d/1c/2ea7755853fef62ce549153026.jpg_92.jpg"
				// }]
			}
		},

		computed: {
			showSwiper () {
				return this.list.length
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
