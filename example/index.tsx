import 'react-app-polyfill/ie11';
import { createRoot } from 'react-dom/client';
import { AtomDiv } from '../src';
import { FormLayer } from './components/FormLayer';
import { TableLayer } from './components/TableLayer';
// import { Thing } from './Thing';

const App = () => {
  return (
    <AtomDiv>
      <FormLayer />
      <TableLayer />
      {/* <Thing /> */}
    </AtomDiv>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(<App />);
