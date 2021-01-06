<template>
	<div>
		<h2>{{ msg }}</h2>
		<table>
			<tr>
				<td>编号</td>
				<td>图书名称</td>
				<td>作者</td>
			</tr>
			<tr v-for="item in books">
				<td>{{ item.id }}</td>
				<td>{{ item.name }}</td>
				<td>{{ item.author }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Book",
	data() {
		return {
			msg: "Hello Vue",
			books: []
		};
	},
	created() {
		axios.get("http://localhost:8181/book/findAll")
				.then(res => {
					this.books = res.data;
				});
	}
};
</script>

<style scoped>

</style>
