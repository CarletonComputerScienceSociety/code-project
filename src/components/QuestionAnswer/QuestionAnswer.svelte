<script lang="ts">
    import { Button, Input } from '../../components'
    export let cssClass: string

</script>

<Input cssClass={cssClass} id="response" placeholder="Enter your Carleton email here..."/>
<Input cssClass={cssClass} id="response" placeholder="Enter your answer here..."/>
<Button label="Submit"/>

<style>
    div{
        width: 100%;
    }
</style>
