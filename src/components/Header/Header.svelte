<script lang="ts">
    import { HeaderAnimation, HeaderInformation } from '../../components'
</script>

<div class="header-wrap">
    <div class="left"><HeaderInformation/></div>
    <div class="right"><HeaderAnimation/></div>
</div>

<style>
    .header-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        height: 70vh;
        padding-left: calc(5% + 9px);
        padding-right: calc(5% + 9px);
    }

    .left {
        height: 100%;
        width: 100%;
        max-width: 50vw;
        display: flex;
        /*justify-content: center;*/
        align-items: center;
        /*background-color: white;*/
        /*background-color: rgb(45 66 93);*/
        /*box-shadow: 0 4px 12px -4px rgb(0 0 0 / 5%);
        border-radius: 0 0 50% 0;*/
    }

    .right {
        margin: 1rem;
        margin: auto;
    }

    @media only screen and (max-width: 970px) {
        .header-wrap {
            width: 95%;
            flex-direction: column;
            height: fit-content;
        }

        .right {
            margin-top: 3rem;
        }
    }
</style>
