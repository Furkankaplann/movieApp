import {Dimensions, StyleSheet} from 'react-native';
import Constants from './Constants';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
  sectionBg: {
    backgroundColor: Constants.baseColor,
    height: deviceHeight,
  },
  trendingPeopleImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  trendingPeopleName: {
    width: 60,
    color: Constants.textColor,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 10,
    left: 20,
  },
  trendingPeopleContainer: {
    margin: 10,
  },
  heading: {
    fontSize: 19,
    color: Constants.fadedColor,
    margin: 10,
  },
  posterImage: {
    height: 250,
    width: 150,
    borderRadius: 10,
  },
  movieTitle: {
    color: Constants.textColor,
    width: 150,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
  },
  imageBg: {
    width: deviceWidth,
    height: 250,
  },
  detailsMovieTitle: {
    fontSize: 28,
    color: Constants.textColor,
    textAlign: 'center',
    marginTop: -40,
  },
  linkContainer: {
    backgroundColor: Constants.secondaryColor,
    borderRadius: 50,
    padding: 10,
    width: 45,
    top: 13,
    left: '85%',
  },
  overview: {
    color: Constants.textColor,
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 25,
  },
  details: {
    color: Constants.secondaryColor,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Constants.textColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  genre: {
    color: Constants.textColor,
    fontSize: 16,
  },
});

export default Styles;
