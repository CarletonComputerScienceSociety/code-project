<script lang="ts">
    import { Header, QuestionsGrid, Footer } from '../../components'
    import { getQuestions } from '../../services'
    import { onMount } from 'svelte'

    let questions = []

    onMount(async () => {
      questions = await getQuestions()
    })
</script>

<div class="home-page">
	<div class="header-center">
        <Header/>
    </div>
    <div class="questions">
        <QuestionsGrid questions={questions}/>
    </div>
</div>
<Footer/>

<style type="text/scss">
    .home-page {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fit-content;
        background-color: rgb(252, 252, 252);
        overflow: hidden;
        margin-bottom: 2rem;
        min-height: 100vh;
    }

    .home-page-wrap {
        margin: 2rem 4rem;
        margin-bottom: 4rem;
        max-width: 1150px;
        margin-top: 0rem;
    }

    .header-center {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 2rem;
        /*background-image: url("https://cdn.discordapp.com/attachments/422419584893845534/852700077675380756/geometry2.png");*/
        animation: slide 40s linear infinite;
        margin-bottom: 3rem;
    }

    .questions {
        margin-bottom: 2rem;
    }

    @keyframes slide {
        from {
            background-position: 0 0;
        }
        to {
            background-position: -400px 0;
        }
    }

</style>
