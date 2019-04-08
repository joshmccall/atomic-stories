import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Shimmer, IShimmerStyleProps, IShimmerStyles, ShimmerElementsGroup, ShimmerElementType as ElemType } from 'office-ui-fabric-react';
import { PeoplePickerTypesExample } from './IPeoplePickerExampleState';
import { Persona, PersonaSize, PersonaPresence, IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

// import * as ShimmerExampleStyles from './Shimmer.Example.scss';

// example files :  https://github.com/OfficeDev/office-ui-fabric-react/tree/43e45d90f0c5cad56cf1b35c8a41361176a30b40/packages/office-ui-fabric-react/src

storiesOf('office-ui-fabric', module)
  .add('shimmershimmer', () => (<> <Shimmer /> </>))
  .add('PeoplePickerTypesExampleLocal', () => (<> <PeoplePickerTypesExample /> </>))
  .add("PeoplePicker w/ delayed results", () => < PeoplePickerTypesExample delayResults={true} />)
  .add("PeoplePicker w/ delayed results + options", () => < PeoplePickerTypesExample delayResults={true} options />)
  .add("Persona", () => < ShimmerLoadDataExample />)



// import { Shimmer, IShimmerStyleProps, IShimmerStyles } from 'office-ui-fabric-react/lib/Shimmer';

// import ShimmerExampleStyles from './Shimmer.Example.scss';

export class ShimmerStylingExample extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      // <div className={ShimmerExampleStyles.shimmerExampleContainer}>
      <div >
        <Shimmer width={'75%'} styles={this._getShimmerStyles} />
        <Shimmer width={'75%'} styles={this._getShimmerStyles} />
        <Shimmer width={'75%'} styles={this._getShimmerStyles} />
        <Shimmer width={'75%'} styles={this._getShimmerStyles} />
        <Shimmer width={'75%'} styles={this._getShimmerStyles} />
      </div>
    );
  }

  private _getShimmerStyles = (props: IShimmerStyleProps): IShimmerStyles => {
    return {
      shimmerWrapper: [
        {
          backgroundColor: '#deecf9',
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #c7e0f4 50%, rgba(255, 255, 255, 0) 100%)'
        }
      ]
    };
  };
}


const baseProductionCdnUrl = 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/';

export const PersonaDetails = {
  imageUrl: baseProductionCdnUrl + 'persona-female.png',
  imageInitials: 'AL',
  primaryText: 'Annie Lindqvist',
  secondaryText: 'Software Engineer'
};


export interface IShimmerLoadDataExampleState {
  isDataLoadedOne?: boolean;
  isDataLoadedTwo?: boolean;
  contentOne?: string;
  examplePersona?: IPersonaProps;
}

export class ShimmerLoadDataExample extends React.Component<{}, IShimmerLoadDataExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDataLoadedOne: false,
      isDataLoadedTwo: false,
      contentOne: '',
      examplePersona: {}
    };
  }

  public render(): JSX.Element {
    const { isDataLoadedOne, isDataLoadedTwo, contentOne, examplePersona } = this.state;

    return (
      <div >
        <Toggle checked={isDataLoadedOne} onChange={this._getContentOne} onText="Toggle to show shimmer" offText="Toggle to load content" />
        <Shimmer isDataLoaded={isDataLoadedOne} ariaLabel={'Loading content'}>
          <div
            // tslint:disable-next-line:jsx-ban-props
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              lineHeight: '1',
              minHeight: '16px' // Default height of Shimmer when no elements being provided.
            }}
          >
            {contentOne}
            {contentOne}
            {contentOne}
          </div>
        </Shimmer>
        <Toggle checked={isDataLoadedTwo} onChange={this._getContentTwo} onText="Toggle to show shimmer" offText="Toggle to load content" />
        <Shimmer customElementsGroup={this._getCustomElements()} width={300} isDataLoaded={isDataLoadedTwo}>
          <Persona {...examplePersona} size={PersonaSize.size40} presence={PersonaPresence.away} />
        </Shimmer>
      </div>
    );
  }

  private _getContentOne = (ev: React.MouseEvent<HTMLElement>, checked: boolean): void => {
    const { isDataLoadedOne } = this.state;
    this.setState({
      isDataLoadedOne: checked,
      contentOne: !isDataLoadedOne ? 'Congratulations!!! You have successfully loaded the content. ' : ''
    });
  };

  private _getContentTwo = (ev: React.MouseEvent<HTMLElement>, checked: boolean): void => {
    const { isDataLoadedTwo } = this.state;
    this.setState({
      isDataLoadedTwo: checked,
      examplePersona: !isDataLoadedTwo ? { ...PersonaDetails } : {}
    });
  };

  private _getCustomElements = (): JSX.Element => {
    return (
      <div
        // tslint:disable-next-line:jsx-ban-props
        style={{ display: 'flex' }}
      >
        <ShimmerElementsGroup shimmerElements={[{ type: ElemType.circle, height: 40 }, { type: ElemType.gap, width: 16, height: 40 }]} />
        <ShimmerElementsGroup
          flexWrap={true}
          width={'100%'}
          shimmerElements={[
            { type: ElemType.line, width: '100%', height: 10, verticalAlign: 'bottom' },
            { type: ElemType.line, width: '90%', height: 8 },
            { type: ElemType.gap, width: '10%', height: 20 }
          ]}
        />
      </div>
    );
  };
}



//   .add("Persona basic", () => < PersonaBasicExample hidePersonaDetails />)
//   .add("Persona w/ image", () => < PersonaBasicExample hidePersonaDetails image />)
//   .add("Persona w/ image + details", () => < PersonaBasicExample image />)
//   .add("Persona w/ image + details + presence", () => < PersonaBasicExample presence image />)
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


