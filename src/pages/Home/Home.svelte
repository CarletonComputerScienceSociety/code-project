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
    .home-page {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }

    .header-wrap {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
    }  
</style>
