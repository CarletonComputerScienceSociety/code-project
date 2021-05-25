<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let level: number
    export let title: string
    export let description: string

    const dispatch = createEventDispatcher()

    const onClick = (event) => {
      dispatch('click', event)
    }
</script>

<div class="question_button">
    <div class="question_content">
        <span style="line-height: 0px">
            {#if level === 1}
            <h5 style="color: #28a74c">Basic</h5>
            {:else if level === 2}
            <h5 style="color: #0080ff">Intermediate</h5>
            {:else if level === 3}
            <h5 style="color: #f54425">Challenging</h5>
            {/if}
            <h3>{title}</h3>
        </span>
        <span class="truncated_text">{description}</span>
    </div>
  </div>

<style>
    .question_button{
        font-family: 'Roboto', sans-serif; 
        justify-content: center;
        height: 230px;
        width: 350px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 1.5%;
    }

    .question_content{
        padding: 15px 20px 20px 20px;
    }

    .truncated_text{
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>
