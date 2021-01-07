<template>
  <div>
	  <el-container style="height: 500px; border: 1px solid #eee">
		
		  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			  <!--
					:default-openeds属性:选择默认要打开那些菜单,是通过控制菜单的index来关联 index值必须要用中括号括起来,下面也是
					:default-active属性:选择默认的选中,也是通过控制菜单的index来绑定的
				-->
			  <!--<el-menu :default-openeds="['1','2']" >
					&lt;!&ndash;
						<el-submenu>:可展开的菜单栏
							常用属性:
								index:菜单的下标,文本类型,不能是数值类型
						<template>: 对应的是el-submenu标签的菜单名
						<i>:设置菜单图标,通过class属性来设置
					&ndash;&gt;
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-message"></i>
							导航一
						</template>
						<el-menu-item index="1-1">选项1</el-menu-item>
						<el-menu-item index="1-2">选项2</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>导航二</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
					</el-submenu>
				</el-menu>-->
			  
			  <!--
			    通过路由动态读取侧边栏
			    menu与router的绑定(点击侧边栏跳转到对应页面)
			    第一步:
			      在<el-menu> 中添加router属性(直接写 router就行,不用写成router="xxx")
		      第二步:
		        在页面中添加<router-view/>
	        第三步:
	          <el-menu-item>标签的index值就是要跳转的router(index值写成对应路由的路径即可)
	          点击menu-item的时候,它要跳转的路径是由index来决定的,index是谁,就往哪跳
			  -->
			  <el-menu router :default-openeds="['0']"> <!--index值就是下面遍历出来的索引值,是从0开始的-->
				  <!--index取出来的索引是数值,拼接一个空串,转为字符串-->
				  <el-submenu v-for="(item,index) in $router.options.routes" :index="index + ''" v-if="item.show">
					  <template slot="title">
						  <i class="el-icon-message"></i>
						  {{ item.name }}
					  </template>
					  <!--class="is-active" 可以显示item的选中状态,当前浏览器地址栏的地址与item2.path相等时,表示被选中-->
					  <el-menu-item v-for="item2 in item.children" :index="item2.path"
					                :class="$route.path === item2.path ? 'is-active' : ''">
						  {{item2.name}}
					  </el-menu-item>
				  </el-submenu>
			  </el-menu>
			  
		  </el-aside>
		  
		  <el-main>
			  <router-view/>
		  </el-main>
	  </el-container>
  </div>
</template>

<script>
  export default {
    name: "Index"
  }
</script>

<style scoped>

</style>
