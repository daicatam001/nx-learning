import {Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, tap} from 'rxjs/operators';
import {SpotifyAuthorize} from './spotifyl.authorize';

export interface AuthState {
  accessToken: string | null;
  tokenType: string | null;
  expiresIn: number;
  state: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ComponentStore<AuthState> {
  constructor(private router: Router, private route: ActivatedRoute) {
    super({
      accessToken: '',
      expiresIn: 0,
      state: '',
      tokenType: ''
    })

    if (!window.location.hash) {

    }

    this.route.fragment.pipe(
      filter((fragment) => !!fragment),
      map(fragment => new URLSearchParams(fragment)),
      map(params => ({
        accessToken: params.get('access_token'),
        tokenType: params.get('tokenType'),
        expiresIn: +params.get('expiresIn'),
        state: params.get('state'),
      })),
      tap(state => {
        this.setState(state);
        console.info('spotify authenticated');
        this.router.navigate([]);
      })
    )
  }
  redirectToAuthorize() {
    const spotifyAuthorize = new SpotifyAuthorize();
    const url = spotifyAuthorize.createAuthorizeURL();
    window.location.href = url;
  }
}
