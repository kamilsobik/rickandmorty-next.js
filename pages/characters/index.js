import Link from "next/link";

const hello = ({ characters }) => {
  return (
    <main>
      <h1>List of dzops:</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link href={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  const characters = data.results;

  return {
    props: {
      characters,
    },
  };
}

export default hello;
