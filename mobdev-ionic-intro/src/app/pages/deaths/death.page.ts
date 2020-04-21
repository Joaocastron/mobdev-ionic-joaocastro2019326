import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-deaths',
    templateUrl: './death.page.html',
    styleUrls: ['./death.page.scss'],
})
export class DeathsPage implements OnInit {

    deaths: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('my data', data);
        });
    }

}