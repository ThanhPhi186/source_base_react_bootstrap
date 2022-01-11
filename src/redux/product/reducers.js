// @flow
import { ProductActionTypes } from './constants';

const INIT_STATE = {
    delete_product: {
        show_modal: false,
        id: null,
    }
};

type ProductAction = { type: string, payload: any };
type State = { delete_product?: {} | null };

const Product = (state: State = INIT_STATE, action: ProductAction): any => {
    
    switch (action.type) {
        case ProductActionTypes.SHOW_DELETE_MODAL:
            return {
                ...state,
                delete_product: {
                    show_modal: true,
                    id: action.payload.id,
                }
            };

        case ProductActionTypes.HIDE_DELETE_MODAL:
            return {
                ...state,
                delete_product: {
                    show_modal: false,
                    id: null,
                }
            };

        default:
            return { ...state };
    }
};

export default Product;
