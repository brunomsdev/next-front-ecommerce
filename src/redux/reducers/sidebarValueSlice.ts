import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SidebarValueState {
  open: boolean
}

const initialState: SidebarValueState = {
  open: false
}

const sidebarValueSlice = createSlice({
  name: "sidebarValue",
  initialState,
  reducers: {
    setSidebarValue: (state, action: PayloadAction<SidebarValueState["open"]>) => {
      state.open = action.payload
    }
  }
})

export const { setSidebarValue } = sidebarValueSlice.actions
export default sidebarValueSlice.reducer