<script>
    import { link } from 'svelte-spa-router'
</script>

<div class="navbar">
    <div class="navbar-inner">
        <a href="/" use:link class="navbar-item">
            <img alt="logo" class="navbar-image" src="https://i.imgur.com/glXgXeA.png">
        </a>
        <div class="navbar-items">
            <a href="/questions" use:link class="navbar-item">Questions</a>
            <a href="/about" use:link class="navbar-item">About</a>
            <a href="/volunteer" use:link class="navbar-item">Volunteer</a>
        </div>
    </div>
</div>

<style>
    .navbar {
        position: sticky;
        top: 0;
        width: 100%;
        min-height: 4rem;
        z-index: 10;
        background-color: white; /*#4285f4ff;*/
        color:white;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 12px -4px rgb(0 0 0 / 5%);
    }

    .navbar-image {
        height: 3rem;
    }

    .navbar-items {
        display: flex;
        gap: 3rem;
    }
    .navbar-inner {
        width: 100%;
        height: 100%;
        min-height: 4rem;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: calc(5% + 9px);
        padding-right: calc(5% + 9px);
    }

    a {
        color: rgb(94, 94, 94);
        text-decoration: none;
    }

    a:hover {
        color:black;
        text-decoration:none;
        cursor:pointer;
    }
</style>
