<script lang="ts">
  import { QuestionsGridSection } from '../../components'
  import { getCurrentQuestions, getExpiredQuestions } from '../../data'
  import { onMount } from 'svelte'

  let currentQuestions = [];
  let expiredQuestions = [];

  onMount(async () => {
    currentQuestions = await getCurrentQuestions();
    expiredQuestions = await getExpiredQuestions();
  })
</script>

<div class="questions-page">
  <QuestionsGridSection label="Current Questions" questions = {currentQuestions}/>
  <QuestionsGridSection label="Past Questions" questions = {expiredQuestions}/>
</div>

<style>
  .questions-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 6rem;
  }
</style>
