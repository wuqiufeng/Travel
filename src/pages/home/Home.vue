<template>
	<div>	
		<home-header></home-header>
		<!-- <div class="home">Home world </div> -->
		<!-- <router-link to="/list">列表页</router-link> -->
	</div>
</template> 

<script>
import HomeHeader from './components/Header.vue'
	export default {
		name: 'Home',
		components: {
			HomeHeader
		}
	}
</script>
<style>	
.home {
	font-size: 50px;
}
</style>