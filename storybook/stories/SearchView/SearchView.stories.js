import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import SearchView from '../../../components/molecules/SearchView';

storiesOf('UI/Components/Molecules/SearchView', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Search View', () => <SearchView />);
