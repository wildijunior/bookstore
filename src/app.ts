import myExpress from "./config/server";

const app = myExpress();

app.listen(process.env.PORT || 3333, () => {
  console.log("Server up and running");
});
