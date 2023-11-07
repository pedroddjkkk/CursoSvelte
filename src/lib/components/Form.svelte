<script lang="ts">
  import "@fontsource/roboto";
</script>

<form method="post">
  <h3>Criar Post</h3>
  <div>
    <label for="title">Titulo</label>
    <input type="text" name="title" id="title" />
    <label for="content">Conteúdo</label>
    <textarea name="content" id="content" cols="30" rows="10" />
  </div>
  <button type="submit">Enviar</button>
</form>

<style>
  * {
    font-family: "Roboto", sans-serif;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 45px auto 0 auto;
    border-radius: 2px;
  }

  form > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    height: 30px;
  }

  textarea {
    resize: vertical;
  }

  button {
    border: none;
    margin-top: 20px;
    background-color: rgb(8, 182, 8);
    padding: 10px;
    color: #fff;
    border-radius: 2px;
  }

  button:hover {
    cursor: pointer;
  }
</style>
