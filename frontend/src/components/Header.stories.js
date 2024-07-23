import Header from './Header';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Header',
  component: Header,
  args: {
    searchHandler: action('searchHandler')
  }
};

export const DefaultHeader = {};
