<script lang="ts">
    export let placeholder: string
    export let id: string
    export let cssClass: string

</script>

<input id="{id}" type="text" placeholder="{placeholder}" class="{cssClass}">

<style>
    input{
        margin-right: 1rem;
        border:none;
        outline:none;
        height:2rem;
        background-color:transparent;
        box-shadow: 0px 1px gray;
        transition: box-shadow 0.3s;
        margin-bottom: 1rem;
        width: 40%;
    }
    input:focus{
        box-shadow: 0px 1px #2782FF !important;
    }

    .error-input{
        box-shadow: 0px 1px red;
    }

    .correct-input{
        box-shadow: 0px 1px green;
    }
</style>
