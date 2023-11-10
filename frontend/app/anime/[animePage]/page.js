const getData = async () => {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  return data;
};

export default async function AnimePage({ params }) {
  const data = await getData();

  return (
    <div>
      Welcome to {params.animePage} {data.type}
    </div>
  );
}
