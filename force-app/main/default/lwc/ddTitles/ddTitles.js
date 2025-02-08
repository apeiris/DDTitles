import { LightningElement } from 'lwc';



export default class DdTitles extends LightningElement {
    selectedTitle = ''; // Default value

    titleOptions = [
        { label: 'Mr.'  , value: 'Mr.'      },
        { label: 'Mrs.' , value: 'Mrs.'     },
        { label: 'Dr.'  , value: 'Dr.'      },
        { label: 'Prof.', value: 'Prof.'    },
        { label: 'Mx.'  , value: 'Mx.'      }
    ];

    handleChange(event) {
        this.selectedTitle = event.detail.value;
    }
}
