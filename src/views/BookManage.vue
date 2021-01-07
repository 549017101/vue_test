<template>
	<div>
		<el-table :data="tableData"
		          :header-cell-style="{'text-align':'center'}"
		          :cell-style="{'text-align':'center'}"
		          border
		          style="width: 551px; margin: 0 auto;">
			<el-table-column
					prop="id"
					label="编号"
					width="100">
			</el-table-column>
			<el-table-column
					prop="name"
					label="书名"
					width="150">
			</el-table-column>
			<el-table-column
					prop="author"
					label="作者"
					width="150">
			</el-table-column>
			<el-table-column
					label="操作"
					width="150">
				<template slot-scope="scope">
					<el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
					<el-button @click="deleteBook(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<br>
		<el-pagination
				background
				layout="prev, pager, next"
				page-size='6'
				:total="total"
				@current-change="page">
			<!--
				page-size表示每页几条记录,total表示总记录数
				@current-change:当表格的当前行发生变化就会触发这个事件,在这里可以用来监听分页条的点击
			-->
		</el-pagination>
	</div>
</template>

<script>
import axios from "axios";

export default {
	methods: {
		edit(row) {
			//参数 row 就包括了当前这一行的所有数据
			//console.log(row);
			this.$router.push({
				path:'/update',
				query:{
					id:row.id
				}
			})
		},
		deleteBook(row){
			axios.delete('http://localhost:8181/book/deleteById/' + row.id).then(res => {
				this.$alert(row.name + ' 删除成功!','Success!', {
					confirmButtonText:'确定',
					callback:action => {
						//刷新当前页面
						window.location.reload()
					}
				})
			})
		},
		page(currentPage){ //在这里处理分页数据
			//alert(currentPage)
			axios.get('http://localhost:8181/book/findAll/' + currentPage + '/6').then(res => {
				this.tableData = res.data.content
				this.total = res.data.totalElements
			})
		}
	},
	created() {
		//第一次加载时,显示第一页数据
		axios.get('http://localhost:8181/book/findAll/1/6').then(res => {
			//axios的回调函数使用 箭头函数 可以解决this作用域问题
			//console.log(res);
			this.tableData = res.data.content
			this.total = res.data.totalElements
		})
	},
	data() {
		return {
			total:null,
			tableData: null
		};
	}
};
</script>

<style scoped>
	div{
		text-align: center;
	}
	
</style>
