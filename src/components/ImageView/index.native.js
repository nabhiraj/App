import PropTypes from 'prop-types';
import React from 'react';
import Lightbox from '@components/Lightbox';
import {defaultZoomRange} from '@components/MultiGestureCanvas';
import {imageViewDefaultProps, imageViewPropTypes} from './propTypes';

/**
 * On the native layer, we use a image library to handle zoom functionality
 */
const propTypes = {
    ...imageViewPropTypes,

    /** Range of zoom that can be applied to the content by pinching or double tapping. */
    zoomRange: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
    }),

    /** Function for handle on press */
    onPress: PropTypes.func,

    /** Additional styles to add to the component */
    style: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
};

const defaultProps = {
    ...imageViewDefaultProps,

    zoomRange: {
        min: defaultZoomRange.min,
        max: defaultZoomRange.max,
    },

    onPress: () => {},
    style: {},
};

function ImageView({isAuthTokenRequired, url, onScaleChanged, onPress, style, zoomRange, onError, isUsedInCarousel, isSingleCarouselItem, carouselItemIndex, carouselActiveItemIndex}) {
    const hasSiblingCarouselItems = isUsedInCarousel && !isSingleCarouselItem;

    return (
        <Lightbox
            uri={url}
            zoomRange={zoomRange}
            isAuthTokenRequired={isAuthTokenRequired}
            onScaleChanged={onScaleChanged}
            onPress={onPress}
            onError={onError}
            index={carouselItemIndex}
            activeIndex={carouselActiveItemIndex}
            hasSiblingCarouselItems={hasSiblingCarouselItems}
            style={style}
        />
    );
}

ImageView.propTypes = propTypes;
ImageView.defaultProps = defaultProps;
ImageView.displayName = 'ImageView';

export default ImageView;
