import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Store/CounterSlice'
import BasketSlice from '../Store/BasketSlice'
import CheckOutSlice from '../Store/CheckOutSlice'
import DeliverySlice from '../Store/DeliverySlice'
import DeliveryOrderSlice from '../Store/DeliveryOrderSlice'
import UserLoginSlice from '../Store/UserLoginSlice'
import { emporiumApi } from './EmporiumApi'
export default configureStore({
  reducer: {
    counter: counterReducer,
    basket: BasketSlice,
    checkout: CheckOutSlice,
    delivery: DeliverySlice,
    deliveryOrder: DeliveryOrderSlice,
    user: UserLoginSlice,
    [emporiumApi.reducerPath]: emporiumApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(emporiumApi.middleware)
})