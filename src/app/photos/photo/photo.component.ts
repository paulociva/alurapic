import { Component, Input } from '@angular/core';

import { environment } from '../../../environments/environment';

const API = environment.ApiUrl + '/imgs/';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {

    private _url = '';
    @Input() description = '';

    @Input() set url(url: string)  {
        if (!url.startsWith('data')) {
            this._url = API + url;
        } else {
            this._url = url;
        }
    }

    get url() {
        return this._url;
    }
}
