import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import {
  UserModel,
  ITweetData,
  IUserData,
  ITweetsData,
} from '../models/placeholder.models';

export interface IAppState {
  myTweets: ITweetData[];
  myUserData: IUserData;
  searchedTweets: ITweetData[];
  searchedUserData: IUserData;
}

export const setMyDataToStore = createAction(
  '[App] Guarda os meus dados de usuário e twittes no reducer',
  props<{ tweets: any; userdata: any;}>()
);
export const setSearchedDataToStore = createAction(
  '[App] Guarda os meus dados do usuário pesquisado e seus twittes no reducer',
  props<{ tweets: any; userdata: any;}>()
);
export const setShowModal = createAction(
    '[App] Faz aparecer ou sumir o modal',
    props<{showModal: Boolean}>()
)

const INITIAL_STATE = {
  myTweets:
    (localStorage.getItem('@MyTweets') !== 'undefined' &&
      JSON.parse(localStorage.getItem('@MyTweets') as '')) ||
    [],
  myUserData:
    (localStorage.getItem('@userData') !== 'undefined' &&
      JSON.parse(localStorage.getItem('@userData') as '')) ||
    {},
  searchedTweets: [],
  searchedUserData: {},
  showModal: JSON.parse(localStorage.getItem("@userData") as '') ? false : true
};

export const reducer = createReducer(
    INITIAL_STATE,
    on(setMyDataToStore, (state, payload:any)=>{
        state = {
            ...state,
            myTweets:payload.tweets,
            myUserData:payload.userdata
        }
        return state
    }),
    on(setSearchedDataToStore, (state, payload:any)=>{
        state = {
            ...state,
            searchedTweets:payload.tweets,
            searchedUserData:payload.userdata,
        }
        return state
    }),
    on(setShowModal, (state, payload:any)=>{
        state ={
            ...state,
            showModal: payload.showModal
        }
        return state
    })
);
