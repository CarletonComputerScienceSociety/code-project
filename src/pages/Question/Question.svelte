<script lang="ts">
    import type { Question } from '../../types'
    import { QuestionAnswer, MainQuestion } from '../../components'
    import { getQuestion } from '../../services'
    import { onMount } from 'svelte'

    export let params = {}

    // THIS IS A TEMPORARY QUESTION UNTILL WE FIGURE OUT HOW TO RENDER AFTER AWAIT
    let question: Question = {
      id: -1,
      body: 'awdawd',
      categories: [],
      difficulty: 'Basic',
      expirationDate: '2021-05-31',
      format: 't',
      releaseDate: '2021-04-30',
      title: 'test'
    }

    onMount(async () => {
      // THE ERROR WITH params.id IS BECAUSE WE NEED TO CREATE A TYPE
      question = await getQuestion(parseInt(params.id))
    })
</script>

<main>
    <div id="question">
        <MainQuestion
            question = { question }/>
    </div>
    <div id="inputArea">
        <QuestionAnswer cssClass=""/>
    </div>
</main>

<style>
    #question{
        display: flex;
        justify-content: center;
    }
    #inputArea{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 5vh auto;
    }
    main{
        border: 1px solid black;
        width: 90%;
        margin: auto;
        margin-top: 10vh;
        margin-bottom: 3vh;
    }
</style>
