import { generate } from "@genql/cli";

const endpoint = "http://localhost:3000";

generate({
  endpoint: endpoint,
  output: "./generated",
})
  .then(() => {
    console.log("Generated");
  })
  .catch(console.error);
