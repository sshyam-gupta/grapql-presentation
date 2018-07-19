// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Markdown,
  Appear,
  Link,
  List,
  ListItem
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {/*Slide 1*/}
        <Slide transition={["zoom"]} bgColor="primary" notes={`
        - Declarative data fetching specs.
        - Query Language.
        - By FB.`}
        >
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            REST vs GraphQL
          </Heading>
        </Slide>

        {/*Slide 2*/}
        <Slide transition={["fade"]} bgColor="primary" notes={`
        - Both specifications for building and consuming APIs.
         - Operated over HTTP.
         - Though graphQL is Protocol agnostic.`}
        >
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            What is GraphQL?
          </Heading>
        </Slide>

        {/*Slide 3*/}
        <Slide transition={["fade"]} bgColor="primary" notes={`
          - Typical REST API, to fetch or retrieve data from a server, we might end up making requests to multiple endpoints.
          - GraphQL, we only have one endpoint with which we access data on a server.`}
        >
          <Heading size={1} fit textColor="secondary">
            Similarities between <br /> REST & GraphQL
          </Heading>
        </Slide>

        {/*Slide 4*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit textColor="secondary">
            Data Fetching
          </Heading>
        </Slide>

        {/*Slide 5*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Text textAlign="left" textSize={"30"}>
            {"We want to retrieve an user along with the task(s) he/she has created, and in turn get the comments on each of the task(s)."}
          </Text>
          <br />
          <Appear>
            <Text textAlign="left" textSize={"25"}>{"/users/:id"}</Text>
          </Appear>
          <Appear>
            <Text textAlign="left" textSize={"25"}>{"/users/:id/tasks"}</Text>
          </Appear>
          <Appear>
            <Text textAlign="left" textSize={"25"}>{"/users/:id/tasks/:id/comments"}</Text>
          </Appear>
        </Slide>

        {/*Slide 5*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Text>GraphQL</Text>
          <div style={{ display: "flex" }}>
            <Markdown textAlign="left" textSize="20" bgColor="quarternary" style={{ padding: "5px 25px", flex: 2 }}>
              {`
###### Request
\`\`\`
{
  user {
    name
    task {
      title
      comments {
        comment
      }
    }
  }
}
\`\`\`
`}
            </Markdown>

            <Markdown textAlign="left" textSize="15" bgColor="quarternary" style={{ padding: "5px 25px" }}>
              {`
###### Response
\`\`\`
{
  "data": {
    "user": {
      "name": "Anonymous Dev 1",
      "tasks": [
        {
          "title": "Learn GraphQL 💻",
          "comments": [
            {
              "comment": "How is it?😕"
            },
            {
              "comment": "Its Awesome, you must try😕"
            }
          ]
        },
        {
          "title": "Learn Apollo Client: React, Angular, Vue",
          "comments": [
            {
              "comment": "Cool!😎✌🏽"
            }
          ]
        }
      ]
    }
  }
}
\`\`\`
`}
            </Markdown>
          </div>
        </Slide>

        {/*Slide 6*/}
        <Slide transition={["fade"]} bgColor="primary" notes={`
          - REST: Three different requests to the server.
           - GRAPHQL: Single request to the server.
           - GraphQL reduces network requests by allowing us fetch or retrieve all the data we need in a single query.`}
        >
          <Heading size={1} fit textColor="secondary">
            Network Requests
          </Heading>
        </Slide>

        {/*Slide 7*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit textColor="secondary">
            Caching
          </Heading>
          <br />
          <Link href="https://www.apollographql.com/client" textAlign="right">
            <Text textColor="tertiary">
              -- Apollo Client
            </Text>
          </Link>
          <Link href="https://fastql.io" textAlign="right">
            <Text textColor="tertiary">
              -- FastQL
            </Text>
          </Link>


        </Slide>

        {/*Slide 8*/}
        <Slide transition={["fade"]} bgColor="primary" notes={`
          - (Over-fetch) Downloading superfluous data.
           - (Under-fetch) Leads to the n+1 problem.
        `}
        >
          <Heading size={1} fit textColor="secondary">
            Over / Under Fetching
          </Heading>
          <br />

        </Slide>

        {/*Slide 8*/}
        <Slide transition={["fade"]} bgColor="primary" notes={`
          - REST: HTTP status code.
           - GraphQL: 200 OK.
        `}
        >
          <Heading size={1} fit textColor="secondary">
            Error Handling
          </Heading>
        </Slide>

        {/*Slide 8*/}
        <Slide transition={["fade"]} bgColor="primary" textAlign="right">
          <List>
            <ListItem textColor="tertiary">
              <Link href="https://github.com/sshyam-gupta/TODO-GraphQL">
                TODO app
              </Link>
              <Link style={{ padding: "0 5px" }} href="https://react-todo-graphql.surge.sh/">
                (Demo)
              </Link>
            </ListItem>

            <ListItem textColor="tertiary">
              <Link href="https://github.com/sshyam-gupta/pokemon-app">
                Pokemon app
              </Link>
              <Link style={{ padding: "0 5px" }} href="https://react-pokemon-graphql.surge.sh/">
                (Demo)
              </Link>
            </ListItem>
          </List>

        </Slide>
      </Deck>
    );
  }
}
