<script lang="ts">
    export let difficulty: string
    export let title: string
    export let body: string
</script>

<div class="question_button">
    <div class="question_content">
        <span style="line-height: 0px">
            <h5 class={difficulty}>{difficulty}</h5>
            <h3>{title}</h3>
        </span>
        <span class="truncated_text">{body}</span>
    </div>
  </div>

<style>
    .question_button{
        font-family: 'Roboto', sans-serif; 
        justify-content: center;
        height: 14.375rem;
        width: 21.875rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 1.5%;
    }

    .question_content{
        padding: 0.938rem 1.25rem 1.25rem 1.25rem;
    }

    .truncated_text{
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .Basic{
        color: #28a74c;
    }
    .Intermediate{
        color: #0080ff
    }
    .Challenging{
        color: #f54425;
    }
</style>
