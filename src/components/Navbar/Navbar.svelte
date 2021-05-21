<script>
    import { link } from 'svelte-spa-router'
</script>

<div class="navbar">
    <a href="/" use:link class="navbar-item">Home</a>
    <a href="/questions" use:link class="navbar-item">Questions</a>
    <a href="/about" use:link class="navbar-item">About</a>
    <a href="/volunteer" use:link class="navbar-item">Volunteer</a>
</div>

<style>
    .navbar {
        position: fixed;
        width: 100%;
        min-height: 4rem;
        box-shadow: 0 2px 4px 1px rgb(0 0 0 / 20%);
        z-index: 10;
        background-color: #4285f4ff;  
        display: flex;
        color:white;
        align-items: center;
        justify-content: space-evenly;
        font-weight: 500;
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
