import axios from "axios";

async function fetchImages(query, page) {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    params: {
      client_id: "mLrCc01pGdYdstzsgW4ld86r68jOTYhRbG5OiGVQZjk",
      query,
      page,
      per_page: 12,
    },
  });

  return response.data;
}

export default fetchImages;