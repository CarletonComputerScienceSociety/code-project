<script lang="ts">
	import Router from 'svelte-spa-router'
	import { Navbar, Footer } from './components'
	import { About, Home, Question, Questions, NotFound, Volunteer, SubmitQuestion } from './pages'

	const routes = {
	  '/': Home,
	  '/about': About,
	  '/questions/new': SubmitQuestion,
	  '/questions/:id': Question,
	  '/questions': Questions,
	  '/volunteer': Volunteer,
	  '*': NotFound
	}
</script>

<Navbar/>
<Router {routes}/>
<Footer/>
