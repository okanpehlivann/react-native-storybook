import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import SearchBar from '../../../components/atoms/Searchbar';

storiesOf('UI/Components/Atoms/SearchBar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Search bar Text', () => <SearchBar />);
