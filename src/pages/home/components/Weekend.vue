<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of list"
				:key="item.id"
			>
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" />
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<!-- <button class="item-button">查看详情</button> -->
				</div>
			</li>
		</ul>
	</div>
</template>

<script >
	export default {
		name: 'HomeWeekend',
		props: {
			list: Array
		} 
		// data () {
		// 	return {
		// 		recommendList: [{
		// 			id: '0001',
		// 			imgUrl: 'http://p0.meituan.net/200.0/deal/238c016f8fecdbb6013fa1277ea513b3294950.jpg@331_0_1326_1326a%7C267h_267w_2e_90Q',
		// 			title: '鑫小城故事',
		// 			desc: '[13店通用]2-3人餐，提供免费WiFi'
		// 			}, {
		// 			id: '0002',
		// 			imgUrl: 'http://p0.meituan.net/200.0/deal/00e6ee6c9823e7ad7957af2d633b056041236.jpg@63_0_392_392a%7C267h_267w_2e_90Q',
		// 			title: '鑫小城故事',
		// 			desc: '[13店通用]2-3人餐，提供免费WiFi'
		// 			}, {
		// 			id: '0003',
		// 			imgUrl: 'http://p0.meituan.net/200.0/deal/00e6ee6c9823e7ad7957af2d633b056041236.jpg@63_0_392_392a%7C267h_267w_2e_90Q',
		// 			title: '鑫小城故事',
		// 			desc: '[13店通用]2-3人餐，提供免费WiFi'
		// 		}]
		// 	}
		// },
	}
	
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 37.09%
		.item-img
			width: 100%
	.item-info
		padding: .1rem
		.item-title
			line-height: .54rem
			font-size: .32rem
			ellipsis()
		.item-desc
			line-height: .4rem
			color: #ccc
			ellipsis()	
</style>