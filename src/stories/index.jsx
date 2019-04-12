import React from 'react';
import {storiesOf, setAddon} from '@storybook/react';
import {Shimmer, Button, ShimmeredDetailsList, people} from 'office-ui-fabric-react';
import {ShimmerLoadDataExample} from './ShimmerLoadDataExample';
import {PersonaBadge} from './Personas';
import {ButtonDefaultExample} from './IButtonBasicExampleStyleProps';
import FindYourContact from './FindYourContact';
import {boolean, withKnobs, text, object, number} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {linkTo} from '@storybook/addon-links';
import JSXAddon, {jsxDecorator} from 'storybook-addon-jsx';
import {initializeIcons} from '@uifabric/icons';
import {specs, describe, it} from 'storybook-addon-specifications';
import {mount} from 'enzyme';
import expect from 'expect';
import any from '@travi/any';

initializeIcons();
setAddon(JSXAddon);

// example files :  https://github.com/OfficeDev/office-ui-fabric-react/tree/43e45d90f0c5cad56cf1b35c8a41361176a30b40/packages/office-ui-fabric-react/src

const numOfPeople = any.fromList([1, 2, 3, 4]);
const peopleWithImages = people.filter(f => f.imageUrl && f.imageUrl.indexOf('./'));
const mockPeople = (num, fun) => peopleWithImages.slice(0, num ? num : people.length - 1).map(m => fun(m));

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
        {...{
          ...any.objectWithKeys(['contactList', 'mostRecentlyUsed', ''], {
            factory: () => mockPeople(number('number of people', numOfPeople), m => object(m.text, m))
          }),
          contactList: peopleWithImages,
          peopleList: peopleWithImages,
          currentSelectedItems: []
        }}
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
      <Shimmer />
    </>
  ))
  // .add('PeoplePickerTypesExampleLocal', () => (
  //   <>
  //     <PeoplePickerTypesExample />
  //   </>
  // ))
  // .add('PeoplePicker w/ delayed results', () => (
  //   <PeoplePickerTypesExample delayResults={boolean('DelayedResults', true, '1')} />
  // ))
  // .add('PeoplePicker w/ delayed results + options', () => <PeoplePickerTypesExample delayResults={true} options />)
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
