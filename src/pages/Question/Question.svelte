<script lang="ts">
import { QuestionGrid } from '../../components'
//Questions will be retrieved from core and exported here, dummy data is here for now
export let currentQuestions = [
    {
        level: 1,
        title: "Hello world",
        description: "null"
    },
    {
        level: 2,
        title: "Hello world",
        description: "null"
    },
    {
        level: 3,
        title: "Hello world",
        description: "null"
    },
    {
        level: 3,
        title: "Hello world",
        description: "null"
    },
]
export let pastQuestions = [
    {
        level: 1,
        title: "Good night",
        description: "null"
    },
    {
        level: 2,
        title: "Good night",
        description: "null"
    },
    {
        level: 3,
        title: "Good night",
        description: "null"
    },
    {
        level: 3,
        title: "Good night",
        description: "null"
    },
]
</script>


<div style="min-height: 4rem"></div>
<h1>Current questions</h1>
<QuestionGrid questions = {currentQuestions}/>
<h1>Past questions</h1>
<QuestionGrid questions = {pastQuestions}/>

<style>
    h1{
        padding: 2rem !important;
    }
</style>
