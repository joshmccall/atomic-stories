import {configure} from '@storybook/react';
import '@storybook/addon-console';
import {addDecorator} from '@storybook/react';
import {withConsole} from '@storybook/addon-console';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
