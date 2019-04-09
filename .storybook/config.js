import {configure} from '@storybook/react';
import '@storybook/addon-console';
import {addDecorator} from '@storybook/react';
import {withConsole} from '@storybook/addon-console';
// import {jsxDecorator} from 'storybook-addon-jsx';

// addDecorator(jsxDecorator);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
