import * as React from 'react';
import { IPersonaProps, IBasePickerSuggestionsProps, assign, BaseComponent, IBasePicker, mru, CompactPeoplePicker, ValidationState, PersonaPresence } from 'office-ui-fabric-react';
// storiesOf('office-ui-fabric-react: Components', module)
export interface IPeoplePickerExampleState {
    currentPicker?: number | string;
    delayResults?: boolean;
    peopleList: IPersonaProps[];
    mostRecentlyUsed: IPersonaProps[];
    currentSelectedItems?: IPersonaProps[];
    isPickerDisabled?: boolean;
}
export interface IPeoplePickerExampleProps {
    delayResults: boolean;
    options?: boolean;
    hideHeader?: boolean;
    preSelected?: boolean;
}

const suggestionProps: IBasePickerSuggestionsProps = {
    suggestionsHeaderText: 'Suggested People',
    mostRecentlyUsedHeaderText: 'Suggested Contacts',
    noResultsFoundText: 'No results found',
    loadingText: 'Loading',
    showRemoveButtons: true,
    suggestionsAvailableAlertText: 'People Picker Suggestions available',
    suggestionsContainerAriaLabel: 'Suggested contacts',
};

const limitedSearchAdditionalProps: IBasePickerSuggestionsProps = {
    searchForMoreText: 'Load all Results',
    resultsMaximumNumber: 10,
    searchingText: 'Searching...'
};

const limitedSearchSuggestionProps: IBasePickerSuggestionsProps = assign(limitedSearchAdditionalProps, suggestionProps);

export class PeoplePickerTypesExample extends BaseComponent<IPeoplePickerExampleProps & any, IPeoplePickerExampleState> {
    // All pickers extend from BasePicker specifying the item type.
    private _picker = React.createRef<IBasePicker<IPersonaProps>>();

    constructor(props: {}) {
        super(props);
        console.log({ delay: this.props.delayResults })
        this.state = {
            currentPicker: this.props.preSelected ? 4 : 1,
            delayResults: this.props.delayResults ? true : false,
            peopleList: people,
            mostRecentlyUsed: mru,
            currentSelectedItems: [],
            isPickerDisabled: false
        };
    }

    public render() {
        //     let currentPicker: JSX.Element | undefined = undefined;

        //     switch (this.state.currentPicker) {
        //         case 1:
        //             currentPicker = this._renderNormalPicker();
        //             break;
        //         case 2:
        //             currentPicker = this._renderCompactPicker();
        //             break;
        //         case 3:
        //             currentPicker = this._renderListPicker();
        //             break;
        //         case 4:
        //             currentPicker = this._renderPreselectedItemsPicker();
        //             break;
        //         case 5:
        //             currentPicker = this._renderLimitedSearch();
        //             break;
        //         case 6:
        //             currentPicker = this._renderProcessSelectionPicker();
        //             break;
        //         case 7:
        //             currentPicker = this._renderControlledPicker();
        //             break;
        //         default:
        //     }


        const { preSelected } = this.props;
        console.log({ props: this.props })
        return (
            <>
                <div style={{ width: 450 }}>
                    {preSelected && this._renderPreselectedItemsPicker()}
                    {!preSelected && this._renderLimitedSearch()}
                </div>
            </>
        );
    }

    private _getTextFromItem(persona: IPersonaProps): string {
        return persona.text as string;
    }
    // private _renderListPicker() {
    //     return (
    //         <ListPeoplePicker
    //             onResolveSuggestions={this._onFilterChanged}
    //             // onEmptyInputFocus={this._returnMostRecentlyUsed}
    //             getTextFromItem={this._getTextFromItem}
    //             className={'ms-PeoplePicker'}
    //             pickerSuggestionsProps={suggestionProps}
    //             key={'list'}
    //             onRemoveSuggestion={this._onRemoveSuggestion}
    //             onValidateInput={this._validateInput}
    //             inputProps={{
    //                 onBlur: () => console.log('onBlur called'),
    //                 onFocus: () => console.log('onFocus called'),
    //                 'aria-label': 'People Picker'
    //             }}
    //             componentRef={this._picker}
    //             resolveDelay={300}
    //             disabled={this.state.isPickerDisabled}
    //         />
    //     );
    // }

    // private _renderNormalPicker() {
    //     return (
    //         <NormalPeoplePicker
    //             onResolveSuggestions={this._onFilterChanged}
    //             onEmptyInputFocus={this._returnMostRecentlyUsed}
    //             getTextFromItem={this._getTextFromItem}
    //             pickerSuggestionsProps={suggestionProps}
    //             className={'ms-PeoplePicker'}
    //             key={'normal'}
    //             onRemoveSuggestion={this._onRemoveSuggestion}
    //             onValidateInput={this._validateInput}
    //             removeButtonAriaLabel={'Remove'}
    //             inputProps={{
    //                 onBlur: () => console.log('onBlur called'),
    //                 onFocus: () => console.log('onFocus called'),
    //                 'aria-label': 'People Picker'
    //             }}
    //             componentRef={this._picker}
    //             onInputChange={this._onInputChange}
    //             resolveDelay={300}
    //             disabled={this.state.isPickerDisabled}
    //         />
    //     );
    // }

    // private _renderCompactPicker() {
    //     return (
    //         <CompactPeoplePicker
    //             onResolveSuggestions={this._onFilterChanged}
    //             onEmptyInputFocus={this._returnMostRecentlyUsed}
    //             getTextFromItem={this._getTextFromItem}
    //             pickerSuggestionsProps={suggestionProps}
    //             className={'ms-PeoplePicker'}
    //             onRemoveSuggestion={this._onRemoveSuggestion}
    //             onValidateInput={this._validateInput}
    //             inputProps={{
    //                 onBlur: () => console.log('onBlur called'),
    //                 onFocus: () => console.log('onFocus called'),
    //                 'aria-label': 'People Picker'
    //             }}
    //             componentRef={this._picker}
    //             resolveDelay={300}
    //             disabled={this.state.isPickerDisabled}
    //         />
    //     );
    // }

    private _renderPreselectedItemsPicker() {
        return (
            <CompactPeoplePicker
                onResolveSuggestions={this._onFilterChanged}
                onEmptyInputFocus={this._returnMostRecentlyUsed}
                getTextFromItem={this._getTextFromItem}
                className={'ms-PeoplePicker'}
                defaultSelectedItems={people.splice(0, 1)}
                key={'list'}
                pickerSuggestionsProps={suggestionProps}
                onRemoveSuggestion={this._onRemoveSuggestion}
                onValidateInput={this._validateInput}
                inputProps={{
                    onBlur: () => console.log('onBlur called'),
                    onFocus: () => console.log('onFocus called'),
                    'aria-label': 'People Picker'
                }}
                componentRef={this._picker}
                resolveDelay={300}
                disabled={this.state.isPickerDisabled}
            />
        );
    }

    private _renderLimitedSearch() {
        limitedSearchSuggestionProps.resultsFooter = this._renderFooterText;

        return (
            <CompactPeoplePicker
                onResolveSuggestions={this._onFilterChangedWithLimit}
                onEmptyInputFocus={this._returnMostRecentlyUsedWithLimit}
                getTextFromItem={this._getTextFromItem}
                className={'ms-PeoplePicker'}
                onGetMoreResults={this._onFilterChanged}
                pickerSuggestionsProps={limitedSearchSuggestionProps}
                onRemoveSuggestion={this._onRemoveSuggestion}
                inputProps={{
                    onBlur: () => console.log('onBlur called'),
                    onFocus: () => console.log('onFocus called'),
                    'aria-label': 'People Picker'
                }}
                componentRef={this._picker}
                resolveDelay={300}
                disabled={this.state.isPickerDisabled}
            />
        );
    }





    private _renderFooterText = (): JSX.Element => {
        return <div>No additional results</div>;
    };

    private _onRemoveSuggestion = (item: IPersonaProps): void => {
        const { peopleList, mostRecentlyUsed: mruState } = this.state;
        const indexPeopleList: number = peopleList.indexOf(item);
        const indexMostRecentlyUsed: number = mruState.indexOf(item);

        if (indexPeopleList >= 0) {
            const newPeople: IPersonaProps[] = peopleList.slice(0, indexPeopleList).concat(peopleList.slice(indexPeopleList + 1));
            this.setState({ peopleList: newPeople });
        }

        if (indexMostRecentlyUsed >= 0) {
            const newSuggestedPeople: IPersonaProps[] = mruState
                .slice(0, indexMostRecentlyUsed)
                .concat(mruState.slice(indexMostRecentlyUsed + 1));
            this.setState({ mostRecentlyUsed: newSuggestedPeople });
        }
    };

    // (filter: string, selectedItems?: IPersonaProps[] | undefined)
    // IPersonaProps[] | PromiseLike<IPersonaProps[]>
    private _onFilterChanged = (
        filterText: string,
        currentPersonas?: IPersonaProps[],
    ): IPersonaProps[] | Promise<IPersonaProps[]> => {
        if (filterText) {
            let filteredPersonas: IPersonaProps[] = this._filterPersonasByText(filterText);
            if (currentPersonas) {
                filteredPersonas = this._removeDuplicates(filteredPersonas, currentPersonas);
            }
            // filteredPersonas = limitResults ? filteredPersonas.splice(0, limitResults) : filteredPersonas;
            return this._filterPromise(filteredPersonas);
        } else {
            return [];
        }
    };

    private _returnMostRecentlyUsed = (currentPersonas?: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
        let { mostRecentlyUsed } = this.state;
        if (currentPersonas) {
            mostRecentlyUsed = this._removeDuplicates(mostRecentlyUsed, currentPersonas);
        }
        return this._filterPromise(mostRecentlyUsed);
    };

    private _returnMostRecentlyUsedWithLimit = (currentPersonas?: IPersonaProps[] | undefined): IPersonaProps[] | Promise<IPersonaProps[]> => {
        let { mostRecentlyUsed } = this.state;
        if (currentPersonas) {
            mostRecentlyUsed = this._removeDuplicates(mostRecentlyUsed, currentPersonas);
        }
        mostRecentlyUsed = mostRecentlyUsed.splice(0, 3);
        return this._filterPromise(mostRecentlyUsed);
    };

    private _onFilterChangedWithLimit = (
        filterText: string,
        currentPersonas?: IPersonaProps[]
    ): IPersonaProps[] | Promise<IPersonaProps[]> => {
        return this._onFilterChanged(filterText, currentPersonas);
    };

    private _filterPromise(personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> {
        if (this.state.delayResults) {
            return this._convertResultsToPromise(personasToReturn);
        } else {
            return personasToReturn;
        }
    }

    private _listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
        if (!personas || !personas.length || personas.length === 0) {
            return false;
        }
        return personas.filter(item => item.text === persona.text).length > 0;
    }

    private _filterPersonasByText(filterText: string): IPersonaProps[] {
        return this.state.peopleList.filter(item => this._doesTextStartWith(item.text as string, filterText));
    }

    private _doesTextStartWith(text: string, filterText: string): boolean {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    }

    private _convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
        return new Promise<IPersonaProps[]>((resolve) => setTimeout(() => resolve(results), 2000));
    }

    private _removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
        return personas.filter(persona => !this._listContainsPersona(persona, possibleDupes));
    }

    // private _toggleDelayResultsChange = (ev: React.MouseEvent<HTMLElement>, toggleState: boolean): void => {
    //     this.setState({ delayResults: toggleState });
    // };

    // private _dropDownSelected = (event: React.FormEvent<HTMLDivElement>, option: IDropdownOption): void => {
    //     this.setState({ currentPicker: option.key });
    // };

    private _validateInput = (input: string): ValidationState => {
        if (input.indexOf('@') !== -1) {
            return ValidationState.valid;
        } else if (input.length > 1) {
            return ValidationState.warning;
        } else {
            return ValidationState.invalid;
        }
    };


}
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

export const people: (IPersonaProps & { key: string | number })[] = [
    {
        key: 1,
        imageUrl: TestImages.personaFemale,
        imageInitials: 'PV',
        text: 'Annie Lindqvist',
        secondaryText: 'Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.online
    },
    {
        key: 2,
        imageUrl: TestImages.personaMale,
        imageInitials: 'AR',
        text: 'Aaron Reid',
        secondaryText: 'Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.busy
    },
    {
        key: 3,
        imageUrl: TestImages.personaMale,
        imageInitials: 'AL',
        text: 'Alex Lundberg',
        secondaryText: 'Software Developer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.dnd
    },
    {
        key: 4,
        imageUrl: TestImages.personaMale,
        imageInitials: 'RK',
        text: 'Roko Kolar',
        secondaryText: 'Financial Analyst',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.offline
    },
    {
        key: 5,
        imageUrl: TestImages.personaMale,
        imageInitials: 'CB',
        text: 'Christian Bergqvist',
        secondaryText: 'Sr. Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.online
    },
    {
        key: 6,
        imageUrl: TestImages.personaFemale,
        imageInitials: 'VL',
        text: 'Valentina Lovric',
        secondaryText: 'Design Developer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.online
    },
    {
        key: 7,
        imageUrl: TestImages.personaMale,
        imageInitials: 'MS',
        text: 'Maor Sharett',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.away
    },
    {
        key: 8,
        imageUrl: TestImages.personaFemale,
        imageInitials: 'PV',
        text: 'Anny Lindqvist',
        secondaryText: 'Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.busy
    },
    {
        key: 9,
        imageUrl: TestImages.personaMale,
        imageInitials: 'AR',
        text: 'Aron Reid',
        secondaryText: 'Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.dnd
    },
    {
        key: 10,
        imageUrl: TestImages.personaMale,
        imageInitials: 'AL',
        text: 'Alix Lundberg',
        secondaryText: 'Software Developer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.offline
    },
    {
        key: 11,
        imageUrl: TestImages.personaMale,
        imageInitials: 'RK',
        text: 'Roko Kular',
        secondaryText: 'Financial Analyst',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.none
    },
    {
        key: 12,
        imageUrl: TestImages.personaMale,
        imageInitials: 'CB',
        text: 'Christian Bergqvest',
        secondaryText: 'Sr. Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.busy
    },
    {
        key: 13,
        imageUrl: TestImages.personaFemale,
        imageInitials: 'VL',
        text: 'Valintina Lovric',
        secondaryText: 'Design Developer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.busy
    },
    {
        key: 14,
        imageUrl: TestImages.personaMale,
        imageInitials: 'MS',
        text: 'Maor Sharet',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.blocked
    },
    {
        key: 15,
        imageUrl: TestImages.personaFemale,
        imageInitials: 'VL',
        text: 'Anny Lindqvest',
        secondaryText: 'SDE',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.blocked
    },
    {
        key: 16,
        imageUrl: TestImages.personaMale,
        imageInitials: 'MS',
        text: 'Alix Lunberg',
        secondaryText: 'SE',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.away
    },
    {
        key: 17,
        imageUrl: TestImages.personaFemale,
        imageInitials: 'VL',
        text: 'Annie Lindqvest',
        secondaryText: 'SDET',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.online
    },
    {
        key: 18,
        imageUrl: TestImages.personaMale,
        imageInitials: 'MS',
        text: 'Alixander Lundberg',
        secondaryText: 'Senior Manager of SDET',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.offline
    },
    {
        key: 19,
        imageUrl: TestImages.personaFemale,
        imageInitials: 'VL',
        text: 'Anny Lundqvist',
        secondaryText: 'Junior Manager of Software',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.away
    },
    {
        key: 20,
        imageUrl: TestImages.personaMale,
        imageInitials: 'MS',
        text: 'Maor Shorett',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.blocked
    },
    {
        key: 21,
        imageUrl: TestImages.personaFemale,
        imageInitials: 'VL',
        text: 'Valentina Lovrics',
        secondaryText: 'Design Developer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.online
    },
    {
        key: 22,
        imageUrl: TestImages.personaMale,
        imageInitials: 'MS',
        text: 'Maor Sharet',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.online
    },
    {
        key: 23,
        imageUrl: TestImages.personaFemale,
        imageInitials: 'VL',
        text: 'Valentina Lovrecs',
        secondaryText: 'Design Developer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.blocked
    },
    {
        key: 24,
        imageUrl: TestImages.personaMale,
        imageInitials: 'MS',
        text: 'Maor Sharitt',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.offline
    },
    {
        key: 25,
        imageUrl: './images/persona-male.png',
        imageInitials: 'MS',
        text: 'Maor Shariett',
        secondaryText: 'Design Developer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 3:00pm',
        presence: PersonaPresence.online
    },
    {
        key: 26,
        imageUrl: './images/persona-female.png',
        imageInitials: 'AL',
        text: 'Alix Lundburg',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 3:00pm',
        presence: PersonaPresence.away
    },
    {
        key: 27,
        imageUrl: './images/persona-female.png',
        imageInitials: 'VL',
        text: 'Valantena Lovric',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.busy
    },
    {
        key: 28,
        imageUrl: './images/persona-female.png',
        imageInitials: 'VL',
        text: 'Velatine Lourvric',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.online
    },
    {
        key: 29,
        imageUrl: './images/persona-female.png',
        imageInitials: 'VL',
        text: 'Valentyna Lovrique',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.busy
    },
    {
        key: 30,
        imageUrl: './images/persona-female.png',
        imageInitials: 'AL',
        text: 'Annie Lindquest',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.dnd
    },
    {
        key: 31,
        imageUrl: './images/persona-female.png',
        imageInitials: 'AL',
        text: 'Anne Lindquist',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.blocked
    },
    {
        key: 32,
        imageUrl: './images/persona-female.png',
        imageInitials: 'AL',
        text: 'Ann Lindqiest',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.online
    },
    {
        key: 33,
        imageUrl: './images/persona-male.png',
        imageInitials: 'AR',
        text: 'Aron Reid',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.away
    },
    {
        key: 34,
        imageUrl: './images/persona-male.png',
        imageInitials: 'AR',
        text: 'Aaron Reed',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.offline
    },
    {
        key: 35,
        imageUrl: './images/persona-female.png',
        imageInitials: 'AL',
        text: 'Alix Lindberg',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.busy
    },
    {
        key: 36,
        imageUrl: './images/persona-male.png',
        imageInitials: 'AL',
        text: 'Alan Lindberg',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.busy
    },
    {
        key: 37,
        imageUrl: './images/persona-male.png',
        imageInitials: 'MS',
        text: 'Maor Sharit',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.offline
    },
    {
        key: 38,
        imageUrl: './images/persona-male.png',
        imageInitials: 'MS',
        text: 'Maorr Sherit',
        secondaryText: 'UX Designer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.online
    },
    {
        key: 39,
        imageUrl: './images/persona-male.png',
        imageInitials: 'AL',
        text: 'Alex Lindbirg',
        secondaryText: 'Software Developer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.dnd
    },
    {
        key: 40,
        imageUrl: './images/persona-male.png',
        imageInitials: 'AL',
        text: 'Alex Lindbarg',
        secondaryText: 'Software Developer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
        presence: PersonaPresence.online
    }
];
