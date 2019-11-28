<template>
	<transition>
		<slot></slot>
	</transition>
</template> 

<script>
	export default {
		name: 'FadeAnimation'
	}
</script>

<!-- 1rem = html font-size = 50px -->
<style lang="stylus" scoped>
	.v-enter, v-leave-to
		opacity: 0
	.v-enter-active, .v-leave-active
		transition: opacity .5s
</style>