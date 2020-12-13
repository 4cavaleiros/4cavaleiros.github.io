import { createGlobalStyle } from 'styled-components'

import Nerko from './NerkoOne-Regular.ttf'

import PatrickHand from './PatrickHand-Regular.ttf'
import PatrickHandWebfont from './PatrickHand-Regular-webfont.woff'
import PatrickHandWebfont2 from './PatrickHand-Regular-webfont.woff2'

import NunitoRegular from './Nunito-Regular.ttf'
import NunitoRegularWebfont from './Nunito-Regular-webfont.woff'
import NunitoRegularWebfont2 from './Nunito-Regular-webfont.woff2'

import NunitoLight from './Nunito-Light.ttf'
import NunitoBold from './Nunito-Bold.ttf'
import NunitoBlack from './Nunito-Black.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'NerkoOne';
        src: local('NerkoOne'), local('Nerko One'), url(${Nerko}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Patrick Hand';
        src:
            local('Patrick Hand'),
            url(${PatrickHand}) format('truetype'),
            url(${PatrickHandWebfont}) format('woff'),
            url(${PatrickHandWebfont2}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Nunito';
        src: url(${NunitoLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Nunito';
        src:
            url(${NunitoRegular}) format('truetype'),
            url(${NunitoRegularWebfont}) format('woff'),
            url(${NunitoRegularWebfont2}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Nunito';
        src: local('Nunito'), url(${NunitoBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Nunito';
        src: local('Nunito'), url(${NunitoBlack}) format('truetype');
        font-weight: 800;
        font-style: normal;
    }
`
