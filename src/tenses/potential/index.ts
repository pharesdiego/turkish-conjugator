import { VerbProperties } from '../../interfaces';
import PotentialNegative from './potentialNegative';
import PotentialPositive from './potentialPositive';

const Potential = (props: VerbProperties, negative = false) => {
  return negative ? PotentialNegative(props) : PotentialPositive(props);
};

export default Potential;
