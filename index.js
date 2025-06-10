/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import timezone from 'dayjs/plugin/timezone';
dayjs.locale('ko');
dayjs.extend(timezone);

dayjs.tz.setDefault('Asia/Seoul');

AppRegistry.registerComponent(appName, () => App);
