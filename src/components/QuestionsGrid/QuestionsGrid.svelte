<script lang="ts">
import QuestionCard from '../QuestionCard/QuestionCard.svelte'

export let questions = []

</script>

<div class="questions_grid">
    {#each questions as question}
        <QuestionCard level={question.level} title={question.title} description={question.description}/>
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
</style>
