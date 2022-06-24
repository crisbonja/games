<template>
<div>
	<nav aria-label="breadcrumb divider__bottom">
		<ol class="breadcrumb">
		<li class="breadcrumb-item active" 
			aria-current="page">{{name}}
		</li>
	</ol>
</nav>
	<span class=""></span>
</div>
</template>

<script>
export default {
 // eslint-disable-next-line vue/multi-word-component-names
 name: 'Breadcrumb',
 props: {
	name: {
		type: String,
	}
 }

}
</script>

<style>
.breadcrumb .divider__bottom {
	border-bottom: 1px solid blue;
	margin-top: 10px;
}
</style>