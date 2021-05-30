<script lang="ts">
    import { Header } from '../../components'
    import { getQuestions } from '../../data'
    import { onMount } from 'svelte'

    let questions = []

    onMount(async () => {
      questions = await getQuestions()
      console.log(questions)
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
