import { Component, OnInit, Input } from '@angular/core';

import * as SendBird from 'sendbird';

@Component({
    selector: 'app-explore-container',
    templateUrl: './explore-container.component.html',
    styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {

    @Input() name: string;

    sb;

    connected = false;

    constructor() { }

    ngOnInit() { 
        this.sb = new SendBird({ appId: '6A6CF887-E6F6-4763-84B6-BEFD2410EE42' });
        this.connect();
    }

    connect() {
        this.sb.connect('test1', (user, error) => {
            if (error) {
                console.dir(error);                
                alert('Error connecting to Sendbird!');
            }
            this.connected = true;
        });
    }

}
