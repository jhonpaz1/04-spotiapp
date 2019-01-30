import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBeqTi6NoBFwHTu7j6v8Nao-zy7CgYO5_Gxwd3LaNDnpEjI-01gBth9MGz9EcwbotPy5lrKagpBcrmB_6o'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));
    // const headers = new HttpHeaders({
    // Abrir postman para obtener este token (https://accounts.spotify.com/api/token)
    //   'Authorization': 'Bearer BQCLK_7w-MVItOd51xrJusByCvf0z8XCzPVUU2V6v3DN4wL8H0xtOEIBS0FoACwI1YuZePi0RW7ZYmRNG4g'
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    //   .pipe(map(data => {
    //     return data['albums'].items;
    //   }));

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    // .pipe(map(data => data['albums'].items));

    // .subscribe(data => {
    //   console.log(data);
    // });
  }

  getArtistas(termino: string) {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQCLK_7w-MVItOd51xrJusByCvf0z8XCzPVUU2V6v3DN4wL8H0xtOEIBS0FoACwI1YuZePi0RW7ZYmRNG4g'

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
    // .pipe(map(data => {
    //   return data['artists'].items;
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
    // .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
      // .pipe(map(data => data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }

}
