<script lang="ts">
	import { Button, Footer, HeaderAnimation } from '../../components'
</script>

<div class="home-page">
	<div class="header-wrap">
		<Button label="Questions"/>
		<HeaderAnimation/>
	</div>
	<Footer/>
</div>

<style>
	.header-wrap {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
    }
    
    .home-page {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }
</style>
