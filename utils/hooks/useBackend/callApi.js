export async function callApi(path, type, body) {
    path = path ?? "chargingstation";
  
    // type = type === undefined ? "GET" : type
  
    type = type ?? "GET";
    // console.log(
    //   "Going to path: ",
    //   path,
    //   "with a type of: ",
    //   type,
    //   "Body of: ",
    //   body
    // );
    const requestOptions = {
      method: type,
      headers: { "Content-Type": "application/json" },
    };
  
    if (body !== undefined) {
      requestOptions.body = JSON.stringify(body);
    }
  
    let response = [];
  
    try {
      const req = `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`;
  console.log(req, requestOptions)
      response = await fetch(req, requestOptions).then(res => res.json());
      // if(!response?.payload || response?.success === false){throw "Failed to get a response from the server"}
    } catch (err) {
      response = "error";
      console.error(
        err,
        " Did you include the correct syntax? Print backend functions with ('HELP') for help"
      );
    }
  
    return response;
    // === "error"? response : response.payload
  }