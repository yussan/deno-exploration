function fetchData() {
  return new Promise((resolve) => {
    resolve({
      status: 200,
      message: "Transaction success",
    });
  });
}

let response = await fetchData();
console.log("response", response);
