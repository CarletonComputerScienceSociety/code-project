<script lang="ts">
    import { Button, ButtonInverse } from '../../components'
</script>

<div class="header-information">
    <div class="title-top">Carleton Computer Science Society</div>
    <div class="title-main">Code Challenge</div>
    <div class="title-bottom">
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
    </div>
    <div class="header-buttons">
        <Button label="Questions"/>
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
    }

    .title-main {
        font-size: 4rem;
        font-weight: bold;
        font-family: 'Nunito', sans-serif;
        margin: 0;
        white-space: nowrap;
    }

    .title-top {
        font-size: 1.9rem;
        font-family: 'Nunito', sans-serif;
        margin: 0;
        margin-bottom: 0.75rem;
        width: fit-content;
    }

    .title-bottom {
        font-size: 1.3rem;
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