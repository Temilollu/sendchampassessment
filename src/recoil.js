import { atom, selector } from "recoil";
export const formState = atom({
  key: "formState",
  default: {
    country: "",
    currency: "",
  },
});

export const priceState = atom({
  key: "priceState",
  default: {},
});

export const isFormStateFilled = selector({
  key: "isFormStateFilled",
  get: ({ get }) => {
    const formData = get(formState);
    return formData.country && formData.currency ? true : false;
  },
});
