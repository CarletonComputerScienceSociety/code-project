<script lang="ts">
    import { QuestionsGrid } from '../../components'

    export let questions = []
    export let label
</script>

<div class="questions-grid-wrap">
   <h1>{label}</h1>
   <QuestionsGrid questions={questions}/>
</div>

<style>
    h1{
        padding: 2rem 0 !important;
    }

    .questions-grid-wrap {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: var(--page-width);
    }
</style>
