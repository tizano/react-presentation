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
import VarLetConst from "../assets/images/code/var_let_const.svg";
import ScopeLetConst from "../assets/images/code/scope_let_const.svg";
import Eslint from "../assets/images/code/eslint.svg";
import EslintCode from "../assets/images/code/eslint_code.png";
import Airbnb from "../assets/images/code/airbnb.svg";
import Paypal from "../assets/images/code/paypal.svg";
import Wix from "../assets/images/code/wix.svg";
import Netflix from "../assets/images/code/netflix.svg";
import Destruct from "../assets/images/code/destruct.svg";
import Spread from "../assets/images/code/spread.svg";
import Spread2 from "../assets/images/code/spread_2.svg";
import Function from "../assets/images/code/function.svg";
import ArrowF from "../assets/images/code/arrow_function.svg";
import ClassBox1 from "../assets/images/code/class_box_1.svg";
import ClassBox2 from "../assets/images/code/class_box_2.svg";
import ClassButton1 from "../assets/images/code/class_button_1.svg";
import ClassButton2 from "../assets/images/code/class_button_2.svg";
import LifeCycle from "../assets/images/code/lifecycle.png";
import InputChange from "../assets/images/code/input_change.svg";
import ListBegin from "../assets/images/code/list_begin.svg";
import ListFetch from "../assets/images/code/list_fetch.svg";
import ListAsync from "../assets/images/code/list_async.svg";
import ListLoader from "../assets/images/code/list_loader.svg";
import FirstPromise from "../assets/images/code/first_promise.svg";
import FirstFuncPromise from "../assets/images/code/first_func_promise.svg";
import PromiseUse1 from "../assets/images/code/promise_use_1.svg";
import PromiseUse2 from "../assets/images/code/promise_use_2.svg";
import PromiseUse3 from "../assets/images/code/promise_use_3.svg";
import Sync from "../assets/images/code/sync.svg";
import Async from "../assets/images/code/async.svg";
// import ReactPicture from "../assets/images/react-picture.png";
// import City from "../assets/images/city.jpg";


// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#e1e1e1",
  bgOrange: "#f65b54",
  react: "#61dafb",
  bgReact: "#282c34",
  bgCss: "#f2c031"
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
          <Appear>
            <Image src={VarLetConst} />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="tertiary">
          <Heading textColor="primary" caps fit>
            La portée des variables
          </Heading>
          <Appear>
            <Image margin="-2rem auto" src={ScopeLetConst} width="800" />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="tertiary">
          <Heading textColor="primary" caps fit>
            Comment éviter les erreurs ?
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary">
            Créer ou modifier le fichier <strong>.eslintrc.js</strong>
          </Text>
          <Appear>
            <Image margin="-1rem auto" src={Eslint} width="800" />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="tertiary">
          <Heading textColor="primary" caps fit>
            Comment éviter les erreurs ?
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary">
            Une erreur dans le composant Box
          </Text>
          <Appear>
            <Image margin="2rem auto" src={EslintCode} />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="tertiary">
          <Heading textColor="primary" caps fit>
            Qui a dicté toutes ces règles ?
          </Heading>
          <Appear>
            <Image margin="2rem auto" src={Airbnb} width="200" />
          </Appear>
          <Appear>
            <Text textSize="1.5rem" margin="1.5rem 0 0" textColor="secondary">
              AIRBNB
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 2rem 0" textColor="secondary">
              D'autres acteurs majeurs participent aussi
            </Text>
          </Appear>
          <Layout>
            <Fill>
              <Appear>
                <Image margin="2rem auto" src={Paypal} width="150" />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Image margin="2rem auto" src={Netflix} width="270" />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Image margin="2rem auto" src={Wix} width="150" />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgOrange">
          <Heading textColor="secondary" caps fit>
            Les patterns importants en Javascript
          </Heading>
          <Text margin="2rem 0 0" textColor="primary">
            Destructuring assignment<br />
            (Affectation par destructuration)
          </Text>
          <Image margin="-2rem auto" src={Destruct} width="800" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgOrange">
          <Heading textColor="secondary" caps fit>
            Les patterns importants en Javascript
          </Heading>
          <Text margin="2rem 0 0" textColor="primary">
            Spread operator<br />
            (Syntaxe de décomposition)
          </Text>
          <Appear>
            <Image margin="-2rem auto" src={Spread} width="600" />
          </Appear>
          <Appear>
            <Image margin="-2rem auto" src={Spread2} width="700" />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgOrange">
          <Heading textColor="secondary" caps fit>
            Les patterns importants en Javascript
          </Heading>
          <Text margin="2rem 0 0" textColor="primary">
            Déclaration d'une fonction
          </Text>
          <Image margin="-2rem auto" src={Function} width="700" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgOrange">
          <Heading textColor="secondary" caps fit>
            Les patterns importants en Javascript
          </Heading>
          <Text margin="2rem 0 0" textColor="primary">
            Arrow function<br />
            (Fonction fléchée)
          </Text>
          <Image margin="-1rem auto" src={ArrowF} width="1000" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgOrange">
          <Heading textColor="secondary" caps fit>
            Les patterns importants en Javascript
          </Heading>
          <Text margin="2rem 0 0" textColor="primary" textAlign="left">
            Le fonctionnement ASYNCHRONE
          </Text>
          <Appear>
            <Text margin="2rem 0 2rem 0" textColor="primary" textAlign="left">
              Les promesses (Promise)
            </Text>
          </Appear>
          <Appear>
            <BlockQuote>
              <Quote textSize="2rem" lineHeight={2}>
                L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais.
              </Quote>
              <Cite textColor="primary">Définition</Cite>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgOrange">
          <Heading textColor="secondary" caps fit>
            Les patterns importants en Javascript
          </Heading>
          <Text margin="2rem 0 0" textColor="primary" textAlign="left">
            Exemple de promesse
          </Text>
          <Image margin="-2rem auto" src={FirstPromise} width="700" />
          <Appear>
            <Image margin="-4.5rem auto" src={FirstFuncPromise} width="580" />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgOrange">
          <Heading textColor="secondary" caps fit>
            Les patterns importants en Javascript
          </Heading>
          <Text margin="2rem 0 0" textColor="primary" textAlign="left">
            Les callbacks d'une promesse
          </Text>
          <Image margin="-1rem auto" src={PromiseUse2} width="750" />
          <Appear>
            <Image margin="-4.5rem auto" src={PromiseUse1} width="650" />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgOrange">
          <Heading textColor="secondary" caps fit>
            Les patterns importants en Javascript
          </Heading>
          <Text margin="2rem 0 0" textColor="primary" textAlign="left">
            Le chaînage d'une promesse
          </Text>
          <Image margin="-1rem auto" src={PromiseUse3} width="800" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgOrange">
          <Heading textColor="secondary" caps fit>
            Les patterns importants en Javascript
          </Heading>
          <Text margin="2rem 0 0" textColor="primary" textAlign="left">
            La nouveauté avec ES7 - async / await
          </Text>
          <Image margin="-1rem auto" src={Sync} width="650" />
          <Appear>
            <Image margin="-4.5rem auto" src={Async} width="650" />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            Comment créer un composant react ?
          </Heading>
          <Appear>
            <Text margin="2rem 0 0" textColor="primary" textAlign="left">
              Les imports
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="primary" textAlign="left">
              La classe React
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="primary" textAlign="left">
              La définition des propriétés
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="primary" textAlign="left">
              L'export de la classe
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            Comment créer un composant react ?
          </Heading>
          <Image src={PropsBox} />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            Comment créer un composant react ?
          </Heading>
          <Text margin="2rem 0 0" textColor="primary">
            Stateless ou pas ?
          </Text>
          <Layout>
            <Fill>
              <Image src={ClassBox1} />
            </Fill>
            <Fill>
              <Appear>
                <Image src={ClassBox2} />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            Comment créer un composant react ?
          </Heading>
          <Layout>
            <Fill>
              <Image src={ClassButton1} />
            </Fill>
            <Fill>
              <Image src={ClassButton2} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            La vie des composants
          </Heading>
          <Text margin="2rem 0 0" textColor="primary" italic>
            Lifecycle des composants
          </Text>
          <Image src={LifeCycle} />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            La gestion des event
          </Heading>
          <Text margin="2rem 0 0" textColor="primary" bold textAlign="left">
            Par convention de nommage<br />on place handle + Event
          </Text>
          <Text margin="2rem 0 0" textColor="primary" textAlign="left">
            onClick : handleClick()
          </Text>
          <Text margin="2rem 0 0" textColor="primary" textAlign="left">
            onChange : handleChange()
          </Text>
          <Text margin="2rem 0 0" textColor="primary" textAlign="left">
            onSubmit : handleSubmit()
          </Text>
          <Text margin="2rem 0 0" textColor="primary" textAlign="left">
            onError : handleError()
          </Text>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            La gestion des event
          </Heading>
          <Image src={InputChange} margin="-1rem auto" width="550" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            Récupérer des données
          </Heading>
          <Text margin="2rem 0 0" textColor="primary">
            Dans le container List
          </Text>
          <Image src={ListBegin} margin="-1rem auto" width="550" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            Récupérer des données
          </Heading>
          <Text margin="2rem 0 0" textColor="primary">
            On y ajoute la méthode componentDidMount()
          </Text>
          <Image src={ListFetch} margin="-1rem auto" width="700" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            Récupérer des données
          </Heading>
          <Text margin="2rem 0 0" textColor="primary">
            Une autre manière de faire<br />avec async / await
          </Text>
          <Image src={ListAsync} margin="-1rem auto" width="850" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgReact">
          <Heading textColor="react" caps fit>
            Récupérer des données
          </Heading>
          <Text margin="2rem 0 0" textColor="primary">
            On y ajoute un loader
          </Text>
          <Image src={ListLoader} margin="-1rem auto" width="450" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgCss">
          <Heading textColor="primary" caps fit>
            Comment styliser un composant react ?
          </Heading>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              Avec <strong>CSS Modules</strong>
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              Avec du <strong>JSS</strong> ou <strong>CSS in JS</strong>
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              Avec <strong>styled components</strong>
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              Avec <strong>glamorous</strong>
            </Text>
          </Appear>
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
      </Deck>
    );
  }
}
