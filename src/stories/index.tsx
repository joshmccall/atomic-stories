import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Shimmer } from 'office-ui-fabric-react';
import { PeoplePickerTypesExample } from './IPeoplePickerExampleState';
import { ShimmerLoadDataExample } from './ShimmerLoadDataExample';

// import * as ShimmerExampleStyles from './Shimmer.Example.scss';
// example files :  https://github.com/OfficeDev/office-ui-fabric-react/tree/43e45d90f0c5cad56cf1b35c8a41361176a30b40/packages/office-ui-fabric-react/src

//   // .add("Button Standard", () => < ButtonDefaultExample text={
//   //   "Button"
//   // }
//   // />)
//   // .add("Button Primary", () => < ButtonDefaultExample primary text={
//   //   "Button"
//   // }
//   // />)
//   .add("Contact Groups", () => < ShimmerApplicationExample />)
//   .add("Contact Groups - loading", () => < ShimmerApplicationExample />)
//   .add("Contact Groups - loaded", () => < ShimmerApplicationExample isDataLoaded />)
// // // ShimmerApplicationExample

// storiesOf("office-ui-fabric-react: Screens", module)
//   .add("Find Your Contact", () => < FindYourContact {...{
//     preSelected: false,
//     image: false,
//     presence: false,
//     hidePersonaDetails: true
//   }} />)
//   .add("Find Your Contact - populated", () => < FindYourContact {...{
//     preSelected: true,
//     image: true,
//     presence: true,
//     hidePersonaDetails: false
//   }} />)



storiesOf('office-ui-fabric', module)
  .add('shimmershimmer', () => (<> <Shimmer /> </>))
  .add('PeoplePickerTypesExampleLocal', () => (<> <PeoplePickerTypesExample /> </>))
  .add("PeoplePicker w/ delayed results", () => < PeoplePickerTypesExample delayResults={true} />)
  .add("PeoplePicker w/ delayed results + options", () => < PeoplePickerTypesExample delayResults={true} options />)
  .add("Persona", () => < ShimmerLoadDataExample />)
  // .add("Persona basic", () => < PersonaBasicExample hidePersonaDetails />)
  // .add("Persona w/ image", () => < PersonaBasicExample hidePersonaDetails image />)
  // .add("Persona w/ image + details", () => < PersonaBasicExample image />)
  // .add("Persona w/ image + details + presence", () => < PersonaBasicExample presence image />)






