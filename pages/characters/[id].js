const CharacterPage = ({ character }) => {
  return (
    <main>
      <h1>Character {character.name}</h1>
      <h2>Spieces {character.spieces}</h2>
      <img src={character.image} alt={character.name} />
    </main>
  );
};

export default CharacterPage;

export async function getStaticPaths() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  const characters = data.results;

  const paths = characters.map((character) => ({
    params: { id: character.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();

  return {
    props: {
      character: data,
    },
  };
}
