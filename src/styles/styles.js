import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  header: {
    marginTop: hp(5),
    fontSize: hp(3),
    fontWeight: 'bold',
    margin: wp(4),
    textAlign: 'center',
    color: colors.primaryText,
  },
  categoryContainer: {
    marginBottom: hp(2),
    borderBottomWidth: wp(0.25),
    borderBottomColor: colors.borderLight,
    borderRadius: wp(5),
    borderWidth: wp(0.25),
    borderColor: colors.border,
    backgroundColor: colors.cardBackground,
    marginHorizontal: wp(4),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(5),
    marginRight: wp(2.5),
    marginVertical: hp(1),
    alignItems: 'center',
  },
  headerRowExpanded: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp(5),
    marginRight: wp(2.5),
    marginVertical: hp(1),
    alignItems: 'center',
    borderBottomWidth: wp(0.25),
    borderBottomColor: colors.borderLight,
    paddingBottom: hp(1),
  },
  categoryText: {
    fontSize: hp(2),
    fontWeight: '600',
    color: colors.primaryText,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: wp(2),
    alignItems: 'center',
  },
  topButton: {
    backgroundColor: colors.primaryButton,
    paddingHorizontal: wp(2.5),
    paddingVertical: wp(0.5),
    borderRadius: wp(1),
    marginRight: wp(1.5),
  },
  disabledTopButton: {
    backgroundColor: colors.warning,
  },
  topButtonText: {
    fontSize: hp(1.5),
    fontWeight: '500',
    color: colors.white,
  },
  accordionBtn: {
    backgroundColor: colors.secondaryButton,
    padding: hp(1),
    borderRadius: wp(5),
  },
  jokeText: {
    marginHorizontal: wp(5),
    marginVertical: hp(1),
    fontSize: hp(1.75),
    color: colors.secondaryText,
  },
  moreButton: {
    margin: 10,
    padding: 8,
    textAlign: 'center',
    backgroundColor: colors.moreButton,
    borderRadius: 8,
    color: colors.white,
    fontWeight: '600',
  },
  jokeContainer: {
    borderWidth: wp(0.25),
    borderColor: colors.border,
    borderRadius: wp(5),
    marginHorizontal: wp(4),
    marginBottom: hp(1),
    backgroundColor: colors.cardBackground,
  },
});

export default styles;
