<script lang="ts">
    import { Button, Input } from '../../components'
    export let cssClass: string

</script>

<div><Input cssClass={cssClass} id="response" placeholder="Enter your response here..."/><Button label="Submit"/></div>

<style>
    div{
        width: 100%;
    }
</style>
