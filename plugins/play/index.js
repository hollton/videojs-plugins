/**
 * 播放操作扩展
 * 多资源实例时支持播放时暂停其他资源；支持禁用播放
 * player: 当前操作videojs 实例
 * options:{
 *      disable:bool  是否禁用播放
 * },
 * allPlayers: 全部播放器实例，用于暂停其他播放
 */

import './index.scss';

/**
 * [pauseMedia 暂停资源播放]
 * @param  {[type]} player [videojs 实例]
 */
let pauseMedia = (player) => {
    player.pause();
};

/**
 * [operateOtherPlayers]
 * @param  {[type]} curPlayer [当前操作videojs 实例]
 * @param  {[type]} allPlayers [全部videojs 实例]
 * @param  {[type]} operateFn [回调方法]
 */
let operateOtherPlayers = (curPlayer, allPlayers, operateFn) => {
    allPlayers = allPlayers || [];
    if (!operateFn) {
        operateFn = () => {};
    }
    allPlayers.forEach(player => {
        if (curPlayer !== player) {
            operateFn(player);
        }
    });
};

let play = (player, options, allPlayers) => {
    options = options || {};
    if (options.disable) {
        player.addClass('custom-disable-play');
        player.on('play', () => {
            pauseMedia(player);
        });
        return;
    }

    player.on('play', () => {
        operateOtherPlayers(player, allPlayers, pauseMedia);
    });

    player.on('ended', () => {
        operateOtherPlayers(player, allPlayers, (item) => {
            item.removeClass('disable-can-play');
        });
    });
};

export default play;
