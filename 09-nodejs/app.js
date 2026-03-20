const http = require("http");
const static = require("node-static");
const querystring = require("node:querystring");

const port = process.env.PORT || 5002;

const file = new static.Server("./exercise");

const server = http.createServer((req, res) => {
  const urlPath = req.url.split("?")[0];

  // main route
  if (req.method === "GET" && urlPath === "/") {
    file.serveFile("/welcome.html", 200, {}, req, res);
  }
  // form route
  else if (req.method === "GET" && urlPath === "/form") {
    file.serveFile("/form.html", 200, {}, req, res);
  }
  // form submission
  else if (
    req.method === "POST" &&
    (urlPath === "/formExerciseSubmit" || urlPath === "/form")
  ) {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const userdata = querystring.parse(body);
      const { usernameInput: name, emailInput: email } = userdata;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<!doctype html><html><body>");
      res.write(
        "<p><strong>Thank you for submitting your information:</strong></p>",
      );
      res.write(`<p><strong>Name: ${name}</p></strong>`);
      res.write(`<p><strong>Email: ${email}</p></strong>`);
      res.write("</body></html>");
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
