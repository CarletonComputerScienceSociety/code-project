<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { Button, ButtonInverse, Input } from '../../components'
    import type { Question } from '../../types'

    export let cssClass: string = ""
    export let question: Question =  { 
        id: -1,
        title: '', 
        body: '', 
        imgSrc: '', 
        imgAlt: '', 
        releaseDate: '',
        expirationDate: '1', 
        categories: [], 
        format: '',
        difficulty: '',
        answer: ''
    }

    const dispatch = createEventDispatcher();

    function dispatchPreview(){
        dispatch('preview', {
            question: question
        })
    }

</script>

<div>
    <Input cssClass={cssClass} id="title" bind:value={question.title} label="Title: " placeholder="e.g. 'P1: Hello World'"/>
    <Input cssClass={cssClass} id="body" bind:value={question.body} label="Body: " placeholder="e.g. 'Implement Hello World in Python in under 5 lines of code'"/>
    <Input cssClass={cssClass} id="answer" bind:value={question.answer} label="Answer: " placeholder="e.g. '12'"/>
    <Input cssClass={cssClass} id="imgSrc" bind:value={question.imgSrc} label="Image URL: " placeholder="e.g. 'https://example.org/image.jpg'"/>
    <Input cssClass={cssClass} id="imgAlt" bind:value={question.imgAlt} label="Image Description: " placeholder="e.g. 'Graph demonstrating values'"/>
    <Input cssClass={cssClass} id="release" bind:value={question.releaseDate} label="Release Date: " type="date" />
    <Input cssClass={cssClass} id="expiration" bind:value={question.expirationDate} label="Expiration Date: " type="date" />
    <select name="difficulty" id="difficulty">
        <option value="Basic">Basic</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Challenging">Challenging</option>
    </select>
    <Button label="Submit Question"/>
    <ButtonInverse label="Preview Question" on:click{dispatchPreview}/>
</div>

<style>
    div{
        width: 100%;
    }
</style>
