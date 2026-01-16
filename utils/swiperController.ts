// swiperController.ts
type SwiperControl = {
  slideNext: () => void;
  slidePrev: () => void;
};

let controller: SwiperControl | null = null;

export const setSwiperController = (c: SwiperControl) => {
  controller = c;
};

export const getSwiperController = () => controller;
