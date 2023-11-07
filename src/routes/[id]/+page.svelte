<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import type { RickAndMortyCharacter } from "$lib/types";

  export let data: PageData;

  let character: RickAndMortyCharacter | undefined;

  onMount(async () => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/${data.params.id}`
    );
    const body = await res.json();
    character = body;
  });
</script>

<a href="/">Voltar</a>

{#if character}
  <div class="wrapper">
    <img src={character?.image} alt={`Imagem personagem ${character?.name}`} />
    <h1>
      {character?.name}
    </h1>

    {#if character?.created}
      <h3>
        {new Date(character?.created).toLocaleDateString("pt-BR")}
      </h3>
    {/if}
    <div class="details">
      <span>{character?.gender}</span>
      <span>{character?.location.name}</span>
      <span>{character?.status}</span>
      <span>{character?.origin.name}</span>
    </div>
  </div>
{:else}
  <h1>Carregando...</h1>
{/if}

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 0 auto 0 auto;
    width: 400px;
    border-radius: 15px;
  }

  .wrapper .details {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
  }
</style>
