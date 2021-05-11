<script lang="ts">
	import Router from 'svelte-spa-router'
	// import { Navbar } from './components'
	import { Home, Question, NotFound } from './pages'

	const routes = {
	  '/': Home,
	  '/question': Question,
	  '*': NotFound
	}
</script>

<!--<Navbar/>-->
<Router {routes}/>
