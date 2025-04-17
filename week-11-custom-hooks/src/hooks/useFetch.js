import { useState, useEffect } from "react";

export function usePostTitle() {
  const [post, setPost] = useState({});

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/10"
    );
    const data = await response.json();

    setPost(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return post;
}

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function getDetails() {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setFinalData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, [url]);

  // useEffect(() => {
  //   const intervalId = setInterval(getDetails, 10000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return { finalData, isLoading };
}
