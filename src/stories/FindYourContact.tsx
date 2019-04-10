import * as React from 'react';
import { BaseComponent, IPersonaSharedProps } from 'office-ui-fabric-react';
import { PersonaBadge } from './Personas';
import ContactPicker, { IPeoplePickerExampleProps } from './ContactPicker';


export type PersonProps = { person: IPersonaSharedProps; };
export type FindYourContactProps = PersonProps & IPeoplePickerExampleProps;

export default class extends BaseComponent<FindYourContactProps & any> {
    render() {
        return (
            <div style={{ width: '100%', margin: "auto" }}>
                <h1 style={{ marginBottom: 20, textAlign: 'center', width: 300 }}>Search Contacts</h1>
                <ContactPicker
                    peopleList={this.props.peopleList}
                    mostRecentlyUsed={this.props.mostRecentlyUsed}
                    currentSelectedItems={this.props.currentSelectedItems}
                />
                <PersonaBadge person={this.props.person} />
            </div>
        );
    }
}