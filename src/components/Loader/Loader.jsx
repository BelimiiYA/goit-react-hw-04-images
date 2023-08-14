import { ColorRing } from 'react-loader-spinner';
import { LodeWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LodeWrapper>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#fbe556', '#710b86', '#ab960c', '#0999ff', '#c6b337']}
      />
    </LodeWrapper>
  );
};

export default Loader;