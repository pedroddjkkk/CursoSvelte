<script lang="ts">
  import Form from "$lib/components/Form.svelte";
  import type { PageData } from "./$types";
  import "@fontsource/roboto";

  export let data: PageData;
</script>

<Form />

<div class="wrapper">
  {#if data.posts}
    {#each data.posts as post}
      <div class="post">
        <h1>{post.title}</h1>
        <span>{@html post.content}</span>
      </div>
    {/each}
  {/if}
</div>

<style>
  * {
    font-family: "Roboto", sans-serif;
  }

  .wrapper {
    width: 500px;
    margin: 0 auto;
  }

  .post {
    border: 1px solid #ccc;
    margin-top: 20px;
    border-radius: 5px;
    padding: 10px;
  }

  .post > h1 {
    padding: 0 auto;
  }
</style>
