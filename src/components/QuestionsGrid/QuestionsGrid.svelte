<script lang="ts">
import QuestionCard from '../QuestionCard/QuestionCard.svelte'
import { link } from 'svelte-spa-router'

export let questions = []

</script>

<div class="questions_grid">
    {#each questions as question}
        <a href={'/question/' + question.id} use:link>
            <QuestionCard level={question.level} title={question.title} description={question.description}/>
        </a>
    {/each}
</div>

<style>
    .questions_grid {
        display: flex;
        justify-content: center;
        column-gap: 6rem;
        row-gap: 2rem;
        flex-wrap: wrap;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        color: inherit;
        text-decoration:none;
        cursor:pointer;
    }
</style>
