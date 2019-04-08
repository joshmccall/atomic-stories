import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Shimmer } from 'office-ui-fabric-react';
import { PeoplePickerTypesExample } from './IPeoplePickerExampleState';
import { ShimmerLoadDataExample } from './ShimmerLoadDataExample';
import { PersonaBasicExample } from './Personas';
import { ButtonDefaultExample } from './IButtonBasicExampleStyleProps';
import { ShimmerApplicationExample, SeachCardExample } from './SeachCardExample';
// import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { boolean, withKnobs } from '@storybook/addon-knobs';



// import * as ShimmerExampleStyles from './Shimmer.Example.scss';
// example files :  https://github.com/OfficeDev/office-ui-fabric-react/tree/43e45d90f0c5cad56cf1b35c8a41361176a30b40/packages/office-ui-fabric-react/src

const stories = storiesOf('Storybook Knobs', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories.add('shimmershimmer', () => (<> <Shimmer /> </>))
  .add('PeoplePickerTypesExampleLocal', () => (<> <PeoplePickerTypesExample /> </>))
  .add("PeoplePicker w/ delayed results", () => < PeoplePickerTypesExample delayResults={boolean('DelayedResults', true)} />)
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
  .add("Find Your Contact", () => < SeachCardExample {...{
    preSelected: false,
    image: false,
    presence: false,
    hidePersonaDetails: true
  }} />)
  .add("Find Your Contact - populated", () => < SeachCardExample {...{
    preSelected: true,
    image: true,
    presence: true,
    hidePersonaDetails: false
  }} />)



