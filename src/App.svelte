<script lang="ts">
	import Router from 'svelte-spa-router'
	import { Navbar, Footer } from './components'
	import { About, Home, Question, NotFound, Volunteer } from './pages'

	const routes = {
	  '/': Home,
	  '/about': About,
	  '/question': Question,
	  '/volunteer': Volunteer,
	  '*': NotFound
	}
</script>

<Navbar/>
<Router {routes}/>
<Footer/>
