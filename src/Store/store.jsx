import { configureStore } from '@reduxjs/toolkit'
import BasketSlice from '../Store/BasketSlice'
import CheckOutSlice from '../Store/CheckOutSlice'
import DeliverySlice from '../Store/DeliverySlice'
import DeliveryOrderSlice from '../Store/DeliveryOrderSlice'
import UserLoginSlice from '../Store/UserLoginSlice'
import { emporiumApi } from './EmporiumApi'
import CategoryIdSlice from './CategoryIdSlice'
import LikeSlice from './LikeSlice'
export default configureStore({
  reducer: {
    basket: BasketSlice,
    checkout: CheckOutSlice,
    delivery: DeliverySlice,
    deliveryOrder: DeliveryOrderSlice,
    user: UserLoginSlice,
    catId: CategoryIdSlice,
    liked: LikeSlice,
    [emporiumApi.reducerPath]: emporiumApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(emporiumApi.middleware)
})