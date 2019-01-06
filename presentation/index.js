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
import WowGif from "../assets/images/wow.gif";
import PoufGif from "../assets/images/pouf.gif";
import FinishGif from "../assets/images/finish.gif";
import EndGif from "../assets/images/end.gif";
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
import TemplateString from "../assets/images/code/template_string.svg";
import Destruct1 from "../assets/images/code/destruct.svg";
import Destruct2 from "../assets/images/code/destruct2.svg";
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
import CssModules from "../assets/images/code/css_modules.svg";
import CssCard from "../assets/images/code/css_card.svg";
import Jss from "../assets/images/code/jss.svg";
import Styled1 from "../assets/images/code/styled_1.svg";
import Styled2 from "../assets/images/code/styled_2.svg";
import Styled3 from "../assets/images/code/styled_3.svg";
import Emotion1 from "../assets/images/code/emotion_1.svg";
import Emotion2 from "../assets/images/code/emotion_2.svg";
import Routes from "../assets/images/code/routes.svg";
import RoutesApp from "../assets/images/code/routes_app.svg";
import RouteParam1 from "../assets/images/code/route_param_1.svg";
import RouteParam2 from "../assets/images/code/route_param_2.svg";
import FloatBtn from "../assets/images/code/float_btn.png";
import Modal from "../assets/images/code/modal.png";
import ActionsTypes from "../assets/images/code/actions_types.svg";
import ModalAction from "../assets/images/code/modal_action.svg";
import ModalReducer from "../assets/images/code/modal_reducer.svg";
import RootReducer from "../assets/images/code/root_reducer.svg";
import Store from "../assets/images/code/store.svg";
import AppReducer from "../assets/images/code/app_reducer.svg";
import Modal1 from "../assets/images/code/modal_1.svg";
import Modal2 from "../assets/images/code/modal_2.svg";
import Modal3 from "../assets/images/code/modal_3.svg";
import ReduxButton1 from "../assets/images/code/reduxButton1.svg";
import ReduxButton2 from "../assets/images/code/reduxButton2.svg";
import ReduxButton3 from "../assets/images/code/reduxButton3.svg";
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
  bgRouter: "rgb(233, 73, 73)",
  bgRedux: "rgb(116, 76, 188)",
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
          <Text margin="2rem 0 0" textColor="secondary" textSize="2rem">
            Exemple de fichier <strong>.eslintrc.js</strong>
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
            Les template string<br />
            (Modèle de libellé)
          </Text>
          <Image margin="-2rem auto" src={TemplateString} width="800" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgOrange">
          <Heading textColor="secondary" caps fit>
            Les patterns importants en Javascript
          </Heading>
          <Text margin="2rem 0 0" textColor="primary">
            Destructuring assignment<br />
            <small>(Affectation par destructuration)</small>
          </Text>
          <Image margin="-2rem auto" src={Destruct1} width="800" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgOrange">
          <Heading textColor="secondary" caps fit>
            Les patterns importants en Javascript
          </Heading>
          <Text margin="2rem 0 0" textColor="primary">
            Destructuring assignment<br />
            <small>(Affectation par destructuration)</small>
          </Text>
          <Image margin="-2rem auto" src={Destruct2} width="800" />
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
              Avec <strong>emotion</strong>
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgCss">
          <Heading textColor="primary" caps size={6}>
            CSS Modules
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary">
            Dans le composant Card
          </Text>
          <Image src={CssModules} margin="-2rem auto" width="850" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgCss">
          <Heading textColor="primary" caps size={6}>
            CSS Modules
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary">
            Le CSS du composant Card
          </Text>
          <Image src={CssCard} margin="-1rem auto" width="800" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgCss">
          <Heading textColor="primary" caps size={6}>
            Le CSS in JS ou JSS
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary">
            Le composant Box
          </Text>
          <Image src={Jss} margin="-1rem auto" width="900" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgCss">
          <Heading textColor="primary" caps size={6}>
            Styled components
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary">
            Le composant Button
          </Text>
          <Image src={Styled1} margin="-1rem auto" width="700" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgCss">
          <Heading textColor="primary" caps size={6}>
            Styled components
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary">
            Le composant Button
          </Text>
          <Layout>
            <Fill>
              <Image src={Styled2} margin="-1rem auto" />
            </Fill>
            <Fill>
              <Image src={Styled3} margin="-1rem auto" />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgCss">
          <Heading textColor="primary" caps size={6}>
            Emotion
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary">
            Le composant CustomLink
          </Text>
          <Layout>
            <Fill>
              <Image src={Emotion1} margin="-1rem auto" />
            </Fill>
            <Fill>
              <Image src={Emotion2} margin="-1rem auto" />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRouter">
          <Heading textColor="primary" caps size={6}>
            Le routing
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
            Le package <strong>react-router</strong>
          </Text>
          <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
            Un Router qui englobe les routes
          </Text>
          <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
            Un composant Route
          </Text>
          <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
            Un composant pour les transitions
          </Text>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRouter">
          <Heading textColor="primary" caps size={6}>
            Le routing
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary">
            Le fichier des routes
          </Text>
          <Image src={Routes} margin="-1rem auto" width="800" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRouter">
          <Heading textColor="primary" caps size={6}>
            Le routing
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary">
            Intégrer les routes dans l'app
          </Text>
          <Image src={RoutesApp} margin="-1rem auto" width="800" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRouter">
          <Heading textColor="primary" caps size={6}>
            Le routing
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary">
            Lire un paramètre de l'url
          </Text>
          <Image src={RouteParam1} margin="-1rem auto" width="800" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRouter">
          <Heading textColor="primary" caps size={6}>
            Le routing
          </Heading>
          <Text margin="2rem 0 0" textColor="secondary">
            Lire un paramètre de l'url
          </Text>
          <Image src={RouteParam2} margin="-1rem auto" width="500" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux
          </Heading>
          <Image src={WowGif} margin="2rem auto" width="350" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux
          </Heading>
          <Text margin="2rem 0 0" textAlign="left">
            Le package <strong>react-redux</strong>
          </Text>
          <Appear>
            <Text margin="2rem 0 0" textAlign="left">
              Un store
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textAlign="left">
              Un historique
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textAlign="left">
              Un reducer
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textAlign="left">
              Des actions
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textAlign="left">
              Connecter son composant
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux
          </Heading>
          <Text margin="2rem 0 0">
            Une modal qui pop de partout
          </Text>
          <Layout>
            <Fill>
              <Appear>
                <Image src={FloatBtn} margin="2rem auto" padding="1rem" />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Image src={Modal} margin="2rem auto" padding="1rem" />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux
          </Heading>
          <Text margin="2rem 0 0" textAlign="left">
            Penser aux actions de la modal
          </Text>
          <Appear>
            <Text margin="2rem 0 0" textAlign="left">
              Ouvrir / fermer la modal
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textAlign="left">
              Le fichier actionsTypes.js
            </Text>
          </Appear>
          <Appear>
            <Image src={ActionsTypes} margin="-2rem auto" />
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux
          </Heading>
          <Text margin="2rem 0 0" textAlign="left">
            Les fonctions qui créent les actions
          </Text>
          <Text margin="2rem 0 0" textAlign="left">
            Le fichier modalAction.js
          </Text>
          <Image src={ModalAction} margin="-2rem auto" width="800" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux
          </Heading>
          <Text margin="2rem 0 0" textAlign="left">
            La maj des données avec le reducer
          </Text>
          <Text margin="2rem 0 0" textAlign="left">
            Le fichier modalReducer.js
          </Text>
          <Image src={ModalReducer} margin="-2rem auto" width="600" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux
          </Heading>
          <Text margin="2rem 0 0" textAlign="left">
            Appeler notre reducer
          </Text>
          <Text margin="2rem 0 0" textAlign="left">
            Le fichier rootReducer.js
          </Text>
          <Image src={RootReducer} margin="-2rem auto" width="700" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux
          </Heading>
          <Text margin="2rem 0 0" textAlign="left">
            Stocker les données
          </Text>
          <Text margin="2rem 0 0" textAlign="left">
            Le fichier store.js
          </Text>
          <Image src={Store} margin="-2rem auto" width="800" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux
          </Heading>
          <Text margin="2rem 0 0" textAlign="left">
            On englobe notre app avec redux
          </Text>
          <Text margin="2rem 0 0" textAlign="left">
            Le fichier App.js
          </Text>
          <Image src={AppReducer} margin="-2rem auto" width="750" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux
          </Heading>
          <Text margin="2rem 0 0">
            On arrive presque à la fin 🤕🤒🤯
          </Text>
          <Image src={PoufGif} margin="2rem auto" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux : la modal
          </Heading>
          <Image src={Modal1} margin="-1rem auto" width="750" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux : la modal
          </Heading>
          <Image src={Modal2} margin="-1rem auto" width="650" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux : la modal
          </Heading>
          <Image src={Modal3} margin="-1rem auto" width="1000" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux : le retour du bouton 
          </Heading>
          <Image src={ReduxButton1} margin="-1rem auto" width="900" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux : le retour du bouton 
          </Heading>
          <Image src={ReduxButton2} margin="-1rem auto" width="750" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Redux : le retour du bouton 
          </Heading>
          <Image src={ReduxButton3} margin="-1rem auto" width="1100" />
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Image src={FinishGif} margin="2rem auto" width="350" />
          <Heading textColor="primary" caps size={6}>
            La présentation est finie ... mais
          </Heading>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Ca évolue trop vite 🚀
          </Heading>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              Les <Link href="https://reactjs.org/docs/hooks-overview.html" target="_blank" textColor="primary" bold>HOOKS</Link>
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              <Link href="https://codesandbox.io/s/github/HeadFox/input-test" target="_blank" textColor="primary" bold>Exemple d'utilisation</Link>
            </Text>
          </Appear>
          <Appear>
            <Text margin="2rem 0 0" textColor="secondary" textAlign="left">
              <Link href="https://nextjs.org/learn/" target="_blank" textColor="primary" bold>Next.js</Link>
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="bgRedux">
          <Heading textColor="primary" caps size={6}>
            Merci à tous
          </Heading>
          <Image src={EndGif} margin="2rem auto" width="350" />
        </Slide>
      </Deck>
    );
  }
}
