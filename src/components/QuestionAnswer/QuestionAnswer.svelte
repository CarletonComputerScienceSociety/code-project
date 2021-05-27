<script lang="ts">
    import { Button } from '../../components'
    import { Input } from '../../components/Input'
    export let cssClass: string

</script>

<div><Input cssClass={cssClass} id="response" placeholder="Enter your response here..."/><Button label="Submit"/></div>
