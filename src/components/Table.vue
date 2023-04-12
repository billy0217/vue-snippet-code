<template>
	<div class="c-table--wrap">
	<table class="c-table">
		<thead class="c-table__head">
			<tr class="c-table__row">
				<th class="col-2">ID</th>
				<th class="col-4">Name</th>
				<th class="col-4">Email</th>
				<th class="col-2">Phone</th>
			</tr>
		</thead>
		<tbody v-if="userInfo.length" class="c-table__body">
			<tr v-for="u in userInfo" :key="u.id" class="c-table__row">
				<td class="c-table__column col-2">{{ u.id }}</td>
				<td class="c-table__column col-4">{{ u.name }}</td>
				<td class="c-table__column col-4"><a :href="`mailto:${u.email }`">{{ u.email }}</a></td>
				<td class="c-table__column col-2"><a :href="`tel:${ u.phone }`">{{ u.phone }}</a></td>
			</tr>
		</tbody>
		<tbody v-else>
			<tr v-if="!!errorMessage">
				<td class="c-table__column col-12" colspan="4">
					{{ errorMessage }}
				</td>
			</tr>
		</tbody>
	</table>
</div>
</template>

<script type="module">
	// @ is an alias to /src
	import axios from 'axios';
	export default {
		name: 'Table',
		data(){
			return{
				userInfo: {},
				errorMessage: null
			}
		},
		mounted(){
			// fetch user data
			axios.get("http://localhost:3001/users")
			.then( response => this.userInfo = response.data )
			.catch( error => this.errorMessage = error.response.data.message )
		}
	}
</script>

<style lang="scss">
	.c-table{
		width: 100%;
		background-color: var(--color-white);
		border-radius: var(--border-radius);
		border: 2px solid var(--color-grey);
		border-spacing: 0;

		th {
			font-size: 14px;
			padding: var(--size-bsu) var(--size-lsu);
			text-align: left;
			color: var(--color-blue);
		}

		&__column {
			padding: var(--size-bsu) var(--size-lsu);
			text-align: left;
			border-top: 2px solid var(--color-grey);
		}
	}
</style>


