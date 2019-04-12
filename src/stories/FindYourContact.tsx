import * as React from 'react';
import { BaseComponent, IPersonaSharedProps, IconButton } from 'office-ui-fabric-react';
import { PersonaBadge } from './Personas';
import ContactPicker, { IPeoplePickerExampleProps } from './ContactPicker';


export type PersonListProps = { personList: PersonProps[]; };
export type PersonProps = { person?: IPersonaSharedProps; };
export type FindYourContactProps = { contactList: PersonProps[]; } & PersonProps & IPeoplePickerExampleProps & any;

export default class extends BaseComponent<FindYourContactProps> {
    renderPersonBadge(cl: { length: any; map: (arg0: (m: IPersonaSharedProps) => JSX.Element) => void; }) {
        if (cl.length) {
            return cl.map((c) => <PersonaBadge person={c} />)
        }
        return <PersonaBadge />

    }
    render() {
        console.log({ ...this.props })
        const { currentSelectedItems, mostRecentlyUsed, peopleList, contactList } = this.props
        return (
            <>
                <div style={{ width: '100%', margin: "auto", display: 'inline-block', textAlign: 'center' }}>
                    <h1 style={{ margin: "auto", display: 'inline-block', marginBottom: 20, textAlign: 'center', width: '100%' }}>Search Contacts</h1>
                    <ContactPicker
                        peopleList={peopleList}
                        mostRecentlyUsed={mostRecentlyUsed}
                        currentSelectedItems={currentSelectedItems}
                    />
                    {this.renderPersonBadge(contactList)}
                </div>
                <div style={{ width: '100%', margin: "auto", display: 'inline-block', textAlign: 'center' }}>
                    <IconButton
                        styles={{
                            root: {
                                // width: '15%',
                                height: 32,
                                // backgroundColor: 'rgb(0, 120, 212)',
                                // color: 'white',
                                padding: 0,
                            }
                        }}
                        iconProps={{ iconName: 'settings' }}
                        title="search"
                        ariaLabel="search"
                    />

                </div>
            </>
        );
    }
}