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

const images = {
  versioningImg: require("../assets/graphql-versioning.gif"),
  logo: require("../assets/graphql.png"),
  graphqlway: require("../assets/graphqlway.png"),
  restway: require("../assets/restway.png")
};

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
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            GraphQL vs REST
          </Heading>
        </Slide>

        {/*Slide 2*/}
        <Slide transition={["fade"]} bgColor="primary">
          <img src={images.logo} height="250px" />
          <br />
          <br />
          <Heading size={3} lineHeight={1} textColor="secondary">
            GraphQL?
          </Heading>
        </Slide>

        {/*Slide 3*/}
        <Slide transition={["fade"]} bgColor="primary" notes={`
          - Typical REST API, to fetch or retrieve data from a server, we might end up making requests to multiple endpoints.
          - GraphQL, we only have one endpoint with which we access data on a server.`}
        >
          <Heading size={3} textColor="secondary">
            Network Requests
          </Heading>
        </Slide>

        {/*Slide 5*/}
        <Slide transition={["fade"]} bgColor="primary" textSize={"25"}>
          <Text textAlign="left">
            {"We want to retrieve an user along with the task(s) he/she has created, and in turn get the comments on each of the task(s)."}
          </Text>
          <br />
          <div style={{ display: "flex", backgroundColor: "#CECECE" }}>
            <div>
              <Appear>
                <div>
                  <Markdown textAlign="left" bgColor="quarternary" style={{ padding: "5px 25px", flex: 2 }}>
                    {`
\`\`\`
/users/:id
\`\`\`
            `}
                  </Markdown>
                </div>
              </Appear>
              <Appear>
                <div>
                  <Markdown textAlign="left" bgColor="quarternary" style={{ padding: "5px 25px", flex: 2 }}>
                    {`
\`\`\`
/users/:id/tasks
\`\`\`
            `}
                  </Markdown>
                </div>
              </Appear>
              <Appear>
                <div>
                  <Markdown textAlign="left" bgColor="quarternary" style={{ padding: "5px 25px", flex: 2 }}>
                    {`
\`\`\`
/users/:id/tasks/:id/comments
\`\`\`
            `}
                  </Markdown>
                </div>
              </Appear>
            </div>

            <div>
              <Appear>
                <div>
                  <Markdown textAlign="left" bgColor="quarternary" style={{ padding: "5px 75px", width: "100%" }}>
                    {`

\`\`\`
{
  user(id: $id) {
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
                </div>
              </Appear>
            </div>
          </div>
        </Slide>

        {/*Slide 4*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Markdown textAlign="left" textSize="18" bgColor="quarternary" style={{ padding: "5px 25px" }}>
            {`
\`\`\`
{
  "data": {
    "user": {
      "name": "Anonymous Dev 1",
      "tasks": [
        {
          "title": "Learn GraphQL 💻 👨🏻‍💻",
          "comments": [
            {
              "comment": "How is it❓"
            },
            {
              "comment": "Its Awesome 😍, you must try 🤩"
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
        </Slide>

        {/*Slide 5*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">
            Overview
          </Heading>
          <br />
          <div style={{ display: "flex" }}>
            <div>
              <Appear>
                <img src={images.restway} height="250px" width="500px" />
              </Appear>
            </div>
            <div>
              <Appear>
                <img src={images.graphqlway} height="250px" width="500px" />
              </Appear>
            </div>
          </div>
        </Slide>

        {/*Slide 6*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">
            Over / Under Fetching
          </Heading>
        </Slide>

        {/*Slide 7*/}
        <Slide transition={["fade"]} bgColor="primary" notes={`
          - REST: HTTP status code.
           - GraphQL: 200 OK.
        `}
        >
          <Heading size={3} textColor="secondary">
            Error Handling
          </Heading>
        </Slide>

        {/*Slide 8*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">
            Caching
          </Heading>
          <br />
          <Appear>
            <Text textColor="tertiary" textAlign="center">
              <a href="https://www.apollographql.com/client" target="blank" style={{ textDecoration: "none" }}>Apollo Client</a>
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary" textAlign="center">
              <a href="https://fastql.io" target="blank" style={{ textDecoration: "none" }}>FastQL</a>
            </Text>
          </Appear>
        </Slide>

        {/*Slide 9*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">
            Versioning
          </Heading>
          <br />
          <Appear>
            <img src={images.versioningImg} />
          </Appear>
        </Slide>

        {/*Slide 10*/}
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

        <Slide transition={["fade"]}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Any Questions❓
          </Heading>
        </Slide>
      </Deck >
    );
  }
}
