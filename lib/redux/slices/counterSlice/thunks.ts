/* Instruments */
import { ReduxState, ReduxThunkAction, incrementByAmount } from "@/lib/redux";

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState: () => ReduxState) => {
    // update only if currentValue is odd
    const {
      counter: { value },
    } = getState();
    if (value % 2 === 1) dispatch(incrementByAmount(amount));
    else {
      throw new Error("Current counter value is not a odd number")
    }
  };
