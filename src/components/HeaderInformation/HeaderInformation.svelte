<script lang="ts">
    import { link } from 'svelte-spa-router'
    import { Button, ButtonInverse } from '../../components'
</script>

<div class="header-information">
    <div class="title-top">Carleton Computer Science Society</div>
    <div class="title-main">Code Challenge</div>
    <div class="title-bottom">
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
    </div>
    <div class="header-buttons">
        <a href="/questions" use:link><Button label="Questions"/></a>
        <span class="button-spacing">
            <ButtonInverse label="About"/>
        </span>
    </div>
</div>

<style>
    .header-information {
        display: flex;
        flex-direction: column;
        width: fit-content;
        background: white;
        padding: 4rem 3rem;
        box-shadow: 0 0px 8px 0 rgba(0,0,0,0.07);
    }

    .title-main {
        font-size: 3.5rem;
        font-weight: bold;
        font-family: 'Nunito', sans-serif;
        margin: 0;
        white-space: nowrap;
    }

    .title-top {
        font-size: 1.4rem;
        font-family: 'Nunito', sans-serif;
        margin: 0;
        margin-bottom: 0.75rem;
        width: fit-content;
    }

    .title-bottom {
        font-size: 1.2rem;
        font-family: 'Nunito', sans-serif;
        margin-top: 1.2rem;
        width: 30rem;
    }

    .header-buttons {
        margin-top: 2.3rem;
        display: flex;
        width: fit-content;
    }

    .button-spacing {
       margin-left: 1rem;
    }
</style>
