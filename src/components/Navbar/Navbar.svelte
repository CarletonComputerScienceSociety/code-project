<script>
    import { link } from 'svelte-spa-router'
</script>

<div class="navbar">
    <div class="navbar-inner">
        <a href="/" use:link class="navbar-item">Home</a>
        <a href="/questions" use:link class="navbar-item">Questions</a>
        <a href="/about" use:link class="navbar-item">About</a>
        <a href="/volunteer" use:link class="navbar-item">Volunteer</a>
    </div>
</div>

<style>
    .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        min-height: 4rem;
        box-shadow: 0 2px 4px 1px rgb(0 0 0 / 20%);
        z-index: 10;
        background-color: #4285f4ff;
        color:white;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navbar-inner {
        width: var(--page-width);
        height: 100%;
        min-height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color:white;
        text-decoration:none;
        cursor:pointer;
    }
</style>
