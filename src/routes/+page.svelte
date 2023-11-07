<script lang="ts">
  import type { RickAndMortyCharacter } from "$lib/types";
  import { onMount } from "svelte";

  let data: RickAndMortyCharacter[] | undefined;

  onMount(async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const body = await res.json();
    data = body.results;
  });
</script>

<div class="wrapper">
  {#if data}
    {#each data as character}
      <div>
        <h1>{character.name}</h1>
        <h3>{character.gender}</h3>

        <img src={character.image} alt={character.name} />

        {#if character.gender === "Male"}
          <h3>Olá</h3>
        {/if}
      </div>
    {/each}
  {/if}
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .wrapper div {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 400px;
    height: 600px;
  }

  .wrapper div img {
    width: 100%;
    height: auto;
  }
  
</style>
