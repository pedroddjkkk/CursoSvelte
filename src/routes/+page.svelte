<script lang="ts">
  let count = 0;
</script>

<h1>{count}</h1>
<button on:click={() => count++} >Aumentar</button>
<button on:click={() => count--}>Diminuir</button>
