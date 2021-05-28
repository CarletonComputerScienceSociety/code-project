<script lang="ts">
	import Router from 'svelte-spa-router'
    import { QuestionCard } from '../../components'
</script>


<div style="min-height: 4rem"></div>
<h1>Current questions</h1>
<div class="questions_grid">
    <QuestionCard level = {1} title='Question title' description='do hello world'/>
    <QuestionCard level = {2} title='Question title' description='do hello world'/>
    <QuestionCard level = {3} title='Question title' description='do hello world'/>
    <QuestionCard level = {3} title='Question title' description='do hello world'/>
</div>
<h1>Past questions</h1>
<div class="questions_grid">
    <QuestionCard level = {1} title='Question title' description='do hello world'/>
    <QuestionCard level = {2} title='Question title' description='do hello world'/>
    <QuestionCard level = {3} title='Question title' description='do hello world'/>
    <QuestionCard level = {3} title='Question title' description='do hello world'/>
    <QuestionCard level = {1} title='Question title' description='do hello world'/>
    <QuestionCard level = {2} title='Question title' description='do hello world'/>
    <QuestionCard level = {3} title='Question title' description='do hello world'/>
    <QuestionCard level = {3} title='Question title' description='do hello world'/>
</div>

<style>
    h1{
        padding: 2rem !important;
    }

    .questions_grid{
        display: flex;
        justify-content: center;
        column-gap: 6rem;
        row-gap: 2rem;
        flex-wrap: wrap;
    }
</style>