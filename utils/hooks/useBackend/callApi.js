export async function callApi(path, type, body) {
  path = path ?? "chargingstation";
  type = type ?? "GET";

  const requestOptions = {
    method: type,
    headers: { "Content-Type": "application/json" },
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  let response = [];

  try {
    const req = `${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`;
    console.log(req, requestOptions);
    response = await fetch(req, requestOptions).then(res => res.json());
  } catch (err) {
    response = "error";
    console.error(
      err,
      " Did you include the correct syntax? Print backend functions with ('HELP') for help"
    );
  }

  return response;
  
}
