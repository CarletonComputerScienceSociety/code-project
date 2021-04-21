<script lang="ts">
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player'
</script>

<div class="lottie">
    <LottiePlayer
        src="https://assets5.lottiefiles.com/packages/lf20_sbeqlcjm.json"
        autoplay="{true}"
        loop="{true}"
        controls="{false}"
        renderer="svg"
        background="transparent"
        height="{700}"
        width="{700}"
    />
</div>

<style>
    .lottie {
        /* https://themetry.com/css-image-cropping/ */
        max-width: 480px;
        text-indent: -120px;
        max-height: 480px;
        margin-top: -180px;
        overflow: hidden;
    }
</style>
