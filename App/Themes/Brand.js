// Brand Colors can be used to quickly adjust Look & Feel of the app.
// None of the Colors is used directly, they are just referenced in appColors and can be fully overwritten there.

const brand = {
  colors: {
    //primary: '#2c3e50',
    //primary: '#edff4c',
    navBarBackground: '#efefef',
    navBarText: '#2F2F2F',
    sideMenuBackground: '#fff',
    onboardingText: '#2F2F2F', //Text color in onboarding
    primary: '#e3e7e8',
    primaryText: '#44aec7',
    //primaryText: '#2c3e50',
    buttonBackground: '#22F9EA', //Background color of button in chat
   //buttonBackground: '#edff4c',
    buttonText: '#2F2F2F', //Text color of button in chat
    //buttonText: '#000',
    backgroundMain: '#e3e7e8', //Background color of side-menu and chat
    textMain: '#3c3c3c',
    background1: '#2F2F2F', //Background color of chat messages
    text1: '#fff', //Text color of message
    background2: '#999999', //Background color of button after sent
    text2: '#fff',
    grey1: '#525252',
    grey2: '#9B9B9B', //Text color of date in chat
    grey3: '#F8F8F8'
  },
  images: {
    logo: require('../Images/app_logo.png'),
    poweredBy: require('../Images/powered_by.png'),
    //chatBackground: require('../Images/Chat/bg.png')
  }
}

export default brand
