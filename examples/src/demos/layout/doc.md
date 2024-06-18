## Layout 布局

:::demo
基础布局
单一分栏创建基础的栅格布局，将一行分成24等份，通过 `col` 组件的 `span` 属性我们就可以自由地组合布局
<layout-base></layout-base>
:::

:::demo
分栏间距
`row` 组件提供属性 `gutter` 设置 `col` 之间的间距，默认为 `0`
<layout-space></layout-space>
:::

:::demo
分栏偏移
`col` 组件提供属性 `offset` 设置 `col` 的偏移
<layout-offset></layout-offset>
:::

:::demo
对齐方式
设置 `row` 组件属性 `flex` 为 `true`，即可开启 `flex` 布局，默认为 `flex-start` 可设置 `justify` 属性指定对齐方式，可选值 `start` `end` `center` `space-around` `space-between` `space-evenly`
<layout-flex></layout-flex>
:::

:::demo
响应式布局
预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`
<layout-media></layout-media>
:::

### API

#### ROW

| 参数     | 描述               | 类型                                    | 默认值 |
| -------- | ----------------- | --------------------------------------- | ------ |
| `gutter`   | 栅格间隔           | `number`                                   | `0`     |
| `flex`     | 是否开启`flex`布局    | `boolean`                                  | `false` |
| `jusity`   | `flex`布局下的水平排列方式  | `start \| end \| center \| space-around \| space-between \| space-evenly`|`start`|
| `align`    | `flex`布局下的竖直排列方式  | `top \| middle \| bottom`           | `top`  |
| `tag`      | 自定义元素标签           | `string`                              | `div`  |

#### COL

| 参数     | 描述               | 类型                                    | 默认值 |
| -------- | ------------------ | --------------------------------------- | ------ |
| `span`     | 栅格占据的列数     | `number`                                     | `24` |
| `tag`      | 自定义元素标签     | `string`                                    | `div` |
| `offset`   | 栅格左侧的间隔格数  | `number`                                    | `0`   |
| `xs` | `<768px` 响应式栅格数或者栅格属性对象   | `number \| object` 例如 `{span: 4, offset: 3}`   | -  |
| `sm` | `≥768px` 响应式栅格数或者栅格属性对象   | 同上                                     | -  |
| `md` | `≥992px` 响应式栅格数或者栅格属性对象   | 同上                                     | -  |
| `lg` | `≥1200px` 响应式栅格数或者栅格属性对象  | 同上                                     | -  |
| `xl` | `≥1920px` 响应式栅格数或者栅格属性对象  | 同上                                     | -  |
