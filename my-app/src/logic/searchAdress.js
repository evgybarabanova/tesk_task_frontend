import axios from "axios";

export default function searchAdress(query) {
  const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const token = "e55f12189e40770380eaf1919c6b75aa2fd42a49";

  return axios.post(url, {
    query
  }
    , {
      headers: {
        "Authorization": `Token ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
    .then((response) => {
      return response.data.suggestions
    })
    .catch((error) => {
      alert('error', error.response)
    })
}