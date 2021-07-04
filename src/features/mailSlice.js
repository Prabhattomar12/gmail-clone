import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
    name: 'mail',
    initialState : {
        sendMessageIsOpen: false,
        selectedMail: null,
    },
    reducers: {
        setSelectedMail : (state, action) => {
            state.selectedMail = action.payload
        },
        openSendMessage : (state) => {
            state.sendMessageIsOpen = true;
        },
        closeSendMessage: (state) => {
            state.sendMessageIsOpen = false;
        },
    },
});

export const { openSendMessage, closeSendMessage, setSelectedMail } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectSelectedMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;



