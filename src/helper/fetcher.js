import axios from "axios";
import wrapPromise from "./wrapPromise";

function fetcher(url) {
  const promise = axios.get(url).then((result) => result.data);

  return wrapPromise(promise);
}

export default fetcher;
