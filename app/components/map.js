import Component from '@glimmer/component';

// importing env variable 
import ENV from 'emberjs-tutorial/config/environment';

// api URL
const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

// generate using ember CLI `> ember generate component map --with-component-class`
export default class MapComponent extends Component {

    get src(){
        // retrieving the given "props" to the component
        let { lng, lat, width, height, zoom } = this.args;

        let coordinates = `${lng},${lat},${zoom}`;
        let dimensions  = `${width}x${height}`;
        let accessToken = `access_token=${this.token}`;
    
        return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
    }

    get token() {
        return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
    }
}
