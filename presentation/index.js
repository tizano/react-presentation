// Import React
import React from "react";
// import "prismjs/components/prism-core";
// import "prismjs/components/prism-jsx";
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Layout,
  Fill,
  Link,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Pictures
import MagicGif from "../assets/images/magic.gif";
import WatchGif from "../assets/images/watch.gif";
import Tree from "../assets/images/tree.png";
import PropsA from "../assets/images/code/props_html.svg";
import PropsBox from "../assets/images/code/props_box.svg";
import StateButton from "../assets/images/code/state_button.svg";
import StateButtonClick from "../assets/images/code/state_button_click.svg";
import ResultBeginCode from "../assets/images/code/result_begin_code.svg";
import ResultBegin from "../assets/images/code/result_begin.png";
import NpmInstall from "../assets/images/code/npm_install.svg";
import NpmStart from "../assets/images/code/npm_start.svg";
// import ReactPicture from "../assets/images/react-picture.png";
// import City from "../assets/images/city.jpg";


// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE",
  react: "#61dafb",
  bg: "#f65b54",
  bgReact: "#282c34"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} bgColor="bgReact">
          <Heading margin="0 0 2rem" fit caps textColor="react">
            Il était une fois dans le monde du Javascript
          </Heading>
          <Appear>
            <Image src={MagicGif} />
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="primary" textSize="1.8rem" caps>
              Une bibliothèque nommée React<br/>qui bouleversa le monde du dev 🤣
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            React c'est quoi ?
          </Heading>
          <Appear>
            <Text margin="2rem 0 0 1px" textColor="primary" textAlign="left">
              Une bibliothèque Front-end
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0 1px" textColor="primary" textAlign="left">
              Un DOM virtuel
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0 1px" textColor="primary" textAlign="left">
              Une approche basée composants
            </Text>
          </Appear>
          <Appear>
            <Image src={Tree} padding="2rem 0 0" />
          </Appear>
        </Slide>
        <Slide
          transitionIn={["zoom", "fade"]}
          transitionOut={["slide", "fade"]}
          bgColor="bgReact"
        >
          <Heading textColor="react" caps fit>
            React c'est quoi ?
          </Heading>
          <Appear>
            <Text margin="2rem 0 0" textColor="primary" textAlign="left">
              Un fonctionnement asynchrone
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="primary" textAlign="left">
              <strong>DEUX</strong> mécanismes fondamentaux
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="primary" textAlign="left">
              Les PROPS
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="primary" textAlign="left">
              Les STATE
            </Text>
          </Appear>
        </Slide>
        <Slide
          bgColor="bgReact"
          transition={[
            "fade",
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? "#61dafb" : "#282c34"
              };
            }
          ]}
        >

          <Heading textColor="react" caps fit>
            Les props : en HTML
          </Heading>
          <Appear>
            <Image src={PropsA} />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            Les props : en React
          </Heading>
          <Appear>
            <Image src={PropsBox} />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps size={1}>
            Les state
          </Heading>
          <Appear>
            <Image src={StateButton} />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps size={1}>
            Les state
          </Heading>
          <Text margin="2rem 0 0" textColor="primary">
            On assigne <strong>handleClick</strong> à un bouton
          </Text>
          <Appear>
            <Image src={StateButtonClick} />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            On fait un mélange de ce qu'on vient de voir
          </Heading>
          <Appear>
            <Image src={ResultBeginCode} />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" margin="0 0 2rem" caps size={6}>
            On obtient
          </Heading>
          <Appear>
            <Image src={ResultBegin} width="740" />
          </Appear>
        </Slide>
        <Slide>
          <Heading textColor="tertiary" margin="0 0 2rem" caps fit>
            Mais du coup on commence par quoi ?
          </Heading>
          <Image src={WatchGif} />
        </Slide>
        <Slide>
          <Heading textColor="tertiary" margin="0 0 2rem" caps fit>
            Mais du coup on commence par quoi ?
          </Heading>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              Installer <Link href="https://nodejs.org/" target="_blank" textColor="tertiary" bold>node.js</Link> ou vérifier si node > 8
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              Installer <Link href="https://github.com/creationix/nvm" target="_blank" textColor="tertiary" bold>NVM</Link> pour gérer node
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              Cloner le repo <Link href="https://github.com/creationix/nvm" target="_blank" textColor="tertiary" bold>create-react-app (CRA)</Link>
            </Text>
          </Appear>
          <Layout>
            <Fill>
              <Appear>
                <Text margin="2rem 0 0" textColor="secondary" textSize="1.5rem">
                  Installer les packages
                </Text>
              </Appear>
              <Appear>
                <Image margin="-2rem auto" src={NpmInstall} width="400" />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Text margin="2rem 0 0" textColor="secondary" textSize="1.5rem">
                  Lancer l'app en mode dev
                </Text>
              </Appear>
              <Appear>
                <Image margin="-2rem auto" src={NpmStart} width="400" />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="tertiary">
          <Heading textColor="primary" caps fit>
            Les nouveautés dans le code
          </Heading>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              ECMAScript 6/7/8
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              On oublie les <strong>var</strong>
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              On utilise <strong>const</strong> & <strong>let</strong>
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="tertiary">
          <Heading textColor="primary" caps fit>
            Exemple de const & let
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <Text margin="2rem 0 0" textColor="secondary" textSize="1.5rem">
                  Installer les packages
                </Text>
              </Appear>
              <Appear>
                <Image margin="-2rem auto" src={NpmInstall} width="400" />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Text margin="2rem 0 0" textColor="secondary" textSize="1.5rem">
                  Lancer l'app en mode dev
                </Text>
              </Appear>
              <Appear>
                <Image margin="-2rem auto" src={NpmStart} width="400" />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["side", "fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
