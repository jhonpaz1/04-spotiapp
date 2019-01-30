// import { Component, OnInit, Input } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
// export class TarjetasComponent implements OnInit {
  export class TarjetasComponent {

  @Input() items: any [] = [];

  constructor( private router: Router) { }

  // ngOnInit() {
  // }

  verArtista(item: any) {
    let artistaId: any;

    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artist', artistaId]);
  }

}
