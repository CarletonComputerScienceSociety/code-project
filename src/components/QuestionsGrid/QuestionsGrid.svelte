<script lang="ts">
    import { QuestionCard } from '../../components'
    import { link } from 'svelte-spa-router'

    export let questions = []
</script>


<div class="questions-grid">
    {#if questions.length !== 0}
        {#each questions as question}
            <a href={'/question/' + question.id} use:link>
                <QuestionCard difficulty={question.difficulty} title={question.title} body={question.preview}/>
            </a>
        {/each}
    {/if}
</div>
<!--<h2><p>More questions will appear  week!</p></h2>-->

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

    h2 {
        margin: auto;
        text-align: center;
        margin-top: 4rem;
    }
</style>
