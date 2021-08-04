<script lang="ts">
    import { NewQuestionInput, MainQuestion } from '../../components'
    import { onMount } from 'svelte'
    import type { Question } from '../../types'

    let currentQuestion: Question = { 
        id: -1,
        title: 'Question Title', 
        body: 'Question Body', 
        imgSrc: 'https://via.placeholder.com/468x60?ext=This+is+where+the+image+goes', 
        imgAlt: 'Placeholder', 
        releaseDate: '2021-07-01',
        expirationDate: '2030-07-01', 
        categories: [], 
        format: 't',
        difficulty: 'Intermediate',
        answer: 'N/A'
    }

    function handlePreview(event){
      currentQuestion = event.detail.question;
    }

  </script>
  
  <div class="question">
    <NewQuestionInput bind:question={currentQuestion}/>
    <h1>Preview: </h1>
    <div id="preview">
        <MainQuestion question={currentQuestion} on:preview={handlePreview} />
    </div>
  </div>
  
  <style>
    .question {
        width: 90%;
        margin: 6rem;
    }
    #preview{
        border: 1px solid black;
        text-align: center;
        margin-bottom: 3vh;
        padding: 1em;
    }
  </style>
  