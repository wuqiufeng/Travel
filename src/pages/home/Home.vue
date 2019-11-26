<template>
	<div>	
		<home-header></home-header>
		<!-- <div class="home">Home world </div> -->
		<!-- <router-link to="/list">列表页</router-link> -->
		<home-swiper></home-swiper>
	</div>
</template> 

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
	export default {
		name: 'Home',
		components: {
			HomeHeader,
			HomeSwiper
		}
	}
</script>
<style>	
.home {
	font-size: 50px;
}
</style>