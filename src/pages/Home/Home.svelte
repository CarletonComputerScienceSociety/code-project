<script lang="ts">
    import { Footer, Header } from '../../components'
</script>

<div class="home-page">
    <div class="navbar-spacing"></div>
	<div class="header-center"><Header/></div>
	<Footer/>
</div>

<style>
    .home-page {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }

    .header-center {
        display: flex;
        justify-content: center;
    }

    .navbar-spacing {
        min-height: 4rem;
    }
</style>
