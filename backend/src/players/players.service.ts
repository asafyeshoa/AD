import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {

    private players = ['player one', 'player two', 'player three']

    getPlayers() {
        return this.players
    }

}
