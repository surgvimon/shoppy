import type { ThemeConfig } from "antd";
const theme: ThemeConfig = {
  token: {
    fontFamily: "IBM Plex Sans Thai, sans-serif",
    fontSize: 16,
    colorPrimary: "#0BA5EC",
    colorText: "#101828",
    colorError: "#F04438",
    colorTextDisabled: "#101828",
    colorTextPlaceholder: "#D1D4DA",
  },
  components: {
    Carousel: {
      dotGap: 3,
      dotHeight: 7,
      dotOffset: 45,
      dotWidth: 7,
    },
    Input: {
      colorError: "#FDA29B",
    },
    Dropdown: {
      paddingBlock: 0,
      paddingXS: 0,
      paddingXXS: 4,
      controlPaddingHorizontal: 0,
      motionDurationMid: "0.1s",
      controlItemBgHover: "#E0F2FE",
      // controlItemBgActive: "#0B4A6F",
      controlItemBgActive: "#e6f4ff",
      // controlItemBgActiveHover: "#0B4A6F"
    },
    Collapse: {
      headerBg: "translate",
      headerPadding: '32px 0px',
    },
    Tabs: {
      horizontalItemGutter: 8,
    },
    Steps: {
      colorPrimary: "#12B76A",
      finishIconBorderColor: "#12B76A",
    },
    DatePicker: {
      colorPrimary: '#ed5ea8',
      colorPrimaryActive: '#ed5ea8',
      colorBgContainerDisabled: 'transparent',
      colorTextDisabled: '#d9d9d9'
    },
  },
};

export default theme;
