<template>
	<div>
		<el-form style="width: 50%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="图书名称" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			
			<el-form-item label="作者" prop="author">
				<el-input v-model="ruleForm.author"></el-input>
			</el-form-item>
			
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			ruleForm: {
				name: "",
				author: ""
			},
			rules: {
				name: [
					{
						required: true,  //是否必须
						message: "请输入图书名称",  //校验提示信息
						trigger: "blur"  //触发事件  blur表示焦点离开时触发
					},
					{
						min: 2,
						max: 10,
						message: "长度在 2 到 10 个字符",
						trigger: "blur"
					}
				],
				author: [
					{
						required: true,
						message: "请输入作者",
						trigger: "blur"
					}
				]
			}
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					axios.post('http://localhost:8181/book/save',this.ruleForm).then(res => {
						if (res.data === 'success'){
							this.$alert(this.ruleForm.name + ' 添加成功!','Success!', {
								confirmButtonText:'确定',
								callback:action => {
									this.$router.push('/bookManage')
								}
							})
						}
					})
				} else {
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
};
</script>
