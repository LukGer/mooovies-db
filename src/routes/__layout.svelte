<script>
    import "../main.css";
    import Header from "$lib/components/Header.svelte";
</script>

<div class="page">
    <Header></Header>
    
    <slot></slot>
    
    <h3>Footer</h3>
</div>


<style>
</style>