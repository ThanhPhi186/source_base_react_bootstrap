// @flow
import { ProductActionTypes } from './constants';

type ProductAction = { type: string, payload: {} | string };

// common success
export const showDeleteModal = (id: any): ProductAction => ({
    type: ProductActionTypes.SHOW_DELETE_MODAL,
    payload: { id },
});

export const hideDeleteModal = (): ProductAction => ({
    type: ProductActionTypes.HIDE_DELETE_MODAL,
});
