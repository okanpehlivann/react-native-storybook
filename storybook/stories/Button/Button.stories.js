import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import React from 'react';
import CenterView from '../CenterView';
import Button from '../../../components/atoms/Button';

storiesOf('UI/Components/Atoms/Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Search bar button', () => <Button />);
