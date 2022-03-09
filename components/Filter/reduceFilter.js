import React, { useState } from "react";

const methods = {
  PRICE: "PRICE",
  AVAILABLE: "AVAILABLE",
  CONNECTORS: "CONNECTORS",
};

export default function reduceFilter(state, { method, updateValue }) {
  const { price, isAvailable, connector_types } = state;

  switch (method) {
    case methods.PRICE:
      price = updateValue;
      break;
    case methods.AVAILABLE:
      isAvailable = updateValue;
      break;
    case methods.CONNECTORS:
      connector_types = updateValue;
      break;
    default:
      console.warn("Send method in dispatch object: \n", { methods });
  }

  return { price, isAvailable, connector_types };
}
