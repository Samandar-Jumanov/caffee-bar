

import { IChosenIngredient } from "@/types/ingredients"
import ExtractIngredientNames from './extract-names';

const ChosenIngredients = ({ chosenIngredients }: { chosenIngredients: IChosenIngredient[] }) => {
    return (
        <div>
            {!chosenIngredients.length ?
                <h1>No ingredient chosen yet</h1> :
                <ExtractIngredientNames data={chosenIngredients} />}
        </div>
    );
};

export default ChosenIngredients;


