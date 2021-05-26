<script lang="ts">
    export let placeholder: string


</script>

<input type="text" placeholder="{placeholder}">

<style>
    input{
        margin-right: 1rem;
        border:none;
        outline:none;
        height:2em;
        background-color:transparent;
        box-shadow: 0px 1px gray;
        transition: box-shadow 0.3s;
        margin-bottom: 1em;
        width: 40%;
    }
    input:focus{
        box-shadow: 0px 1px #2782FF !important;
    }
</style>