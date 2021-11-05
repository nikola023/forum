import { useEffect, useState } from "react";

const CustomHook = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPending(false);
        setData(data);
      })
      .catch((err) => {
        setPending(false);
        setError(err.message);
      });
  }, [url]);
  return { data, isPending, error };
};

export default CustomHook;
