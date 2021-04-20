<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let label: string

    const dispatch = createEventDispatcher()

    const onClick = (event) => {
      dispatch('click', event)
    }
</script>

<button 
    on:click={onClick}>
    {label}
</button>

<style>
    button{
        color: white;
        border-width: 0em;
        border-radius: 0.5rem;
        background-color: #4285f4ff;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        font-size: 1.05rem;
        padding: 0.8rem 2.25rem;
        min-width: 8rem;
        max-height: 3rem;
        transition: all 0.15s;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        cursor:pointer;
    }

    button:hover{
        background-color: rgb(56, 117, 216);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    }

    button:focus {
        outline:0;
    }
</style>
