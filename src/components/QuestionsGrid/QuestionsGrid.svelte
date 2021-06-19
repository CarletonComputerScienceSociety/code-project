<script lang="ts">
    import { QuestionCard } from '../../components'
    import { link } from 'svelte-spa-router'

    export let questions = []
</script>


<div class="questions-grid">
    {#if questions.length === 0}
        <h1>No questions here at the moment. Check back soon!</h1>
    {:else}
        {#each questions as question}
            <a href={'/question/' + question.id} use:link>
                <QuestionCard difficulty={question.difficulty} title={question.title} body={question.body}/>
            </a>
        {/each}
    {/if}
</div>

<style>
    .questions-grid {
        display: flex;
        column-gap: 3rem;
        row-gap: 3rem;
        flex-wrap: wrap;
        justify-content: center;
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
