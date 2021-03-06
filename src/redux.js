// Action Creator
const newBooking = (name, amount) => {
  return {
    type: "NEW_BOOKING",
    payload: {
      name,
      amount,
    },
  };
};

const cancelBooking = (name, refundAmount) => {
  return {
    type: "CANCEL_BOOKING",
    payload: {
      name,
      refundAmount,
    },
  };
};

// Reducers

const reservationHistory = (oldReservationList = [], action) => {
  if (action.type === "NEW_BOOKING") {
    return [...oldReservationList, action.payload];
  } else if (action.type === "CANCEL_BOOKING") {
    return oldReservationList.filter((record) => {
      return record.name !== action.payload.name;
    });
  }
  return oldReservationList;
};

const cancellationHistory = (oldCancellationList = [], action) => {
  if (action.type === "CANCEL_BOOKING") {
    return [...oldCancellationList, action.payload];
  }
  return oldCancellationList;
};

const accounting = (totalMoney = 100, action) => {
  if (action.type === "NEW_BOOKING") {
    return totalMoney + action.payload.amount;
  } else if (action.type === "CANCEL_BOOKING") {
    return totalMoney - action.payload.refundAmount;
  }
  return totalMoney;
};

// Redux Store
console.log(Redux);
const { combineReducers, createStore } = Redux;

const centralStore = combineReducers({
  accounting: accounting,
  reservationHistory: reservationHistory,
  cancellationHistory: cancellationHistory,
});

const store = createStore(centralStore);

// Action, Dispatch, Result

console.log("1 ", store.getState());
const action1 = newBooking("Rahim", 40);
const action2 = newBooking("Karim", 70);
store.dispatch(action1);
store.dispatch(action2);
console.log("2 ", store.getState());

const action3 = newBooking("Nehal", 85);
store.dispatch(action3);
console.log("3 ", store.getState());

const action4 = cancelBooking("Rahim", 25);
store.dispatch(action4);
console.log("4 ", store.getState());
