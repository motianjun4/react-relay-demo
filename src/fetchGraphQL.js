
async function fetchGraphQL(query, variables) {
  const response = await fetch(`https://api.github.com/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });
  const data = await response.json();
  return data;
}

export default fetchGraphQL;