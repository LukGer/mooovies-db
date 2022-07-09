<script>
    import "../main.css";
</script>

<div class="page">
    <div class="header">
        <p>Header</p>
    </div>
    
    <slot></slot>
    
    <h3>Footer</h3>
</div>


<style>

    .header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>