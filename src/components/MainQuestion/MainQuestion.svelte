<script lang="ts">
   // export let level: number
    export let title: string
    export let description: string
    export let imgSrc: string
    export let imgAlt: string
</script>
<div id="question">
    <h1>{title}</h1>
    <div id="tags">
        <!-- area for tags/badges -->
    </div>
    <p>{description}</p>
    {#if imgSrc}
        <img src="{imgSrc}" alt="{imgAlt}"/>
    {/if}
</div>

<style>
    #question{
        font-family: 'Nunito', sans-serif;
        width: 80%;
        text-align: center;
    }
    p{
        text-align: left;
    }
    img{
        width: 70%;
        height: auto;
    }

</style>
