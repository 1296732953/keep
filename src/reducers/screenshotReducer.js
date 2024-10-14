export const initialState = {
  screenshot: {
    username: "用户名",
    keepTitle: "Keep·户外跑步",
    miles: 3.50,
    pace: "04'16\"",
    duration: "00:14:56",
    calories: 250,
    date: new Date(),
    temperature: 12,
    humidity: 23,
  },
  bgImage: "/images/bg1_1.png",
};

export function screenshotReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        screenshot: {
          ...state.screenshot,
          [action.payload.name]: action.payload.value
        }
      };
    case 'SET_BG_IMAGE':
      return { ...state, bgImage: action.payload };
    default:
      return state;
  }
}
