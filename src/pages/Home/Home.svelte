<script lang="ts">
    import { Header, QuestionsGrid } from '../../components'
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
    <div class="home-page-wrap">
        <QuestionsGrid questions={questions}/>
    </div>
</div>

<style type="text/scss">
    .home-page {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fit-content;
        background-color: rgb(252, 252, 252);
    }

    .home-page-wrap {
        margin: 4rem;
        max-width: 1150px;
    }

    .header-center {
        display: flex;
        justify-content: center;
        width: 100%;
        background-image: url("https://cdn.discordapp.com/attachments/422419584893845534/852700077675380756/geometry2.png");
        animation: slide 40s linear infinite;
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
