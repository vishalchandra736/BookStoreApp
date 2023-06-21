import {StyleSheet} from 'react-native';
import {
  Border,
  Bottom,
  Color,
  Flex,
  Font,
  FontWidth,
  Margin,
  Other,
  Padding,
  Position,
  Screen,
  Size,
} from './Theme';

const styles = StyleSheet.create({
  TopBar_Container: {
    flexDirection: Screen.Row,
    alignItems: Screen.Center,
    backgroundColor: Color.TopBar_BackgroundColor,
  },

  TopBar_BookIcon: {
    margin: Margin.Icon,
    color: Color.White,
  },

  TopBar_Icon: {
    margin: Margin.Icon,
    color: Color.White,
  },

  TopBar_Text: {
    fontSize: Font.Font_Size_Medium,
    color: Color.Black,
  },

  TopBar_Cart: {
    fontSize: Font.Font_Size_Medium,
    color: Color.White,
  },

  TopBar_HeadingText: {
    fontSize: Font.Font_Size_Large,
    color: Color.White,
  },

  TopBar_Search: {
    borderRadius: Border.Radius_Small,
    backgroundColor: Color.White,
    flexDirection: Screen.Row,
    alignItems: Screen.Center,
    marginVertical: Margin.SearchBar,
    width: Size.Width,
    marginRight: Margin.Right,
    marginLeft: Margin.Left,
    height: Size.Height,
  },

  TopBar_Cart_View: {
    flexDirection: Screen.Row,
    alignItems: Screen.Center,
    justifyContent: Screen.Flex_End,
  },

  TopBar_Logo_View: {
    flexDirection: Screen.Row,
    alignItems: Screen.Center,
    justifyContent: Screen.Flex_Start,
    marginLeft: Margin.Icon,
  },

  TopBar_Search_Icon: {
    marginLeft: Margin.Left,
    marginRight: Margin.SearchBar,
  },

  CardStyle: {
    marginBottom: Margin.MarginBottom,
  },

  CardFlatList: {
    width: Size.BookWidth,
  },

  CardBody: {
    flexDirection: Screen.Row,
    alignItems: Screen.Center,
  },

  BackArrow: {
    color: Color.Black,
    marginHorizontal: Margin.Left,
  },

  MyBag: {
    fontSize: Font.Font_Size_ExtraLarge,
    color: Color.Black,
    fontWeight: FontWidth.SemiBold,
  },

  ScrollView: {
    marginBottom: Margin.ScrollView,
  },

  BagViewOne: {
    margin: Margin.Medium_Five,
  },

  BagViewTwo: {
    flexDirection: Screen.Row,
  },

  ItemView: {
    marginHorizontal: Margin.Medium_Six,
  },

  TitleView: {
    flexDirection: Screen.Row,
    alignItems: Screen.Center,
  },

  TitleText: {
    fontSize: Font.Font_Size_Medium_Small,
    color: Color.Black,
    fontWeight: FontWidth.SemiNormal,
  },

  SubTitleText: {
    fontSize: Font.Font_Size_Small,
    color: Color.Gray,
    fontWeight: FontWidth.SemiNormal,
    marginVertical: Margin.Icon,
  },

  PriceText: {
    fontSize: Font.Font_Size_Medium_Large,
    color: Color.Black,
    fontWeight: FontWidth.Bold,
    marginVertical: Margin.Icon,
  },

  CloseIcon: {
    left: Other.Left,
  },

  QuantityView: {
    flexDirection: Screen.Row,
    alignItems: Screen.Center,
    marginVertical: Margin.Left,
  },

  QuantityText: {
    fontSize: Font.Font_Size_Medium_Large,
    marginHorizontal: Margin.Medium_Six,
  },

  IconColor: {
    color: Color.TopBar_BackgroundColor,
  },

  CustomerDetailsView: {
    margin: Margin.Medium_Five,
    padding: Margin.Medium_Five,
    backgroundColor: Color.OffWhite,
    flexDirection: Screen.Row,
    justifyContent: Screen.Space_Between,
  },

  CustomerDetailsText: {
    color: Color.DarkGray,
    fontSize: Font.Font_Size_Medium_Small,
    fontWeight: FontWidth.ExtraBold,
  },

  PlusIcon: {
    color: Color.DarkBlack,
  },

  Flex: {
    flex: Flex.Flex,
  },

  TotalText: {
    color: Color.DarkGray,
    fontSize: Font.Font_Size_Medium,
  },

  PlaceOrderContainer: {
    bottom: Bottom.BottomPosition,
    position: Position.PositionType,
  },

  AmountView: {
    flexDirection: Screen.Row,
    justifyContent: Screen.Flex_End,
  },

  AmountContainer: {
    margin: Margin.Four,
    marginRight: Margin.ScrollView,
  },

  Amount: {
    color: Color.TopBar_BackgroundColor,
    fontWeight: FontWidth.ExtraBold,
    fontSize: Font.Font_Size_Large_Small,
  },

  PlaceOrderView: {
    borderRightWidth: Screen.One,
    margin: Margin.Icon,
    borderColor: Color.BorderColor,
  },

  PlaceOrderButton: {
    backgroundColor: Color.TopBar_BackgroundColor,
    borderRadius: Border.Radius_Small,
    marginHorizontal: Margin.Left,
    marginVertical: Margin.Left,
    paddingHorizontal: Padding.PaddingExtra,
    paddingVertical: Margin.Medium_Five,
  },

  PlaceOrderText: {
    color: Color.White,
    fontSize: Font.Font_Size_Medium_Small,
    textAlign: Screen.Center,
  },

  Home: {
    flexDirection: Screen.Row,
    marginLeft: Margin.Left,
  },

  HomeBookText: {
    color: Color.Black,
    fontSize: Font.Font_Size_ExtraLarge,
    fontWeight: FontWidth.SemiBold,
  },

  HomeText: {
    fontSize: Font.Font_Size_Small,
    color: Color.Gray,
    marginLeft: Margin.Icon,
    paddingTop: Padding.PaddingTwo,
  },

  CheckImage: {
    height: Margin.ScrollView,
    width: Size.ImgWidth,
    alignSelf: Screen.Center,
    marginTop: Margin.Top,
  },

  OrderPlacedView: {
    marginVertical: Margin.Medium_Five,
  },

  OrderPlacedText: {
    fontSize: Font.Font_Size_ExtraLarge,
    textAlign: Screen.Center,
    fontWeight: FontWidth.SemiBold,
    color: Color.DarkGray,
  },

  OrderDetailsView: {
    justifyContent: Screen.Center,
    alignItems: Screen.Center,
  },

  OrderDetailsText: {
    marginHorizontal: Margin.Right,
    marginVertical: Margin.Medium_Five,
    textAlign: Screen.Center,
    fontSize: Font.Font_Size_Medium_Large,
    color: Color.DarkGray,
  },

  ContinueShoppingView: {
    marginVertical: Margin.Medium_Six,
  },

  ContinueShoppingButton: {
    backgroundColor: Color.TopBar_BackgroundColor,
    margin: Margin.Medium_Six,
    borderRadius: Border.Radius_Small,
  },

  ContinueShoppingText: {
    textAlign: Screen.Center,
    padding: Margin.Left,
    color: Color.White,
    fontSize: Font.Font_Size_Medium_Small,
  },

  ContactUsContainer: {
    backgroundColor: Color.OffWhite,
    flexWrap: Other.Flex_Wrap,
  },

  EmailView: {
    flexDirection: Screen.Row,
    margin: Margin.Medium_Six,
  },

  Email: {
    fontSize: Font.Font_Size_Small,
    marginLeft: Margin.Medium_Six,
    marginRight: Margin.SearchBar,
  },

  OnlyMargin: {
    fontSize: Font.Font_Size_Small,
    marginHorizontal: Margin.SearchBar,
  },

  PhoneIcon: {
    color: Color.TopBar_BackgroundColor,
    marginHorizontal: Margin.SearchBar,
  },

  PhoneNumber: {
    fontSize: Font.Font_Size_Small,
    marginHorizontal: Margin.Left,
  },

  AddressWrap: {
    flexWrap: Other.Flex_Wrap,
  },

  AddressView: {
    flexDirection: Screen.Row,
    margin: Margin.Medium_Six,
  },

  LocationIcon: {
    color: Color.TopBar_BackgroundColor,
  },

  AddressText: {
    fontSize: Font.Font_Size_Small,
    marginHorizontal: Margin.Medium_Six,
  },

  CopyrightView: {
    justifyContent: Screen.Flex_End,
    backgroundColor: Color.Dark,
    paddingVertical: Margin.Left,
    marginTop: Margin.Left,
  },

  CopyrightText: {
    textAlign: Screen.Center,
    fontSize: Font.Font_Size_ExtraSmall,
    color: Color.White,
  },
});

export default styles;
