<script lang="ts">
  import { QuestionsGrid } from '../../components'
  import { getCurrentQuestions, getExpiredQuestions } from '../../data'
  import { onMount } from 'svelte'

  let currentQuestions = []
  let expiredQuestions = []

  onMount(async () => {
    currentQuestions = await getCurrentQuestions()
    expiredQuestions = await getExpiredQuestions()
  })
</script>


<div style="min-height: 4rem"></div>
<h1>Current questions</h1>
<QuestionsGrid questions = {currentQuestions}/>
<h1>Past questions</h1>
<QuestionsGrid questions = {expiredQuestions}/>
<br><br><br>

<style>
    h1{
        padding: 2rem !important;
    }
</style>
