
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

export default function IndexPage() {
   return (
     <div>
       <Stats url="https://covid19.mathdro.id/api"></Stats>
       <CountrySelector></CountrySelector>
      
     </div>
   )
 }