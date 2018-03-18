# videojs-plugins
> videojs 的功能一些扩展

## 引用
``` javascript
import videoPlugins from './plugins/index';
```

## API
### play
播放操作扩展: 多资源实例时支持播放时暂停其他资源；支持禁用播放
videoPlugins.play(player, options, allPlayers)
#### 参数
* player: 当前操作videojs 实例
* options: {
     disable:bool  是否禁用播放
  }
* allPlayers: 全部播放器实例，用于暂停其他播放

### pause
暂停操作扩展
videoPlugins.pause(player, options)
#### 参数
* player: 当前操作videojs 实例
* options: {
     disable:bool,  是否禁用暂停
     isStop:bool,   暂停时是否设置为停止状态
  }

### progress
允许禁用拖拽播放条
videoPlugins.progress(player, options)
#### 参数
* player: 当前操作videojs 实例
* options: {
     disable:bool,  是否禁用控制条
  }

### text
添加文字提示
videoPlugins.text(player, options)
#### 参数
* player: 当前操作videojs 实例
* options: {
     htmlText:`已播放：${playCount}次`,
     style:Object  //自定义样式
  }
