const list = async () => {
  const res = await fetch("/api/vv/device", {
    method: "GET",
    headers: {
      Accept: "applicatioin/json",
      "Content-Type": "applicatioin/json",
    },
  });

  return res.json();
};

export { list };
