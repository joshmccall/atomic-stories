import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {Shimmer, Button, ShimmeredDetailsList} from 'office-ui-fabric-react';
import {PeoplePickerTypesExample} from './ContactPicker';
import {ShimmerLoadDataExample} from './ShimmerLoadDataExample';
import {PersonaBadge} from './Personas';
import {ButtonDefaultExample} from './IButtonBasicExampleStyleProps';
import FindYourContact, {ShimmerApplicationExample, SeachCardExample} from './FindYourContact';
import {boolean, withKnobs, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {linkTo} from '@storybook/addon-links';
import JSXAddon, {jsxDecorator} from 'storybook-addon-jsx';
import {initializeIcons} from '@uifabric/icons';
initializeIcons();
import * as specifications from 'storybook-addon-specifications';
const {specs, describe, it} = specifications;

import {mount} from 'enzyme';
import expect from 'expect';

setAddon(JSXAddon);
// import * as ShimmerExampleStyles from './Shimmer.Example.scss';
// example files :  https://github.com/OfficeDev/office-ui-fabric-react/tree/43e45d90f0c5cad56cf1b35c8a41361176a30b40/packages/office-ui-fabric-react/src

const baseProductionCdnUrl = 'http://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/';

export const TestImages = {
  choiceGroupBarUnselected: baseProductionCdnUrl + 'choicegroup-bar-unselected.png',
  choiceGroupBarSelected: baseProductionCdnUrl + 'choicegroup-bar-selected.png',
  choiceGroupPieUnselected: baseProductionCdnUrl + 'choicegroup-pie-unselected.png',
  choiceGroupPieSelected: baseProductionCdnUrl + 'choicegroup-pie-selected.png',
  documentPreview: baseProductionCdnUrl + 'document-preview.png',
  documentPreviewTwo: baseProductionCdnUrl + 'document-preview2.png',
  documentPreviewThree: baseProductionCdnUrl + 'document-preview3.png',
  iconOne: baseProductionCdnUrl + 'icon-one.png',
  iconPpt: baseProductionCdnUrl + 'icon-ppt.png',
  personaFemale: baseProductionCdnUrl + 'persona-female.png',
  personaMale: baseProductionCdnUrl + 'persona-male.png'
};
const examplePersona = image => ({
  imageUrl: image ? TestImages.personaFemale : undefined,
  imageInitials: 'AL',
  text: 'Annie Lindqvist',
  secondaryText: 'SR DIR, BUSINESS STRATEGY MGM',
  tertiaryText: '34/5676'
});

storiesOf('office-ui-fabric-react: Screens', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      info: 'PeoplePicker (https://developer.microsoft.com/en-us/fabric#/components/peoplepicker)',
      inline: true,
      header: true,
      source: false
    })
  )
  .add('1', () => (
    <div style={{paddingLeft: '150px'}}>
      <FindYourContact
        person={examplePersona(true)}
        peopleList={[examplePersona(true), examplePersona(true)]}
        mostRecentlyUsed={[examplePersona(true), examplePersona(true)]}
        currentSelectedItems={[examplePersona(true)]}
      />
    </div>
  ))
  .add('2', () => (
    <div style={{padding: '150px', maxWidth: '650px'}}>
      <ShimmeredDetailsList
        setKey="items"
        items={[
          {
            Name: 'Lorem ipsum dolor sit amet, c',
            Primary: 'Lorem ipsum dolor sit amet, c',
            Lead: 'Lorem ipsum dolor sit amet, c',
            Actions: [<button>(R)ead</button>, <button>(U)pdate</button>, <button>(D)elete</button>],
            maxWidth: 40
          },
          {
            Name: 'Lorem ipsum dolor sit amet, c',
            Primary: 'Lorem ipsum dolor sit amet, c',
            Lead: 'Lorem ipsum dolor sit amet, c',
            Actions: [<button>(R)ead</button>, <button>(U)pdate</button>, <button>(D)elete</button>],
            maxWidth: 40
          },
          {
            Name: 'Lorem ipsum dolor sit amet, c',
            Primary: 'Lorem ipsum dolor sit amet, c',
            Lead: 'Lorem ipsum dolor sit amet, c',
            Actions: [<button>(R)ead</button>, <button>(U)pdate</button>, <button>(D)elete</button>],
            maxWidth: 40
          }
        ]}
        columns={[
          {fieldName: 'Name', key: 'Name', name: 'Name', maxWidth: 40},
          {fieldName: 'Primary', key: 'Primary', name: 'Primary', maxWidth: 40},
          {fieldName: 'Lead', key: 'Lead', name: 'Lead', maxWidth: 40},
          {fieldName: 'Actions', key: 'Actions', name: 'Actions', maxWidth: 40}
        ]}
        enableShimmer={!boolean('isDataLoaded', true)}
      />
      {/* <ShimmerApplicationExample isDataLoaded /> */}
    </div>
  ));

storiesOf('office-ui-fabric-react: Screens', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo({
      info: 'PeoplePicker (https://developer.microsoft.com/en-us/fabric#/components/peoplepicker)',
      inline: true,
      header: true,
      source: false
    })
  )
  .add('SeachCardExample', () => (
    <SeachCardExample {...{preSelected: false, image: false, presence: false, hidePersonaDetails: true}} />
  ))
  .add('SeachCardExample - populated', () => (
    <div
      style={{
        width: '1000px',
        paddingLeft: '150px'
      }}
    >
      <SeachCardExample
        {...{
          preSelected: boolean('preSelected', true),
          image: boolean('image', true),
          presence: boolean('presence', true),
          hidePersonaDetails: boolean('hidePersonalDetails', false)
        }}
      />
    </div>
  ));

storiesOf('office-ui-fabric', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({inline: true, header: true, source: false}))
  .add('Button - default view', () => (
    <Button onClick={action('button-click')}>{text('Button Text', 'Click it or ticket!', '1')}</Button>
  ))
  .add('shimmershimmer', () => (
    <>
      {' '}
      <Shimmer />{' '}
    </>
  ))
  .add('PeoplePickerTypesExampleLocal', () => (
    <>
      {' '}
      <PeoplePickerTypesExample />{' '}
    </>
  ))
  .add('PeoplePicker w/ delayed results', () => (
    <PeoplePickerTypesExample delayResults={boolean('DelayedResults', true, '1')} />
  ))
  .add('PeoplePicker w/ delayed results + options', () => <PeoplePickerTypesExample delayResults={true} options />)
  .add('Persona', () => <ShimmerLoadDataExample />)
  .add('Persona basic', () => <PersonaBadge hidePersonaDetails />)
  .add('Persona w/ image', () => <PersonaBadge hidePersonaDetails image />)
  .add('Persona w/ image + details', () => <PersonaBadge image />)
  .add('Persona w/ image + details + presence', () => <PersonaBadge presence image />)
  .add('Button Standard', () => <ButtonDefaultExample text={'Button'} primary={false} />)
  .add('Button Primary', () => <ButtonDefaultExample primary text={'Button'} />)
  .add('Contact Groups', () => <ShimmerApplicationExample />)
  .add('Contact Groups - loading', () => <ShimmerApplicationExample />)
  .add('Contact Groups - loaded', () => <ShimmerApplicationExample isDataLoaded />);

storiesOf('ButtonLinkTo', module)
  .addDecorator(jsxDecorator)
  .add('First', () => <button onClick={linkTo('ButtonLinkTo', 'Second')}>Go to "Second"</button>)
  .add('Second', () => <button onClick={linkTo('ButtonLinkTo', 'First')}>Go to "First"</button>);

storiesOf('Stories viewport', module)
  // To set a default viewport for all the stories for this component
  .addParameters({viewport: {defaultViewport: 'iphone6'}})
  .add('story - iphone6', () => <></>)
  .add('story - iphonex', () => <></>, {viewport: {defaultViewport: 'iphonex'}});

const stories = storiesOf('Button /Jest', module);

stories.add('Hello World', function() {
  const story = <button onClick={action('Hello World')}>Hello World</button>;

  specs(() =>
    describe('Hello World', function() {
      it('Should have the Hello World label', function() {
        let output = mount(story);
        expect(output.text()).toContain('Hello World');
      });
    })
  );

  return story;
});
