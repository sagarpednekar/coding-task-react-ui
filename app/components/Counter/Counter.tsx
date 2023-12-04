"use client";
import { BaseSyntheticEvent, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
  incrementIfOddAsync,
  resetCounter
} from "@/lib/redux";
import { isNumeric } from "@/app/utility";
import { Panel } from "../atoms/Panel";
import styles from "./counter.module.css";

// Enum defining types of panels for displaying messages
enum PanelType {
  SUCCESS = 'success',
  ERROR = 'error'
}

/**
 * Counter Component
 * @client
 * This component displays a counter with increment and decrement buttons,
 * an input field to add a custom amount, and a button to increment only if the count is odd.
 *
 * @returns {JSX.Element} The rendered Counter component.
 */
export const Counter = () => {
  // State Hooks
  const [amount, setAmount] = useState(0);
  const [showAmountPanel, toggleAmountPanel] = useState(false);

  const [errMessage, setErrorMessage] = useState("");

  // Redux Hooks
  const count = useSelector(selectCount);
  const dispatch = useDispatch<any>();

  // Memoized Event Handlers using useCallback
  const handleChange = useCallback((e: BaseSyntheticEvent) => {
    if (isNumeric(e.target.value)) {
      setAmount(Number(e.target.value));
    }
  }, []);

  const resetError = useCallback((delay: number = 2000): void => {
    setTimeout(() => {
      setErrorMessage("");
    }, delay);
  }, []);

  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    if (count > 0) {
      dispatch(decrement());
    } else {
      setErrorMessage("Cannot decrease counter below 0");
      resetError();
    }
  }, [count, dispatch, resetError]);

  const handleAddAmount = useCallback(() => {
    if (amount > 0) {
      dispatch(incrementByAmount(amount));
    } else {
      setErrorMessage("Enter amount greater than 0");
      resetError(1000);
    }
    setAmount(0);
  }, [amount, dispatch, resetError]);

  const handleAddIfOdd = useCallback(() => {
    try {
      if (amount > 0) {
        dispatch(incrementIfOddAsync(amount));
      }
      else {
        setErrorMessage("Enter amount greater than 0");
        resetError(1000);
      }
    } catch (error: any) {
      console.error("Error:", error?.message);
      setErrorMessage(error?.message);
      resetError();
    }
  }, [amount, dispatch, resetError]);


  const handleClearCounter = () => {
    dispatch(resetCounter())

  }

  /**
   * Renders the Counter component.
   */
  return (
    <div>
      {/* Display error message in a Panel if there is one */}
      {errMessage && <Panel message={errMessage} type={PanelType.ERROR} />}

      {/* Counter UI */}
      <div className={styles.row}>
        {/* Decrement button */}
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={handleDecrement}
        >
          -
        </button>

        {/* Counter value */}
        <span className={styles.value}>{count}</span>

        {/* Increment button */}
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={handleIncrement}
        >
          +
        </button>
        <button className={styles.button} onClick={handleClearCounter} >
          Reset 
        </button>
      </div>

      {/* Input for custom increment amount */}
      <div className={styles.row}>
        <label htmlFor="amount-input"> Amount </label>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          onChange={handleChange}
          value={amount}
          id="amount-input"
        />
      </div>

      <div className={styles.row}>

        {/* Add Amount button */}
        <button className={styles.button} onClick={handleAddAmount}>
          Add Amount
        </button>

        {/* Add If Odd button */}
        <button className={styles.button} onClick={handleAddIfOdd}>
          Add If Odd
        </button>
        
      </div>
    </div>
  );
};
