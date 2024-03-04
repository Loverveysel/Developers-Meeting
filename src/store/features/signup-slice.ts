import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type InitialState = {
  value: {
    firstName : string,
    secondName : string,
    country : string,
    phoneNumber: string,
    educationExperience: string,
    domains: string[],
    programmingLanguages: string[],
    biography: string,
    posts: []
  }
}

const initialState: InitialState = {
  value: {
    firstName : "",
    secondName : "",
    country : "",
    phoneNumber: "",
    educationExperience: "",
    domains: [],
    programmingLanguages: [],
    biography: "",
    posts: []    
    }
}

const signUp = createSlice({
  name: "loginButtonClicked",
  initialState,
  reducers: {
    FirstName: (state: InitialState, action: PayloadAction<string>) => {
      state.value.firstName = action.payload
    },
    SecondName: (state: InitialState, action: PayloadAction<string>) => {
      state.value.secondName = action.payload
    },
    Country: (state: InitialState, action: PayloadAction<string>) => {
      state.value.country = action.payload
    },
    EducationExperience: (state: InitialState, action: PayloadAction<string>) => {
      state.value.educationExperience = action.payload
    },
    Domains: (state: InitialState, action: PayloadAction<{ domains: string[]}>) => {
      state.value.domains = action.payload.domains
    },
    ProgrammingLanguages: (state: InitialState, action: PayloadAction<{programmingLanguages: string[] }>) => {
        state.value.programmingLanguages = action.payload.programmingLanguages
      },
    FinalStep: (state: InitialState, action: PayloadAction<{ biography: string}>) => {
      state.value.biography = action.payload.biography
    },
  },
})


export const {
    FirstName,
    SecondName,
    Country,
    EducationExperience,
    Domains,
    ProgrammingLanguages,
    FinalStep,
  } = signUp.actions
  
export default signUp.reducer
