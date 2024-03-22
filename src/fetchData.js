export async function fetchData(category) {
  try {
    const response = await fetch(`https://swapi.dev/api/${category}`);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// fetchData("people").then((data) => console.log(data));
