import * as React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { Shimmer, Button } from 'office-ui-fabric-react';
import { PeoplePickerTypesExample } from './IPeoplePickerExampleState';
import { ShimmerLoadDataExample } from './ShimmerLoadDataExample';
import { PersonaBasicExample } from './Personas';
import { ButtonDefaultExample } from './IButtonBasicExampleStyleProps';
import { ShimmerApplicationExample, SeachCardExample } from './SeachCardExample';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import { linkTo } from '@storybook/addon-links'
import JSXAddon, { jsxDecorator } from 'storybook-addon-jsx';


setAddon(JSXAddon);
// import * as ShimmerExampleStyles from './Shimmer.Example.scss';
// example files :  https://github.com/OfficeDev/office-ui-fabric-react/tree/43e45d90f0c5cad56cf1b35c8a41361176a30b40/packages/office-ui-fabric-react/src

storiesOf('office-ui-fabric', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true, header: true, source: false, }))
  .add('Button - default view', () => (<Button onClick={action('button-click')}>{text('Button Text', 'Click it or ticket!', '1')}</Button>))
  .add('shimmershimmer', () => (<> <Shimmer /> </>))
  .add('PeoplePickerTypesExampleLocal', () => (<> <PeoplePickerTypesExample /> </>))
  .add("PeoplePicker w/ delayed results", () => < PeoplePickerTypesExample delayResults={boolean('DelayedResults', true, '1')} />)
  .add("PeoplePicker w/ delayed results + options", () => < PeoplePickerTypesExample delayResults={true} options />)
  .add("Persona", () => < ShimmerLoadDataExample />)
  .add("Persona basic", () => < PersonaBasicExample hidePersonaDetails />)
  .add("Persona w/ image", () => < PersonaBasicExample hidePersonaDetails image />)
  .add("Persona w/ image + details", () => < PersonaBasicExample image />)
  .add("Persona w/ image + details + presence", () => < PersonaBasicExample presence image />)
  .add("Button Standard", () => <ButtonDefaultExample text={"Button"} primary={false} />)
  .add("Button Primary", () => <ButtonDefaultExample primary text={"Button"} />)
  .add("Contact Groups", () => < ShimmerApplicationExample />)
  .add("Contact Groups - loading", () => < ShimmerApplicationExample />)
  .add("Contact Groups - loaded", () => < ShimmerApplicationExample isDataLoaded />)

storiesOf("office-ui-fabric-react: Screens", module)
  .addDecorator(withInfo({ inline: true, header: true, source: false, }))
  .add("SeachCardExample", () => < SeachCardExample {...{ preSelected: false, image: false, presence: false, hidePersonaDetails: true }} />)
  .add("SeachCardExample - populated", () => < SeachCardExample {...{ preSelected: true, image: true, presence: true, hidePersonaDetails: false }} />)

storiesOf('ButtonLinkTo', module)
  .addDecorator(jsxDecorator)
  .add('First', () => (<button onClick={linkTo('ButtonLinkTo', 'Second')}>Go to "Second"</button>))
  .add('Second', () => (<button onClick={linkTo('ButtonLinkTo', 'First')}>Go to "First"</button>))


storiesOf('Stories viewport', module)
  // To set a default viewport for all the stories for this component
  .addParameters({ viewport: { defaultViewport: 'iphone6' } })
  .add('story - iphone6', () => <></>)
  .add('story - iphonex', () => <></>, { viewport: { defaultViewport: 'iphonex' } })