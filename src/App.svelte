<script lang="ts">
	import Router from 'svelte-spa-router'
	import { About, Home, Question, Questions, NotFound, Volunteer } from './pages'

	const routes = {
	  '/': Home,
	  '/about': About,
	  '/question/:id': Question,
	  '/questions': Questions,
	  '/volunteer': Volunteer,
	  '*': NotFound
	}
</script>

<Router {routes}/>
