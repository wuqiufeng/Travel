<template>
	<div>
		<div class="title">
			热销推荐
		</div>
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
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script >
	export default {
		name: 'HomeRecommend',
		props: {
			list: Array
		},
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
		margin-top: .2rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item
		overflow: hidden
		display: flex
		height: 1.9rem
		.item-img
			width: 1.7rem
			height: 1.7rem
			padding: .1rem
		.item-info
			flex: 1
			padding: .1rem
			min-width: 0
			.item-title
				line-height: .54rem
				font-size: .32rem
				ellipsis()
			.item-desc
				line-height: .4rem
				color: #ccc
				ellipsis()
			.item-button
				line-height: .44rem
				margin-top: .16rem
				background: #ff9300
				padding: 0 .2rem
				border-radius: .06rem
				color: #fff
			
</style>