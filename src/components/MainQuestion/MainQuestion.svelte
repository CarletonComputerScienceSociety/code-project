<script lang="ts">
    import type { Question } from '../../types'
    export let question: Question
</script>
<div id="question">
    <h1>{question.title}</h1>
    <div id="tags">
        <!-- area for tags/badges -->
    </div>
    <p>{question.body}</p>
    {#if question.imgSrc}
        <img src="{question.imgSrc}" alt="{question.imgAlt}"/>
    {/if}
    {#if question.answer}
        <p><span>Answer: </span> {question.answer}</p>
    {/if}
</div>

<style>
    #question{
        font-family: 'Nunito', sans-serif;
        width: 80%;
        text-align: center;
    }
    p{
        text-align: left;
    }
    span{
        font-weight: bold;
    }
    img{
        width: 70%;
        height: auto;
    }

</style>
