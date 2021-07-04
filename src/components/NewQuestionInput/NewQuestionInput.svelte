<script lang="ts">
    import { Button, ButtonInverse, Input } from '../../components'
    export let cssClass: string = ""

</script>

<div>
    <Input cssClass={cssClass} id="title" label="Title: " placeholder="e.g. 'P1: Hello World'"/>
    <Input cssClass={cssClass} id="body" label="Body: " placeholder="e.g. 'Implement Hello World in Python in under 5 lines of code'"/>
    <Input cssClass={cssClass} id="imgSrc" label="Image URL: " placeholder="e.g. 'https://example.org/image.jpg'"/>
    <Input cssClass={cssClass} id="imgAlt" label="Image Description: " placeholder="e.g. 'Graph demonstrating values'"/>
    <Input cssClass={cssClass} id="release" label="Release Date: " type="date" />
    <Input cssClass={cssClass} id="expiration" label="Expiration Date: " type="date" />
    <select name="difficulty" id="difficulty">
        <option value="Basic">Basic</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Challenging">Challenging</option>
    </select>
    <Button label="Submit Question"/>
    <ButtonInverse label="Preview Question"/>
</div>

<style>
    div{
        width: 100%;
    }
</style>
