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
        width: 70rem;
        margin: 2rem;
    }

    .left {
        margin: 1rem;
    }

    .right {
        margin: 1rem;
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
