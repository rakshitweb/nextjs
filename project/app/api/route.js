export function GET(request) {
  console.log(request);
  return Response.json({
    message: "This is a dummy API for your application!",
  });
}
