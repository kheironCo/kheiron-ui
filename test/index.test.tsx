import * as ReactDOM from 'react-dom';
import { AvatarKUI } from '../src';

describe('Avatar', () => {
  it('renders without crashing', () => {
    const img = document.createElement('img');
    ReactDOM.render(<AvatarKUI imgSrc="image" altText="alternative" />, img);
    ReactDOM.unmountComponentAtNode(img);
  });
});
