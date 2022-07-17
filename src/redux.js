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
      return record !== action.payload.name;
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

// Redux Store
