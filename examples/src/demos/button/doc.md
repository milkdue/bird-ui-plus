## Button 按钮

:::demo
按钮类型
按钮分三种类型，主要按钮、次要按钮、朴素按钮。
<button-type></button-type>
:::

:::demo
按钮状态
按钮分四种状态，主要、成功、警告、危险。
<button-status></button-status>
:::

:::demo
按钮尺寸
按钮分为 `sm` `md` `lg` `xl` 四种尺寸，默认为 `lg`
<button-size></button-size>
:::

:::demo
按钮形状
按钮分为默认形状、`round` 全圆角、`circle` 圆形、以及正方形 `square`
<button-shape></button-shape>
:::

:::demo
禁用状态
禁用状态的按钮无法触发点击事件
<button-disabled></button-disabled>
:::

:::demo
loading 状态
`loading` 状态的按钮无法触发点击事件
<button-loading></button-loading>
:::

:::demo
块级按钮
块级按钮将跟随容器宽度
<button-block></button-block>
:::

### API

通过设置 `Button` 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `size` -> `shape` -> `status` -> `disabled`

| 参数     | 描述               | 类型                                    | 默认值 |
| -------- | ----------------- | --------------------------------------- | ------ |
|`type`|按钮类型|`primary \| secondary \| plain`|`primary`|
|`size`|按钮尺寸|`sm \| md \| lg \| xl`|`lg`|
|`shape`|按钮形状|`round \| circle \| square`|-|
|`status`|按钮状态|`primary \| success \| warning \| danger`|`primary`|
|`disabled`|禁用状态|`boolean`|`false`|
|`loading`|加载状态|`boolean`|`false`|
|`block`|块级按钮|`boolean`|`false`|

### Button Slots

| 参数     | 描述               | 默认值 |
| -------- | ----------------- | ------ |
|`default`|按钮内容|-|