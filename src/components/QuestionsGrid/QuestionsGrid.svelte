<script lang="ts">
    import { QuestionCard } from '../../components'
    import { link } from 'svelte-spa-router'

    export let questions = []
</script>


<div class="questions-grid">
    {#each questions as question}
        <a href={'/question/' + question.id} use:link>
            <QuestionCard level={question.level} title={question.title} description={question.description}/>
        </a>
    {/each}
</div>

<style>
    .questions-grid {
        display: flex;
        column-gap: 3rem;
        row-gap: 3rem;
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
