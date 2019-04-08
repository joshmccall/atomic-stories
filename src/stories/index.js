import React from 'react';
import {storiesOf} from '@storybook/react';
import {Shimmer} from 'office-ui-fabric-react';

storiesOf('office-ui-fabric', module).add('shimmer', () => {
  return (
    <Shimmer width={300} isDataLoaded={false}>
      {/* <Persona {...examplePersona} size={PersonaSize.size40} presence={PersonaPresence.away} /> */}
    </Shimmer>
  );
});
