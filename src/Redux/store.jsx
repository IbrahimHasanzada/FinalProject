import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/CounterSlice'
import BasketSlice from './BasketSlice'
import CheckOutSlice from './CheckOutSlice'
import DeliverySlice from './DeliverySlice'
import DeliveryOrderSlice from './DeliveryOrderSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
    basket : BasketSlice,
    checkout : CheckOutSlice,
    delivery: DeliverySlice,
    deliveryOrder: DeliveryOrderSlice
  }
})