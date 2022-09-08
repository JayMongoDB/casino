import { GAMES } from '../../shared/GAMES';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
gamesArray: GAMES

};

const gamesSlice = createSlice(
{
name: 'games',
initialState
}   

);

export const gamesReducer = gamesSlice.reducer;

export const selectAllGames = (state) => {
    return state.games.gamesArray;
};

export const selectGameById = (id) =>  (state) => {
    return state.games.gamesArray.find((game) => game.id === parseInt(id));
};

