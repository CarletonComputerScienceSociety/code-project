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
        justify-content: space-evenly;
        align-items: center;
        width: 80%;
    }

    .left {
        flex: 0 0 40%;
    }

    .right {
        flex: 0 0 30%;
    }

    @media only screen and (max-width: 760px) {
        .header-wrap {
            width: 95%;
            flex-direction: column;
            height: 60vh;
        }
    }
</style>
