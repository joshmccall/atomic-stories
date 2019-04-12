import * as React from 'react';
import { PersonaCoin } from 'office-ui-fabric-react/lib/Persona';
import { ShimmerLoadDataExample } from './ShimmerLoadDataExample';
import { PrimaryButton } from 'office-ui-fabric-react';
import { PersonProps } from './FindYourContact';

export class PersonaBadge extends React.Component<PersonProps> {

    public render(): JSX.Element {
        const { person } = this.props;
        return (<div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', padding: 20, margin: '2em', width: 260, display: 'inline-block', textAlign: 'center' }}>
            <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', }}>
                {/* <div style={{ marginBottom: 10 }} /> */}
                {!person ?
                    <ShimmerLoadDataExample /> :

                    <div style={{ textAlign: 'center', paddingTop: 20 }}>
                        <PersonaCoin
                            imageUrl={person.imageUrl}
                            coinSize={200}
                            style={{
                                width: 200,
                                margin: 'auto'
                            }}
                        />
                        <h1 style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.2, fontFamily: 'arial', }}>{person.text}</h1>
                        <p style={{ color: 'grey', fontSize: 13, fontFamily: 'arial' }} >{person.secondaryText}</p>
                        <PrimaryButton data-automation-id="test" allowDisabledFocus={true} text={"Contact"} style={{ width: '100%', marginTop: 10, marginBottom: 16 }} onClick={() => console.log('clicked')} />
                    </div>}
            </div>
        </div>);
    }

}