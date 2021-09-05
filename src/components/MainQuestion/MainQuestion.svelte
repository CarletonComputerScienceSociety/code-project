<script lang="ts">
    import type { Question } from '../../types'
    import {CountdownOne} from '../CountdownOne'
    export let question: Question
</script>
<div id="question">
    <h1>{question.title}</h1>
    <CountdownOne datetime={question.expiration_date} realid={question.id}/>
    <div id="tags">
        <!-- area for tags/badges -->
    </div>
    <p class="body">{question.body}</p>
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

    .body {
        margin-top: 3rem;
    }
    span{
        font-weight: bold;
    }
    img{
        width: 70%;
        height: auto;
    }

</style>
