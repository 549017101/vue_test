<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
			name: 'app',
			data() {
				const item = {
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄"
				};
				return {
					tableData: Array(20).fill(item)
				};
			}
		};
</script>

<style scoped>
	@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	
	.el-aside {
		color: #333;
	}
</style>
