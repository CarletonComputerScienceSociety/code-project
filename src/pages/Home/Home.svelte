<script lang="ts">
    import { Header } from '../../components'
    import { getQuestions } from '../../data'
    import { onMount } from 'svelte'

    let data = []

onMount(async () => {
      data = await getQuestions()
      console.log(data)
    })
</script>

<div class="home-page">
	<div class="header-center"><Header/></div>
</div>

<style>
    .home-page {
        display:flex;
        flex-direction: column;
        justify-content: center;
        min-height: 95vh;
        align-items: center;
    }

    .header-center {
        display: flex;
        justify-content: center;
    }
</style>
