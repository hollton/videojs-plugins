/**
 * 允许禁用拖拽播放条
 * player：videojs 实例
 * options:{
 * 		disable:禁用控制条
 * }
 */

import './index.scss';

let progress = (player, options) => {
    options = options || {};
    if (options.disable) {
        player.addClass('custom-disable-progress');
        player.controlBar.progressControl.seekBar.off('mousedown');
        player.controlBar.progressControl.seekBar.off('touchstart');
        player.controlBar.progressControl.seekBar.off('click');
    }
};

export default progress;
