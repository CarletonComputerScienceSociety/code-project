<script lang="ts">
    import { HeaderAnimation, HeaderInformation, Countdown } from '../../components'
</script>

<div class="header-wrap">
    <!--<div class="left"><HeaderInformation/></div>-->
    <div class="right">
        <img class="header-image" src="https://cdn.discordapp.com/attachments/490220076163792896/883220389524803624/okmann.png">
        <Countdown/>
    </div>
    <div class="right" style="margin-top: 2rem"><HeaderAnimation/></div>
</div>

<style>
    .header-wrap {
        display: flex;

        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1150px;
        padding-left: calc(5% + 9px);
        padding-right: calc(5% + 9px);
    }

    .header-image {
        width: 22rem;
        margin: 1rem auto;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
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
