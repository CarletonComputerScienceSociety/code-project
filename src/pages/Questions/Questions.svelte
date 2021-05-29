<script lang="ts">
import { QuestionsGrid } from '../../components'
// Questions will be retrieved from core and exported here, dummy data is here for now
export let currentQuestions = [
  {
    level: 1,
    title: 'Hello world',
    description: 'null'
  },
  {
    level: 2,
    title: 'Hello world',
    description: 'null'
  },
  {
    level: 3,
    title: 'Hello world',
    description: 'null'
  },
  {
    level: 3,
    title: 'Hello world',
    description: 'null'
  }
]
export let pastQuestions = [
  {
    level: 1,
    title: 'Good night',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    level: 2,
    title: 'Good night',
    description: 'null'
  },
  {
    level: 3,
    title: 'Good night',
    description: 'null'
  },
  {
    level: 3,
    title: 'Good night',
    description: 'null'
  },
  {
    level: 1,
    title: 'Good night',
    description: 'null'
  },
  {
    level: 2,
    title: 'Good night',
    description: 'null'
  },
  {
    level: 3,
    title: 'Good night',
    description: 'null'
  },
  {
    level: 3,
    title: 'Good night',
    description: 'null'
  }
]
</script>


<div style="min-height: 4rem"></div>
<h1>Current questions</h1>
<QuestionsGrid questions = {currentQuestions}/>
<h1>Past questions</h1>
<QuestionsGrid questions = {pastQuestions}/>
<br><br><br>
<style>
    h1{
        padding: 2rem !important;
    }
</style>
