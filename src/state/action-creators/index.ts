import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';

type DispatchType = (action: Action) => void;

export const searchRepositories = (term: string) => {
  return async (dispatch: DispatchType) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term,
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
