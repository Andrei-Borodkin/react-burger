import { TActionAutReg } from "./actionAutReg";
import { TActionConstr } from "./actionConstr";
import { TactionForgResPas } from "./actionForgResPas";
import { TactionIngr } from "./actionIngr";
import { TactionOrder } from "./actionOrder";
import { TactionSignIn } from "./actionSignIn";
import { TactionSpinner } from "./actionSpinner";
import { TactionWS } from "./actionWS";



export type TApplicationActions =
    TActionAutReg |
    TActionConstr |
    TactionForgResPas |
    TactionIngr |
    TactionOrder |
    TactionSignIn |
    TactionSpinner |
    TactionWS;
