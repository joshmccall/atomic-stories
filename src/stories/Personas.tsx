import * as React from 'react';
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
// import * as exampleStylesImport from './_exampleStyles.scss';
// import { TestImages } from '../PeoplePicker/PeoplePickerExampleData';
import { Link } from 'office-ui-fabric-react';
import { TestImages } from './IPeoplePickerExampleState';

const examplePersona = (image?: boolean): IPersonaSharedProps => ({
    imageUrl: image ? TestImages.personaFemale : undefined,
    imageInitials: 'AL',
    text: 'Annie Lindqvist (CELA)',
    secondaryText: 'SR DIR, BUSINESS STRATEGY MGM',
    tertiaryText: '34/5676',
    optionalText: 'In a meeting - Available at 4:00pm',


});

export class PersonaBasicExample extends React.Component<
    {
        image?: boolean,
        presence?: boolean,
        hidePersonaDetails?: boolean,
        renderPersonaDetails?: boolean;
        hideHeader?: boolean;
    },
    {
        renderPersonaDetails?: boolean;
    }
    > {
    constructor(props: {}) {
        super(props);
        this.state = {
            renderPersonaDetails: true
        };
    }

    public render(): JSX.Element {
        const { renderPersonaDetails } = this.state;
        const { presence, hidePersonaDetails, image, hideHeader } = this.props;

        {/* <Checkbox label="Include persona details" checked={renderPersonaDetails} onChange={this._onChange} /> */ }
        return (

            <>
                {!hideHeader && <>
                    <h1>Persona (<Link href={"https://developer.microsoft.com/en-us/fabric#/components/persona#Variants"}>link</Link>) </h1>
                </>}
                <Persona
                    {...examplePersona(image)}
                    size={PersonaSize.size100}
                    presence={presence ? PersonaPresence.online : undefined}
                    hidePersonaDetails={!hidePersonaDetails ? !renderPersonaDetails : renderPersonaDetails}
                />
            </>
        );
    }

}